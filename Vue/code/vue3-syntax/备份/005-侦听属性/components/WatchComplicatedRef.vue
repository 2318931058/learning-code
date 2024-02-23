<script setup lang="ts">
/*
  1. 监视ref定义的引用类型数据是监视的对象的地址值，若要监视对象内部属性的变化，需要手动开启深度监视！！！
  2. 若修改的是ref定义的引用类型数据中的属性，则newVal和oldVal都是新值；若修改的是整个对象，则newVal是新值，oldVal是旧值。
*/ 

// 1. 监视ref定义的引用类型数据需要先从vue中引入watch
import {ref, watch} from 'vue'

let PandaInfo = ref({
  name:'fubao',
  age:3
})
const changePandaInfo = ()=>{
  PandaInfo.value.name = 'aibao',
  PandaInfo.value.age = 8
}

let PersonInfo = ref({
  name:'peiqi',
  age:4
})
const changePersonInfo = ()=>{
  PersonInfo.value.name = 'peideluo',
  PersonInfo.value.age = 7
}

// 2-1. 使用watch监视ref定义的单个引用类型数据
watch(PandaInfo, (newVal, oldVal)=>{
  console.log('监视单个',newVal, oldVal)
  // deep表示深度监视，immediate表示立即执行
},{deep:true,immediate:true})

// 2-2. 使用watch监视ref定义的多个引用类型数据
watch([PandaInfo,PersonInfo], (newVal, oldVal)=>{
  console.log('监视多个',newVal, oldVal)
  // deep表示深度监视，immediate表示立即执行
},{deep:true,immediate:true})
</script>

<template>
  <div>
    <h1>熊猫信息：{{ PandaInfo.name }}---{{ PandaInfo.age }}</h1>
    <button @click="changePandaInfo()">修改熊猫信息</button>
    <h1>个人信息：{{ PersonInfo.name }}---{{ PersonInfo.age }}</h1>
    <button @click="changePersonInfo()">修改个人信息</button>
  </div>
</template>