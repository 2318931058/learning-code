<script setup lang="ts">
// watchEffect可以根据需要自动监视需要监视的属性

// 1. 使用watchEffect需要先从vue中引入
import {ref, watchEffect} from 'vue'

let waterTemperature = ref(10)
const changeTemperature = ()=>{
  waterTemperature.value += 10
}

let waterLevel = ref(0)
const changeLevel = ()=>{
  waterLevel.value += 10
}


// 2. 使用watchEffect
watchEffect(()=>{
  if(waterLevel.value >= 80 || waterTemperature.value >= 60){
    console.log('发出警告')
  }
})

</script>

<template>
  <div>
    <h1>水温：{{ waterTemperature }}℃</h1>
    <button @click="changeTemperature()">水温+10</button>

    <h1>水位：{{ waterLevel }}cm</h1>
    <button @click="changeLevel()">水位+10</button>
  </div>
</template>