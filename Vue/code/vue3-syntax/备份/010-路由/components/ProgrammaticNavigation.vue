<script setup lang="ts">
// 编程式导航
import {useRouter} from 'vue-router'
const router = useRouter()
console.log(router.push)
console.log(router.replace)

const toHome = ()=>{
  router.push({
    // name:'HomeView',     // name和path均可实现跳转
    path:'/home',
    // 传参与声明式导航一致
  })
}
const toNews = ()=>{
  router.replace({
    name:'Detail'
  })
}
const toAbout = ()=>{
  router.push({
    name:'AboutView'
  })
}
</script>

<template>
  <div>
    <button @click="toHome()">首页</button>
    <button @click="toNews()">新闻</button>
    <button @click="toAbout()">关于</button>
  </div>
</template>