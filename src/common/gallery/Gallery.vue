<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <Swiper :modules="modules" :pagination="pagination" class="mySwiper">
        <SwiperSlide
          v-for="(item, index) of imgs"
          :key="index"
        >
          <img class="gallery-img" :src="item" alt="">
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import { Pagination } from "swiper"

import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps({
  imgs: {
    type: Array,
    default: () => []
  },
})

const modules = [Pagination]
const pagination = {
  type: 'fraction'
}

const emits = defineEmits()
const handleGalleryClick = () => {
  emits('close')
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  :deep(.swiper-container) {
    overflow: inherit;
  }
  .wrapper {
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    .gallery-img {
      width: 100%;
    }
    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}

</style>
