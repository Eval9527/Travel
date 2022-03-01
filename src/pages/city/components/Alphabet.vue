<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="el => setItemRef(el, item)"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick(item)"
    >
      {{item}}
    </li>
  </ul>
</template>

<script setup>
import { defineProps, computed, ref, onUpdated, onBeforeUpdate, defineEmits } from "vue"

const props = defineProps({
  cities: Object
})

const letters = computed(() => {
  const newLetters = []
  for (let i in props.cities) {
    newLetters.push(i)
  }
  return newLetters
})

const touchStatus = ref(false)
const startY = ref(0)
const timer = ref(null)
const divObj = ref({})

onUpdated(() => {
  startY.value = divObj.value['A'].offsetTop
})

onBeforeUpdate(() => {
  divObj.value = {}
})
const setItemRef = (el, item) => {
  divObj.value[item] = el

  return divObj.value[item]
}

const emit = defineEmits()

const handleLetterClick = (item) => {
  emit('change', item)
}

const handleTouchStart = () => {
  touchStatus.value = true
}

const handleTouchMove = (e) => {
  if (touchStatus.value) {
    if (timer.value) {
      clearTimeout(timer.value)
    }

    timer.value = setTimeout(() => {
      const touchY = e.touches[0].clientY - 79
      const index = Math.floor((touchY - startY.value) / 20)
      if (index >= 0 && index < letters.value.length) {
        console.log(letters.value[index])
        emit('change', letters.value[index])
      }
    }, 16)
  }
}

const handleTouchEnd = () => {
  touchStatus.value = false
}
</script>

<style lang="scss" scoped>
@import '@styles/varibles.scss';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}


</style>
