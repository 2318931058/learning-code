// 此处封装的是向中地数据库添加线要素的代码
/* 
    要传递的参数为：
        1. position：要添加线要素的起始坐标，数据格式为二维数组：[[lng,lat],[lng,lat],···]
        2. attr：要添加的点坐标的属性信息，数据格式为数组：name表示字段名称、type表示字段类型、value表示字段的值；
        3. service：中地图层信息，数据格式为对象：name为图层名称、layerId为图层索引；
        4. docLayer：中地图层的变量名；
*/
class addArea {
  static add({ position, attr, service, docLayer }) {
    var pointObj = position.map((item) => {
      return new Zondy.Object.Point2D(item[0], item[1]);
    });
    var gArc = new Zondy.Object.Arc(pointObj);
    var gAnyLine = new Zondy.Object.AnyLine([gArc]);
    var gRegion = new Zondy.Object.GRegion([gAnyLine]);
    var fGeom = new Zondy.Object.FeatureGeometry({ RegGeom: [gRegion] });
    var cRegionInfo = new Zondy.Object.CRegionInfo({
      EndColor: 1,
      FillColor: 11, // 填充色
      FillMode: 0,
      OutPenWidth: 1,
      OverMethod: 0,
      PatAngle: 1,
      PatColor: 1,
      PatHeight: 1,
      PatID: 0, // 填充是图案
      PatWidth: 1,
    });
    var graphicInfo = new Zondy.Object.WebGraphicsInfo({
      InfoType: 3,
      RegInfo: cRegionInfo,
    });
    var attValue = attr.map((item) => item.value);
    var newFeature = new Zondy.Object.Feature({
      AttValue: attValue,
      fGeom: fGeom,
      GraphicInfo: graphicInfo,
    });
    newFeature.setFType(3);
    var featureSet = new Zondy.Object.FeatureSet();
    var fldNumber = attr.length;
    var fldType = attr.map((item) => item.type);
    var fldName = attr.map((item) => item.name);
    var cAttValue = new Zondy.Object.CAttStruct({
      FldNumber: fldNumber,
      FldType: fldType,
      FldName: fldName,
    });
    featureSet.AttStruct = cAttValue;
    featureSet.addFeature(newFeature);
    var editDocFeature = new Zondy.Service.EditDocFeature(
      service.name,
      service.layerId,
      {}
    );
    editDocFeature.add(featureSet, this.onPloySuccess(docLayer));
  }
  static onPloySuccess(docLayer) {
    return function (data) {
      if (data.succeed) {
        alert("添加要素成功！");
        docLayer.refresh();
      } else {
        alert("添加要素失败！");
      }
    };
  }
}
