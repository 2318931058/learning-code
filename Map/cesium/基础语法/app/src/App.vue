<script setup>
import * as Cesium from "cesium";
import { load3dtiles, update3dtiles } from "./tool/load.js";
import buildData from "./assets/build.json";
import { onMounted } from "vue";
let viewer, handler, lastColor, buildArea;
let ownerInfo = ref([
  {
    owner: "张三",
    unit: "1",
  },
]);
let tableInfo = ref({
  title: "",
  dialogVisible: false,
});
// 初始化地图：图层颜色、发光线、标注
let initData = () => {
  for (let key in buildData) {
    viewer.entities.add({
      id: key,
      position: Cesium.Cartesian3.fromDegrees(...buildData[key].center),
      label: {
        text: buildData[key].type,
        fillColor: Cesium.Color.WHITE,
        scale: 0.6,
        showBackground: true,
        backgroundColor: new Cesium.Color(0.165, 0.165, 0.165, 0.8),
      },
      polygon: {
        hierarchy: {
          positions: Cesium.Cartesian3.fromDegreesArray(buildData[key].range),
        },
        material: Cesium.Color.fromCssColorString(
          buildData[key].color
        ).withAlpha(0.1),
      },
      polyline: {
        positions: Cesium.Cartesian3.fromDegreesArray(buildData[key].range),
        width: 10,
        material: new Cesium.PolylineGlowMaterialProperty({
          glowPower: 0.1,
          color: Cesium.Color.fromCssColorString(buildData[key].color),
        }),
        clampToGround: true,
      },
    });
  }
};

let initHandler = () => {
  handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
  // 移动事件---移动到哪个建筑群，建筑群高亮
  handler.setInputAction((evt) => {
    let pick = viewer.scene.pick(evt.endPosition);
    if (pick && pick.id) {
      if (lastColor) {
        lastColor.polygon.material = Cesium.Color.fromCssColorString(
          buildData[lastColor.id].color
        ).withAlpha(0.1);
      }
      pick.id.polygon.material = Cesium.Color.RED.withAlpha(0.3);
      lastColor = pick.id;
    } else {
      if (lastColor) {
        lastColor.polygon.material = Cesium.Color.fromCssColorString(
          buildData[lastColor.id].color
        ).withAlpha(0.1);
        lastColor = null;
      }
    }
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

  // 点击事件
  handler.setInputAction((evt) => {
    let pickFeature = viewer.scene.pick(evt.position);
    if (pickFeature && pickFeature.id) {
      // 判断点击的是多边形还是标注
      if (pickFeature.id.id.includes("Polygon")) {
        // 清除实体与移动事件
        viewer.entities.removeAll();
        handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        let view = buildData[pickFeature.id.id].view; // 获取相机坐标与方向
        let cameraPosition = view.cameraPosition.split(",").map((item) => {
          return Number(item);
        });
        let cameraOrt = view.cameraOrt.split(",").map((item) => {
          return Number(item);
        });
        viewer.camera.flyTo({
          destination: new Cesium.Cartesian3(...cameraPosition),
          orientation: {
            heading: cameraOrt[0],
            pitch: cameraOrt[1],
            roll: cameraOrt[2],
          },
          duration: 3,
        });
        // 添加标注
        buildArea = buildData[pickFeature.id.id];
        buildArea.child.forEach((item, index) => {
          viewer.entities.add({
            id: "label_" + index,
            position: Cesium.Cartesian3.fromDegrees(...item.position),
            label: {
              text: item.name,
              fillColor: Cesium.Color.WHITE,
              scale: 0.5,
              showBackground: true,
              backgroundColor: new Cesium.Color(0.165, 0.165, 0.165, 0.8),
            },
          });
        });
      } else if (pickFeature.id.id.includes("label")) {
        let index = pickFeature.id.id.split("_")[1];
        tableInfo.value.title = buildArea.type;
        tableInfo.value.dialogVisible = true;
      }
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
};

onMounted(() => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4Y2ExYTgwMy1jNmJhLTRjZDEtYjYyYy0xMmMxMTRhMjQ1MWYiLCJpZCI6MTY4OTk3LCJpYXQiOjE2OTU4NjQzNjR9.BXFY_pnDehpEk5TbhtO0sGyr3FI57Hrh38kfK2ntQnc";
  viewer = new Cesium.Viewer("cesiumContainer", {
    infoBox: false,
    selectionIndicator: false,
  });
  load3dtiles(viewer, "/src/assets/b3dm/保利b3dm/tileset.json", (tileset) => {
    viewer.zoomTo(tileset);
    update3dtiles(tileset);
  });
  initData();
  initHandler();
});
</script>

<template>
  <el-dialog v-model="tableInfo.dialogVisible" :title="tableInfo.title">
    <div>
      <el-table :data="ownerInfo">
        <el-table-column prop="owner" label="业主" />
        <el-table-column prop="unit" label="单位" />
      </el-table>
    </div>
  </el-dialog>

  <div
    id="cesiumContainer"
    style="width: 100vw; height: 100vh; overflow: hidden"
  ></div>
</template>
