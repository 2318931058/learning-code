<template>
  <el-menu 
    :default-active="$route.path" 
    router 
    default-active="/initMap" 
    active-text-color="#ffd04b"
    background-color="#545c64" 
    text-color="#fff"
  >
    <el-menu-item index="/initMap">
      <template #title>
        <el-icon>
          <HomeFilled />
        </el-icon>
        <span>首页</span>
      </template>
    </el-menu-item>

    <el-sub-menu index="/map">
      <template #title>
        <el-icon>
          <CreditCard />
        </el-icon>
        <span>地图</span>
      </template>
      <el-menu-item index="/map/attr">属性</el-menu-item>
      <el-menu-item index="/map/controls">控件</el-menu-item>
      <el-menu-item index="/map/fog">大气层</el-menu-item>
    </el-sub-menu>



  </el-menu>
</template>

<script setup>
import { HomeFilled, Position, CreditCard, Pointer, Coin, EditPen, Memo } from '@element-plus/icons-vue'
</script>

<style scoped>
  .el-menu {
    text-align: center;
    padding-top: 50px ;
  }
</style>
