<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-paper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  list: Array
})
</script>

<style lang="scss" scoped>
@import '@styles/varibles.scss';
@import '@styles/mixins.scss';

.title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}
.item-img-paper {
  overflow: hidden;
  height: 0;
  padding-bottom: 33.4375%;
  .item-img {
    width: 100%;
  }
}
.item-info {
  padding: 0.1rem;
  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    @include ellipsis
  }
  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    @include ellipsis
  }
  .item-button {
    line-height: 0.44rem;
    margin-top: 0.16rem;
    background: #ff9300;
    padding: 0 0.2rem;
    border-radius: 0.06rem;
    color: #fff;
  }
}

</style>
