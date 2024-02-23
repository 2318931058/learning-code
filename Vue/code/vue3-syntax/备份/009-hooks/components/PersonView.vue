<script setup lang="ts">
// 2. 引入hook
import UseAge from '../hooks/UseAge'
import UseSum from '../hooks/UseSum'

// 3. 解构hook中的属性于方法
const {age, changeAge} = UseAge()
const {myList,getSum, sum} = UseSum()

</script>

<template>
  <!-- 4. 使用hook -->
  <h1>年龄：{{ age }}</h1>
  <h2>总和：{{ myList }}的和为：{{ sum }}</h2>
  
  <button @click="changeAge()">修改年龄</button>
  <button @click="getSum()">求和</button>
</template>