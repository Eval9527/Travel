<template>
  <div>
    <DetailBanner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs" />
    <DetailHeader />
    <div class="content">
      <DetailList :list="list" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onActivated } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'

const sightName = ref('')
const bannerImg = ref('')
const gallaryImgs = ref([])
const list = ref([])

const route = useRoute()

const getDetailInfo = () => {
  axios
      .get('/api/detail.json', {
        params: {
          id: route.params.id
        }
      })
      .then(getDetailInfoSuss)
}

const getDetailInfoSuss = (res) => {
  res = res.data
  if (res.ret && res.data) {
    const data = res.data
    sightName.value = data.sightName
    bannerImg.value = data.bannerImg
    gallaryImgs.value = data.gallaryImgs
    list.value = data.categoryList
  }
}

onMounted(() => {
  getDetailInfo()
})

onActivated(() => {
  getDetailInfo()
})
</script>

<style lang="scss" scoped>
.content {
  height: 50rem;
}

</style>
