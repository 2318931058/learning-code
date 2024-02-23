<script setup lang="ts">
  // 1. 监视ref定义的简单类型数据需要先从vue中引入watch
  import {ref, watch} from 'vue'

  let age = ref(10)
  const changeAge = ()=>{
    age.value += 2
  }

  let name = ref('peiqi')
  const changeName = ()=>{
    name.value = 'peideluo'
  }

  // 2-1. 使用watch监视ref定义的单个简单类型数据
  const stopWatch1 = watch(age, (newVal, oldVal)=>{
    console.log(newVal,oldVal)
    if(newVal >= 18){
      console.log('监视单个简单数据')
      // stopWatch1()的作用是停止继续监视
      stopWatch1()
    }
  })

  // 2-2. 使用watch监视ref定义的多个简单类型数据
  const stopWatch2 = watch([name, age], (newVal, oldVal)=>{
    console.log(newVal,oldVal)
    let [name, age] = newVal
    if(age >= 22 || name === 'peideluo'){
      console.log('监视多个简单数据')
      // stopWatch()的作用是停止继续监视
      stopWatch2()
    }
  })
</script>

<template>
  <div>
    <h1>监视单个简单数据：{{ age }}</h1>
    <button @click="changeAge()">修改年龄</button>

    <h1>监视多个简单数据：{{ age }}---{{ name }}</h1>
    <button @click="changeName()">修改姓名</button>
  </div>
</template>