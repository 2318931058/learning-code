<script setup>
import sideNav from './components/sideNav.vue';
</script>

<template>
  <el-container>
    <el-header>
      <h1>cesium学习之路</h1>
    </el-header>

    <el-container>
      <el-aside width="220px">
        <sideNav />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
  * {
    padding: 0;
    margin: 0;
    background-color: #545C64;
  }
  .el-header h1 {
    text-align: center;
    padding: 10px 0px;
    letter-spacing: 5px; 
  }
</style>