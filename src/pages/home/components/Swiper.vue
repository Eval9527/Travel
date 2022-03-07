<template>
  <div class="wrapper">
    <Swiper :modules="modules" :loop="true" :autoplay="autoplay" v-if="showSwiper">
      <!-- slides -->
      <SwiperSlide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import { Pagination, Autoplay } from "swiper"

import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps({
  list: Array
})

const modules = [Pagination, Autoplay]
const autoplay = {
  delay: 3000,
  disableOnInteraction: false
}

// 是否显示滑动
const showSwiper = computed(() => !!props.list.length)
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
