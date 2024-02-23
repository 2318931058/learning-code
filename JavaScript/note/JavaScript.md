# JavaScript

## 1. 简介

### 1.1 书写位置

1. 内部：代码直接写在html文件中（</body>上面），用script标签包裹住。

   ```html
   <body>
       <!-- html代码 -->
       
       <script>
       	// js代码
       </script>
   </body>
   ```

2. 外部：代码写在以`.js`结尾的文件中，然后在html文件中引入。

   ```html
   <body>
       <!-- html代码 -->
       
    	<script src='xxx.js'>
       	// 此处无需再写代码
       </script>   
   </body>
   ```

### 1.2 输入/输出

1. 输入：prompt

   ```javascript
   // prompt输入的数据默认为字符串类型
   变量名 = prompt('提示内容')
   ```

2. 输出：

   ```javascript
   // document.write用于向浏览器页面中输出信息（可以是标签）
   document.write('要输出到浏览器页面中的内容')
   
   // alert可以在页面弹出对话框
   alert('对话框内容')
   
   // console用于向浏览器控制台中输出信息（log是简略信息、dir是详细信息）
   console.log('向浏览器控制台中输出的内容')
   ```

### 1.3 变量简介

> 变量是计算机中用于储存数据的容器，可以理解为装东西的盒子

1. 使用方式

   ```javascript
   // 方式一：先声明（声明变量可以用var、let或const），再赋值
   let 变量名
   变量名 = 值
   
   // 方式二：声明的同时进行赋值
   const 变量名 = 值
   ```

2. 规则：必须遵守，否则报错

   - 不能使用关键字：有特殊含义的字符，JavaScript内置的一些词汇。如let、const等。
   - 只能使用下划线、字母、数字、$组成，且不能以数字开头。
   - 字母严格区分大小写，如age与Age是两个不同的变量。

3. 规范：建议遵守，不遵守也不报错，但不符合业内通识

   - 变量名要见名知意。
   - 遵守小驼峰命名法：第一个单词首字母小写，后面每个单词的首字母都大写。如myName。

## 2. 数据类型

### 2.1 基本数据类型

> 基本数据类型又叫做简单数据类型或值类型，在存储时变量存储的是值本身，因此也叫做值类型。如String、Number、Boolean等。

1. Number：也就是整数、小数、正数和负数等。

   - 将数据转换为数值型的方式

     ```javascript
     // 方式一
     Number(变量名)
     
     // 方式二
     +变量名
     
     // 方式三（只保留整数）
     parseInt(变量名)
     
     // 方式四（只保留小数）
     parseFloat(变量名)
     ```

   - 常用方法

     | 方法名           | 说明        |
     | ---------------- | ----------- |
     | `num.toFixed(n)` | 保留n位小数 |

   - 特殊情况：NaN表示一个不正确/未定义的数学操作得到的结果，任何对NaN的操作都会返回NaN！

     ```javascript
     // undefined经过数字转换后会变为NaN
     console.log(+undefined)   // NaN
     
     NaN != NaN
     ```

2. String：通过单/双/三/反引号包裹的数据就是字符串类型的数据

   - 可以通过`String(变量名)`的方式将其它类型数据转换为字符串。
   - 可以使用 `+` 运算符实现字符串的拼接。
   - 任何数据与字符串相加结果都是字符串。

   | 属性/方法                                  | 说明                                                         |
   | ------------------------------------------ | ------------------------------------------------------------ |
   | `strLength = str.length`                   | 返回字符串的长度                                             |
   | `newStr = str.repeat(n)`                   | 重复字符串n次，并返回一个新的字符串                          |
   | `newStr = str1.concat(str2)`               | 合并多个字符串，并返回一个新的字符串                         |
   | `newStr = str.slice(m, n)`                 | 截取字符串中下标为m到n的部分（顾头不顾尾），并返回一个新的字符串 |
   | `newStr = str.substring(m, n)`             | 截取字符串中下标为m到n的部分（顾头不顾尾），并返回一个新的字符串 |
   | `value = str.chatAt(n)`                    | 查找字符串中下标为n的值，并返回该值                          |
   | `booleanVal = str.includes(ele)`           | 判断字符串中是否包含区分大小写的指定元素，返回一个布尔值     |
   | `index = str.indexOf(element)`             | 返回指定元素（区分大小写）首次出现的索引值，否则返回-1       |
   | `value = str.match(Regular)`               | 返回符合指定正则表达式的结果，找不到就返回null               |
   | `value = str.search(Regular)`              | 返回符合指定正则表达式的结果，找不到就返回-1                 |
   | `arr = str.split('character')`             | 用指定字符将字符串分割为数组，并返回该数组                   |
   | `newStr = str.replace('old', 'new')`       | 用new替换字符串中的第一个old                                 |
   | `newStr = str.replaceAll('old', 'new')`    | 用new替换字符串中的全部old                                   |
   | `booleanVal = str.startsWith('character')` | 判断字符串是否以指定字符开头，返回一个布尔值                 |
   | `newStr = str.trim()`                      | 移除字符串两端空白，并返回一个新的字符串                     |
   | `str = JSON.stringify(obj)`                | 将对象obj转换为json字符串                                    |
   | `obj = JSON.parse(jsonStr)`                | 将json字符串转换为对象                                       |

3. Boolean：用布尔型数据表示肯定/否定，取值有`true/false`，`NaN、undefined、0、null`和`空字符串`会隐式转换为false。

4. Undefined：只声明不赋值的变量默认值是undefined

5. Null：值为空

### 2.2 引用数据类型

1. Object：对象是无序的数据的集合，可以详细的描述某个事物。

   - 创建对象

     ```javascript
     // 方式一：
     let 对象名 = { 属性名:属性值 }
     
     // 方式二：
     let 对象名 = new Object( { 属性名:属性值, 方法名:函数 } )
     
     // 方式三：使用构造函数创建一个对象
     function 构造函数名( 形参1, ···, 形参n){
         this.属性名1 = 形参1
         ···
         this.属性名n = 形参n
     }
     const 对象1 = new 构造函数名(实参1, ···, 实参n)
     ```

   - 解构赋值：对象解构是将对象属性和方法快速批量赋值给一系列变量的简洁语法（如示例）

     ```javascript
     const obj1 = {
         name:'peiqi',
         age:18,
         family:{ mother:'小猪妈妈', father:'小猪爸爸' }
     }
     const obj2 = [ { uname:'aaa', age:11 } ]
     
     // 基本使用：属性名必须与变量名相同
     const {name, age} = obj1
     console.log(name, age)	// peiqi, 18
     
     // 对象解构的改名
     const {name:username, age:userage} = obj1
     console.log(username, userage)		// peiqi, 18
     
     // 解构数组对象
     const [{uname, age}] = obj2
     console.log(uname, age) // aaa, 11
     
     // 多级对象解构
     const [name, age, family:{mother, father}] = obj1
     console.log(name, age, mother, father)		// peiqi, 18, 小猪妈妈, 小猪爸爸
     ```

   - 常用方法

     | 方法名                          | 说明                                                         |
     | ------------------------------- | ------------------------------------------------------------ |
     | `value = obj.attr`              | 查找对象中指定属性的值，并返回该值                           |
     | `value = obj['attr']`           | 查找对象中指定属性的值，并返回该值                           |
     | `obj.attr = value`              | 修改/新增对象中指定属性的值（有就是修改，没有就是新增）      |
     | `delete obj.attr`               | 删除对象中指定属性的值（可以返回一个布尔值）                 |
     | `arr = Object.keys(obj)`        | 获取对象中所有的属性，并返回一个数组                         |
     | `arr = Object.values(obj)`      | 获取对象中所有的属性值，并返回一个数组                       |
     | `Object.assign(newObj, oldObj)` | 浅拷贝，通常用于给对象添加属性，如将oldObj中的属性拷贝给newObj |
     | `Math.random()`                 | 生成[0,1)之间的随机数                                        |

     ```javascript
     // 向上取整ceil、向下取整floor、最大值max、最小值min、幂运算pow、绝对值abs
     
     // []0, 10]之间的整数
     Math.floor(Math.random() * (10 + 1))
     
     // [n, m]之间的整数
     Math.floor(Math.random() * (m - n )) + n
     // 或
     parseInt(Math.random() * (m - n )) + n
     ```

     ```javascript
     // 随机颜色
     function getColor(boolean){
         let myColor = '#'
         if(boolean !== false){
             // 如果不为false，就默认返回十六进制
             let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
             for(let i=0; i<6; i++){
                 let index = Math.floor(Math.random() * arr.length)
                 myColor += arr[index]
             }
             return console.log(myColor)
         }else{
             let r = Math.floor(Math.random() * 256)  // 55
             let g = Math.floor(Math.random() * 256)  // 89
             let b = Math.floor(Math.random() * 256)  // 255
             return console.log(`rgb(${r},${g},${b})`)
         }
     }
     getColor(false)
     ```

   - 遍历

     ```javascript
     // 对象的遍历：k是获取对象的属性名，对象名[k]获取的是属性值
     for(let k in person){
         console.log(`${k}:${person[k]}`)
     }
     ```

2. Array：数组是一种可以有序地保存多个数据的数据类型，并可通过`arr[index]`进行取值（index从零开始）。

   - 创建数组

     ```javascript
     // 方式一：
     变量名 = [数据1, 数据2, ······, 数据n]
     
     // 方式二：
     变量名 = new Array(数据1, 数据2, ······, 数据n)
     ```

   - 展开运算符：可以将一个数组展开（不修改原数组）

     ```javascript
     // 与剩余参数的区别是：剩余参数在函数参数处使用给，得到真数组；展开运算符在数组中使用，用于数组展开。
     
     // 语法与剩余参数相同
     const arr1 = [1, 2]
     const arr2 = [3, 4, 5]
     console.log(...arr1)		// 1， 2
     
     // 作用
     // 1 求数组最大值
     console.log(Math.max(...arr1)) // 2
     console.log(Math.min(...arr1)) // 1
     // 2. 合并数组
     const arr = [...arr1, ...arr2]
     console.log(arr)	// 1， 2， 3， 4， 5
     ```

   - 解构赋值：数组解构是将数组的单元值快速批量赋值给一系列变量的简洁语法

     ```javascript
     const arr1 = [1, 2]
     const arr2 = [3, 4, 5]
     const arr3 = [1, 2, [3, 4, [5]]]
     const arr4 = [3, 4, 5, 6, 7]
     
     // 基本使用
     const [a, b, c] = arr2
     console.log(a, b, c) 		// 3, 4, 5 
     
     // 交换变量
     let a = 1
     let b = 2
     [b, a] = [a, b]
     console.log(a, b)	// 2, 1
     
     // 必须加分号的情况：多个立即执行函数之间和该情况
     [1, 2, 3].map(item=>{console.log(item)})
     
     // 多维数组解构
     const [a, b, [c, d, [e]]] = arr3
     console.log(a, b, c, d, e)	// 1, 2, 3, 4, 5
     
     // 变量多，单元值少----undefined
     const [a, b, c] = arr1
     console.log(a, b, c)		// 1, 2, undefined
     
     // 变量少，单元值多
     const [a, b] = arr2
     console.log(a, b)	// 1, 2
     
     // 剩余参数，变量少，单元值多
     const [a, b, ...c] = arr4
     console.log(a, b, c)	// 3, 3, [5, 6, 7]
     
     // 防止undefined传递（设置默认值）
     const [a=0, b=0] = arr1
     console.log(a, b)		// 1, 2
     
     // 按需导入赋值
     const [a, ,c, ,e] = arr4
     console.log(a, c, e)  // 3, 5, 7
     ```

   - 常用方法

     | 属性/方法                                  | 说明                                                         |
     | ------------------------------------------ | ------------------------------------------------------------ |
     | `booleanVal = arr instanceof Array`        | 判断某个数据是否为数组，并返回一个布尔值                     |
     | `arr = Array.from(fakeArr)`                | 将伪数组转换为真数组，并返回真数组                           |
     | `arrLength = arr.length`                   | 返回数组的长度                                               |
     | `arrLength = arr.push(ele)`                | 在数组末尾追加指定元素（不改变原数组），并返回新数组的长度   |
     | `arrLength = arr.unshift(ele)`             | 在数组开头追加指定元素（不改变原数组），并返回新数组的长度   |
     | `delVal = arr.pop()`                       | 删除数组末尾的值（不改变原数组），并返回删除的那个值         |
     | `delVal = arr.shift()`                     | 删除数组开头的值（不改变原数组），并返回删除的那个值         |
     | `str = arr.slice(m, n)`                    | 截取数组中下标为m到n的部分（顾头不顾尾），并返回一个字符串   |
     | `arr.splice(start, delNum, items)`         | 移除/替换/添加新元素（**改变原数组**），并返回一个新数组     |
     | `newArr = arr1.concat(arr2)`               | 合并多个数组（不改变原数组），并返回一个新数组               |
     | `str = arr.join('character')`              | 用指定字符将数组中的元素拼接为字符串，并返回该字符串         |
     | `arr.reverse()`                            | 反转元素的排列顺序（**改变原数组**）                         |
     | `newArr = arr.toReversed()`                | 反转元素的排列顺序（不改变原数组），并返回一个新数组         |
     | `arr.sort((a, b) => { return b-a })`       | 正序/倒叙排列（**改变原数组**）                              |
     | `arr.toSorted((a, b) => { return b-a })`   | 正序/倒叙排列（不改变原数组），并返回一个新数组              |
     | `arr.forEach((item, index) =>{ })`         | 仅遍历数组，无返回值（不改变原数组）                         |
     | `newArr=arr.map((item, index)=>{formula})` | 据计算公式，返回计算后的新数组（不改变原数组）               |
     | `val=arr.reduce((res,item)=>{},initval)`   | 据计算公式，返回计算后的值（不改变原数组，initval为初始值）  |
     | `newArr = arr.filter((item,index)=>{ })`   | 返回符合条件的新数组（不改变原数组）                         |
     | `booleanVal = arr.some(item=>condition)`   | 判断数组中是否**有**元素满足条件（不改变原数组），返回布尔值 |
     | `booleanVal = arr.every(item=>condition)`  | 判断数组中的元素是否**都**满足条件（不改变原数组），返回布尔值 |
     | `booleanVal = arr.includes(ele)`           | 判断数组中是否包含指定元素（不改变原数组），返回布尔值       |
     | `index = arr.indexOf(ele)`                 | 返回指定元素首次出现的下标，否则返回-1（不改变原数组）       |
     | `value = arr.find(item=>condition)`        | 返回数组中满足条件的首个元素，否则返回undefined(不改原数组)  |
     | `index = arr.findIndex(item=>condition)`   | 返回数组中满足条件的首个元素的下标，否则返回-1(不改原数组)   |
     | `newArr = arr.flat(n/Infinity)`            | 数组扁平化(不改原数组)，并返回新数组，Infinity为整个扁平化   |

3. function：函数就是执行某些特定任务的代码块，可以实现代码复用，提高开发效率

   - 函数分类

     ```javascript
     // 1. 普通函数：也叫具名函数，可以在任何位置声明/调用（可先调用，再声明）
     function 函数名(形参1, ···, 形参n) {
         函数体
         // 一旦return就不会继续往下执行了（无return，调用后为undefined）
         return 结果
     }
     // 实参个数与形参个数可以不一致，会自动填写undefined
     函数名(实参1, ···, 实参n)
     
     // 2. 箭头函数（无动态参数，只有剩余参数）
     let 函数名 = () => { 
         函数体（内部的this指向上一级的this）
     }
     
     // 3. 匿名函数（必须先声明，再使用）
     // 3.1 函数表达式：将匿名函数赋值给一个变量，并通过变量调用
     let fn = function(){
         // 函数体
     }
     // 使用场景举例
     let btn = document.querSelector('button')
     btn.onclick = function(){
         alert('我是匿名函数表达式的应用场景')
     }
     
     // 3.2 立即执行函数：不需要调用，直接执行(多个立即执行函数之间必须使用分号隔开)
     // 方式1：n可以换做感叹号!，也可以换成加号+，还可以换成~，也可以不要（任选其一即可）
     (function(形参) { console.log('hello world') })(实参);
     +(function(形参) { console.log('hello world') })(实参);
     !(function(形参) { console.log('hello world') })(实参);
     ~(function(形参) { console.log('hello world') })(实参);
     // 方式2
     (function(形参) { console.log('hello world') (实参)});
     
     // 4. 构造函数：用于创建多个类似的对象（不需要return，可用来实现面对对象，但可能存在浪费内存的情况）
     function 构造函数名( 形参1, ···, 形参n){		// 实例化执行步骤1：创建新对象，构造函数this就指向新对象
         // 构造函数的属性和方法被称为静态成员，一般为公共特征的属性或方法（this指向构造函数本身）
         this.属性名1 = 形参1				// 实例化执行步骤2：执行构造函数代码，修改this，添加新属性
         ···
         this.属性名n = 形参n
     }
     // 通过构造函数创建的对象称实例对象，实例对象中的属性和方法被称为实例成员。(实例对象之间相互独立/互不影响)
     const 对象1 = new 构造函数名(实参1,实参2, ···, 实参n)		// 实例化执行步骤3：返回新对象
     ```

   - 函数参数：不确定传参个数时可以使用动态参数/剩余参数

     ```javascript
     // 1. 动态参数arguments：arguments是函数内置的伪数组变量，可以动态获取调用函数时传入的所有实参，如
     // 举例：求和函数（不管传入多少个参数，都可以求和）
     function getSum() {
         // arguments动态参数只存在于函数里面，是伪数组里面存储的是传递过来的实参
         let sum = 0
         for (let i = 0; i < arguments.length; i++) {
             sum += arguments[i]
         }
         console.log(sum)
     }
     getSum(2, 3, 4)
     getSum(1, 2, 3, 4, 2, 2, 3, 4)
     
     // 2. 剩余参数：...是语法符号，置于最末函数形参之前，用于获取多余的实参。如：
     // 举例：求和函数（至少传入两个参数）
     function getSum(a, b, ...arr) {
         // ...arr是真数组，且使用时不需要···
         console.log(arr)  
     }
     getSum(2, 3)
     getSum(1, 2, 3, 4, 5)
     ```

   - 捕获异常

     ```javascript
     function 函数名() {
         try {
             // 可能发送错误的代码 要写到 try里面
         } catch (err) {
             // 拦截错误，提示浏览器提供的错误信息，但是不中断程序的执行
             console.log(err.message)		// 浏览器抛出的错误信息
             throw new Error('你看看，选择器错误了吧')		// 抛出自定义错误信息
             // 需要加return 中断程序
             // return
         }
         finally {
             // 不管你程序对不对，一定会执行的代码
         }
         console.log(11)
     }
     函数名()
     ```

## 3. 运算符号

### 3.1 算数运算符

| 运算符         | 说明（从高到低）                      |
| -------------- | ------------------------------------- |
| `()`           | 小括号                                |
| `*    /     %` | 乘法、处罚、取余                      |
| `+   -`        | 加法、减法（减法会将空字符串转换为0） |

### 3.2 赋值运算符

| 运算符 | 说明                                    |
| :----- | :-------------------------------------- |
| `=`    | 将=右边的值赋给左边，要求左边必须是变量 |
| `+=`   | 相当于‘变量名 = 变量名 + 值’            |
| `-=`   | 相当于‘变量名 = 变量名 - 值’            |
| `*=`   | 相当于‘变量名 = 变量名 * 值’            |
| `/=`   | 相当于‘变量名 = 变量名 / 值’            |
| `%=`   | 相当于‘变量名 = 变量名 % 值’            |

### 3.3 一元运算符

| 运算符     | 说明                   |
| :--------- | :--------------------- |
| `++变量名` | 前置自增：先自加再使用 |
| `变量名++` | 后置自增：先使用再自加 |
| `--变量名` | 前置自减：先自减再使用 |
| `变量名--` | 后置自减：先使用再自减 |

```javascript
let i = 1
console.log(i++ + ++i + i)		// 1 + 3 + 3 = 7
```

### 3.4 比较运算符

> 不要比较小数，因为小数存在精度问题！！！

| 运算符 | 说明                       |
| :----- | :------------------------- |
| `>`    | 左边是否大于右边           |
| `<`    | 左边是否小于右边           |
| `>=`   | 左边是否大于等于右边       |
| `<=`   | 左边是否小于等于右边       |
| `==`   | 左右两边的值是否都相等     |
| `===`  | 左右两边是否类型和值都相等 |
| `!==`  | 左右两边是否不全等         |

### 3.5 逻辑运算符

| 运算符 | 说明   | 口诀               |
| :----- | :----- | :----------------- |
| `&&`   | 逻辑与 | 都真才真，一假则假 |
| `||`   | 逻辑或 | 都假才假，一真则真 |
| `!`    | 逻辑非 | 真变假，假变真     |

| 运算符 | 短路条件                                                     |
| :----- | :----------------------------------------------------------- |
| `&&`   | 左边为false就短路，运算结果就是左边的表达式；反之结果就为右边的表达式； |
| `||`   | 左边为true就短路，运算结果就是左边的表达式；反之结果就为右边的表达式； |

### 3.6 运算符优先级

| 运算符     | 顺序                |
| :--------- | :------------------ |
| 小括号     | `()`                |
| 一元运算符 | `++ -- !`           |
| 算数运算符 | `先* / % 后+ -`     |
| 关系运算符 | `> >= < <=`         |
| 相等运算符 | `==  !=   ===  !==` |
| 逻辑运算符 | `先&&  后||`        |
| 赋值运算符 | `=`                 |
| 逗号运算符 | `,`                 |

## 4. 三大语句

### 4.1 分支语句

1. if语句

   ```javascript
   if(条件1){
       // 条件1满足执行的代码
   }else if(条件2){
       // 条件1不满足，条件2满足执行的代码
   }else if(条件n){
       // 以上条件均不满足，而条件n满足执行的代码
   }else {
       // 以上条件均不满足执行的代码
   }
   ```

2. 三元运算符

   ```javascript
   条件 ? 满足条件执行的代码 ：不满足条件执行的代码
   ```

3. switch语句:

   ```javascript
   switch(数据){
       case 值1:
           代码1
           break
       case 值2:
           代码2
           break
       ······
       case 值n:
           代码n
           break
       default:
           代码n
           break  
   }
   ```

### 4.2 循环语句

> 明确循环次数使用for循环，反之使用while循环

1. 死循环：需要使用break退出死循环

   ```javascript
   // 方式一：
   for(;;){ }
   
   // 方式二：
   while(true){ }
   
   // 方式三：
   while("itcast"){ }
   ```

2. while循环

   - break:退出整个循环（一般用于已经获取到结果，后续循环不再需要的情况）。
   - continue：退出当前循环，继而执行下一个循环（一般用于排除或跳过某个选项时使用）。

   ```javascript
   let 变量名 = 变量起始值
   while(终止条件){
       // 需要循环执行的代码
       // 变量变化量，如i++
   }
   ```

3. for循环

   - break:退出整个循环（一般用于已经获取到结果，后续循环不再需要的情况）。
   - continue：退出当前循环，继而执行下一个循环（一般用于排除或跳过某个选项时使用）。

   ```javascript
   // 普通for循环
   for(变量起始值; 终止条件; 变量变化量){
       // 需要循环的代码
   }
   
   // for循环嵌套：外行内列
   for(外层声明记录循环次数的变量; 循环条件; 外层变量变化量){
       for(内层声明记录循环次数的变量; 循环条件; 内层变量变化量){
           // 内存循环体
       }
       // 外层循环体
   }
   ```


## 5. DOM对象

### 5.1 获取DOM

| 方法                                      | 说明                                                         |
| ----------------------------------------- | ------------------------------------------------------------ |
| `document.getElementById('id')`           | 根据id获取一个元素                                           |
| `document.getElementByTagName('tag')`     | 根据标签获取一类元素                                         |
| `document.getElementByClassName('class')` | 根据类名获取元素                                             |
| `document.querySelector('selector')`      | 选择匹配的第一个元素，没有获取到就返回null                   |
| `document.querySelectorAll('selector')`   | 选择匹配的多个元素(返回伪数组，有长度和索引号，无方法)，必须通过遍历获取对象 |

### 5.2 修改DOM

| 方法                                                | 说明                                           |
| --------------------------------------------------- | ---------------------------------------------- |
| `Dom.innerHTML = newVal`                            | 修改DOM的内容(无法解析标签)                    |
| `Dom.innerText = newVal`                            | 修改DOM的内容(可以解析标签)                    |
| `Dom.arrt = newVal`                                 | 修改DOM属性的值，如attr的href、title和src等    |
| `Dom.style.styleName = 'styleVal'`                  | 修改DOM的样式                                  |
| `Dom.className = 'styleClassName'`                  | 修改DOM的样式(类名)                            |
| `Dom.classList.add/remove/toggle('styleClassName')` | 修改DOM的样式(add添加、remove删除、toggle切换) |

### 5.3 DOM节点

| 方法                                           | 说明                                                 |
| ---------------------------------------------- | ---------------------------------------------------- |
| `fathDom = sonDom.parentNode`                  | 返回最近一级的父节点，找不到就返回null               |
| `sonDom = fathDom.childNodes`                  | 返回所有子节点(包括文本节点、空格、换行、注释等)     |
| `sonDom = fathDom.children`                    | 返回所有子节点(伪数组)                               |
| `nextDom = Dom.nextElementSibling`             | 返回下一个兄弟节点                                   |
| `preDom = Dom.previousElementSibling`          | 返回上一个兄弟节点                                   |
| `newDom = document.createElement('labelName')` | 创建一个新节点                                       |
| `fathDom.appendChild(Dom)`                     | 将Dom插入到父节点内部的最后(无返回值)                |
| `fathDom.insertBefore(newDom, oldDom)`         | 将newDom插入到父节点内部的oldDom的前面(无返回值)     |
| `Dom.cloneNode(booleanVal)`                    | 克隆节点(booleanVal为true表示连同后代节点一起克隆)   |
| `sonDom = fathDom.removeChild(sonDom)`         | 删除父节点中的子节点，并返回该子节点（不存在则报错） |

### 5.4 DOM事件

1. 事件类型

   | 事件名称           | 事件描述                                                 |
   | ------------------ | -------------------------------------------------------- |
   | `click`            | 鼠标单击事件                                             |
   | `mouseenter`       | 鼠标经过事件（推荐）                                     |
   | `mouseleave`       | 鼠标离开事件（推荐）                                     |
   | `mousemove`        | 鼠标移动事件                                             |
   | `mouseover`        | 鼠标经过事件（有冒泡效果）                               |
   | `mouseout`         | 鼠标离开事件（有冒泡效果）                               |
   | `focus`            | 获得焦点事件                                             |
   | `blur`             | 失去焦点                                                 |
   | `keydown`          | 键盘按下触发                                             |
   | `keyup`            | 键盘抬起触发                                             |
   | `input`            | 用户输入事件                                             |
   | `submit`           | 表单提交事件                                             |
   | `load`             | 给windwo/dom添加load事件，表示页面加载完毕再执行对应函数 |
   | `DOMContentLoaded` | DOM 完全加载和解析后再执行对应函数                       |
   | `scroll`           | 监听页面滚动：**document.documentElement表示html元素**   |
   | `resize`           | 会在窗口尺寸发生改变时触发                               |

   ```javascript
   // 获取鼠标在某个dom中的位置
   let x = e.pageX - dom.getBoundingClientRect().left - document.documentElement.scrollLeft
   let y = e.pageY - dom.getBoundingClientRect().top - document.documentElement.scrollTop
   
   // 滚轮距离页面顶部、左侧的距离（可读写）：document.documentElement.scrollTop/scrollLeft
   // Dom对象距离页面顶部、左侧的距离（只读，易受定位影响）：Dom.offsetTop/offsetLeft
   // 将页面滚动到指定坐标：document.documentElement.scrollTo(x, y)
   // 鼠标相对于浏览器视口的坐标：pageX和pageY
   // 返回Dom的位置信息：Dom.getBoundingClientRect()
   // 包含padding的Dom对象的可见部分的高/宽度（只读）：Dom.clientHeight/clientWidth
   // 包含border/padding/滚动条的Dom对象自身的高度/宽度(只读)：Dom.offsetHeight/offsetWidth
   ```

2. 事件监听/解绑

   ```javascript
   // 事件监听L0版本：都是在冒泡阶段执行，若事件类型相同，后面的事件会覆盖之前的事件
   事件源.on事件 = function(){}
   
   // 事件监听L2版本：事件类型相同，后面的事件也不会覆盖之前的事件。
   事件源.addEventListener('事件类型', 要执行的函数)
   
   // 事件解绑L0版本
   dom.on事件类型 = null
   
   // 事件解绑L2版本：匿名函数无法使用
   dom.removeEventListener('事件类型', 事件处理函数, [获取捕获/冒泡阶段])
   ```

3. 事件对象：通常用于判断用户按下了哪个键、点击了哪个元素，其语法是

   ```javascript
   // event就是事件对象，常用属性如下表
   事件源.addEventListener('事件类型', function(event))
   ```

   | 属性              | 说明                                             |
   | ----------------- | ------------------------------------------------ |
   | `type`            | 获取当前的事件类型                               |
   | `clientX/clientY` | 获取光标相当于浏览器可视窗口左上角的坐标         |
   | `offsetX/offsetY` | 获取光标在当前dom中的（以dom左上角为原点）的位置 |
   | `key`             | 获取用户按下的键盘的值                           |
   | `target`          | 获取点击的dom对象                                |

4. 事件委托：利用事件冒泡的特点给父元素注册事件。当触发子元素的时候，会冒泡的父元素身上，从而触发父元素的事件。

   ```javascript
   // 获取真正触发事件的元素
   事件对象.target.tagName
   ```

5. 事件流：指事件完整执行过程中的流动路径，包括事件捕获和事件冒泡两个阶段

   - 事件捕获：从Dom的根元素开始去执行对应的事件

     ```javascript
     dom.addEventListener('事件类型', 事件处理函数, true)
     ```

   - 事件冒泡：当一个元素的事件被触发后，该元素的祖先元素会依次触发该事件

     ```javascript
     dom.addEventListener('事件类型', 事件处理函数, false)
     ```

   > 可以通过`事件对象.stopPropagation()`阻止事件捕获或事件冒泡，通过`事件对象.preventDefault()`阻止默认行为

### 5.5 时间DOM

> 使用时间DOM前需要先进行实例化：`const date = new Date()`，若要指定日期，可以`const date = new Date('具体日期')`

1. 日期对象的常用方法

   | 方法                   | 说明                            |
   | ---------------------- | ------------------------------- |
   | `date.getFullYear()`   | 获取一个四位数的年份            |
   | `date.getMonth()`      | 获取月份，取值为0~11            |
   | `date.getDate()`       | 获取月份中的当日日期            |
   | `date.getDay()`        | 获取星期，取值为0~6             |
   | `date.getHourse()`     | 获取小时，取值为0~23            |
   | `date.getMinutes()`    | 获取分钟，取值为0~59            |
   | `date.getSeconds()`    | 获取秒数，取值为0~59            |
   | `toLocaleString()`     | 2023/11/29 20：48：06格式的日期 |
   | `toLocaleDateString()` | 2023/11/29格式的日期            |
   | `toLocaleTimeString()` | 20：48：27格式的日期            |

2. 时间戳：是指1970年01月01日00时00分00秒起至现在的毫秒数

   ```javascript
   const currentDate = new Date()
   document.write(`${currentDate.getTime()}<br /><br />`)  // 1701262348370
   
   document.write(`${+new Date()}<br /><br />`)  // 1701262348370
   
   // 前两种可以返回指定时间的时间戳，但当前方法只能获取当前的时间戳
   document.write(`${Date.now()}<br /><br />`)  // 1701262348370
   ```

3. 转换

   ```javascript
   // 计算天数
   d = parseInt(总秒数/ 60/60 /24)
   
   // 计算小时
   h = parseInt(总秒数/ 60/60 %24) 
   
   // 计算分钟
   m = parseInt(总秒数 /60 %60 )
   
   // 计算当前秒数  
   s = parseInt(总秒数%60)
   ```

### 5.6 自定义属性

```html
<body>
    <!-- 1. 使用 data-自定义属性名 设置自定义属性 -->
    <标签名 data-自定义属性名></标签名>
    
    <script>
    	// 2. 通过 Dom.dataset 自定义属性名 获取自定义属性
        const dom = document.querySelector()
        console.log(dom.dataset.自定义属性名)
    </script>
</body>
```

### 5.7 定时器

```javascript
// 1. setInterval---每隔一段时间调用一次函数, 单位是毫秒
let 变量名 = setInterval(()=>{
    // 反复执行的代码
}, 间隔时间)
// 清除定时器
clearInterval(变量名)

// 2. setTimeout---仅执行一次(延迟执行)，单位是毫秒
let 变量名 = setTimeout(()=>{
    // 延迟执行的代码
}, 延迟时间)
// 清除定时器
clearTimeout(变量名)
```

## 6. BOM对象 

### 6.1 location

> location 的数据类型是对象，它拆分并保存了 URL 地址的各个组成部分。

```javascript
// href 属性获取完整的 URL 地址，对其赋值时用于页面地址的跳转
location.href = 'https://www.baidu.com'

// search 属性获取地址中携带的参数，符号 ？后面部分，可在控制台中输入location.search查看

// hash 属性获取地址中的啥希值，符号 # 后面部分，可在控制台中输入location.hash查看

// reload 方法用来刷新当前页面，传入参数 true 时表示强制刷新
location.reload()
location.reload(true)
```

### 6.2 navigator

> navigator的数据类型是对象，该对象下记录了浏览器自身的相关信息。可使用userAgent属性检测浏览器的版本及平台

```javascript
// 不同浏览器（移动端/pc端）展示不同效果
!(function () {
     const userAgent = navigator.userAgent
     // 验证是否为Android或iPhone
     const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
     const iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)
     // 如果是Android或iPhone，则跳转至移动站点
     if (android || iphone) {
         location.href = 'http://www.baidu.com'
     }
 })()
```

### 6.3 history

> history 的数据类型是对象，主要用于管理历史记录，与浏览器地址栏的操作相对应，如前进、后退等

```javascript
// history.back()	回退功能
history.back()

// history.forward()	前进功能
history.forward()

// go(参数)	前进后退功能，参数为1前进一个页面，若为-1则后退一个页面
history.go(-1)
```

### 6.4 本地存储

> 本地存储用于将数据存储在用户浏览器中（约5M的容量），刷新页面后不会丢失数据

1. localStorage：将数据永久存储在本地浏览器中，除非手动删除，否则关闭页面也会保留数据

   ```javascript
   // 存储、修改本地存储数据
   localStorage.setItem(key, value)
   
   // 读取本地存储数据
   const 变量名 = localStorage.getItem(key)
   
   // 删除本地存储数据
   localStorage.removeItem(key)
   ```

2. sessionStorage：将数据暂时存储在本地浏览器中，关闭页面后数据丢失

   ```javascript
   // 存储、修改本地存储数据
   sessionStorage.setItem(key, value)
   
   // 读取本地存储数据
   const 变量名 = sessionStorage.getItem(key)
   
   // 删除本地存储数据
   sessionStorage.removeItem(key)
   ```

> 本地存储只能存储字符串类型数据，存储/使用时需用JSON.stringify(复杂类型数据变量名)和JSON.parse(复杂类型数据变量名)转换。

```javascript
const info = {
    name: '张三',
    age: 18
}
localStorage.setItem('info', JSON.stringify(info))		// 存储
let obj = JSON.parse(localStorage.getItem('info'))  // 使用
console.log(obj.age)
```

### 6.5 正则表达式

> 正则表达式是一种用于匹配字符串中字符组合的模式，通常用于查找、替换那些符合正则表达式的文本，如验证表单（匹配）、过滤敏感词（替换）、字符串中提取我们想要的部分（提取）等。可以通过[正则测试工具](http://tool.oschina.net/regex)来测试。

1. 使用规则

   ```javascript
   // 定义规则
   const reg = /正则表达式/
   // 使用规则：test用于判断是否有符合规则的字符串（返回值为boolean）、exec用于查找符合规则的字符串（返回值为数组）
   console.log(reg.test(需要检测的内容))
   console.log(reg.exec(需要检测的内容))
   ```

2. 修饰符：修饰符约束正则执行的某些细节行为，如是否区分大小写、是否支持多行匹配等。语法是：`/表达式/修饰符`

   ```javascript
   // 正则匹配时字母不区分大小写：i
   console.log(/^java$/i.test('Java'))
   
   // 匹配所有满足正则表达式的结果：g
   
   // 替换某些字符：字符串.replace(替换谁的/正则表达式/, '用谁替换的文本')
   const str = 'java是一门编程语言， 学完JAVA工资很高'
   const res = str.replace(/java/ig, '前端')
   console.log(res)  // 前端是一门编程语言， 学完前端工资很高
   ```

3. 元字符

   - 边界符/位置符：用来提示字符所处的位置

     | 符号             | 说明                             |
     | ---------------- | -------------------------------- |
     | `^`              | 匹配行首的文本（以谁开始）       |
     | `$`              | 匹配行尾的文本（以谁结束）       |
     | `/^正则表达式$/` | 二者一同使用示必须精确匹配(常用) |

     ```javascript
     // 边界符/位置符    ^ 和 $
     console.log(/^哈/.test('哈哈')) // true
     console.log(/哈$/.test('哈哈')) // true
     console.log(/^哈$/.test('哈哈'))  // false
     ```

   - 量词：用来表示某个模式出现的次数

     | 量词    | 说明                                  |
     | ------- | :------------------------------------ |
     | `*`     | 重复零次或多次                        |
     | `+`     | 重复一次或多次                        |
     | `?`     | 重复零次或一次                        |
     | `{n}`   | 重复n次                               |
     | `{n,}`  | 重复n次或更多次（逗号左右不能有空格） |
     | `{n,m}` | 重复n到m次（逗号左右不能有空格）      |

     ```javascript
     // 量词
     console.log(/^哈*$/.test('')) // true
     console.log(/^哈*$/.test('哈哈哈')) // true
     console.log(/^哈+$/.test('哈')) // true
     console.log(/^哈+$/.test('哈哈哈')) // true
     console.log(/^哈?$/.test('')) // true
     console.log(/^哈?$/.test('哈')) // true
     console.log(/^哈{6}$/.test('哈哈哈哈哈哈')) // true
     console.log(/^哈{6,}$/.test('哈哈哈哈哈哈哈')) // true
     console.log(/^哈{6,10}$/.test('哈哈哈哈哈哈哈哈')) // true
     ```

   - 字符类

     | 预定类  | 说明                                    |
     | :------ | :-------------------------------------- |
     | `\d`    | 匹配0~9之间的任一数字                   |
     | `\D`    | 匹配0~9之外的任一字符                   |
     | `\w`    | 匹配任意的字母、数字和下划线            |
     | `\W`    | 匹配字母、数字和下划线外的任意字        |
     | `\s`    | 匹配空格（包括换行符、制表符、空格符等) |
     | `\S`    | 匹配非空格的字符                        |
     | `[0,9]` | 零到九的数字                            |
     | `[a,z]` | 所有小写英文字符                        |
     | `[A,Z]` | 所有大写英文字符                        |
     | `^`     | 取反字符，如[/^6-9]只能取[0,5]          |
     | `.`     | 匹配换行符外的任意单个字符              |

     ```javascript
     // 字符类
     console.log(/^[a-z]$/.test('d'))  // true
     console.log(/^[A-Z]$/.test('R'))  // true
     console.log(/^[0-9]$/.test('5'))  // true
     console.log(/^[^6-9]$/.test('5'))  // true
     console.log(/^.$/.test('5'))  // true
     console.log(/^\d$/.test('5'))  // true
     console.log(/^\D$/.test('m'))  // true
     console.log(/^\w$/.test('n'))  // true
     console.log(/^\W$/.test(' '))  // true
     console.log(/^\s$/.test(' '))  // true
     console.log(/^\S$/.test('5'))  // true
     ```
