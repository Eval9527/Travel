<template>
    <div class="icons">
      <Swiper>
        <SwiperSlide v-for="(page, index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl" alt="">
            </div>
            <p class="icon-desc">{{ item.desc }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
</template>

<script setup>
import {Swiper, SwiperSlide} from "swiper/vue"
import { defineProps, computed } from 'vue'


const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

const pages = computed(() => {
  const newPages = []
  props.list.forEach((item, index) => {
    if (index % 8 === 0) {
      newPages.push([])
    }
    newPages[newPages.length - 1].push(item)
  })
  return newPages
})
</script>

<style lang="scss" scoped>
@import '@styles/varibles.scss';
@import '@styles/mixins.scss';

.icons {
  margin-top: 0.2rem;
  :deep(.swiper-wrapper) {
    height: 3.8rem;
  }
  :deep(.swiper-container) {
    height: 0;             /*使用 padding-bottom 撑开，完成自适应*/
    padding-bottom: 50%;   /*宽高比2：1的区域*/
  }
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $darkTextColor;
      @include ellipsis
    }
  }
}
</style>
