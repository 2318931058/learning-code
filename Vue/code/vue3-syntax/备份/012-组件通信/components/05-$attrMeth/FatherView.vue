<script setup lang="ts">
import Son from './SonView.vue'
import { ref } from 'vue';
let a = ref(0)
let b = ref(10)
let c = ref(20)

</script>

<template>
  <div>
    <!-- 1. 父组件将响应式数据传递给子组件 -->
    <Son :a="a" :b="b" :c="c" />
  </div>
</template>