<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">
          {{ sightName }}
        </div>
        <div class="banner-number banner-icon">
          <span class="iconfont">&#xe650;</span>
          {{ bannerImgs.length }}
        </div>
      </div>
    </div>
    <FadeAnimation>
      <CommonGallery
          :imgs="bannerImgs"
          v-show="showGarrery"
          @close="handleGalleryClose"
      />
    </FadeAnimation>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue"
import CommonGallery from '@common/Gallery/Gallery.vue'
import FadeAnimation from '@common/fade/FadeAnimation.vue'

const props = defineProps({
  sightName: String,
  bannerImg: String,
  bannerImgs: Array
})

const showGarrery = ref(false)

const handleBannerClick = () => {
  showGarrery.value = true
}

const handleGalleryClose = () => {
  showGarrery.value = false
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55.00000000000001%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.6);
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}

</style>
