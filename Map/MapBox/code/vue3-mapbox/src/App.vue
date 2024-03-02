<script setup>
import navBar from './components/navBar.vue'
</script>

<template>
  <el-container>
    <el-aside width="200px">
      <navBar />
    </el-aside>
    <el-main style="padding: 0; margin: 0;">
      <RouterView />
    </el-main>
  </el-container>
</template>

<style>
.el-container {
  background-color: #545C64;
}
</style>




