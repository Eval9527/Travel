<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
@import '@styles/varibles.scss';

.header {
  position: relative;
  overflow: hidden;
  text-align: center;
  height: $headerHeight;
  line-height: $headerHeight;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;

  .header-back {
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
