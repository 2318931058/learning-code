// 此文件封装的是通过自定义name属性获取地图上指定name的图层---需要给图层自定义name属性；
// 要传递的参数是  地图名 && name值
function getLayerByName(map, name) {
    /* 1、获取所有图层 */
    var layers = map.getLayers().array_
    /* 2、获对应name  image值的图层  find */
    let obj = layers.find(item => {
        return item.get("name") == name
    })
    return obj
}