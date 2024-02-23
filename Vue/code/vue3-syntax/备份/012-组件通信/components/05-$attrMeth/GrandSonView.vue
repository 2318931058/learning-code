<script setup lang="ts">
// 3. 孙组件通过defineProps接收父组件的响应式数据
import { defineProps } from 'vue';
defineProps(['a', 'b', 'c'])
</script>

<template>
  <div>
    <!-- 孙组件使用父组件的响应式数据 -->
    <p>孙——{{ a }}——{{ b }}——{{ c }}</p>
  </div>
</template>