# CSS

## 1. 简介

### 1.1 引入方式

1. 外部引入

   ```html
   <head>
   	<link rel='stylesheet' href='url'>
   </head>

2. 内部引入

   ```html
   <head>
       <style>
           选择器{属性名:属性值}
       </style>
   </head>
   ```

3. 行内样式

   ```html
   <body>
       <标签名 style='属性名:属性值'></标签名>
   </body>
   ```

### 1.2 常见单位

1. px：像素值；
2. %：百分比；
3. em：相对于浏览器默认字体大小的单位；
4. rem：相对于html的font-size值的大小的单位；
5. vw/vh：相对于屏幕宽/高度的尺寸，但二者不可同时使用；
6. vmin/vmax：取当前屏幕的宽/高度值中较小/大的一个，多用于移动端竖屏与横屏的切换；

### 1.3 显示模式

> 显示模式：也叫标签（元素）的显示方式。其作用是布局网页的时候，根据标签的显示模式选择合适的标签摆放内容。

1. 类型

   | 名称       | 特征                                                     |
   | ---------- | -------------------------------------------------------- |
   | 块级元素   | 独占一行，默认宽度是父级的100%，添加宽高属性生效         |
   | 行内元素   | 一行可以显示多个，设置宽高属性不生效，宽高尺寸由内容撑开 |
   | 行内块元素 | 一行显示多个，设置宽高属性生效，宽高尺寸也可以由内容撑开 |

2. 转换

   | 名称       | 属性                    |
   | ---------- | ----------------------- |
   | 转为块级   | `display:block;`        |
   | 转为行内   | `display:inline;`       |
   | 转为行内块 | `display:inline-block;` |

### 1.4 CSS特性

1. 继承性：子级会默认继承父级的**文字控制属性**。但若是标签有默认文字样式会继承失败，如a标签颜色等。

2. 层叠性：相同的属性会覆盖，不同的属性会相互叠加。**选择器类型相同则遵循层叠性，否则按选择器优先级判断**。

3. 优先级：也叫权重，当一个标签使用了多种选择器时，基于不同种类的选择器的匹配规则。如果是复合选择器，则会按照**（行内样式，id选择器个数，类选择器个数，标签选择器个数）**的公式进行叠加运算，即从左到右依次比较个数，同一级个数多的优先级高。若个数相同，则向后比较。但要注意!important权重最高，继承权重最低。

   ```html
   <body>
   	<div id="box1" class="c1">
           <div id="box2" class="c2">
               <div id="box3" class="c3">
                   这行文本是什么颜色的？
               </div>
           </div>
       </div>
   </body>
   ```

   ```css
   <style>
       /* (0, 0, 2, 1) */
       .c1 .c2 div { 
           color: blue;
       }
   
       /* (0, 1, 0, 1) */
       div #box3 {
           color:green;
       }
   
       /* (0, 1, 1, 0) */
       #box1 .c3 {
           color:orange;
       }
   </style>
   ```

### 1.5 媒体查询

> 媒体查询可以针对不同的屏幕尺寸，使用不同的css样式，其基本语法：`@media mediatype key (media feature) {css代码}`

1. `mediatype`：媒体类型，指将不同的终端设备划分成不同的类型

   - `all`用于所有设备；

   - `print`用于打印机和打印预览；

   - `screen`用于电脑屏幕、平板电脑和智能手机等；

2. `key`：关键字，即将媒体类型或多个媒体特性连接在一起作为媒体查询的条件，取值有and、not和only；

3. `media feature`：媒体特性，指根据不同媒体类型的媒体特性设置不同的展示风格：

   - `width`：定义输出设备中页面可见区域的宽度；

   - `min-width`：定义输出设备中页面最小可见区域宽度；

   - `max-width`：定义输出设备中页面最大可见区域宽度；

   - `min-height`：定义输出设备中页面最小可见区域高度；

   - `max-height`：定义输出设备中页面最大可见区域高度；


> 若要针对不同的屏幕尺寸引入不同的css文件，可以使用
>
> ```html
> <head>
>     <link rel="stylesheet" href='url' media="mediatype key (media feature)">
> </head>
> ```

### 1.6 适配方案

> rem适配

```javascript
// flexible.js
(function flexible (window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10			可以设置划分份数
  function setRemUnit () {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))
```

```css
<!-- html文件中引入js文件 -->
<script src="../assets/js/rem移动端适配.js"></script>
```

```css
/* css文件中进行配置，如： */
/* 
  1. 安装cssrem扩展插件：自动将px转换为rem
  2. 设置-> Cssrem:Font Size, 根据设计图尺寸与视图分割比设置相关数值
*/

body {
  /* min-width和max-width属性可设置body的最小、最大尺寸 */
  min-width: 320px;
  max-width: 750px;
  /* 以750px的设计稿为例：js文件将其划分为10份，每份就是75px。则在尺寸为750px的屏幕中，宽度应设置为10rem */
  width: 10rem;
  margin: 0 auto;
  border: 1px solid black;
  background-color: skyblue;
}
```

### 1.7 预处理器

> less

html中使用less需要

	1. 安装node.js，然后在终端中输入node -v检查node的版本；
	1. 使用less： npm i -g less安装less，然后在终端中输入lessc -v检查less的版本；
	1. 安装Ease LESS扩展插件；

```less
// 1. less中变量的使用：必须以@为前缀、不能包含特殊字符、不能以数字开头、大小写敏感······
// 1-1. 定义变量：@变量名 : 值;
@my-color : pink;
@font22 : 22px;

// 1-2. 使用变量
div {
  font-size: @font22;
  background-color: @my-color;
}



// 2. less中的嵌套
.box1 {
  width: 200px;
  height: 200px;
  background-color: brown;

  // 若是后代选择器，可以直接将子元素的样式写道父元素里面
  a {
    text-decoration: none;

    // 若是交集、伪类、伪元素选择器，我们内存选择器要在前面添加&符号
    &:hover {
      color: red;
    }
  }

}




// 3. less中的运算：参与运算的双方，若只有一个单位，则最终单位就是该单位；若有两个不同的单位，则以第一个单位为准；
@baseFont : 10px;
.box2 {
  width: @baseFont * 20;
  height: @baseFont + 180;
  background-color: purple;
}
```

### 1.8 颜色表示

1. 颜色名称：red、green、blue、······

2. HEX表示法：#eee、#fff、#ff2d51、······

3. RGB表示法：rgb(255,0,0)、rgb(0,255,0)、······

4. RGBA表示法：rgba(255, 0, 0,.5)、······

   > A表示透明度，0表示完全透明、1表示完全不透明！

## 2. 图标

### 2.1 精灵图 

> 精灵图指把网页中一些背景图片整合到一张图片文件中，再通过`background-position` 精确的定位出背景图片的位置。使用步骤如下：

1. 创建盒子，盒子尺寸与小图尺寸相同。
2. 设置盒子背景图为精灵图
3. 添加 `background-position` 属性，改变背景图位置
   - 使用 PxCook 测量小图片左上角坐标
   - 取负数坐标为 `background-position 属性值`（向左上移动图片位置）

### 2.2 字体图标

1. 登录在线地址https://www.iconfont.cn/并进行登录
2. 素材库-->官方图标库-->进入图标库-->选图标加入购物车-->购物车，添加至项目-->确定-->`font class`下载至本地
3. 使用link引入字体样式表`iconfont.css`
4. 使用浏览器打开`demo_index.html`查看字体类名
5. 标签使用字体图标类名，如`\<span class='iconfont icon-字体类名'></span>`

### 2.3 Favicon图标

> favicon图标就是网页图标，出现在浏览器标题栏，用于增加网站辨识度。其使用步骤如下：
>

1. 找一张.ico结尾的图片更名为favicon.ico后放在网站的根目录里面

2. 使用link标签引入

   ```html
   <head>
   	<link rel="shortcut icon" href="url" type="image/x-icon">
   </head>
   ```

## 3. 选择器

> css优先级：通配符选择器 < 标签选择器 < 类选择器 < id选择器 < 行内样式 < !important，其原则是标签选中的范围越大，优先级越低。

1. 标签选择器：使用标签名作为选择器，如p标签等，其缺点是无法差异化同名标签的显示效果。

2. 类选择器：根据对应类名查找标签，其使用步骤为：

   - 定义类选择器	`.类名{属性名:属性值}`
   - 使用类选择器：标签添加    `class='类名'`

3. id选择器：根据id值查找对应标签，但同一个id选择器在同一个页面只能使用一次，其使用步骤为：

   - 定义id选择器    `#id名称{属性名:属性值}`
   - 使用id选择器：标签添加    `id='id名称'`

4. 通配符选择器：`*{属性名:属性值}`可以查找页面所有标签，设置相同样式，一般用于**清除标签的默认样式**。

5. 后代选择器：选中某元素的后代元素，写法是    `父 后{属性名:属性值}`

6. 子代选择器：选中某元素最近的子代元素，写法是    `父 子{属性名:属性值}`

7. 并集选择器：选中多组标签设置相同样式，写法是    `选择器1, 选择器2,···,选择器n{属性名:属性值}`

8. 交集选择器：选中同时满足多个条件的元素（若有标签选择器，则标签选择器必须写在最前面）。

     ```css
     选择器1选择器2···选择器n {属性名:属性值}
     ```

9. 伪类选择器：伪类表示状态，选中元素某个状态设置样式

   | 状态         | 属性            |
   | ------------ | --------------- |
   | 鼠标悬停     | `选择器:hover`  |
   | 鼠标点击     | `选择器:active` |
   | 超链接访问前 | `a:link`        |
   | 超链接访问后 | `a:visited`     |
   | 输入框聚焦   | `input:focus`   |

10. 结构伪类选择器：根据元素的结构关系选择元素

    | 伪类                             | 属性           |
    | -------------------------------- | -------------- |
    | 查找第一个E元素                  | E:first-child  |
    | 查找最后一个E元素                | E:last-child   |
    | 查找第n个E元素（n取值从 0 开始） | E:nth-child(n) |

    | 查找第几个（n的取值） | 公式         |
    | --------------------- | ------------ |
    | 偶数标签              | 2n           |
    | 奇数标签              | 2n+1 或 2n-1 |
    | 第x以后的标签         | n+x          |
    | 第x以前的标签         | -n+x         |
    | x的倍数的标签         | xn           |

11. 伪元素选择器：创建虚拟元素（伪元素），用来摆放装饰性的内容。

    | 伪元素                          | 属性          |
    | ------------------------------- | ------------- |
    | 在E元素里面最前面添加一个伪元素 | E::before     |
    | 在E元素里面最后面添加一个伪元素 | E::after      |
    | 选中的是placeholder属性文字样式 | ::placeholder |
    | 选择表单元素中已选中状态的标签  | ::checked     |

    > 伪元素默认是行内显示样式，其权重与标签选择器相同，且==必须添加`content`属性，若没有内容，就`content:''`==。

## 4. 盒子模型

1. 组成部分：内容区域`content` + 内边距`padding` + 外边距`margin` + 边框`border`

   | 组成部分      | 详解                                                         |
   | ------------- | ------------------------------------------------------------ |
   | 内边距padding | padding属性可用于设置内容与盒子边缘之间的距离，按‘上右下左’的顺序依次赋值。若当前方向没有数值则与对面取值相同。若要设置单方向内边距，可使用padding-方位名词，如 padding-top等。 |
   | 外边距margin  | margin属性可用于设置两个盒子之间的距离，按‘上右下左’的顺序依次赋值。若当前方向没有数值则与对面取值相同。若要设置单方向外边距，可使用margin-方位名词，如 margin-top等。常用功能有版心居中marign:0 auto; |
   | 边框border    | border:宽度 样式 颜色; 若要设置单方向边框，可使用border-方位名词，如 border-top等。线条样式有solid、dotted和dashed三种。如：`选择器 {border:1px solid black;}` |

2. 尺寸计算：盒子模型尺寸的计算**不包含外边距**。默认情况下，盒子的尺寸 = 内容尺寸 + 边框尺寸 + 内边距尺寸，但在给盒子添加边框或内边距时会撑大盒子，故往往会给盒子添加**`box-sizing:border-box`;**属性。

3. 元素溢出：`overflow`属性可以控制溢出元素的内容的显示方式。

   | 显示方式                               | 取值   |
   | -------------------------------------- | ------ |
   | 溢出隐藏                               | hidden |
   | 溢出滚动（无论是否溢出，都显示滚动条） | scroll |
   | 表示溢出滚动（溢出才显示滚动条）       | auto   |

4. 外边距可能会出现的现象：

   - 合并现象：垂直排列的并列元素，上下`margin`会合并，浏览器会自动取margin的较大值生效。
   - 塌陷问题：父子级的元素，子级的元素添加上外边距会产生塌陷问题，导致父级一起向下移动。可通过以下方式解决：

   | 塌陷问题解决方法                                          |
   | :-------------------------------------------------------- |
   | 方式一：取消子级的margin，转而给父级添加padding以实现效果 |
   | 方式二：父级设置overflow:hidden;                          |
   | 方式三：父级设置border-top;                               |

   - 行内元素的内外边距问题：行内元素添加`margin`和`padding`，无法改变元素的垂直位置，可以通过在margin`和`padding`后再添加`line-height`属性解决该问题。

5. 圆角边框：`border-radius`属性可以设置元素的外边框为圆角。语法为`border-radius:左上 右上 右下 左下;`若当前角没有数值则与对角值相同。常用形状有正圆`border-radius:50%;`  胶囊形状`border-radius:长方形宽度的一半;`

6. 盒子阴影：`box-shadow`属性可以给元素设置阴影效果。语法为：`box-shadow: x轴偏移量 y轴偏移量 模糊半径 扩散半径 颜色 内外阴影;`内外阴影默认是外阴影（外阴影可省略），内阴影需添加`inset`，如`box-shadow:2px 5px 1px 0 rgba(0,0,0,.5) inset;`

   > x轴偏移量和y轴偏移量必须有！

## 5. 常用属性

### 5.1 文本属性

1. line-height的属性值若无单位，则表示行距为font-size属性值的倍数。
2. 行高一般可以用来设置**单行文本**垂直居中：行高属性值等于盒子高度属性值。
3. font-family属性值可以书写多个字体名，各个字体名用逗号隔开，最后设置一个字体族名，执行顺序是从左向右依次查找。如font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
4. vertical-align是**行内块元素、行内元素和表格单元格**的垂直方向的对齐方式。

| 属性名          | 属性值                                  | 说明     | 示例                         |
| --------------- | --------------------------------------- | -------- | ---------------------------- |
| color           | 颜色名称、十六进制、rgb、rgba           | 字体颜色 | color:rgba(0,50,0,0.5);      |
| font-size       | 数字+单位                               | 字体大小 | font-size:22px;              |
| font-weight     | 100~700、normal、bold                   | 字体粗细 | font-weight:700;             |
| font-style      | normal、italic                          | 字体倾斜 | font-style:italic;           |
| line-height     | 数字+单位                               | 行高     | line-height:30px             |
| font-family     | 字体名，如楷体                          | 字体类型 | font-family: 楷体;           |
| font            | font:是否倾斜 是否加粗 字号/行高 字体   | 复合属性 | font:italic 700 30px/2 楷体; |
| text-indent     | 数字+单位                               | 文本缩进 | text-indent:2em;             |
| text-align      | left、center、right                     | 对齐方式 | text-align:center;           |
| vertical-align  | middle、baseline、top、bottom           | 对齐方式 | vertical-align:middle;       |
| text-decoration | none、underline、line-through、overline | 修饰线   | text-decoration:none;        |

### 5.2 背景属性

1. background-position数字+px写法：正负均可，水平方向正数为右，垂直方向正数为上；关键字写法若只写一个关键字则默认表示水平方向，同时垂直方向默认为居中。
2. background-size中的conver会使图片完全覆盖盒子，但可能导致图片显示不全。使用contain会在图片的宽|高与盒子尺寸相等时停止缩放，可能会导致盒子有留白。若使用100%，则图片的宽度跟盒子宽度一样，图片高度按图片比例等比缩放。**若图片比例与盒子比例相同，则conver和contain效果相同。**

| 属性名                | 属性值                                    | 说明       | 示例                           |
| --------------------- | ----------------------------------------- | ---------- | ------------------------------ |
| background-color      | 颜色名称、十六进制、rgb、rgba             | 背景颜色   | background-color:transparent;  |
| background-image      | url(背景图url)                            | 背景图片   | background-image:url();        |
| background-repeat     | no-repeat、repeat、repeat-x、repeat-y     | 平铺方式   | background-repeat:no-repeat;   |
| background-position   | left\|right\|center\|top\|bottom、数字+px | 背景图位置 | background-position：center;   |
| background-size       | cover\|contain\|百分比\|数字+单位         | 背景图缩放 | background-size：contain;      |
| background-attachment | fixed                                     | 背景图固定 | background-attachment:fixed;   |
| background            | 背景色 背景图 平铺方式 位置/缩放 固定     | 复合属性   | 空格隔开各个属性值，不区分顺序 |

### 5.3 盒子属性

| 属性名        | 属性值          | 说明                        | 示例                                     |
| ------------- | --------------- | --------------------------- | ---------------------------------------- |
| width         | 数字+单位       | 宽度                        | width:100px;                             |
| height        | 数字+单位       | 高度                        | height:100px;                            |
| border        | 粗细 样式 颜色  | 边框，solid、dashed、dotted | border:1px solid black;                  |
| padding       | 数字+px         | 内边距                      | padding:10px;                            |
| margin        | 数字+px         | 外边距                      | margin:10px;                             |
| border-radius | 数字+px\|百分比 | 圆角边框                    | border-radius:50%                        |
| box-shadow    | 见盒子模型处    | 盒子阴影                    | box-shadow:2px 5px 1px 0 rgba(0,0,0,.5); |
| box-sizing    | border-box      | 自动内减                    | box-sizing:border-box;                   |

### 5.4 修饰属性

| 属性名     | 属性值                                             | 说明     | 示例               |
| ---------- | -------------------------------------------------- | -------- | ------------------ |
| transition | 过渡的属性all 花费时间s                            | 过渡     | transition:all 1s; |
| opacity    | 0~1（0完全透明，1完全不透明）                      | 透明度   | opacity:0.5;       |
| cursor     | 默认default、小手pointer、工字型text、十字光标move | 光标类型 | cursor:pointer;    |

## 6. 布局方式

### 6.1 浮动

> `float`属性可以让块元素水平排列，取值有左对齐left和右对齐right。

1. 特点：

   - 浮动后的盒子顶对齐。

   - 浮动后的盒子具有行内块的特点。

   - 父级宽度不够，浮动的子级会换行。

   - 浮动后的盒子脱标，不占用标准流的位置。

     > 标准流也叫文档流，指标签在页面中默认的排布规则，例如：块元素独占一行，行内元素可以一行显示多个。

2. 清除浮动：浮动元素会脱标，如果父级没有高度，子级浮动后无法撑开父级高度（可能导致页面布局错乱）。

   - 额外标签法：在父元素内部的最后添加一个块级元素，设置`css`属性 `clear:both;`

   - 单伪元素法

   - 双伪元素法：既可以解决外边距塌陷问题，也可以用于清除浮动。

   - `overflow`：父元素添加`css`属性 `overflow:hidden;`

     ```css
     <style>
         选择器{
         	/* 单伪元素法：给父元素添加clearfix类名，然后添加以下代码 */
             .clearfix::after{
                 content:'';
                 display:block;
                 clear:both;
             }
     
             /* 双伪元素法：给父元素添加clearfix类名，然后添加以下代码 */
             .clearfix::before, .clearfix::after{
                 content:'';
                 display:table;
             }
             .clearfix::after{
                 clear:both;
             }
         } 
     </style>
     ```

### 6.2 定位

> `position`属性用于改变盒子在网页中的位置，需要先确定定位模式（`absolute、reative、fixed`），然后设置边偏移，如`left:0;`

1. 相对定位：`position:relative;`的特点

   - 边偏移是相对于自己原来的位置进行移动。
   - 定位后元素的显示模式不发生改变。
   - 该定位模式不脱标，元素依然占用自己原来的位置。

2. 绝对定位：`position:absolute;`的特点：

   - 边偏移是相对最近的已经定位的祖先元素进行移动。若祖先元素都未定位，则相对浏览器可视区进行移动。
   - 该定位模式脱标，不占用自己原来的位置。
   - 定位后元素的显示模式具备行内块特点。

3. 固定定位`position:fixed;`的特点

   - 边偏移是相对浏览器窗口改变位置，页面滚动后位置不变。
   - 该定位模式脱标，不占用自己原来的位置。
   - 定位后元素的显示模式具备行内块特点。

4. 堆叠层级`z-index`：设置定位元素的层级顺序，改变定位元素的显示顺序，属性值默认为零，取值越大，层级越高。

5. 常用功能

   - 居中

     ```css
     <style>
         选择器{
         	/* 居中 */
             position:absolute;
             left:50%;
             top:50%;
             transform:translate(-50%, -50%);
             /* transform:translate(-50%, -50%);可以换做 */
             margin-left:-50%;
             margin-top:-50%;
         } 
     </style>
     ```

### 6.3 弹性布局

> 给容器设置弹性布局`display:flex;`后，该容器内的元素会自动挤压或拉伸排列

1. 主轴对齐方式（默认水平方向）`justify-content`

   | 属性值           | 特征                                           |
   | ---------------- | ---------------------------------------------- |
   | `flex-start;`    | `从起点开始依次排列（默认值）`                 |
   | `flex-end;`      | 从终点开始依次排列                             |
   | `center;`        | 沿主轴居中排列                                 |
   | `space-between;` | 沿主轴均匀排列，空白间距均匀分布在弹性盒子之间 |
   | `space-around;`  | 沿主轴均匀排列，空白间距均匀分布在弹性盒子两侧 |
   | `space-evenly;`  | 沿主轴均匀排列，弹性盒子与容器之间间距相等     |

2. 侧轴对齐方式（默认垂直方向）：`align-items`(给弹性容器，控制所有弹性盒子)、`align-self`（给弹性盒子，控制自己）

   | 属性值        | 特征                                                         |
   | ------------- | ------------------------------------------------------------ |
   | `stretch;`    | 弹性盒子沿侧轴线被拉伸至铺满容器（弹性盒子**没有设置侧轴方向尺寸**则默认拉伸） |
   | `center;`     | 弹性盒子沿侧轴居中排列                                       |
   | `flex-start;` | 弹性盒子从起点开始依次排列                                   |
   | `flex-end;`   | 弹性盒子从终点开始依次排列                                   |

3. 主轴默认在水平方向，侧轴默认在垂直方向，可以通过`flex-direction`属性进行修改/对调

   | 属性值            | 特征                       |
   | ----------------- | -------------------------- |
   | `row;`            | 水平方向，从左向右（默认） |
   | `column;`         | 垂直方向，从上向下         |
   | `row-reverse;`    | 水平方向，从右向左         |
   | `column-reverse;` | 垂直方向，从下向上         |

4. 弹性伸缩比：flex属性可以控制盒子主轴方向的尺寸，其属性值为正整数数字，表示占用父级剩余尺寸的份数

5. 弹性盒子换行`flex-wrap`

   | 属性值    | 特征           |
   | --------- | -------------- |
   | `wrap;`   | 换行           |
   | `nowrap;` | 不换行（默认） |

6. 行对齐方式`align-content`：**该属性对单行弹性盒子模型无效**

   | 属性值           | 特征                                           |
   | ---------------- | ---------------------------------------------- |
   | `flex-start;`    | 从起点开始依次排列（默认值）                   |
   | `flex-end;`      | 从终点开始依次排列                             |
   | `center;`        | 沿主轴居中排列                                 |
   | `space-between;` | 沿主轴均匀排列，空白间距均匀分布在弹性盒子之间 |
   | `space-around;`  | 沿主轴均匀排列，空白间距均匀分布在弹性盒子两侧 |

## 7. 渐变与动画

### 7.1 渐变

> 渐变是多个颜色逐渐变化，一般用于盒子背景

1. 线性渐变：`background-image:linear-gradient(渐变方向,颜色1 开始渐变位置, 颜色2 开始渐变位置)`

   ```css
   /* 方式一 */
   background-image: linear-gradient(45deg, red 10%, blue);
   
   /* 方式二 */
   background: linear-gradient(217deg, rgba(255, 0, 0, .8), rgba(255, 0, 0, 0) 70.71%),
               linear-gradient(127deg, rgba(0, 255, 0, .8), rgba(0, 255, 0, 0) 70.71%),
               linear-gradient(336deg, rgba(0, 0, 255, .8), rgba(0, 0, 255, 0) 70.71%);
   ```

2. 径向渐变：从中心向四周，一般用于给按钮添加高光效果

   `background-image:radial-gradient(半径1 半径2 at 圆心位置,颜色1 开始渐变位置,颜色2 开始渐变位置)`

   - 半径可以是1条，也可以是两条。一条半径表示为正圆，两条半径表示椭圆。
   - 圆心位置取值既可以是像素、百分比，也可以是方位名词。

   ```css
   background-image: radial-gradient(100px 100px at center center, red, blue);
   ```

### 7.2 动画

> 过渡是实现两个状态间的变化过程，动画是实现多个状态之间的变化过程（动画过程可控：重复播放、最终画面、是否暂停等）

```css
/* 定义动画方式一 */
@keyframes 动画名称{
    from{ }
    to{ }
}

/* 定义动画方式二 */
@keyframes 动画名称{
    0%{ }
    10%{ }
    ···
    100%{ }
}
```

| 属性名          | 属性值                                                       | 说明                 |
| --------------- | ------------------------------------------------------------ | -------------------- |
| duration        | 数字 + s（先）                                               | 动画持续时间         |
| easing-function | linear、ease-in、ease、ease-out、ease-in-out、step(num)---精灵动画专用 | 速度曲线             |
| delay           | 数字 + s（后）                                               | 动画延迟执行时间     |
| iteration-count | 数字、infinite                                               | 动画重复次数         |
| direction       | alternate、reverse                                           | 动画执行方向         |
| fill-mode       | forwards、backwards、both                                    | 动画执行完毕时的状态 |
| play-state      | paused                                                       | 暂停动画             |
| name            | 自定义                                                       | 动画名称             |

1. 单组动画

   ```css
   /* 使用单组动画 */
   animation: name duration easing-function delay iteration-count direction fill-mode play-state;
   ```

2. 多组动画

   ```css
   /* 使用多组动画 */
   animation: 动画1相关属性, 动画2相关属性, ···, 动画n相关属性;
   ```

3. 精灵动画

   - 准备一个与每张精灵小图尺寸相同的盒子，并将其背景设置为精灵大图；
   - 定义动画：移动背景图（移动距离 = 精灵图宽度）；
   - 使用动画：`steps(num),num`与精灵小图个数相同；

   ```css
   /* 准备一个与每张精灵小图尺寸相同的盒子，并将其背景设置为精灵大图 */
   width:小图宽度;
   height:小图高度;
   background-image:url();
   
   /* 定义多组动画 */
   @keyframes 动画名称1 {
       from { background-position:0 0; }
       to { background-position: -大图宽度 0; }
   }
   @keyframes 动画名称2 {
       0% { transform: translate(0); }
       100% { transform: translate(x轴距离); }
   }
   
   /* 使用精灵动画---num为精灵小图的个数 */
   animation: name1 duration1 steps(num) iteration-count, name2 duration iteration-count fill-mode;

## 8. 平面/空间转换

### 8.1 平面转换

> transform属性可以改变盒子的形态，为元素添加动态效果，多与过渡属性配合使用。注意：**平面中，右/下方向为正，左/上方向为负!**

1. 平移：距离的单位可以是像素，也可以是百分比（参照盒子自身尺寸计算结果），正负均可。

   ```css
   /* x轴与y轴同时平移*/ 
   transform:translate(x轴移动的距离,y轴移动的距离)
   
   /* x轴平移 */ 
   transform:translateX(x轴移动的距离)
   
   /* y轴平移 */ 
   transform:translateY(y轴移动的距离)
   ```

2. 旋转：旋转角度值为正，顺时针旋转；值为负，逆时针旋转

   ```css
   transform:rotate(旋转角度deg)
   
   /* 默认情况下，旋转中心是盒子中心点。若要改变旋转中心，可使用(取值既可以是left等关键字，也可以是像素值/百分比) */
   transform-origin:水平原点位置 垂直原点位置;
   ```

3. 多重转换：先平移，再旋转

   ```css
   transform:translate(x轴移动的距离,y轴移动的距离) rotate(旋转角度deg)
   ```

4. 缩放

   ```css
   /* 等比例缩放 */
   transform:scale(缩放倍数)
   
   /* 非等比例缩放 */
   transform:scale(x轴缩放倍数,y轴缩放倍数)
   ```

5. 倾斜

   ```css
   transform:skew(倾斜角度deg)
   ```

### 8.2 空间转换

> - 空间转换属性是`transform`。空间是从坐标轴角度定义的x、y和z三条坐标轴构成的一个立体空间，z轴位置与视线方向相同。
>
> - **视距属性**指定了观察者与z平面的距离，为元素添加透视效果（近大远小，近实远虚）。
>
>   ```css
>   /* 视距属性一般添加给父元素，取值为800~1000 */
>   perspective:视距;
>   ```

1. 平移：距离的单位可以是像素，也可以是百分比（参照盒子自身尺寸计算结果），正负均可

   ```css
   /* x轴平移、y轴平移、z轴平移 */
   transform:translate3d(x轴移动的距离,y轴移动的距离,z轴移动的距离)
   
   /* x轴平移 */
   transform:translateX(x轴移动的距离)
   
   /* y轴平移 */
   transform:translateY(y轴移动的距离)
   
   /* z轴平移 */
   transform:translateZ(z轴移动的距离)
   ```

2. 旋转：左手握住旋转轴，拇指指向正值方向，其它四个手指弯曲方向即为正值方向

   ```css
   /* 沿x轴旋转*/
   transform:rotateX(旋转角度deg)
   
   /* 沿y轴旋转*/
   transform:rotateY(旋转角度deg)
   
   /* 沿z轴旋转*/
   transform:rotateZ(旋转角度deg)
   
   /* 自定义旋转轴的位置及旋转角度（x,y,z取值均为0~1） */
   transform:rotate3d(x,y,z,角度度数)
   ```

3. 立体效果：`tranform-style`属性可以设置元素的子元素是位于3D空间中还是平面中

   - 父元素添加`transform-style:preserve-3d;`
   - 子元素添加定位（子绝父相）
   - 调整子元素的位置（位移/旋转）

   | 属性值         | 说明             |
   | -------------- | ---------------- |
   | `flat;`        | 平面中（默认值） |
   | `preserve-3d;` | 3D空间中         |

4. 缩放

   ```css
   /* x轴缩放、y轴缩放、z轴缩放 */
   transform:scale3d(缩放倍数);
   
   /* x轴缩放 */
   transform:scaleX(缩放倍数);
   
   /* y轴缩放 */
   transform:scaleY(缩放倍数);
   
   /* z轴缩放 */
   transform:scaleZ(缩放倍数);
   ```



