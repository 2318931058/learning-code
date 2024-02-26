// 此处封装的是拉框查询的相关代码
/* 
    要传递的参数：
        1. geometry：画笔拉框的坐标
        2. service：要查询的地图文档的信息，数据格式为对象：地图文档名称name和点要素所在图层索引号layerId
        3. success：查询成功所执行的回调
*/
class Query {
    static queryByGeom({
        geometry,
        service,
        success
    }) {
        var queryStruct = new Zondy.Service.QueryFeatureStruct();
        queryStruct.IncludeGeometry = true;
        queryStruct.IncludeAttribute = true;
        queryStruct.IncludeWebGraphic = false;
        var geomObj = new Zondy.Object.Polygon();
        geomObj.setByOL(geometry);
        var rule = new Zondy.Service.QueryFeatureRule({
            EnableDisplayCondition: false,
            MustInside: false,
            CompareRectOnly: false,
            Intersect: true
        });
        var queryParam = new Zondy.Service.QueryParameter({
            geometry: geomObj,
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