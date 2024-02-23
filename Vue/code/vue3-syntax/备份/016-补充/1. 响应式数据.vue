<script setup>
import {ref} from 'vue'
// ref用于定义响应式数据
let count = ref(0)
const addCount = ()=>{
  // script中访问响应式数据需要.value
  count.value++
}

</script>

<template>
  <div>
    <!-- 模板中可以直接访问响应式数据 -->
    <button @click="addCount">{{ count }}</button>
  </div>
</template>

<style scoped>
button{
  padding: 5px 10px;
}

</style>
