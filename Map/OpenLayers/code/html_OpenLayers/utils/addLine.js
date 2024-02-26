// 此处封装的是向中地数据库添加线要素的代码
/* 
    要传递的参数为：
        1. position：要添加线要素的起始坐标，数据格式为二维数组：[[lng,lat],[lng,lat]]
        2. attr：要添加的点坐标的属性信息，数据格式为数组：name表示字段名称、type表示字段类型、value表示字段的值；
        3. service：中地图层信息，数据格式为对象：name为图层名称、layerId为图层索引；
        4. docLayer：中地图层的变量名；
*/
class addLine {
  static add({ position, attr, service, docLayer }) {
    var pointObj = position.map((item) => {
      return new Zondy.Object.Point2D(item[0], item[1]);
    });
    var gArc = new Zondy.Object.Arc(pointObj);
    var gAnyLine = new Zondy.Object.AnyLine([gArc]);
    var gline = new Zondy.Object.GLine(gAnyLine);
    var fGeom = new Zondy.Object.FeatureGeometry({ LinGeom: [gline] });
    var clineInfo = new Zondy.Object.CLineInfo({
      Color: 1, //线的颜色
      LinStyleID: 0, //线型号
      LinStyleID2: 18, //线型号
      LinWidth: 0.05, //线宽
      Xscale: 10,
      Yscale: 10,
    });
    var graphicInfo = new Zondy.Object.WebGraphicsInfo({
      InfoType: 2,
      LinInfo: clineInfo,
    });
    var attValue = attr.map((item) => item.value);
    var newFeature = new Zondy.Object.Feature({
      fGeom: fGeom,
      GraphicInfo: graphicInfo,
      AttValue: attValue,
    });
    newFeature.setFType(2);
    var featureSet = new Zondy.Object.FeatureSet();
    var fldNumber = attr.length; //属性个数
    var fldName = attr.map((item) => item.name);
    var fldType = attr.map((item) => item.type);
    var cAttStruct = new Zondy.Object.CAttStruct({
      FldName: fldName,
      FldNumber: fldNumber,
      FldType: fldType,
    });
    featureSet.AttStruct = cAttStruct;
    featureSet.addFeature(newFeature);
    var editDocFeature = new Zondy.Service.EditDocFeature(
      service.name,
      service.layerId,
      {}
    );
    editDocFeature.add(featureSet, this.onLineSuccess(docLayer));
  }
  static onLineSuccess(docLayer) {
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
