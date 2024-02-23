<script setup lang="ts">
import { markRaw,reactive } from 'vue';

let personInfo = {
  name:'peiqi',
  age:17
}
function changeData(){
  // 若在正常情况之前使用markRaw包裹，则会使某数据永远不能成为响应式数据
  // markRaw(personInfo)
  
  // 正常情况下使用ref或reactive包裹会使原始数据变为响应式数据
  console.log('normal', reactive(personInfo))
}
</script>

<template>
  <div>
    <button @click="changeData()">markRaw作用</button>
  </div>
</template>