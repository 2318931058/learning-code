<script setup>
import initMap from '@/components/initMap.vue'
import { onMounted, inject } from 'vue';

// 引入控件资源(控件及其css样式)
import 'ol/ol.css';
import { Zoom, ZoomSlider, FullScreen, MousePosition, ScaleLine, OverviewMap, ZoomToExtent, Rotate } from 'ol/control';

onMounted(()=>{
    const map = inject('$map')
    // 缩放控件：类名为         .ol-zoom-in 和 .ol-zoom-out 
    map.addControl(new Zoom())
    // 滑块控件：类名为         .ol-zoomslider
    map.addControl(new ZoomSlider())
    // 全屏控件：类名为         .ol-full-screen
    map.addControl(new FullScreen())
    // 鼠标位置控件：类名为     .ol-mouse-position
    map.addControl(new MousePosition())
    // 比例尺控件：类名为       .ol-scale-line
    map.addControl(new ScaleLine())
    // 鹰眼控件：类名为         .ol-overviewmap
    map.addControl(new OverviewMap())
    // 缩放到全局组件：类名为    .ol-zoom-extent
    map.addControl(new ZoomToExtent())
    // 旋转组件：按住   alt + shift键后拖动鼠标旋转
    map.addControl(new Rotate())
})
</script>

<template>
    <initMap />
</template>

<style>
    /* 全屏控件 */
    .ol-full-screen {
        position: absolute;
        right: 20px;
    }
    /* 鼠标位置控件 */
    .ol-mouse-position {
        position: absolute;
        top: 10px;
        right: 55px;
        text-align: center;
    }
</style>