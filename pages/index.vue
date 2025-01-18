<script lang="ts" setup>
const selectedCity = ref("");
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
};

const data = ref<Shop[] | null>(null);
const isSearch = ref<boolean>(false);

const getData = async () => {
  isSearch.value = true;
  data.value = null;
  const response = await $fetch("/api/cafe-shop", {
    query: { city: selectedCity.value },
  });
  data.value = response;
  isSearch.value = false;
};

const cityOptions = [
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
    </div>
    <div class="content">
      <h5 v-if="isSearch">搜尋中...</h5>
      <h3 v-if="data && !data?.length">無資料QQ</h3>
      <ul class="content_cards" v-else>
        <li v-for="shop in data" :key="shop.id" class="content_card">
          <Card :data="shop" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  --header-height: 160px;
  --content-padding: 32px;
  color: $primary;
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
}

.content {
  padding: calc(var(--header-height) + var(--content-padding))
    var(--content-padding) var(--content-padding) var(--content-padding);
  --cards-gap: 16px;
  --card-col-span: 4;

  @media screen and (max-width: 768px) {
    --cards-gap: 32px;
    --card-col-span: 6;
  }

  @media screen and (max-width: 1024px) {
    --card-col-span: 12;
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
