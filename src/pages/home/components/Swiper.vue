<template>
  <div class="wrapper">
    <Swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <SwiperSlide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </SwiperSlide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </Swiper>
  </div>
</template>

<script setup>
import { ref, defineProps, computed } from "vue"
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const props = defineProps({
  list: Array
})

const swiperOption = ref({
  // 添加页码原点
  pagination: '.swiper-pagination',
  // 循环轮播
  loop: true,
  // 轮播速度
  autoplay: 3000
})

// 是否显示滑动
const showSwiper = computed(() => {
  return props.list.length
})
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  :deep(.swiper-pagination-bullet-active) {
    background: #fff;
  }
  .swiper-img {
    width: 100%;
  }
}

</style>
