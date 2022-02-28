<template>
  <div class="search-container">
    <div class="search">
      <input v-model="keyword" class="input-search" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
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

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null,
      scroll: null,
    }
  },
  computed: {
    // 避免在模板上计算
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search, {click: true})
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 解决删除关键词后仍显示之前搜索结果
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            // 匹配 spell 拼音和 name 名字
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    },
    cities: {
      handler () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      deep: true
    },
    list: {
      handler () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      deep: true
    }
  }
}
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
