<script setup lang="ts">
// 该组件是一个试验性组件
import Child from './components/ChildView.vue'
</script>

<template>
  <div class="app">
    <h2>我是App组件</h2>
    <Suspense>
      <!-- 数据未返回之前 -->
      <template v-slot:fallback>
        <h2>加载中......</h2>
      </template>

      <!-- 数据返回之后 -->
      <template v-slot:default>
        <Child />
      </template>

    </Suspense>
  </div>
</template>



<style>
.app {
  background-color: #ddd;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px;
}
</style>