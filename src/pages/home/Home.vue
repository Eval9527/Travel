<template>
  <div>
    <HomeHeader />
    <HomeSwiper :list="swiperList" />
    <HomeIcons :list="iconsList" />
    <HomeRecommend :list="recommendList" />
    <HomeWeekend :list="weekendList" />
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, computed, onActivated } from 'vue'
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import { useStore } from 'vuex'

const store = useStore()

const listCity = ref('')
const swiperList = ref([])
const iconsList = ref([])
const recommendList = ref([])
const weekendList = ref([])
const city = computed(() => store.state.city)

onMounted(() => {
  listCity.value = city.value
  getHomeInfo()
})

onActivated(() => {
  if (listCity.value !== city.value) {
    listCity.value = city.value
    getHomeInfo()
  }
})

const getHomeInfo = () => {
  axios
      .get('/api/index.json?city=' + city.value)
      .then(getHomeInfoSuss)
}

const getHomeInfoSuss = (res) => {
  res = res.data
  if (res.ret && res.data) {
    const data = res.data
    swiperList.value = data.swiperList
    iconsList.value = data.iconsList
    recommendList.value = data.recommendList
    weekendList.value = data.weekendList
  }
}
</script>

<style scoped>
</style>
