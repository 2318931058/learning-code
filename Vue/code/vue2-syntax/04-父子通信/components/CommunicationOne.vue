<template>
  <!-- 1-x表示父传子 -->
  <div class="sonOne">
    <!-- 1-4 模板中直接使用父组件传递过来的数据/方法 -->
    <h3>子组件：{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  // 1-3 子组件内部通过props接收父组件传递过来的数据/方法
  props: ['msg']
}
</script>

<style scoped>
.sonOne {
  padding: 5px 20px;
  margin: 20px;
  border: 3px solid black;
}
</style>
