<script setup>
import topNav from '@/components/topNav.vue'
</script>

<template>
  <el-container>
    <el-aside width="200px">
      <topNav />
    </el-aside>

    <el-main>
      <router-view />
    </el-main>
</el-container></template>

<style scoped>
  .el-main {
    padding: 0;
    margin: 0;
  }
</style>