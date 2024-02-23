<script setup lang="ts">
import PropsMeth from './components/01-PropsMeth/FatherView.vue'
import CustomEvent from './components/02-CustomEvent/FatherView.vue'
import MittMeth from './components/03-mittMeth/FatherView.vue'
import VModel from './components/04-VModel/FatherView.vue'
import Attr from './components/05-$attrMeth/FatherView.vue'
import RefsParent from './components/06-RefsParent/FatherView.vue'
import ProvidInject from './components/07-ProvidInject/FatherView.vue'
import SlotMeht from './components/09-SlotMeht/FatherView.vue'
</script>

<template>
  <!-- props用于父传子 -->
  <PropsMeth />
  <hr />

  <!-- 自定义事件用于子传父 -->
  <CustomEvent />
  <hr />

  <!-- mitt用于任意组件通信 -->
  <MittMeth />
  <hr />

  <!-- v-model可以实现父子组件响应式通信 -->
  <VModel />
  <hr />

  <!-- $attr用于祖孙通信 -->
  <Attr />
  <hr />

  <!-- $refs用于获取所有子组件，$parent用于获取父组件 -->
  <RefsParent />
  <hr />

  <!-- provide和inject用于任意组件通信 -->
  <ProvidInject />
  <hr />

  <!-- pinia用于状态管理，用于公共数据/方法的存储 -->

  <!-- 插槽可以分为默认插槽、具名插槽，作用域插槽不包含在插槽的分类之中 -->
  <SlotMeht />
</template>


