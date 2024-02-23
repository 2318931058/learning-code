<script setup lang="ts">
  // 若要解构赋值后的数据依然保持响应式，需要使用toRef或toRefs
  import {reactive, toRef} from 'vue'
  let pandas = reactive({
    name:'fubao',
    age:3
  })
  
  // 使用toRef进行解构赋值每次只能解构一个属性
  let name = toRef(pandas, 'name')

  // 使用解构赋值
  function changeInfo(){
    name.value = 'aibao'
  }
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="changeInfo()">修改</button>
  </div>
</template>