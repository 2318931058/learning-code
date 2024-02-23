<script setup lang="ts">
// 1. 从vue中引入ref
import { ref } from 'vue'
// 2. 定义响应式数据（ref既可以定义简单数据类型，也可定义引用数据类型）
let userName = ref('佩奇')
let panda = ref({
  name:'福宝',
  age:3
})

function changeInfo(){
  // 3-1. 在script中使用ref定义的数据需要在后面添加.value
  userName.value = '佩德罗'
  // panda.value.age++

  // 重新给ref定义的数据重新赋值，不会失去响应式
  panda.value = {name:'aibao', age:8}
}
</script>

<template>
  <div>
    <!-- 3-2. 在template中使用ref定义的数据可以直接使用 -->
    <h2>我的名字是{{ userName }}，最喜欢的熊猫已经{{ panda.age }}岁了</h2>
    <button @click="changeInfo()">改名/岁</button>
  </div>
</template>