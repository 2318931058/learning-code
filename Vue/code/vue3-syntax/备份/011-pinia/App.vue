<script setup lang="ts">
// 5. 引入要使用的store
import { useCounterStore } from './stores/counter'
const countStore = useCounterStore()
// 解构赋值需要使用storeToRefs保持响应性
import { storeToRefs } from 'pinia';
const {num,count, doubleCount} = storeToRefs(countStore)

// 若要监听仓库中数据的变化，可以使用$subscribe()方法
countStore.$subscribe((mutate, state)=>{
  console.log(mutate, state)
})

// 7. 修改pinia中的数据

const changeMuti = () => {
  // 方式一：修改单个
  // countStore.count = 10
  // 方式二：$patch批量修改
  countStore.$patch({
    num: 50,
    count: 100
  })
}
</script>

<template>
  <div>
    <!-- 6. 使用countStore中的数据/方法 -->
    <h1>非解构赋值情况：{{ countStore.num }}---{{ countStore.count }}---{{ countStore.doubleCount }}</h1>
    <h1>解构赋值情况：{{ num }}---{{ count }}---{{ doubleCount }}</h1>
    <button @click="countStore.increment()">点我count加一</button>
    <button @click="changeMuti()">修改多个</button>
  </div>
</template>


