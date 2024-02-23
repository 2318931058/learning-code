<script setup lang="ts">
import DefaultSlots from './DefaultSlots.vue';
import NamedSlots from './NamedSlots.vue';
import ScopedSlots from './ScopedSlots.vue';
</script>

<template>
  <div class="father">
    <!-- 默认插槽 -->
    <DefaultSlots></DefaultSlots>

    <!-- 具名插槽 -->
    <NamedSlots></NamedSlots>
    
    <!-- 作用域插槽 -->
    <ScopedSlots></ScopedSlots>
  </div>
</template>

<style scoped>
  .father{
    width: 900px;
    height: 400px;
    background-color: pink;
    display: flex;
    justify-content: space-evenly;
  }
</style>