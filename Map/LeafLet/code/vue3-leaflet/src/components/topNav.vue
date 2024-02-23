<template>
    <el-menu :default-active="$route.path" router class="el-menu-vertical-demo">
        <el-menu-item index="/initMap">
            <template #title>
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <span>首页</span>
            </template>
        </el-menu-item>

        <el-menu-item index="/mapRoaming">
            <template #title>
                <el-icon>
                    <Position />
                </el-icon>
                <span>地图漫游</span>
            </template>
        </el-menu-item>

        <el-sub-menu index="/layer">
            <template #title>
                <el-icon>
                    <CreditCard />
                </el-icon>
                <span>图层管理</span>
            </template>
            <el-menu-item index="/layer/getlayer">获取图层</el-menu-item>
            <el-menu-item index="/layer/addlayer">添加图层</el-menu-item>
            <el-menu-item index="/layer/removelayer">移除图层</el-menu-item>
            <el-menu-item index="/layer/setlayer">美化图层</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="/draw">
            <template #title>
                <el-icon>
                    <EditPen />
                </el-icon>
                <span>图形绘制</span>
            </template>
            <el-menu-item index="/draw/drawline">绘制线条</el-menu-item>
            <el-menu-item index="/draw/drawarea">绘制区域</el-menu-item>
            <el-menu-item index="/draw/drawcircle">绘制圆形</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="/load">
            <template #title>
                <el-icon>
                    <Coin />
                </el-icon>
                <span>数据加载</span>
            </template>
            <el-menu-item index="/load/geojson">geojson数据</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="/popup">
            <template #title>
                <el-icon>
                    <Memo />
                </el-icon>
                <span>弹窗popup</span>
            </template>
        </el-menu-item>

        <el-menu-item index="/marker">
            <template #title>
                <el-icon>
                    <Pointer />
                </el-icon>
                <span>标注marker</span>
            </template>
        </el-menu-item>
    </el-menu>
</template>
  
<script setup>
import { HomeFilled, Position, CreditCard, Pointer, Coin, EditPen, Memo } from '@element-plus/icons-vue'
</script>
  
<style>.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}</style>
  