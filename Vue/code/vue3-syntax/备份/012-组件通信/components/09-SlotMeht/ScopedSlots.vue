<script setup lang="ts">
// 作用域插槽应用场景：数据在子组件，但根据数据生成的结构在父组件；
// 举例：压岁钱是孩子的，但压岁钱的用途要由家长决定

import ScopedView from './slotContents/ScopedView.vue';

</script>

<template>
  <div class="scopedslot">
    <ScopedView>
      <!-- 可以直接解构 -->
      <template v-slot="{toys}">
        <ul v-for="item in toys" :key="item.id">
          <li>{{ item.title }}---{{ item.price }}</li>
        </ul>
      </template>
    </ScopedView>

    <hr />

    <ScopedView>
      <!-- 具名插槽也有作用域插槽 -->
      <template v-slot:mytitle="params">
        <ul v-for="item in params.toys" :key="item.id">
          <li>{{ item.title }}---{{ item.price }}</li>
        </ul>
      </template>
    </ScopedView>
  </div>
</template>

<style scoped>
.scopedslot {
  width: 30%;
  background-color: skyblue;
}
</style>