<template>
    <div class="search">
      <input class="input-search" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .input-search
      box-sizing: border-box  /*直接使用 padding 会导致右边溢出，需要使用 border-box 将内边距放入框中*/
      width: 100%
      height: .62rem
      padding: 0 0.1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
</style>
