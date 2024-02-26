// 此处封装的是按图层查询查询的相关代码
/* 
    要传递的参数：
        1. service：要查询的地图文档的信息，数据格式为对象：地图文档名称name和点要素所在图层索引号layerId（可通过数组设置多个）
        2. success：查询成功所执行的回调
*/
class Query {
    static queryByLayer({
        service,
        success
    }) {
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
            resultFormat: "json",
            struct: queryStruct,
            rule: rule
        });
        queryParam.pageIndex = 0;
        queryParam.recordNumber = 1000;
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