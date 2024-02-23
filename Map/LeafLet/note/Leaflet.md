# LeafLet

## 1. 简介

### 1.1 文档

1. [官方文档](https://leafletjs.cn/index.html)：https://leafletjs.cn/index.html
2. [mapgis接口]()：http://develop.smaryun.com:81/API/JS/IGSInterfaceDemoForLeaflet/index.htm

### 1.2 vue中使用

```html
<!-- index.html导入依赖包 -->
<head>
    <script src="https://lib.baomitu.com/leaflet/1.9.2/leaflet.js"></script>
 	<link rel="stylesheet" href="https://lib.baomitu.com/leaflet/1.9.2/leaflet.css" />
</head>
```

```javascript
// main.js导出app
export const app = createApp(App)
```

### 1.3 地图初始化

```vue
<script setup>
import { onMounted } from "vue";
import { app } from "../main.js";
onMounted(() => {
    const url =
        "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2hlbmdiZW5jaGFvIiwiYSI6ImNsODU3aGRiODA0Y2UzcHBzZmFlcmdqZ2sifQ.8k59W_pB_Riwe6o-MneRlA";
    const layer = L.tileLayer(url, {
        maxZoom: 19,
        attribution: "© OpenStreetMap",
    });
    const map = L.map("map", {
        layers: [layer],
        // center:[纬度,经度]
        center: [34.322700, 108.552500],
        zoom: 4,
    });
    // 设置地图为全局变量
    app.provide("$map", map);
});
</script>

<template>
    <div id="map" style="width: 100vw;height: 100vh;"></div>
</template>
```

## 2. 地图漫游

1. API

   ```vue
   <script setup>
   	// 地图漫游API：lat是纬度、lng是经度，zoom是缩放级别
       map.flyTo([lat, lng], zoom)
   </script>
   ```

2. 示例

   ```vue
   <script setup>
   import { inject,  onMounted } from 'vue'
   import initMap from '@/views/initMap.vue'
   let myMap, lat, lng
   onMounted(() => {
       myMap = inject('$map')                    // 从全局获取map
       myMap.on('click', (event) => {            // 给map绑定事件  
           ({ lng, lat } = event.latlng)       // 获取点击位置坐标(lat和lng已声明，故须括号包裹)
           // 地图漫游：map.flyTo([lat, lng], zoom)
           myMap.flyTo([lat, lng], 8)
       })
   })
   
   const resetBtn = () => {
       myMap.flyTo([lat, lng], 4)
   }
   </script>
   
   <template>
       <button @click="resetBtn()">复位</button>
       <initMap />
   </template>
   
   <style scoped>
   button {
       z-index: 100000000;
       position: fixed;
       left: 300px;
       top: 300px;
       padding: 10px 20px;
       background-color: red;
   }
   </style>
   ```

## 3.图层管理

### 3.1 获取图层

1. API

   ```vue
   <script setup>
   	// 获取地图中所有图层：myMap为地图名称
       Object.values(myMap._layers)
   </script>
   ```

2. 示例

   ```vue
   <script setup>
   import { inject, onMounted } from 'vue'
   import initMap from '@/views/initMap.vue'
   let myMap, marker
   onMounted(() => {
       myMap = inject('$map')                    // 从全局获取map
       myMap.on('click', (event) => { 
           const { lng, lat } = event.latlng
           marker = L.marker([lat, lng],{
               title:'MyMarker'                    // 创建标记时添加title属性（marker是以图层形式添加，故此处用marker模拟正常图层）
           })
           myMap.addLayer(marker)
       })
   })
   
   const getMarkerLayer = () => {
       // 获取所有图层：Object.values(myMap._layers)
       let layers = Object.values(myMap._layers)
       console.log(layers)
   }
   </script>
   
   <template>
       <button @click="getMarkerLayer()">获取所有图层</button>
       <initMap />
   </template>
   
   <style scoped>
   button {
       z-index: 100000000;
       position: fixed;
       left: 300px;
       top: 300px;
       padding: 10px 20px;
       background-color: red;
   }
   </style>
   ```

### 3.2 添加图层

1. API

   ```vue
   <script setup>
   	// 方式一：在地图的layers属性中添加；
       // 方式二：通过地图的addLayer方法添加：myMap为地图名称, layer为图层名称
       myMap.addLayer(layer)
       // 方式三：通过图层的addTo方法添加：layer为图层名称，myMap为地图名称
       layer.addTo(myMap)
   </script>
   ```

2. 示例

   ```vue
   <script setup>
   import { onMounted } from "vue";
   let myMap, layer
   
   onMounted(() => {
       const url =
           "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2hlbmdiZW5jaGFvIiwiYSI6ImNsODU3aGRiODA0Y2UzcHBzZmFlcmdqZ2sifQ.8k59W_pB_Riwe6o-MneRlA";
       layer = L.tileLayer(url, {
           maxZoom: 19,
           attribution: "© OpenStreetMap",
       });
       myMap = L.map("map", {
           // 方式一：在地图的layers属性中添加
           // layers: [layer],
           center: [34.322700, 108.552500],            // center:[纬度,经度]
           zoom: 4,
       });
   });
   
   const addLayer = () => {
       // 方式二：通过地图的addLayer方法添加：myMap为地图名称, layer为图层名称
       myMap.addLayer(layer)
   
       // 方式三：通过图层的addTo方法添加：layer为图层名称，myMap为地图名称
       // layer.addTo(myMap)
   }
   </script>
   
   <template>
       <button @click="addLayer()">添加图层</button>
       <div id="map" style="width: 100vw;height: 100vh;"></div>
   </template>
   
   <style scoped>
   button {
       z-index: 100000000;
       position: fixed;
       left: 300px;
       top: 300px;
       padding: 10px 20px;
       background-color: red;
   }
   </style>
   ```

### 3.3 移除图层

1. API

   ```vue
   <script setup>
   	// 方式一：通过图层的remove方法移除某个图层：layer为图层名称
       layer.remove()
       
       // 方式二：通过设置图层的透明度为0实现移除某个图层：layer为图层名称
       layer.setOpacity(0)
       
       // 方式三：通过地图的removeLayer方法移除某个图层：myMap为地图名称, layer为图层名称
       myMap.removeLayer(layer)
       
       // 方法四：myMap为地图名称
       let allLayers = Object.values(myMap._layers)					// 获取所有图层
       let specificLayers = allLayers.filter(item=>item.xxx)			 // 根据图层的某个属性过滤出特定图层
       specificLayers.forEach(item=>item.remove())						// 遍历删除特定图层
       
       // 方法五：图层管理器方式：
       let layerManager = new L.FeatureGroup()  						// 创建图层管理器layerManager
       layerManager.addLayer(layer)				   				   // 将需要的图层layer添加到图层管理器中
       myMap.addLayer(layerManager)				   				   // 将图层管理器添加到地图myMap中
       layerManager.clearLayers()					  				   // 移除图层管理器中的所有图层
   </script>
   ```

2. 示例

   ```vue
   <script setup>
   import { inject, onMounted } from 'vue'
   import initMap from '@/views/initMap.vue'
   let myMap
   // 5.1 创建图层管理器layerManager
   let layerManager = new L.FeatureGroup() 
   const removeLayer = () => {
       // 方式一：通过图层的remove方法移除某个图层：layer为图层名称：layer.remove()
       // 方式二：通过设置图层的透明度为0实现移除某个图层：layer为图层名称：layer.setOpacity(0)
       // 方式三：通过地图的removeLayer方法移除某个图层：myMap为地图名称, layer为图层名称：myMap.removeLayer(layer)
       
       // 方式四：移除所有图层
       // let allLayers = Object.values(myMap._layers)	 // 获取所有图层
       // let specificLayers = allLayers.filter(item=>item.options.title=="MyMarker")	 // 根据图层的某个属性过滤出特定图层
       // specificLayers.forEach(item=>item.remove())						                         // 遍历删除特定图层
   
       // 方式五：5.5 图层管理器方式 ：移除图层管理器中的所有图层
       layerManager.clearLayers()	
   }
   
   onMounted(() => {
       myMap = inject('$map')                    // 从全局获取map
       myMap.on('click', (event) => { 
           const { lng, lat } = event.latlng
           let marker = L.marker([lat, lng],{
               title:'MyMarker'              // 创建标记时添加title属性
           })
           // 移除图层方式五需要注释该条
           // myMap.addLayer(marker)           
   
           // 5.2 将需要的图层layer添加到图层管理器中 	
           layerManager.addLayer(marker)	
           // 5.3 将图层管理器添加到地图myMap中
           myMap.addLayer(layerManager)
       })
   })
   </script>
   
   <template>
       <button @click="removeLayer()">移除图层</button>
       <initMap />
   </template>
   
   <style scoped>
   button {
       z-index: 100000000;
       position: fixed;
       left: 300px;
       top: 300px;
       padding: 10px 20px;
       background-color: red;
   }
   </style>
   ```

### 3.4 设置图层

1. API

   ```vue
   <script setup>
   	// 向图层中添加数据：layer为图层名，data为数据名
   	layer.addData(data)
       // 设置图层样式：layer为图层名；attr为属性名，如颜色color，线宽weight等；value为属性值
       layer.setStyle({attr:value})
   </script>
   ```

2. 示例

   ```vue
   <script setup>
   import { inject, onMounted } from 'vue'
   import initMap from '@/views/initMap.vue'
   let myMap
   // 创建线图层
   let lineLayer = L.geoJSON()
   // 定义geojson类型的线数据
   let lineData = {
       type: "FeatureCollection",
       features: [
           {
               type: "Feature",
               geometry: {
                   type: "LineString",
                   coordinates: [
                       [100, 30],
                       [130, 30],
                   ],
               },
               properties: {
                   name: "MB",
               },
               id: 1002,
           },
       ],
   };
   onMounted(() => {
       myMap = inject('$map')                    // 从全局获取map
       // 将数据添加到图层中(layer为图层名称，data为数据）：layer.addData(data)
       lineLayer.addData(lineData)
       // 将图层添加到地图中
       myMap.addLayer(lineLayer)
   })
   
   const setLayer = () => {
       lineLayer.setStyle({
           color: 'red',
           weight: '50px'
       })
   }
   
   </script>
   
   <template>
       <button @click="setLayer()">设置样式</button>
       <initMap />
   </template>
   
   <style scoped>
   button {
       z-index: 100000000;
       position: fixed;
       left: 300px;
       top: 300px;
       padding: 10px 20px;
       background-color: red;
   }
   </style>
   ```

## 4. 图形绘制

### 4.1 绘制线条

1. API

   ```vue
   <script setup>
       // myMap为地图名称，line为线条
   	let line = L.polyline([[lat,lng],[lat,lng]],{
           color:'',
           weight: ,
       })
       myMap.addLayer(line)
   </script>
   ```

2. 示例

   ```vue
   <script setup>
   import { onMounted, inject } from 'vue';
   import initMap from '@/views/initMap.vue';
   // 设置线条的属性
   let line = L.polyline([[35.1163738, 114.3813261], [19.98266558, 110.5075941]], {
       color: 'red',
       weight: 10
   })
   onMounted(() => {
       const myMap = inject('$map')
       myMap.addLayer(line)
   })
   </script>
   
   <template>
       <initMap />
   </template>
   ```

### 4.2 绘制区域

1. API

   ```vue
   <script setup>
   	// myMap为地图名称，area为区域
       let area = L.polygon([[lat,lng],[lat,lng],[lat,lng]],{
         color:'',
           weight: ,
           fillColor:'',
           fillOpacity: ,
       })
   	myMap.addLayer(area)
   </script>
   ```

2. 示例

   ```vue
   <script setup>
   import { onMounted, inject } from 'vue';
   import initMap from '@/views/initMap.vue';
   // 设置区域/面的属性
   let area = L.polygon([[35.1163738, 114.3813261], [19.98266558, 110.5075941], [40, 120]], {
       color: 'red',
       weight: 10,
       fillColor: 'green', 
       fillOpacity: 0.5
   })
   onMounted(() => {
       const myMap = inject('$map')
       myMap.addLayer(area)
   })
   </script>
   
   <template>
       <initMap />
   </template>
   ```

### 4.3 绘制圆形

1. API

   ```vue
   <script setup>
       // myMap为地图名称，circle为圆形
       let circle = L.circle([lat,lng],{
         color:'',
         radius:'',
         fillColor:'',
         fillOpacity: ,
       })
       myMap.addLayer(circle)
   </script>
   ```

2. 示例

   ```vue
   <script setup>
   import { onMounted, inject } from 'vue';
   import initMap from '@/views/initMap.vue';
   // 设置圆形的属性
   let circle = L.circle([35.1163738, 114.3813261], {
       color: 'red',
       radius: 1000000,
       fillColor: 'green',
       fillOpacity: 0.5
   })
   onMounted(() => {
       const myMap = inject('$map')
       myMap.addLayer(circle)
   })
   </script>
   
   <template>
       <initMap />
   </template>
   ```

## 5. 数据加载

### 5.1 geojson数据

1. API

   ```vue
   <script setup>
   	// 创建空的geojson图层
   	let newLayer = L.geoJSON()
       // 添加图层：myMap为地图名称, layer为图层名称
   	myMap.addLayer(layer)
       // 删除图层：layer为图层名称
       layer.clearLayers()
   </script>
   ```

2. 分类

   ```vue
   <script setup>
   	// 非标准geojson数据（以线数据为例)
       let nonStandLine = {
           type: 'Feature',
           geometry: {
               type: 'LineString', 
               coordinates: [[35.1163738, 114.3813261], [19.98266558, 110.5075941]]
           }
       }
   </script>
   ```

   ```vue
   <script setup>
   	// 标准geojson数据（以点数据为例)
       let standPoint = {
           type: 'FeatureCollection',
           features: [
               {
                   type: 'Feature',
                   geometry: {
                       // 点为Point、线为LineString、面为Polygon
                       type: 'Point',
                       coordinates: [35.1163738, 114.3813261]
                   },
                   properties: {
                       name: '点数据',
                       id: 1001
                   }
               }
           ]
       }
   </script>
   ```

3. 示例

   ```vue
   <script setup>
   import axios from 'axios'
   import { onMounted, inject } from 'vue';
   import initMap from '@/views/initMap.vue';
   let myMap, myCountry
   const getData = async () => {
       const layerData = await axios.get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
       // 设置属性
       myCountry = L.geoJSON(layerData.data, {
           color: 'red', 
           weight: 5,
           opacity: 0.5
       })
       alert('数据获取成功')
       
   }
   const addData = () => {
       // 将数据添加到地图中
       myMap.addLayer(myCountry)
   }
   const delData = () => {
       // 将数据从地图中移除
       myCountry.clearLayers()
   }
   onMounted(() => {
       myMap = inject('$map')
   })
   </script>
   
   <template>
       <initMap />
       <button class="get" @click="getData()">获取</button>
       <button class="add" @click="addData()">添加</button>
       <button class="del" @click="delData()">移除</button>
   </template>
   
   <style scoped>
   button {
       z-index: 100000000;
       padding: 10px 20px;
       background-color: red;
   }
   .get {
       position: fixed;
       left: 300px;
       top: 150px;
   }
   .add {
       position: fixed;
       left: 300px;
       top: 250px;
   }
   .del {
       position: fixed;
       left: 300px;
       top: 350px;
   }
   </style>
   ```

## 6. 弹窗Popup

1. API

   ```vue
   <script setup>
   	// 添加弹窗：event为事件对象，content为弹窗内容
       event.layer.bindPopup(`content`).openPopup()
       // 移除弹窗：event为事件对象
       event.layer.bindPopup().closePopup()
   </script>
   ```

2. 示例

   ```vue
   <script setup>
   import axios from 'axios'
   import { onMounted, inject } from 'vue';
   import initMap from '@/views/initMap.vue';
   let myMap
   const addLayer = async () => {
       const layerData = await axios.get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
       let HeNanLayer = L.geoJSON(layerData.data, {
           color: 'red',
           opacity: 0.3
       })
       myMap.addLayer(HeNanLayer)
       // 为geojson图层绑定鼠标移入事件
       HeNanLayer.on('mousemove', (event) => {
           // 设置鼠标滑过区域样式
           event.layer.setStyle({
               color: 'green'
           })
           // 获取弹窗属性
           const adcode = event.layer.feature.properties.adcode
           const name = event.layer.feature.properties.name
           const level = event.layer.feature.properties.level
           // 添加弹窗
           event.layer.bindPopup(`
                 <p>adcode：${adcode}</p>
                 <p>name：${name}</p>
                 <p>level：${level}</p>
               `).openPopup()
       })
       // 为geojson图层绑定鼠标移除事件
       HeNanLayer.on('mouseout', (event) => {
           // 恢复原有样式
           event.layer.setStyle({
               color: 'red',
               opacity: 0.3
           })
           // 关闭弹窗
           event.layer.bindPopup().closePopup()
       })
   }
   
   onMounted(() => {
       myMap = inject('$map')
       addLayer()
   })
   </script>
   
   <template>
       <initMap />
   </template>
   ```

## 7. 标注marker

1. API

   ```vue
   <script setup>
   	// 创建标记：markerLayer为标记图层名称，markerName为标记名称，lat是纬度、lng是经度，myMap是地图名称
       let markerLayer = L.marker([lat,lng],{
           title:'markerName'
       })
       myMap.addLayer(markerLayer)
   	// 移除标记的方式与移除图层的方式相一致
   </script>
   ```

2. 示例

   ```vue
   <script setup>
   import { onMounted, inject } from 'vue';
   import initMap from '@/views/initMap.vue';
   let myMap
   onMounted(() => {
       myMap = inject('$map')
       myMap.on('click', (event) => {
           const { lng, lat } = event.latlng
           // 创建标记（以图层形式添加到地图中）
           let markerLayer = L.marker([lat, lng], {
               title: "markerName"
           });
           // 将标记添加到地图中
           myMap.addLayer(markerLayer)
       })
   })
   const delMarker = () => {
       // 移除标记的方式与移除图层的方式相一致
       let layers = Object.values(myMap._layers)
       let requiredLayers = layers.filter(item => item.options.title == "markerName")	
       requiredLayers.forEach(item => item.remove())
   }
   </script>
   
   <template>
       <initMap />
       <button @click="delMarker()">移除标记</button>
   </template>
   
   <style scoped>
   button {
       z-index: 100000000;
       padding: 10px 20px;
       background-color: red;
       position: fixed;
       left: 300px;
       top: 300px;
   }
   </style>
   ```
