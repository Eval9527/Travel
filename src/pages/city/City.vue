<template>
  <div class="city-container">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'

const cities = ref({})
const hotCities = ref([])
const letter = ref('')

onMounted(() => {
  getCityInfo()
})

const getCityInfo = () => {
  axios.get('/api/city.json')
      .then(handleGetCityInfoSuss)
}

const handleGetCityInfoSuss = res => {
  res = res.data
  if (res.ret && res.data) {
    const data = res.data
    cities.value = data.cities
    hotCities.value = data.hotCities
  }
}

const handleLetterChange = data => letter.value = data
</script>

<style lang="scss" scoped>

</style>
