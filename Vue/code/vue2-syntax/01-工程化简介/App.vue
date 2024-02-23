<script>
// js逻辑部分
</script>

<template>
  <div id="app">
    <!-- html模板部分 -->
    <div class="inner"></div>
  </div>
</template>

<style lang='less' scoped>
/* 
  1. 默认情况下，写在组件中的样式会全局生效，因此很容易造成多个组件之间的样式冲突问题。
  2. 局部样式：可以给组件加上scoped属性，可以让样式只作用于当前左键。
  3. scoped工作原理：
    (1). 当前组件内标签都被添加data-v-hash的属性。
    (2). css选择器都被添加[data-v-hash值]的属性选择器。
    最终效果：必须是当前组件的元素，才会有这个自定义属性，才会被这个样式作用到。
*/

#app {
  width: 400px;
  height: 400px;
  background-color: pink;
  .inner {
    width: 100px;
    height: 100px;
    background-color: skyblue;
  }
}
</style>
