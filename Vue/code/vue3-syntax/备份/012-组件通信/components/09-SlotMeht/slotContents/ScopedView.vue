<script setup lang="ts">
import { reactive } from 'vue';
let toys = reactive([
  {id:'001', title:'凹凸曼', price:99},
  {id:'002', title:'拼图', price:200},
  {id:'003', title:'遥控汽车', price:599},
])
</script>

<template>
  <div>
    <slot :toys="toys"></slot>

    <!-- 具名插槽也有作用域插槽 -->
    <slot name="mytitle" :toys="toys"></slot>
  </div>
</template>
