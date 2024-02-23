<script setup lang="ts">
// 自定义事件是子组件用来调用父组件的方法的
import Son from './SonView.vue'
const getToy = (val:string)=>{
  console.log('customEvent', val)
}
</script>

<template>
  <div>
    <!-- 1. 父组件以自定义事件形式将函数传递给子组件 -->
    <Son @send-toy="getToy" />
  </div>
</template>