<script setup>
import initMap from '@/components/initMap.vue'
import { onMounted, inject, ref } from 'vue';
// 引入画笔
import Draw from 'ol/interaction/Draw.js'
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { Style, Circle, Stroke, Fill } from 'ol/style'

let map, value, draw, vector, source
let typeSelect = ref()

onMounted(() => {
    map = inject('$map')
    source = new VectorSource({ wrapX: false });
    vector = new VectorLayer({
        source: source,
    });
    map.addLayer(vector)
    typeSelect.value.onchange = function () {
        if(draw){
            map.removeInteraction(draw)
        }

        value = typeSelect.value.value
        if (value !== 'None') {
            draw = new Draw({
                source: source,
                type: value,
                // freehand: true,      // 手绘线
            })
            map.addInteraction(draw)
        } else {
           
        }
    };
})


function clearDrawLayer() {
    // 移除画布图层
    // map.removeLayer(vector)

    // 清除画布
    source.clear()
}


let style = new Style({
        stroke: new Stroke({
            color: 'red',
            width: 5
        }),
        fill: new Fill({
            color: 'green'
        }),
        image: new Circle ({
            radius : 10,
            fill : new Fill({
                color: 'yellow'
            })
        })
    })
function setStyle() {
    let drawFeatures = source.getFeatures()
    drawFeatures.forEach((item)=>{
        item.setStyle(style)
    })
}





</script>

<template>
    <form class="formPosi">
        <select ref="typeSelect">
            <option value="None">None</option>
            <option value="Point">Point</option>
            <option value="LineString">LineString</option>
            <option value="Polygon">Polygon</option>
            <option value="Circle">Circle</option>
        </select>
    </form>

    <button class="clear" @click="clearDrawLayer()">清除画布</button>
    <button class="set" @click="setStyle()">设置样式</button>

    <initMap />
</template>

<style scoped>
.formPosi,
button {
    position: fixed;
    left: 100px;
    z-index: 100;
}

.formPosi {
    top: 100px;
}

.formPosi select,
button {
    color: white;
    padding: 10px 20px;
    background-color: green;
}

.clear {
    top: 150px;
}

.set {
    top: 200px;
}
</style>