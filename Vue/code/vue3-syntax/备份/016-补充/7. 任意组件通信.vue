<script setup>
import { ref,provide } from 'vue';
import RandomCom from './components/ProvideInject/randomCom.vue'

let count = ref(100)
const addCount = (newValue)=>{
  count.value = newValue
}

// 通过provide向任意组件提供数据和方法
provide('countData',count)
provide('addCountMethod',addCount)

</script>

<template>
  <div>
    <RandomCom></RandomCom>
  </div>
</template>

<style scoped>
</style>
