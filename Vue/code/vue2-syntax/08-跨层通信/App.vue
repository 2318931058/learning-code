<template>
  <div class="app">
    我是父组件---<button @click="fn()">修改</button>
    <BaseA></BaseA>
  </div>
</template>

<script>
import BaseA from "./components/BaseA.vue";
export default {
  // 父组件使用provide提供数据
  provide() {
    return {
      // 简单类型的数据不是响应式的
      color: this.color,
      // 复杂类型的数据是响应式的（推荐）
      userInfo: this.userInfo,
    };
  },
  components: {
    BaseA,
  },
  data() {
    return {
      color: "pink",
      userInfo: {
        name: "zs",
        age: 18,
      },
    };
  },
  methods: {
    fn() {
      (this.color = "green"),
        (this.userInfo.name = "ls"),
        (this.userInfo.age = 20);
    },
  },
};
</script>

<style>
.app {
  width: 300px;
  height: 300px;
  border: 3px dashed #000;
  border-radius: 3px;
  padding: 20px;
  margin: 10px auto;
}
</style>