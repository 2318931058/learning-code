<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "./store/index.js";
const counterStore = useCounterStore();

// store中的数据不能直接解构，否则会丢失响应性；
// 若想解构时还要保证响应性，可以使用storeToRefs
const { count } = storeToRefs(counterStore);
// 方法可以直接结构
const { addCount } = counterStore;
</script>

<template>
  <div>
    <!-- 直接调用pinia中的数据、方法 -->
    <button @click="counterStore.addCount">
      {{ counterStore.count }}---{{ counterStore.doubleCount }}
    </button>
    <hr />
    <button @click="counterStore.getList">获取数据</button>
    <ul v-for="item in counterStore.dataList" :key="item.id">
      <li>{{ item.name }}</li>
    </ul>
    <hr />

    <!-- storeToRefs结构后可以直接使用 -->
    <button @click="addCount">{{ count }}</button>
  </div>
</template>

<style scoped>
button {
  padding: 5px 10px;
}
</style>
