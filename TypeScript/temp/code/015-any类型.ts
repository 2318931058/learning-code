/*
  注意：不推荐使用any类型，这会让ts变成anyscript（失去ts类型保护的优势），及当值为any类型是，可以对值进行任意操作，并且不会有代码提示。
  1. 除了临时使用any来避免书写很长、很复杂的类型的情况，千万不要使用any类型。
  2. 会隐式转换为any类型的情况：
    2-1. 声明变量不提供类型也不提供值。
    2-2. 函数参数不加类型。
*/

// 基本使用
let a : any = 0


// 会隐式转换为any类型的情况---声明变量不提供类型也不提供值
let b

// 会隐式转换为any类型的情况---函数参数不加类型
function changeInfo(name, age) {}