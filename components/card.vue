<script lang="ts" setup>
type Data = {
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
};

const props = defineProps<{ data: Data }>();
const { data } = props;

const keyMap: Record<string, string> = {
  name: "店名",
  wifi: "wifi 穩定",
  seat: "通常有位",
  quiet: "安靜程度",
  tasty: "咖啡好喝",
  cheap: "價格便宜",
  music: "裝潢音樂",
  address: "地址",
  latitude: "緯度",
  longitude: "經度",
  url: "官網",
  limited_time: "有無限時",
  socket: "插座多",
  standing_desk: "可站立工作",
  mrt: "捷運站",
  open_time: "營業時間",
};

const dataMap: Record<string, Record<string, string>> = {
  limited_time: {
    yes: "Yes，一律有限時",
    maybe: "看情況，假日或客滿限時",
    no: "No，一律不限時",
  },
  socket: {
    yes: "Yes，很多",
    maybe: "還好，看座位",
    no: "No，很少",
  },
  standing_desk: {
    yes: "Yes，有些座位可以",
    no: "No，無法",
  },
};

const infos = computed(() => {
  const infoKeys: string[] = [
    "wifi",
    "seat",
    "quiet",
    "tasty",
    "cheap",
    "music",
    "limited_time",
    "socket",
    "standing_desk",
  ];

  return Object.keys(data)
    .map((key) => {
      if (infoKeys.includes(key as keyof Data)) {
        const typedKey = key as keyof Data;
        const value = dataMap[typedKey]?.[data[typedKey]] || data[typedKey];
        const isNumber = typeof value === "number";
        return {
          name: keyMap[typedKey],
          value,
          isNumber,
        };
      } else {
        return null;
      }
    })
    .filter((item) => item !== null);
});

const addressUrl = `https://www.google.com/maps/dir//${data.address}`;
</script>

<template>
  <div class="card">
    <BaseLink :href="data.url" class="card_title"
      ><h3>{{ data.name }}</h3>
    </BaseLink>
    <BaseLink :href="addressUrl" class="card_address">
      <h4>{{ data.address }}</h4>
    </BaseLink>

    <div class="card_infos">
      <template v-for="info in infos" :key="info.value">
        <p
          v-if="info.value !== ''"
          class="card_info"
          :class="{ long: !info.isNumber }"
        >
          {{ info.name }}：{{ info.value }}
          <span v-if="info.isNumber">☆</span>
        </p>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  --info-gap: 8px;
  --info-col: 6;

  display: flex;
  flex-direction: column;
  align-items: start;
  background: $secondary;
  color: $black;
  padding: 16px;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  &_title {
    margin-bottom: 8px;
  }

  &_address {
    margin-bottom: 16px;
  }

  &_infos {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--info-gap);
  }

  &_info {
    grid-column: var(--info-col) span / var(--info-col) span;
    &.long {
      --info-col: 12;
    }
  }
}
</style>
