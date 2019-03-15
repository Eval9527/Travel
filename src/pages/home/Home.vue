<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeRecommend from './components/Recommend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeRecommend
  }
}
</script>

<style scoped>
</style>
