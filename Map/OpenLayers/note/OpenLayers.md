# OpenLayers

## 1. 简介

### 1.1 文档

1. [官方文档](https://openlayers.org/en/v5.3.0/doc/)
2. [网络教程](http://linwei.xyz/ol3-primer/index.html)
3. [MapGIS API](http://develop.smaryun.com:81/API/JS/IGS%20JavaScript%20API%20v02/index.htm#a0)
4. [MapGIS相关示例](http://develop.smaryun.com:81/API/JS/OL5InterfaceDemo/index.htm)

### 1.2 地图属性

1. API

   ```vue
   <script setup>
   	// 获取地图上所有图层：map为地图名称
       let layers = map.getLayers()
   
       // 获取地图视图相关信息：map为地图名称
       let view = map.getView()
   
       // 获取地图的尺寸：map为地图名称
       let size = map.getSize()
   
       // 获取当前视图的范围：map为地图名称
       let size = map.getSize()
       let extent = map.getView().calculateExtent(size)
   
       // 获取当前视图的缩放等级：map为地图名称
       let zoom = map.getView().getZoom()
   
       // 获取当前视图的中心点：map为地图名称
       let center = map.getView().getCenter()
       
       // 设置地图的尺寸：map为地图名称
       map.setSize( [1000, 500])
   
       // 设置当前视图的缩放等级：map为地图名称
       map.getView().setZoom(8)
   
       // 设置当前视图的中心点：map为地图名称
       map.getView().setCenter([90, 40])
   </script>
   ```

2. 示例

   ```vue
   <script setup>
   import { inject, onMounted } from 'vue';
   import initMap from '@/components/initMap.vue';
   import { gaode_vector } from '@/assets/layers.js'
   let map
   
   onMounted(()=>{
       map = inject('$map')
   })
   
   function getValue() {
       // 获取地图上所有图层
       let layers = map.getLayers()
       console.log('maplayers', layers.array_)
   
       // 获取地图视图相关信息
       let view = map.getView()
       console.log('view信息', view)
   
       // 获取地图的尺寸
       let size = map.getSize()
       console.log('mapsize', size)
   
       // 获取当前视图的范围
       let extent = map.getView().calculateExtent(size)
       console.log('viewextent', extent)
   
       // 获取当前视图的缩放等级
       let zoom = map.getView().getZoom()
       console.log('viewzoom', zoom)
   
       // 获取当前视图的中心点
       let center = map.getView().getCenter()
       console.log('viewcenter', center)
   }
   
   function setValue() {
       // 设置地图的尺寸
       // map.setSize( [1000, 500])
   
       // 设置当前视图的缩放等级
       // map.getView().setZoom(8)
   
       // 设置当前视图的中心点
       map.getView().setCenter([90, 40])
   }
   </script>
   
   <template>
       <initMap />
       <button class="get" @click="getValue()">获取地图属性</button>
       <button class="set" @click="setValue()">设置地图属性</button>
   </template>
   
   <style>
       button {
           padding: 10px 20px;
           position: fixed;
           left: 100px;
           background-color: red;
       }
       .get {
           top: 300px;
       }
       .set {
           top: 350px;
       }
   </style>
   ```

### 1.3 图层属性

1. API

   ```vue
   <script setup>
   	// 获取地图上所有图层：map为地图名称
       let variable = map.getLayers()
   
       // 获取某个图层是否可见：layer为图层名称
       let variable = layer.getVisible()
   
       // 获取某个图层的堆叠层级：layer为图层名称
       let variable = layer.getZIndex()
       
       // 获取某个图层的透明度：layer为图层名称
       let variable = layer.getOpacity()  
       
       // 设置图层的visible：layer为图层名称
       layer.setVisible(false)
   
       // 设置图层的zindex：layer为图层名称
       layer.setZIndex(0)
   
       // 设置图层的opacity：layer为图层名称
       layer.setOpacity(0)
   </script>
   ```

2. 示例

   ```vue
   <script setup>
   import { inject, onMounted } from 'vue';
   import initMap from '@/components/initMap.vue';
   import { gaode_vector } from '@/assets/layers.js'
   let map
   
   onMounted(()=>{
       map = inject('$map')
   })
   
   function getValue() {
       // 获取某个图层是否可见
       let visible = gaode_vector.getVisible()
       console.log('visible', visible)
       // 获取某个图层的堆叠层级
       let zindex = gaode_vector.getZIndex()
       console.log('zindex', zindex)
       // 获取某个图层的透明度
       let opacity = gaode_vector.getOpacity()
       console.log('opacity', opacity)    
   }
   
   function setValue() {
       // 设置图层的visible
       // gaode_vector.setVisible(false)
   
       // 设置图层的zindex
       // gaode_vector.setZIndex(0)
   
       // 设置图层的opacity
       gaode_vector.setOpacity(0)
   }
   </script>
   
   <template>
       <initMap />
       <button class="get" @click="getValue()">获取图层的visible、zindex、opacity</button>
       <button class="set" @click="setValue()">设置图层的visible、zindex、opacity</button>
   </template>
   
   <style>
       button {
           padding: 10px 20px;
           position: fixed;
           left: 100px;
           background-color: red;
       }
       .get {
           top: 300px;
       }
       .set {
           top: 350px;
       }
   </style>

## 2. 基本功能

### 2.1 地图控件

1. API

   ```vue
   <script setup>
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
   </script>
   ```

2. 示例

   ```vue
   <script setup>
   import initMap from '@/components/initMap.vue'
   import { onMounted, inject } from 'vue';
   
   // 引入控件资源(控件及其css样式)
   import 'ol/ol.css';
   import { Zoom, ZoomSlider, FullScreen, MousePosition, ScaleLine, OverviewMap, ZoomToExtent, Rotate } from 'ol/control';
   
   onMounted(()=>{
       const map = inject('$map')		// 从全局引入map
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
   ```

### 2.2 地图漫游

1. API

   ```vue
   <script setup>
   	map.on('click', (event)=>{
           // 获取点击位置坐标
           const [lng, lat] = event.coordinate
           // 漫游到指定位置
           map.getView().animate({
               center:[lng, lat],		// 跳转到哪
               zoom: 8,			   // 缩放级别 
               duration: 1000		    // 持续时间 
           })
       })
   </script>
   ```

2. 示例

   ```vue
   <script setup>
   import { inject, onMounted } from 'vue';
   import initMap from '@/components/initMap.vue';
   
   onMounted(()=>{
       const map = inject('$map')
       map.on('click', (event)=>{
           const [lng, lat] = event.coordinate
           map.getView().animate({
               center:[lng, lat],
               zoom: 8,
               duration: 1000
           })
       })
   })
   </script>
   
   <template>
       <initMap />
   </template>

### 2.3 地图下载

本方法来自官网示例：https://openlayers.org/en/latest/examples/export-map.html

```vue
function downloadMap() {
    map.once('rendercomplete', function () {
        const mapCanvas = document.createElement('canvas');
        const size = map.getSize();
        mapCanvas.width = size[0];
        mapCanvas.height = size[1];
        const mapContext = mapCanvas.getContext('2d');
        Array.prototype.forEach.call(
            map.getViewport().querySelectorAll('.ol-layer canvas, canvas.ol-layer'),
            function (canvas) {
                if (canvas.width > 0) {
                    const opacity =
                        canvas.parentNode.style.opacity || canvas.style.opacity;
                    mapContext.globalAlpha = opacity === '' ? 1 : Number(opacity);
                    let matrix;
                    const transform = canvas.style.transform;
                    if (transform) {
                        // Get the transform parameters from the style's transform matrix
                        matrix = transform
                            .match(/^matrix\(([^\(]*)\)$/)[1]
                            .split(',')
                            .map(Number);
                    } else {
                        matrix = [
                            parseFloat(canvas.style.width) / canvas.width,
                            0,
                            0,
                            parseFloat(canvas.style.height) / canvas.height,
                            0,
                            0,
                        ];
                    }
                    CanvasRenderingContext2D.prototype.setTransform.apply( mapContext,  matrix );
                    const backgroundColor = canvas.parentNode.style.backgroundColor;
                    if (backgroundColor) {
                        mapContext.fillStyle = backgroundColor;
                        mapContext.fillRect(0, 0, canvas.width, canvas.height);
                    }
                    mapContext.drawImage(canvas, 0, 0);
                }
            }
        );
        mapContext.globalAlpha = 1;
        mapContext.setTransform(1, 0, 0, 1, 0, 0);
        const link = document.getElementById('image-download');
        link.href = mapCanvas.toDataURL();
        link.click();
    });
    map.renderSync();
}
```

### 2.4 画笔绘制

1.  API

   ```vue
   <script setup>
   	// 引入画笔资源
       import Draw from 'ol/interaction/Draw.js'
       import VectorSource from 'ol/source/Vector';
       import VectorLayer from 'ol/layer/Vector';
       import { Style, Circle, Stroke, Fill } from 'ol/style'
       
       // 创建画布：vector为画布图层名称，draw为画笔名称
       source = new VectorSource({ wrapX: false });
       vector = new VectorLayer({
           source: source,
       });
       
       // 创建画笔
       draw = new Draw({
           source: source,
           type: value,
           // freehand: true,      // 手绘线
       })
       
       // 将画布和画笔添加到地图中：map为地图名称，vector为画布图层名称，draw为画笔名称
       map.addLayer(vector)
       map.addInteraction(draw)
       
       // 清除画布：source为画布源
       source.clear()
       
       // 移除画布图层：map为地图名称，vector为画布图层名称
       map.removeLayer(vector)
       
       // 移除画笔：map为地图名称，draw为画笔名称
       map.removeInteraction(draw)
   </script>
   ```

2. 示例

   ```vue
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
   ```

   

### 2.5  覆盖物管理

> 在vue中使用弹窗主要是通过添加overlay实现

1. 属性

   ```
   1. id：为对应的overlay设置唯一的ID值，便于使用map的getOverlayById(id)方法获取对应的overlay
   
   2. element：overlay绑定的DOM对象
   
   3. autoPan：当overlay超出边界时，地图自动移除以保证overlay全部可见，取值为true或false
   
   4. autoPanAnimation：设置autoPan的效果动画，是一个对象，里面可以设置duration属性(持续时间)
   
   5. autoPanMargin：地图自动平移时，地图边缘与overlay的空隙，单位是px(默认20）
   
   6. position：在地图所在的坐标系框架下，overlay放置的位置
   
   7. offset：overlay相对于position偏移量(px)，默认为[0,0]。正方向为右/下。
   
   8. positioning：overlay对于position的相对位置，可能的值包括 bottom-left、bottom-center、bottom-right 、center-left、center-center、center-right、top-left、top-center、top-right，默认是 top-left，也就是 element 左上角与 position 重合
   
   9. stopEvent：地图的事件传播是否停止，默认是true，即阻止传播，可能不太好理解，举个例子，当鼠标滚轮在地图上滚动时，会触发地图缩放事件，如果在overlay之上滚动滚轮，并不会触发缩放事件，如果想鼠标在overlay之上也支持缩放，那么将该属性设置为false即可；
   
   10. insertFirst：overlay是否应先添加到其所在的容器。当stopEvent为true时，overlay和openlayers 的控件是放于一个容器的，此时将insertFirst设置为true ，overlay会首先添加到容器，这样，overlay默认在控件的下一层，所以，当stopEvent和insertFirst都采用默认值时，overlay默认在控件的下一层
   ```

2. 方法

   ```
   // 地图相关
   1. 添加覆盖物：map.addoverlay(overlay)：
   2. 移除覆盖物：map.removeOverlay(overlay)：
   3. 根据id获取覆盖物：map.getOverlayById(id)：
   4. 获取地图上所有覆盖物：map.getOverlayes：
   
   // overlayer自身
   1. 取得包含overlay的DOM元素：getElement
   2. 取得overlay的id：getId
   3. 获取与overlay关联的map对象：getMap
   4. 获取offset属性：getOffset
   5. 获取position属性：getPosition
   6. 获取positioning属性：getPositioning
   7. 设置overlay的element：setElement
   8. 设置与overlay的map对象：setMap
   9. 设置offset：setOffset
   10. 设置position属性：setPosition
   11. 设置positioning属性：setPositioning
   ```

3. 事件

   ```
   1. 当引用计数器增加时触发：change事件
   2. overlay对应的element变化时触发：change:element事件
   3. overlay对应的map变化时触发：change:map事件
   4. overlay对应的offset变化时触发：change:offset事件
   5. overlay对应的position变化时触发：change:position事件
   6. overlay对应的positioning变化时触发：change:positioning事件
   7. overlay对应的属性变化时触发：propertychange事件
   ```

4. API

   ```vue
   <script setup>
       import Overlay from 'ol/Overlay.js';
   	// 创建overlay
       const overlay = new Overlay({
           element: container.value,
           autoPan: {
               animation: {
                   duration: 50,
               },
           },
       });
       // 向地图中添加overlay
       map.addoverlay(overlay)
   </script>

5. 示例

   ```vue
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
   ```

## 3. 数据加载

### 3.1 GeoJSON数据

1. API

   ```vue
   <script setup>
   	// 引入GeoJSON和Style
       import GeoJSON from 'ol/format/GeoJSON'
       import { Style, Stroke, Fill } from 'ol/style'
       import VectorLayer from 'ol/layer/Vector';
       import VectorSource from 'ol/source/Vector';
       
    	// 创建geojson图层（并设置样式）
       const geoJSONLayer = new VectorLayer({
           source: new VectorSource({
               url: 'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json',
               format: new GeoJSON()
           }),
           style: new Style({
               stroke: new Stroke({
                   color: 'red',
                   width: 5
               }),
               fill: new Fill({
                   color: 'green'
               })
           })
       })
       
       // 将geojson图层添加到地图中
       map.addLayer(geoJSONLayer)
   </script>

2. 示例

   ```vue
   <script setup>
   import initMap from '@/components/initMap.vue'
   import { onMounted, inject } from 'vue';
   import axios from 'axios'
   // 引入GeoJSON和Style
   import GeoJSON from 'ol/format/GeoJSON'
   import { Style, Stroke, Fill } from 'ol/style'
   import VectorLayer from 'ol/layer/Vector';
   import VectorSource from 'ol/source/Vector';
   let map
   const addGeoJSONLayer = () => {
       const geoJSONLayer = new VectorLayer({
           source: new VectorSource({
               url: 'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json',
               format: new GeoJSON()
           }),
           style: new Style({
               stroke: new Stroke({
                   color: 'red',
                   width: 5
               }),
               fill: new Fill({
                   color: 'green'
               })
           })
       })
       map.addLayer(geoJSONLayer)
   }
   
   
   onMounted(() => {
       map = inject('$map')
       addGeoJSONLayer()
   })
   </script>
   
   <template>
       <initMap />
   </template>

## 4. 图层管理

### 4.1 获取图层

1. API

   ```vue
   <script setup>
   	// 获取地图上所有图层：map为地图名称
       let variable = map.getLayers()
   
       // 获取某个图层是否可见：layer为图层名称
       let variable = layer.getVisible()
   
       // 获取某个图层的堆叠层级：layer为图层名称
       let variable = layer.getZIndex()
       
       // 获取某个图层的透明度：layer为图层名称
       let variable = layer.getOpacity()  
       
       // 设置图层的visible：layer为图层名称
       layer.setVisible(false)
   
       // 设置图层的zindex：layer为图层名称
       layer.setZIndex(0)
   
       // 设置图层的opacity：layer为图层名称
       layer.setOpacity(0)
   </script>

2. 示例

   ```vue
   <script setup>
   import { inject, onMounted } from 'vue';
   import initMap from '@/components/initMap.vue';
   import { gaode_vector } from '@/assets/layers.js'
   let map
   
   onMounted(()=>{
       map = inject('$map')
   })
   
   function getValue() {
       // 获取地图上所有图层
       let layers = map.getLayers()
       console.log('maplayers', layers.array_)
   
       // 获取某个图层是否可见
       let visible = gaode_vector.getVisible()
       console.log('visible', visible)
   
       // 获取某个图层的堆叠层级
       let zindex = gaode_vector.getZIndex()
       console.log('zindex', zindex)
       
       // 获取某个图层的透明度
       let opacity = gaode_vector.getOpacity()
       console.log('opacity', opacity)    
   }
   
   function setValue() {
       // 设置图层的visible
       // gaode_vector.setVisible(false)
   
       // 设置图层的zindex
       // gaode_vector.setZIndex(0)
   
       // 设置图层的opacity
       gaode_vector.setOpacity(0)
   }
   </script>
   
   <template>
       <initMap />
       <button class="get" @click="getValue()">获取图层的visible、zindex、opacity</button>
       <button class="set" @click="setValue()">设置图层的visible、zindex、opacity</button>
   </template>
   
   <style>
       button {
           padding: 10px 20px;
           position: fixed;
           left: 100px;
           background-color: red;
       }
       .get {
           top: 300px;
       }
       .set {
           top: 350px;
       }
   </style>

### 4.2 添加图层

1. API

   ```vue
   <script setup>
       // map为地图名称， layer为图层名称
   	map.addLayer(layer)
   </script>

2. 示例

   ```vue
   <script setup>
   import initMap from '@/components/initMap.vue'
   import { onMounted, inject } from 'vue';
   import { gaode_image } from '@/assets/layers.js'
   let map
   onMounted(()=>{
       map = inject('$map')
   })
   const addlayer = () => {
       // addLayer方法用于添加特定图层
       map.addLayer(gaode_image)
   }
   </script>
   
   <template>
       <initMap />
       <button class="add" @click="addlayer()">添加图层</button>
   </template>
   
   <style scoped>
   button {
       padding: 10px 20px;
       position: fixed;
       top: 300px;
       left: 100px;
       background-color: red;
   }
   </style>

### 4.3 删除图层

1. API

   ```vue
   <script setup>
   	// 图层移除方式一：通过map的removeLayer方法删除：map为地图名称， layer为图层名称
       map.removeLayer(layer)
   
       // 图层‘移除’方式二：通过图层的setVisible方法（显示/隐藏）：layer为图层名称
       layer.setVisible(boolean)
   
       // 图层的‘移除’方式三：通过图层的setOpacity方法：layer为图层名称
       layer.setOpacity(0/1)
   
       // 图层的‘移除’方式四：通过图层的setZIndex方法设置图层的堆叠顺序：layer为图层名称
       layer.setZIndex(number)
   </script>

2. 示例

   ```vue
   <script setup>
   import initMap from '@/components/initMap.vue'
   import { onMounted, inject } from 'vue';
   import { gaode_image } from '@/assets/layers.js'
   import Layer from 'ol/layer/Layer';
   let map
   onMounted(()=>{
       map = inject('$map')
   })
   const addlayer = () => {
       map.addLayer(gaode_image)
   }
   
   
   const removelayer = () => {
       // 方式一：map的removeLayer方法移除图层
       // map.removeLayer(gaode_image)
   
       // 方式二：layer的setVisible方法控制图层显隐
       // gaode_image.setVisible(false)
   
       // 方式三：layer的setOpacity方法设置图层透明度
       // gaode_image.setOpacity(0)
   
       // 方式四：layer的setZIndex方法设置图层的堆叠顺序
       gaode_image.setZIndex(1)
   }
   </script>
   
   <template>
       <initMap />
       <button class="add" @click="addlayer()">添加图层</button>
       <button class="del" @click="removelayer()">移除图层</button>
   </template>
   
   <style scoped>
   button {
       padding: 10px 20px;
       position: fixed;
       left: 100px;
       background-color: red;
   }
   .add {
       top: 300px;
   }
   .del {
       top: 200px;
   }
   </style>

### 4.4 设置图层

1. API

   ```vue
   <script setup>
   	// 获取某个图层是否可见：variable为变量名，layer为图层名
       variable = 图层名.getVisible()
   
       // 设置某个图层是否可见：false表示不可见，true表示可见
       layer.setVisible(boolean)
   
       // 获取图层的堆叠顺序：variable为变量名，layer为图层名
       variable = layer.getZIndex()
   
       // 设置图层的堆叠顺序：layer为图层名
       layer.setZIndex(number)
   
       // 获取图层的透明度：variable为变量名，layer为图层名
       variable = layer.getOpacity()
   
       // 设置图层的透明度：layer为图层名
       layer.setOpacity(number)
   </script>

2. 示例

   ```vue
   <script setup>
   import { inject, onMounted } from 'vue';
   import initMap from '@/components/initMap.vue';
   import { gaode_vector } from '@/assets/layers.js'
   let map
   
   onMounted(()=>{
       map = inject('$map')
   })
   
   function getValue() {
       // 获取某个图层是否可见
       let visible = gaode_vector.getVisible()
       console.log('visible', visible)
       // 获取某个图层的堆叠层级
       let zindex = gaode_vector.getZIndex()
       console.log('zindex', zindex)
       // 获取某个图层的透明度
       let opacity = gaode_vector.getOpacity()
       console.log('opacity', opacity)    
   }
   
   function setValue() {
       // 设置图层的visible
       // gaode_vector.setVisible(false)
   
       // 设置图层的zindex
       // gaode_vector.setZIndex(0)
   
       // 设置图层的opacity
       gaode_vector.setOpacity(0)
   }
   </script>
   
   <template>
       <initMap />
       <button class="get" @click="getValue()">获取图层的visible、zindex、opacity</button>
       <button class="set" @click="setValue()">获取图层的visible、zindex、opacity</button>
   </template>
   
   <style>
       button {
           padding: 10px 20px;
           position: fixed;
           left: 100px;
           background-color: red;
       }
       .get {
           top: 300px;
       }
       .set {
           top: 350px;
       }
   </style>

