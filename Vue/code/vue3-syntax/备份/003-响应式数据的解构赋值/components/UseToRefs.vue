<script setup lang="ts">
  // 若要解构赋值后的数据依然保持响应式，需要使用toRef或toRefs
  import {reactive, toRefs} from 'vue'
  let pandas = reactive({
    name:'fubao',
    age:3
  })
  
  // 使用toRefs进行解构赋值可以将引用数据类型中的所有属性一同解构
  let {name, age} = toRefs(pandas)

  // 使用解构赋值
  function changeInfo(){
    name.value = 'aibao',
    age.value = 8
  }
</script>

<template>
  <div>
    <h1>{{ name }} 已经 {{ age }} 岁了</h1>
    <button @click="changeInfo()">修改</button>
  </div>
</template>