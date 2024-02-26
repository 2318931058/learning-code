<script setup>
import { HomeFilled, CreditCard, Coin, EditPen, Calendar, Suitcase } from '@element-plus/icons-vue'
</script>

<template>
    <el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal">
        <el-menu-item index="/initMap">
            <template #title>
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <span>首页</span>
            </template>
        </el-menu-item>

        <el-sub-menu index="/base">
            <template #title>
                <el-icon>
                    <Calendar />
                </el-icon>
                <span>基础功能</span>
            </template>
            <el-menu-item index="/base/mapControls">地图控件</el-menu-item>
            <el-menu-item index="/base/mapRoaming">地图漫游</el-menu-item>
            <el-menu-item index="/base/mapDown">地图下载</el-menu-item>
            <el-menu-item index="/base/draw">画笔绘制</el-menu-item>
            <el-menu-item index="/base/layerAttr">图层属性</el-menu-item>
            <el-menu-item index="/base/mapAttr">地图属性</el-menu-item>
            <el-menu-item index="/base/overlay">覆盖物管理</el-menu-item>
        </el-sub-menu>

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
            <el-menu-item index="/layer/setlayer">设置图层</el-menu-item>
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
    </el-menu>
</template>

<style scoped>
.el-menu-demo {
    display: flex;
    justify-content: space-evenly;
}
</style>