<script setup>
import { ref, computed } from "vue";
// 计算属性
let list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// 简写形式
const evenList = computed(() => {
  return list.value.filter((item) => item % 2 === 0);
});
// 完整形式
const oddList = computed({
  get: () => {
    return list.value.filter((item) => item % 2 !== 0);
  },
  set: (val) => {
    console.log(val);
  },
});
</script>

<template>
  <div>
    <!-- 计算属性 -->
    <p>计算属性简写形式：{{ evenList }}</p>
    <p>计算属性完整写法：{{ oddList }}</p>
  </div>
</template>

<style scoped>
</style>
