// 此处封装的是删除mapgis中要素的代码
/*
    要传递的参数：
        1. fids：要删除的要素的fid或oid
        2. service：中地图层信息，数据格式为对象：name为图层名称、layerId为图层索引；
        3. docLayer：中地图层的变量名；
*/
function delFeature({
    fids,
    service,
    docLayer
}) {
    var deleteService = new Zondy.Service.EditDocFeature(service.name, service.layerId, {

    });
    deleteService.deletes(fids, onPloySuccess(docLayer));
}
function onPloySuccess(docLayer) {
    return function (data) {
        if (data.succeed) {
            alert("删除成功！");
            docLayer.refresh();
        } else {
            alert("删除失败！");
        }
    }

}