// 此处封装的是点要素查询的相关代码
/* 
    要传递的参数：
        1. position：要查询的点坐标的位置，数据格式为数组[lat,lng]
        2. service：要查询的地图文档的信息，数据格式为对象：地图文档名称name和点要素所在图层索引号layerId
        3. success：查询成功所执行的回调
*/

/**
 * @param {Function} success 成功的回调
 */
class Query {
    static queryByPoint({
        position,
        service,
        success
    }) {
        var pointObj = new Zondy.Object.Point2D(position[0], position[1]);
        pointObj.nearDis = 2;
        var queryStruct = new Zondy.Service.QueryFeatureStruct();
        queryStruct.IncludeGeometry = true;
        queryStruct.IncludeAttribute = true;
        queryStruct.IncludeWebGraphic = false;
        var rule = new Zondy.Service.QueryFeatureRule({
            EnableDisplayCondition: false,
            MustInside: false,
            CompareRectOnly: false,
            Intersect: true
        });
        var queryParam = new Zondy.Service.QueryParameter({
            geometry: pointObj,
            resultFormat: "json",
            struct: queryStruct,
            rule: rule
        });
        var queryService = new Zondy.Service.QueryDocFeature(queryParam, service.name, service.layerId, {

        });
        queryService.query(success);
    }
    static querySuccess(callback) {
        return function (data) {
            var format = new Zondy.Format.PolygonJSON();
            var features = format.read(data);
            callback(features);
        }
    }
}