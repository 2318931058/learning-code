<script setup lang="ts">
import GrandSon from './GrandSonView.vue'
</script>

<template>
  <div>
    <!-- 2. 子组件通过v-bind=$attrs将父组件的数据传递给孙组件-->
    <GrandSon v-bind="$attrs" />
  </div>
</template>