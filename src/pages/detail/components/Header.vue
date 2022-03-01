<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script setup>
import { ref, onActivated, onDeactivated } from 'vue'

const showAbs = ref(true)
const opacityStyle = ref(0)

const handleScroll = () => {
  const top = document.documentElement.scrollTop
  if (top > 60) {
    let opacity = top / 140
    // opacity 大于 1 时，让其为 1
    opacity = opacity > 1 ? 1 : opacity
    opacityStyle.value = { opacity }
    showAbs.value = false
  } else {
    showAbs.value = true
  }
}

onActivated(() => {
  window.addEventListener('scroll', handleScroll)
})

onDeactivated(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
@import '@styles/varibles.scss';

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  line-height: 0.8rem;
  text-align: center;
  background: rgba(0,0,0,0.8);
  .header-abs-back {
    color: #fff;
    font-size: 0.4rem;
  }
}
.header-fixed {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;
  .header-fixed-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
  }
}

</style>
