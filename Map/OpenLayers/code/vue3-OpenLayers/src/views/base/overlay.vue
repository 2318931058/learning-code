<script setup>
import initMap from '@/components/initMap.vue'
import { onMounted, inject, ref } from 'vue';
// ---------------------------------------------------------------
import { toLonLat } from 'ol/proj';
import { toStringHDMS } from 'ol/coordinate';
import Overlay from 'ol/Overlay.js';
// ---------------------------------------------------------------
let overlay
const container = ref(null)
const content = ref(null)

// 点击关闭弹窗
function closePopup() {
    overlay.setPosition(undefined)
    content.value.innerHTML = ''
}

onMounted(() => {
    const map = inject('$map')
    // 创建覆盖物充当弹窗
    overlay = new Overlay({
        element: container.value,
        autoPan: {
            animation: {
                duration: 50,
            },
        },
    });
    map.addOverlay(overlay)

    // 点击添加弹窗
    map.on('click', (event) => {
        // 获取坐标
        const coordinate = event.coordinate
        // 转换坐标形式（度分秒）
        const hdms = toStringHDMS(toLonLat(coordinate))
        // 设置弹窗内容
        content.value.innerHTML = `${hdms}`
        // 设置弹窗位置
        overlay.setPosition(coordinate)
    })

    // 关闭弹窗时的抓手
    map.on('pointermove', (event) => {
        var pixel = map.getEventPixel(event.originalEvent);
        var hit = map.hasFeatureAtPixel(pixel);
        map.getTargetElement().style.cursor = hit ? "pointer" : "";
    })
})



</script>

<template>
    <initMap />
    <!-- 弹窗容器 -->
    <div ref='container' class="ol-popup">
        <a href="#" ref="closer" class="ol-popup-closer" @click="closePopup"></a>
        <div ref="content"></div>
    </div>
</template>

<style scoped>
button {
    padding: 10px 20px;
    background-color: red;
    position: fixed;
    top: 200px;
    left: 100px;
}

.ol-popup {
    position: absolute;
    background-color: white;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #cccccc;
    bottom: 12px;
    left: -50px;
    min-width: 280px;
}

.ol-popup:after,
.ol-popup:before {
    top: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.ol-popup:after {
    border-top-color: white;
    border-width: 10px;
    left: 48px;
    margin-left: -10px;
}

.ol-popup:before {
    border-top-color: #cccccc;
    border-width: 11px;
    left: 48px;
    margin-left: -11px;
}

.ol-popup-closer {
    text-decoration: none;
    position: absolute;
    top: 2px;
    right: 8px;
}

.ol-popup-closer:after {
    content: "✖";
}
</style>