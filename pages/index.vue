<script lang="ts" setup>
const selectedCity = ref('')

const data = ref(null)
const isSearch = ref<boolean>(false)
const getData = async () => {
    isSearch.value = true
    data.value = null
    const response = await $fetch('/api/cafe-shop', { query: { city: selectedCity.value } })
    data.value = response
    isSearch.value = false
}

const cityOptions = [
    {
        label: "台北",
        value: "taipei"
    },
    {
        label: "新竹",
        value: "hsinchu"
    },
    {
        label: "高雄",
        value: "kaohsiung"
    }
]

</script>

<template>
    <div class="header">
        <h1>搜尋縣市咖啡廳</h1>
        <div class="header_search">
            <div class="header_search_select">
                <label for="city">縣市：</label>
                <select v-model="selectedCity" name="city" id="city">
                    <option value="" disabled>請選擇縣市</option>
                    <option v-for="city in cityOptions" :key="city.value" :value="city.value">{{ city.label }}</option>
                </select>
            </div>
            <button @click="getData">搜尋</button>
        </div>
    </div>
    <h5 v-if="isSearch">搜尋中...</h5>
    <h3 v-if="data&&!data?.length">無資料QQ</h3>
    <ul v-else>
        <li v-for="shop in data">{{ shop.name }}</li>
    </ul>
</template>