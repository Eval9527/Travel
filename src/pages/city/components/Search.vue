<template>
  <div class="search-container">
    <div class="search">
      <input v-model="keyword" class="input-search" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="searchRef" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到数据，请重试
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted, nextTick, watch, computed } from "vue"
import BScroll from 'better-scroll'
import { mapMutations } from '@utils/map-state.js'
import {useRouter} from "vue-router";

const props = defineProps({
  cities: Object,
})

const keyword = ref('')
const list = ref([])
const timer = ref(null)
const scroll = ref(null)
const searchRef = ref(null)

const hasNoData = computed(() => list.value.length)

const { changeCity } = mapMutations()
const { push } = useRouter()

const handleCityClick = city => {
  changeCity(city)
  push('/')
}

onMounted(() => {
  scroll.value = new BScroll(searchRef.value, {click: true})
})

watch(
    () => props.cities,
    () => {
      nextTick(() => {
        scroll.value.refresh()
      })
    },
    { deep: true }
)

watch(
    () => list.value,
    () => {
      nextTick(() => {
        scroll.value.refresh()
      })
    },
    { deep: true }
)

watch(
    () => keyword.value,
    () => {
      if (timer.value) {
        clearTimeout(timer.value)
      }
      // 解决删除关键词后仍显示之前搜索结果
      if (!keyword.value) {
        list.value = []
        return
      }
      timer.value = setTimeout(() => {
        const result = []
        for (let i in props.cities) {
          props.cities[i].forEach((value) => {
            // 匹配 spell 拼音和 name 名字
            if (value.spell.indexOf(keyword.value) > -1 || value.name.indexOf(keyword.value) > -1) {
              result.push(value)
            }
          })
        }
        list.value = result
      }, 100)
    },
    { deep: true }
)
</script>

<style lang="scss" scoped>
@import '@styles/varibles.scss';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;
  position: relative;
  z-index: 2;
  .input-search {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}
.search-content {
  z-index: 3;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  .search-item {
    line-height: 0.62rem;
    padding: 0.2rem;
    background: #fff;
    color: #666;
  }
}

</style>
