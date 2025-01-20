<script lang="ts" setup>
type Option = {
  label: string;
  value: string | number;
};
type NearestStation = {
  station: string;
  line: string;
  distance: number;
};

type Shop = {
  id: string;
  name: string;
  wifi: number;
  seat: number;
  quiet: number;
  tasty: number;
  cheap: number;
  music: number;
  address: string;
  latitude: string;
  longitude: string;
  url: string;
  limited_time: "yse" | "no" | "maybe";
  socket: "yse" | "no" | "maybe";
  standing_desk: "yse" | "no";
  mrt: string;
  open_time: string;
  nearestStation?: NearestStation | undefined;
};

const cityOptions: Option[] = [
  {
    label: "台北",
    value: "taipei",
  },
  {
    label: "新竹",
    value: "hsinchu",
  },
  {
    label: "高雄",
    value: "kaohsiung",
  },
];

const mrtOption: Option[] = [
  {
    label: "淡水信義線",
    value: "R",
  },
  {
    label: "板南線",
    value: "BL",
  },
  {
    label: "松山新店線",
    value: "G",
  },
  {
    label: "中和新蘆線",
    value: "O",
  },
  {
    label: "文湖線",
    value: "BR",
  },
];

const selectedCity = ref("");
const filterMrtLine = ref<string[]>([]);

const isSearch = ref<boolean>(false);

const data = ref<Shop[] | null | undefined>(null);
const filterDara = ref<Shop[] | null | undefined>(null);

const getNearestStation = (shop: Shop) => {
  const nearestStation: NearestStation = {
    station: "",
    line: "",
    distance: Infinity,
  };

  mrtStationData.forEach((station) => {
    const distance = getDistanceBetweenPoints(
      Number(shop.latitude),
      Number(shop.longitude),
      station.lat,
      station.lon
    );
    if (!distance) return;

    if (nearestStation.distance > distance) {
      nearestStation.station = station.station_name_tw;
      nearestStation.line = station.line_code;
      nearestStation.distance = distance;
    }
  });
  if (nearestStation.distance > 2000) return;

  nearestStation.distance = Math.round(nearestStation.distance);

  return nearestStation;
};

const getData = async () => {
  isSearch.value = true;

  data.value = null;
  const response = await $fetch("/api/cafe-shop", {
    query: { city: selectedCity.value },
  });

  data.value = response.map((shop: Shop) => {
    const nearestStation = getNearestStation(shop);
    return { ...shop, nearestStation };
  });

  filterDara.value = data.value;

  isSearch.value = false;
};

watch(filterMrtLine, (val) => {
  if (!val?.length) return (filterDara.value = data.value);
  filterDara.value = data.value?.filter((shop) => {
    const line =
      shop.nearestStation?.line ||
      mrtStationData.find((station) => station.station_name_tw === shop.mrt)
        ?.line_code;

    if (line) {
      return val.includes(line);
    }
  });
});

watch(selectedCity, () => {
  data.value = null;
  filterDara.value = null;
});
</script>

<template>
  <div class="wrap">
    <div class="header">
      <h1 class="header_title">搜尋縣市咖啡廳</h1>
      <div class="header_search">
        <div class="header_search_select">
          <label for="city">縣市：</label>
          <select v-model="selectedCity" name="city" id="city">
            <option value="" disabled>請選擇縣市</option>
            <option
              v-for="city in cityOptions"
              :key="city.value"
              :value="city.value"
            >
              {{ city.label }}
            </option>
          </select>
        </div>
        <BaseButton @click="getData">搜尋</BaseButton>
      </div>
      <div
        v-if="data?.length && selectedCity === 'taipei'"
        class="header_filter"
      >
        <label
          v-for="option in mrtOption"
          :key="option.value"
          class="header_filter_item"
          :class="option.value"
        >
          <input
            type="checkbox"
            v-model="filterMrtLine"
            :value="option.value"
          />
          {{ option.label }}
        </label>
      </div>
    </div>
    <div class="content">
      <h5 v-if="isSearch">搜尋中...</h5>
      <h3 v-if="filterDara && !filterDara?.length">無資料QQ</h3>
      <ul class="content_cards" v-else>
        <li v-for="shop in filterDara" :key="shop.id" class="content_card">
          <Card :data="shop" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  --header-height: 200px;
  --content-padding: 32px;
}

.header {
  position: fixed;
  height: var(--header-height);
  padding: var(--content-padding);
  background: $primary;
  color: $white;
  width: 100%;
  z-index: 2;

  &_title {
    margin-bottom: 32px;
  }

  &_search {
    display: flex;
    gap: 16px;
    align-items: center;

    &_select {
      display: flex;
      gap: 8px;
      align-items: center;
    }
  }

  &_filter {
    display: flex;
    gap: 8px;
    margin-top: 16px;

    &_item {
      --mrt-color: #{$white};
      background: var(--mrt-color);
      color: $white;
      padding: 4px;
      border-radius: 4px;

      &.R {
        --mrt-color: #{$mrt-r-line};
      }

      &.O {
        --mrt-color: #{$mrt-o-line};
        color: $black;
      }

      &.BL {
        --mrt-color: #{$mrt-bl-line};
      }

      &.BR {
        --mrt-color: #{$mrt-br-line};
      }

      &.G {
        --mrt-color: #{$mrt-g-line};
        color: $white;
      }
    }
  }
}

.content {
  padding: calc(var(--header-height) + var(--content-padding))
    var(--content-padding) var(--content-padding) var(--content-padding);
  --cards-gap: 16px;
  --card-col-span: 12;

  @media screen and (min-width: 768px) {
    --cards-gap: 32px;
    --card-col-span: 6;
  }

  @media screen and (min-width: 1024px) {
    --card-col-span: 4;
  }

  &_cards {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--cards-gap);
  }

  &_card {
    grid-column: var(--card-col-span) span / var(--card-col-span) span;
  }
}
</style>
