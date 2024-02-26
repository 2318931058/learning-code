// 此文件封装的是交互式画笔
/*
    需要传递的参数包括：
        1. 画笔类型：Point、LineString、Polygon、Circle、Square、Box
        2. 数据源
*/

function createDraw({ type, source }) {
  let geometryFunction = null;
  let maxPoints = null;
  if (type == "Square") {
    type = "Circle";
    geometryFunction = ol.interaction.Draw.createRegularPolygon(4);
  }
  if (type == "Box") {
    type = "LineString";
    maxPoints = 2;
    geometryFunction = function (coordinates, geometry) {
      if (!geometry) {
        //多边形
        geometry = new ol.geom.Polygon(null);
      }
      var start = coordinates[0];
      var end = coordinates[1];
      geometry.setCoordinates([
        [start, [start[0], end[1]], end, [end[0], start[1]], start],
      ]);
      return geometry;
    };
  }
  let draw = new ol.interaction.Draw({
    type,
    source,
    geometryFunction,
    maxPoints,
  });

  return draw;
}
