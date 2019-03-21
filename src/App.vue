<template>
  <div id="app">
    <!--直接使用 exclude="Detail" 会导致子组件定义好的 activated 钩子失效 -->
    <!--<keep-alive exclude="Detail">-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
