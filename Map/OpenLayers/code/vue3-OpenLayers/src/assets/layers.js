// 该文件用于存储地图的底图图层

// 引入OpenLayers资源
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";

// 高德矢量图层
export const gaode_vector = new TileLayer({
  source: new XYZ({
    title: "高德地图-矢量图层",
    url: "https://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}",
    wrapX: false, // 指定地图是否再水平方向上循环显示
    crossOrigin: "Anonymous", // 地图下载要考虑跨域问题
  }),
});

// 高德影像图层
export const gaode_image = new TileLayer({
  source: new XYZ({
    title: "高德地图-影像图层",
    url: "http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=6&x={x}&y={y}&z={z}",
    wrapX: false, // 指定地图是否再水平方向上循环显示
    crossOrigin: "Anonymous", // 地图下载要考虑跨域问题
  }),
});

// arcgis街道图
export const arcgis_street = new TileLayer({
    source: new XYZ({
      title: "arcgis街道图",
      url: "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
      wrapX: false, // 指定地图是否再水平方向上循环显示
      crossOrigin: "Anonymous", // 地图下载要考虑跨域问题
    }),
  });

// arcgis灰色图
export const arcgis_grey = new TileLayer({
    source: new XYZ({
      title: "arcgis灰色图",
      url: "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
      wrapX: false, // 指定地图是否再水平方向上循环显示
      crossOrigin: "Anonymous", // 地图下载要考虑跨域问题
    }),
  });

// arcgis深蓝图
export const arcgis_deepBlue = new TileLayer({
    source: new XYZ({
      title: "arcgis深蓝图",
      url: "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
      wrapX: false, // 指定地图是否再水平方向上循环显示
      crossOrigin: "Anonymous", // 地图下载要考虑跨域问题
    }),
  });

// mapbox黑色底图
export const mapbox_black = new TileLayer({
  source: new XYZ({
    title: "mapbox黑色底图",
    url: "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
    wrapX: false, // 指定地图是否再水平方向上循环显示
    crossOrigin: "Anonymous", // 地图下载要考虑跨域问题
  }),
});
