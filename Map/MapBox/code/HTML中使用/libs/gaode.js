// 此文件用于放置高德底图
var gaode = {
    "version": 8,
    "sources": {
          "raster-tiles": {
                "type": "raster",
                "tiles": ["http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"],
                "tileSize": 256
          }
    },
    "layers": [{
          "id": "simple-tiles",
          "type": "raster",
          "source": "raster-tiles",
          "minzoom": 0,
          "maxzoom": 22
    }]
}