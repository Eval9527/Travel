<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgURL">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--向上箭头-->
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--向下箭头-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--滚动条-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // 添加页码原点
        pagination: '.swiper-pagination',
        // 循环轮播
        loop: true,
        // 轮播速度
        autoplay: 3000
      },
      swiperList: [{
        id: '0001',
        imgURL: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/9f73976e40c4ef845cabe0efc0269ebb.jpg_750x200_aab92b7a.jpg'
      }, {
        id: '0002',
        imgURL: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/2e090c7af936930c119a28c2f62717f2.jpg_750x200_9fce1256.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: (100/375)*100% /*图片宽高比例自适应*/
    .swiper-img
      width: 100%
</style>
