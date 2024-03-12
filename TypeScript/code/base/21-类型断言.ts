/* 
    1. 类型断言：绕过ts编译检查，即告诉编译器："我就是这个类型了，不用检查"。
    2. 使用场景：有时你会比ts更加明确一个值的类型，此时，可以使用类型断言来指定更具体的类型。通过类型断言，可以使类型变得更具体，从而访问标签的特有属性或方法。如getElementById方法返回值的类型是HTMLElement，但不包含a标签特有的href等属性，因此无法操作href等标签特有的属性或方法。其解决方法就是使用类型断言指定更加具体的类型。
    3. 使用方式：使用as关键字实现类型断言，as后面的类型是一个更加具体的类型，如a标签对应的HTMLAnchorElement、div标签对应的HTMLDivElement等。
    4. 注意：在浏览器控制台可以通过console.dir()打印dom元素，在属性列表的最后面即可看到该元素的类型

*/

// ---------------------------------------------------------------------------------------------

// 1. 基本使用：let A 

// 方式一：
const a = document.getElementById('myA')
// a.href    // 报错

const b = document.getElementById('myA') as HTMLAnchorElement
b.href

// ---------------------------------------------------------------------------------------------

// 方式二：有bug、不推荐
const c = <HTMLAnchorElement>document.getElementById('myA')
// c.href

export {}