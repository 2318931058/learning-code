<script setup lang="ts">
import NamedView from './slotContents/NamedView.vue';
// 默认插槽其实也有名称default，不过一般不写
</script>

<template>
  <div class="namedview">
    <NamedView>
      <!-- 具名插槽必须写在template标签中或组件标签中 -->
      <template v-slot:c1>
        <p>内容1</p>
      </template>

      <!-- v-slot:插槽名称可以简写为#插槽名称 -->
      <template #c2>
        <p>标题1</p>
      </template>
    </NamedView>
  </div>
</template>

<style scoped>
.namedview{
  background-color: purple;
  width: 30%;
}
</style>