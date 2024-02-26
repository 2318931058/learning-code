// 此处封装的是向中地数据库添加点要素的代码
/* 
    要传递的参数为：
        1. position：要添加点要素的坐标，数据格式为数组；
        2. attr：要添加的点坐标的属性信息，数据格式为数组：name表示字段名称、type表示字段类型、value表示字段的值；
        3. service：中地图层信息，数据格式为对象：name为图层名称、layerId为图层索引；
        4. docLayer：中地图层的变量名；
*/
class addPoint {
    static add({
        position,
        attr,
        service,
        docLayer
    }) {
        var gpoint = new Zondy.Object.GPoint(position[0], position[1]);//createPoint();
        var fGeom = new Zondy.Object.FeatureGeometry({ PntGeom: [gpoint] });
        var pointInfo = new Zondy.Object.CPointInfo({
            Angle: 0,
            Color: 11,  //子图颜色
            Space: 0,
            SymHeight: 5,  //高度
            SymID: 31,  //子图号
            SymWidth: 5 //宽度
        });
        var webGraphicInfo = new Zondy.Object.WebGraphicsInfo({
            InfoType: 1,
            PntInfo: pointInfo
        });
        var attValue = attr.map(item => item.value)
        var feature = new Zondy.Object.Feature({
            fGeom: fGeom,
            GraphicInfo: webGraphicInfo,
            AttValue: attValue
        });
        feature.setFType(1);
        var featureSet = new Zondy.Object.FeatureSet();
        var cAttStruct = new Zondy.Object.CAttStruct({
            FldName: attr.map(item => item.name),
            FldNumber: attr.length,
            FldType: attr.map(item => item.type)
        });
        featureSet.AttStruct = cAttStruct;
        featureSet.addFeature(feature);
        var editService = new Zondy.Service.EditDocFeature(service.name, service.layerId, {});
        editService.add(featureSet, this.onPntSuccess(docLayer));
    }
    static onPntSuccess(docLayer) {
        return function (data) {
            if (data.succeed) {
                alert("添加点要素成功！");
                docLayer.refresh();
            } else {
                alert("添加点要素失败！");
            }
        }
    }
}