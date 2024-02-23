<script setup>
import { ref } from 'vue';
import defineModuleCom from './components/DefineModule/defineModuleCom.vue';
// defineOptions中可以配置除props, emits, expose, slots外的所有自定义属性
defineOptions({
  name: "newOption",
});

// defineModule可以实现父子父组件中数据的双向绑定
const count = ref(0)
</script>

<template>
  <div>
    <!-- defineModule可以实现父子父组件中数据的双向绑定 -->
    <defineModuleCom v-model="count"></defineModuleCom>
    <h2>父组件：{{ count }}</h2>
  </div>
</template>

<style scoped></style>
