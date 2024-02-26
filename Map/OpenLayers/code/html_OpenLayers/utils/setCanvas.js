// 此文件封装的是canvas与openlayer相结合的动画圆
// 需要传递的参数是画布的大小size（建议传入30~60）和地图名称map
function setCanvasStyle(map, size) {
  let canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  let radius = size / 4;
  let isMagnify = true;
  function draw() {
    ctx.clearRect(0, 0, size, size);
    ctx.beginPath(); // 外圈动画圆
    ctx.arc(size / 2, size / 2, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.beginPath(); // 内圈静止圆
    ctx.arc(size / 2, size / 2, 8, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "green";
    ctx.fill();
    if (radius >= 15) {
      isMagnify = false;
    }
    if (radius < 5) {
      isMagnify = true;
    }
    if (isMagnify) {
      radius++;
    } else {
      radius--;
    }
    setTimeout(draw, 80);
    map.render();
  }
  draw();
  //   设置canvas元素为openlayers的样式
  let style = new ol.style.Style({
    image: new ol.style.Icon({
      img: canvas,
      imgSize: [canvas.width, canvas.height],
    }),
  });
  return style;
}
