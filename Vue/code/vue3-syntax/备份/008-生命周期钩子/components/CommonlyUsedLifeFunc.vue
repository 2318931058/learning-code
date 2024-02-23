<script setup lang="ts">
/* 
  0. 注意事项：
    0-1. 生命周期钩子中写debugger;后浏览器会停留在该生命周期钩子阶段；
    0-2. 子组件的生命周期钩子一般先于父组件的生命周期钩子
  1. vue2常用的生命周期钩子：
    1-1. 创建：创建前beforeCreate()、创建完毕created()
    1-2. 挂载：挂载前beforeMount()、挂载完毕mounted()
    1-3. 更新：更新前beforeUpdate()、更新完毕updated()
    1-4. 销毁：销毁前beforeDestroy()、销毁完毕destroyed()
  2. vue3常用的生命周期钩子：
    2-1. 创建：setup()
    2-2. 挂载：挂载前onBeforeMount()、挂载完毕onMounted()
    2-3. 更新：更新前onBeforeUpdate()、更新完毕onUpdated()
    2-4. 卸载：卸载前onBeforeUnmount()、卸载完毕onUnmounted()
 */

 import {ref, onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'

 let temp = ref(true)
 const changeTemp = ()=>{
  temp.value = false
 }

// 创建
console.log('创建')

// 挂载前
onBeforeMount(()=>{
  console.log('挂载前')
})

// 挂载后
onMounted(()=>{
  console.log('挂载后')
})

// 更新前
onBeforeUpdate(()=>{
  console.log('更新前')
})

// 更新后
onUpdated(()=>{
  console.log('更新后')
})

// 销毁前
onBeforeUnmount(()=>{
  console.log('销毁前');
})

// 销毁后
onUnmounted(()=>{
  console.log('销毁后');
})

</script>

<template>
  <h1 v-if="temp">验证vue3常用生命周期钩子</h1>
  <button @click="changeTemp()">销毁</button>
</template>