<script setup lang="ts">
import { defineEmits, ref } from 'vue';

let toy = ref('凹凸曼')

// 2. 使用defineEmits接收父组件传递过来的自定义事件
const emit = defineEmits(['send-toy'])

</script>

<template>
  <!-- 3. 调用父组件传递过来的函数 -->
  <button @click="emit('send-toy', toy)">按钮</button>
</template>