<script setup>
import * as Cesium from 'cesium/Source/Cesium'
import home from '@/components/home.vue';
import { onMounted, inject } from 'vue'
onMounted(() => {
    let viewer = inject('$viewer')

    // glb是gltf的压缩版本，加载方式相同

    // 方式一：通过entity加载
    // const Cartesian3 = Cesium.Cartesian3.fromDegrees(110, 30, 1000)         // 设置模型位置
    // 指定视角观察的方向
    // const orientation = Cesium.Transforms.headingPitchRollQuaternion(Cartesian3, new Cesium.HeadingPitchRoll(
    //     Cesium.Math.toRadians(135),
    //     Cesium.Math.toRadians(0),
    //     Cesium.Math.toRadians(0)
    // ))
    // 加载模型
    // const entity = viewer.entities.add({
    //     id: 'bridege',
    //     name: '桥梁',
    //     position: Cartesian3,
    //     orientation: orientation,
    //     model: {
    //         uri: '/src/assets/data/gltf/bridge桥梁.gltf',
    //         minimumPixelSize: 128,                                  // 最小的模型像素
    //         maximumScale: 20000,                                    // 最大的模型像素
    //         runAnimations: true,                                    // 是否显示动画
    //         clampAnimations: true,                                  // 是否保持最后一帧动画
    //         // color: Cesium.Color.RED,                                // 模型颜色
    //         color: Cesium.Color.fromAlpha(Cesium.Color.RED, parseFloat(1.0)),        // 包含透明度的颜色
    //         colorBlendMode: Cesium.ColorBlendMode['MIX'],           // 颜色与模型的混合方式，常用的有三个HIGHLIGHT,REPLACE,MIX
    //         colorBlendAmount: 0.1,                                   // 混合的程度，必须是MIX混合属性才能生效,见colorBlendMode
    //     },
    // })
    // 将视角锁定到entity
    // viewer.trackedEntity = entity

    // -----------------------------------------------------------------------------------------------------------------------------------

    // 方式二：使用primitive添加
    const cartesian3 = Cesium.Cartesian3.fromDegrees(110, 30, 10000)
    const position = Cesium.Transforms.eastNorthUpToFixedFrame(cartesian3)
    const model = Cesium.Model.fromGltf({
        url: '/src/assets/data/glb/Cesium_Air.glb',
        modelMatrix: position,
        minimumPixelSize: 512,
        maximumScale: 200000,
        scale: 1,
    })
    viewer.scene.primitives.add(model)
})
</script>

<template>
    <home />
</template>