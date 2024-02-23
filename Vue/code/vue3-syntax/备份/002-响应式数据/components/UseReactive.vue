<script setup lang="ts">
// 1. 从vue中引入reactive
import { reactive } from 'vue'
// 2. 定义响应式数据(reactive只能定义引用数据类型)
let PersonInfo = reactive({
  name : 'peiqi'
})

function changeName(){
  // 3. 使用reactive定义的响应式数据
  // PersonInfo.name = 'peideluo'

  // 若重新给reactive定义的数据重新赋值，则会失去响应式
  // PersonInfo = {name:'peideluo'}    // 会失去响应性
  // 可以使用Object.assign()浅拷贝解决这个问题(将新对象浅拷贝给旧对象)
  Object.assign(PersonInfo, {name:'fubao'})
}
</script>

<template>
  <div>
    <!-- 3. 使用reactive定义的响应式数据 -->
    <h2>我的名字是{{ PersonInfo.name }}</h2>
    <button @click="changeName()">改名</button>
  </div>
</template>