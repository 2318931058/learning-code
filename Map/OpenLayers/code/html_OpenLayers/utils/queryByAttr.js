// 此处封装的是按属性查询的相关代码
/* 
    要传递的参数：
        1. keyword：搜索关键字
        2. service：要查询的地图文档的信息，数据格式为对象：地图文档名称name和点要素所在图层索引号layerId
        3. success：查询成功所执行的回调
*/
class Query {
    static queryByAttr({
        keyword,
        service,
        success
    }) {
        var queryStruct = new Zondy.Service.QueryFeatureStruct();
        queryStruct.IncludeGeometry = true;
        queryStruct.IncludeAttribute = true;
        queryStruct.IncludeWebGraphic = false;
        var queryParam = new Zondy.Service.QueryParameter({
            resultFormat: "json",
            struct: queryStruct
        });
        queryParam.pageIndex = 0;
        queryParam.recordNumber = 20;
        //queryParam.where = name;  sql
        // 获取name值包含xxx的要素
        queryParam.where = `name like '%${keyword}%'`
        var queryService = new Zondy.Service.QueryDocFeature(queryParam, service.name, service.layerId, {

        });
        queryService.query(success);
    }
    static querySuccess(callback) {
        return function (data) {
            var format = new Zondy.Format.PolygonJSON();
            //将MapGIS要素JSON反序列化为ol.Feature类型数组
            var features = format.read(data);
            callback(features);
        }
    }
}