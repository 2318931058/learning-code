<script setup lang="ts">
// 监视reactive定义的引用类型数据默认开启深度监视且无法手动关闭

// 1. 监视reactive定义的引用类型数据需要先从vue中引入watch
import {reactive, watch} from 'vue'

let PandaInfo = reactive({
  name:'fubao',
  age:3
})
const changePandaInfo = ()=>{
  PandaInfo.name = 'aibao',
  PandaInfo.age = 8
}

let PersonInfo = reactive({
  name:'peiqi',
  age:4
})
const changePersonInfo = ()=>{
  PersonInfo.name = 'peideluo',
  PersonInfo.age = 7
}

// 2-1. 使用watch监视reactive定义的单个引用类型数据
watch(PandaInfo, (newVal, oldVal)=>{
  console.log('监视单个',newVal, oldVal)
})

// 2-2. 使用watch监视reactive定义的多个引用类型数据
watch([PandaInfo,PersonInfo], (newVal, oldVal)=>{
  console.log('监视多个',newVal, oldVal)
})
</script>

<template>
  <div>
    <h1>熊猫信息：{{ PandaInfo.name }}---{{ PandaInfo.age }}</h1>
    <button @click="changePandaInfo()">修改熊猫信息</button>
    <h1>个人信息：{{ PersonInfo.name }}---{{ PersonInfo.age }}</h1>
    <button @click="changePersonInfo()">修改个人信息</button>
  </div>
</template>