<template>
  <div class="list" ref="wrapperRef">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <!--<div class="button">北京</div>-->
            <!--<div class="button">{{this.$store.state.city}}</div>-->
            <div class="button">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of hot"
               :key="item.id"
               @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="el => setItemRef(el, key)"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list"
             v-for="innerItem of item"
             :key="innerItem.id"
             @click="handleCityClick(innerItem.name)"
        >
          <div class="item border-bottom">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted, nextTick, watch } from "vue"
import BScroll from 'better-scroll'
import { mapState, mapMutations } from '@utils/map-state.js'
import { useRouter } from 'vue-router'

const { city } = mapState()
const { changeCity } = mapMutations()
const { push } = useRouter()

const props = defineProps({
  cities: Object,
  hot: Array,
  letter: String
})

const scroll = ref(null)
const divObj = ref({})
const wrapperRef = ref(null)

const setItemRef = (el, item) => {
  divObj.value[item] = el

  return divObj.value[item]
}


const handleCityClick = (city) => {
  changeCity(city)
  push('/')
}

onMounted(() => {
  scroll.value = new BScroll(wrapperRef.value, {click: true})
})

watch(
    () => props.letter,
    () => {
      if (props.letter) {
        scroll.value.scrollToElement(divObj.value[props.letter])
      }
    }
)

watch(
    () => props.cities,
    () => {
      nextTick(() => {
        scroll.value.refresh()
      })
    },
    { deep: true }
)

</script>

<style lang="scss" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }
  &:after {
    border-color: #ccc;
  }
}
.border-bottom {
  &:before {
    border-color: #ccc;
  }
}
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }
  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    .button-wrapper {
      float: left;
      width: 33.33%;
      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }
  .item-list {
    .item {
      line-height: 0.76rem;
      color: #666;
      padding-left: 0.2rem;
    }
  }
}

</style>
