<template>
  <div class="base-a">
    我是子/孙组件
    <p>{{ userInfo.name }}---{{ userInfo.age }}---{{ color }}</p>
  </div>
</template>

<script>
export default {
  // 子/孙组件通过inject接收父组件传过来的数据，但不能修改
  inject: ["color", "userInfo"],
};
</script>

<style scoped>
.base-a {
  width: 200px;
  height: 200px;
  border: 3px dotted #000;
  border-radius: 3px;
  margin: 10px auto;
  padding: 10px;
}
</style>