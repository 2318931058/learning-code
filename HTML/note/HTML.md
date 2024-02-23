# HTML

## 1. 基本框架

HTML主要由四部分组成：`html`代表整个网页；`head`是网页头部，用来存放给浏览器阅读的信息（如CSS与JavaScript）；`title`的作用是展示网页标题；`body`是网页主体，用来存放给用户看的具体信息，如文字和图片等。

```html
<!DOCTYPE html>
<!-- 1. HTML代表整个网页 -->
<html lang="en">
<!-- 2. head是网页头部，用来存放给浏览器阅读的信息（如CSS与JavaScript） -->
<head>
  <meta charset="UTF-8">
    <!-- 视口标签 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 3. title的作用是展示网页标题 -->
  <title> 网页标题 </title>
</head>

<body>
	<!-- 4. body是网页主体，用来存放给用户看的具体信息，如文字和图片等 -->
</body>

</html>
```

## 2. 字符实体

| 字符名称 | 写法      |
| -------- | --------- |
| 空格     | `\&nbsp;` |
| 大于号   | `\&lt;`   |
| 小于号   | `\&gt;`   |
| 版权标志 | `\&copy;` |
| 左箭头   | `\&larr;` |
| 右箭头   | `\&rarr;` |
| 左右箭头 | `\&harr;` |
| 上箭头   | `\&uarr;` |
| 下箭头   | `\&darr;` |

## 3. 标签元素

行标签`inline`、块标签`block`和行内块标签`inline-block`之间可以使用display属性进行转换！

### 3.1 行标签

> 行标签主要包含`span、a、audio、strong、ins、em、del、label`等标签，特点是标签不能设置宽高属性，内容在同一行显示。

1. span标签

   ```html
   <body>
       <span> 标签内容 </span>
   </body>
   ```

2. 超链接标签

   1. `href`属性为链接跳转地址，如值为#则表示空链接，即刷新原页面。
   2. `target`属性为链接跳转方式，取值有新窗口`_blan`k和`_self`等值。

   ````html
   <body>
       <a href='url' target='_blank'> 链接指向网页的名称 </a>
   </body>
   ````

3. 音频标签

   1. `src`属性为音频地址。
   2. `controls`属性为音频控制面板。
   3. `loop`属性表示音频循环播放。
   4. `autoplay`属性表示浏览器打开时自动播放音频，但浏览器会自动禁用该属性。

   ```html
   <body>
       <audio src='url' controls loop autoplay></audio>
   </body>
   ```

4. 文本格式化标签：加粗标签`strong（或b）`、倾斜标签`em（或i）`、下划线标签`ins（或u）`和删除线标签`del（或s）`。

   ```html
   <body>
       <!-- 加粗strong（或b） -->
       <strong> strong标签为加粗标签 </strong>
       <b> b标签也为加粗标签 </b>
       
       <!-- 倾斜em（或i） -->
       <em> em标签为倾斜标签 </em>
       <i> i标签也为倾斜标签 </i>
       
       <!-- 下划线ins（或u） -->
       <ins> ins标签为下划线标签 </ins>
       <u> u标签也为下划线标签 </u>
       
       <!-- 删除线del（或s） -->
       <del> del标签为下划线标签 </del>
       <s> s标签也为下划线标签 </s>
   </body>
   ```

### 3.2 块标签

> 块标签主要包含：`div、h1~h6、p、ul、ol、li、th、td`等标签，特点是标签可设置宽高属性，但内容换行显示。

1. div标签

   ```html
   <body>
       <div> 标签内容 </div>
   </body>
   ```

2. 标题标签

   ```html
   <body>
      <h1> 标题一 </h1>
      <h2> 标题二 </h2>
      <h3> 标题三 </h3>
      <h4> 标题四 </h4>
      <h5> 标题五 </h5>
      <h6> 标题六 </h6> 
   </body>
   ```

3. 段落标签

   ```html
   <body>
       <p> 段落内容 </p>
   </body>
   ```

4. 列表标签：有序列表`ol li`、无序列表：`ul li`、自定义列表`dl dt(标题) dd(内容)`。

   ```html
   <body>
       <!-- 列表标签：有序列表ol li -->
       <ol>
           <li> 有序列表ol li </li>
           <li> 有序列表ol li </li>
           <li>······</li>
       </ol>
       <!-- 列表标签：无序列表ul li -->
       <ul>
           <li> 无序列表ul li </li>
           <li> 无序列表ul li </li>
           <li> ······ </li>
       </ul>
       <!-- 列表标签：定义列表dl dt（标题） dd（内容） -->
       <dl>
           <dt> 列表标题 </dt>
           <dd> 列表内容 </dd>
       </dl>
   </body>
   ```

5. 表格标签

   1. 跨行合并，保留最上单元格：`rowspan='参与合并的单元格个数'`。
   2. 跨列合并，保留最左单元格：`colspan='参与合并的单元格个数'`。

   ```html
   <body>
       <table>
           <thead>
               <tr>
                   <th> 表头1 </th>
                   <th> 表头2 </th>
                   <th> 表头3 </th>
               </tr>
           </thead>
   
           <tbody>
               <tr>
                   <td> 表头1值1 </td>
                   <td rowspan="2"> 表头1值2 </td>
                   <td> 表头1值3 </td>
               </tr>
   
               <tr>
                   <td> 表头2值1 </td>
                   <td> 表头2值3 </td>
               </tr>
           </tbody>
   
           <tfoot>
               <tr>
                   <td> 总结 </td>
                   <td colspan="3"> 继续努力 </td>
               </tr>
           </tfoot>
       </table>
   </body>
   ```

### 3.3 行内块标签

> 行内块标签主要包含：`img、video、input、textarea、button、select`等标签，特点是既可设置宽高，内容又在同一行显示。

1. 图片标签

   1. `src`属性为图片地址。
   2. `alt`属性为图片不存在时的替换文本。
   3. `title`属性为鼠标悬停文本。
   4. `width`属性为图片宽度。
   5. `height`属性为图片高度。

   ```html
   <body>
       <img src="url" alt="" title="" width="" height="">
   </body>
   ```

2. 视频标签

   1. `src`属性为视频地址。
   2. `controls`属性为视频控制面板。
   3. `loop`属性为视频循环播放。
   4. `muted`属性为视频静音播放。
   5. `autoplay`属性为视频自动播放（必须与静音`muted`一同使用）。
   6. `height`属性为视频画面高度。
   7. `width`属性为视频画面宽度。

   ```html
   <body>
       <video src='url' controls loop muted autoplay height='100px' width='100px'></video>
   </body>
   ```

3. 表单标签

   1. `action`属性为表单要提交到的地址。
   2. `method`属性表示提交表单的方法，取值为`get`或`post`等。
   3. `target`属性表示响应页面，取值为`_self`或`_blank`等。

   ```html
   <body>
       <form action="" method="" target="">
           <!-- 文本输入框 -->
           <input type="text" placeholder="提示文本" value='' width='' height='' >
   
           <!-- 密码框 -->
           <input type="password" placeholder="提示文本" value='' width='' height='' >
           
           <!-- 单选框：checked属性控制是否默认选中，name属性用于控件分组 -->
           <input type="radio" name="控件组名" checked>值1
           <input type="radio" name="控件组名">值2
   
           <!-- 多选框：checked属性控制是否默认选中 -->
           <input type="checkbox" checked>值1
           <input type="checkbox">值2
   
           <!-- 上传文件：multiple属性表示可以多选 -->
           <input type="file" multiple>
   
           <!-- 文本域：可以使用css的resize:none;属性禁止拖拽 -->
           <textarea name="" id="">内容</textarea>
   
           <!-- 下拉选择框：selected属性控制是否默认选中 -->
           <select name="" id="">
               <option value="">值1</option>
               <option value="" selected>值2</option>
           </select>
   
           <!-- 按钮：type的取值有三种：button（默认）、重置reset和提交submit -->
           <button type="reset">重置</button>
   
           <!-- 标签主要用于绑定文字和表单控件的关系，增大表单控件的点击范围 -->
           <!-- 标签写法一 -->
           <input type="text" id="id名称">
           <label for="id名称">内容</label>
   
            <!-- 标签写法二 -->
           <label><input type="password">内容</label>
       </form>
   </body>
   ```

### 3.4 其它标签

1. 水平线标签

   ```html
   <body>
       <hr />
   </body>

2. 换行标签

   ```html
   <body>
       <br />
   </body>

3. 语义化布局标签

   ```html
   <body>
       <header>
           <nav>导航</nav>
       </header>
   
       <main>
           <section>
               <aside>侧边栏</aside>
               <article>文章区</article>
           </section>
       </main>
   
       <footer>底部区域</footer>
   </body>

## 4. 搜索引擎优化

搜索引擎优化，即SEO，主要用于提升网站百度搜索排名，常见的方法有竞价排名、将网页制作成html后缀和标签语义化等。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 网页头部SEO标签：title、description、keywords -->
  <meta name="description" content="描述内容">
  <meta name="keywords" content="搜索关键字">
  <title>网站名称</title>
</head>

<body>
	<!-- 
		通过标签语义化进行搜索引擎优化:
			1. logo放在 h1>a 结构中，给a设置宽高和背景图片。
            2. 导航放在 ul>li 结构中
            3. 轮播图的图片要放在 ul>li>a>img 结构中
	-->
</body>

</html>
```

