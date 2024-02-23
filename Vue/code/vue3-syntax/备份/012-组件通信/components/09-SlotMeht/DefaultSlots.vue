<script setup lang="ts">
// 2. 引入插槽结构组件
import DefaultView from '@/components/09-SlotMeht/slotContents/DefaultView.vue'


</script>

<template>
  <div class="defau">
    <!-- 3. 使用插槽结构组件(一般使用双标签) -->
    <DefaultView>
      <!-- 此处放置需要插入的内容，若为空则显示默认内容 -->
    </DefaultView>

    <DefaultView>
      <!-- 此处若放置内容则会替换默认内容 -->
      <p>此处的内容会替换默认内容</p>
    </DefaultView>
  </div>
</template>

<style scoped>
  .defau{
    width: 30%;
    height: 400px;
    display: flex;
    justify-content: space-between;    
    background-color: greenyellow;
  }
  p{
    color: red;
    font-size: 22px;
    font-weight: bold;
  }
</style>