// 此处封装获取画笔坐标的代码
// 调用方法参考：36-使用画笔向mapgis中添加点要素
function getFeatureGeom(feature) {
    return feature.getGeometry().getCoordinates()
}