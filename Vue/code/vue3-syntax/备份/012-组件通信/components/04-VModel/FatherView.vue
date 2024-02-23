<script setup lang="ts">
import Son from './SonView.vue'
import {ref} from 'vue'
let mytoy = ref('凹凸曼')


</script>

<template>
  <div>
    <!-- 1. 父组件使用v-model指令指定响应式 -->
    <Son v-model="mytoy" />

    <!-- 若使用该形式，则子组件中的modelValue都要替换为temp -->
    <!-- <Son v-model="mytoy" v-model:temp="mytoy" /> -->
  </div>
</template>