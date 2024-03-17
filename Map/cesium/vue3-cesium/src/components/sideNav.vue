<template>
    <el-row>
        <el-col :span="24">
            <el-menu :default-active="$route.path" router text-color="#fff" active-text-color="#ffd04b"
                background-color="#545c64">
                <el-menu-item index="/home">首页</el-menu-item>
                <el-sub-menu index="/view">
                    <template #title>视图</template>
                    <el-sub-menu index="/view/get">
                        <template #title>获取</template>
                        <el-menu-item index="/view/get/currentScope">当前视图</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-sub-menu index="/event">
                    <template #title>事件</template>
                    <el-menu-item index="/event/click">点击事件</el-menu-item>
                    <el-menu-item index="/event/move">移动事件</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/layer">
                    <template #title>图层</template>
                    <el-menu-item index="/layer/getLayer">获取图层</el-menu-item>
                    <el-menu-item index="/layer/addLayer">添加图层</el-menu-item>
                    <el-menu-item index="/layer/removeLayer">移除图层</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/coordinates">
                    <template #title>坐标</template>
                    <el-menu-item index="/coordinates/geographyCoordinate">地理坐标</el-menu-item>
                    <el-menu-item index="/coordinates/screenCoordinate">屏幕坐标</el-menu-item>
                    <el-menu-item index="/coordinates/worldCoordinate">世界坐标</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/loadData">
                    <template #title>数据</template>
                    <el-menu-item index="/loadData/kml">KML</el-menu-item>
                    <el-menu-item index="/loadData/gltf">GLTF</el-menu-item>
                    <el-menu-item index="/loadData/czml">CZML</el-menu-item>
                    <el-menu-item index="/loadData/3DTiles">3DTiles</el-menu-item>
                    <el-menu-item index="/loadData/geojson">GeoJSON</el-menu-item>
                    <el-menu-item index="/loadData/topjson">TopJSON</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/camera">
                    <template #title>相机</template>
                    <el-menu-item index="/camera/flyTo">flyTo</el-menu-item>
                    <el-menu-item index="/camera/lookAt">lookAt</el-menu-item>
                    <el-menu-item index="/camera/setView">setView</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/entity">
                    <template #title>实体</template>
                    <el-sub-menu index="/entity/baseEntity">
                        <template #title>实体类型</template>
                        <el-menu-item index="/entity/baseEntity/point">点</el-menu-item>
                        <el-menu-item index="/entity/baseEntity/polyline">线</el-menu-item>
                        <el-menu-item index="/entity/baseEntity/polygon">面</el-menu-item>
                        <el-menu-item index="/entity/baseEntity/label">文本</el-menu-item>
                        <el-menu-item index="/entity/baseEntity/billboard">标注</el-menu-item>
                        <el-menu-item index="/entity/baseEntity/rectangle">矩形</el-menu-item>
                        <el-menu-item index="/entity/baseEntity/ellipse">椭圆</el-menu-item>
                        <el-menu-item index="/entity/baseEntity/cylinder">圆柱</el-menu-item>
                        <el-menu-item index="/entity/baseEntity/box">立方体</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="/entity/otherEntity">
                        <template #title>其它实体</template>
                        <el-menu-item index="/entity/otherEntity/callbackProperty">动态实体</el-menu-item>
                        <el-menu-item index="/entity/otherEntity/composite">组合式实体</el-menu-item>
                    </el-sub-menu>

                    <el-sub-menu index="/entity/methods">
                        <template #title>实体方法</template>
                        <el-menu-item index="/entity/methods/remove">移除实体</el-menu-item>
                        <el-menu-item index="/entity/methods/get">获取实体</el-menu-item>
                        <el-menu-item index="/entity/methods/add">添加实体</el-menu-item>
                        <el-menu-item index="/entity/methods/binding">绑定实体</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-sub-menu index="/primitive">
                    <template #title>图元</template>
                    <el-sub-menu index="/primitive/type">
                        <template #title>图元类型</template>
                        <el-menu-item index="/primitive/type/basePrimitive">简单图形</el-menu-item>
                        <el-menu-item index="/primitive/type/mutiPrimitive">组合图形</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-sub-menu index="/particle">
                    <template #title>粒子</template>
                    <el-menu-item index="/particle/render">基本渲染</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/polymerization">
                    <template #title>聚合</template>
                    <el-menu-item index="/polymerization/point">点聚合</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="/practices">
                    <template #title>练习</template>
                    <el-menu-item index="/practices/perspectiveNavigation">视角导航</el-menu-item>
                    <el-menu-item index="/practices/architecturalDifferentiation">建筑区分</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-col>
    </el-row>
</template>