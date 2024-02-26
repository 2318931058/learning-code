<script setup>
  import sideNav from './components/sideNav.vue';
</script>

<template>
  <el-container>
      <el-header>
        <sideNav />
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
</template>

  <style scoped>
  .el-main, .el-header {
    padding: 0;
    margin: 0;
  }
</style>