<script setup lang="ts">
// 声明式导航
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="navigate">
    <!-- 10. 路由跳转：active-class表示当前路由激活时的样式类名 -->
    <RouterLink active-class="active" to="/home">首页</RouterLink>

    <!-- replace与push(默认)的区别：push时追加历史记录，replace是替换当前记录 -->
    <RouterLink replace active-class="active" to="/news">新闻</RouterLink>

    <!-- RouterLink的to属性的值既可写为字符串类型，也可写为对象类型 -->
    <RouterLink active-class="active" :to="{ path: '/about' }">关于</RouterLink>
  </div>
  <!-- 9. 展示路由 -->
  <div class="main-content">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.navigate {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}

.navigate a {
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: gray;
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
}

.navigate a.active {
  background-color: #64967E;
  color: #ffc268;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  font-family: 微软雅黑;
}

.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
}
</style>