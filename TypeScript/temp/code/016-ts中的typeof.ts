/*
  1. 作用一：获取数据的类型。
  2. 作用二：可以在类型上下文中引用变量或属性的类型。
    2-1. 使用场景：根据已有的变量值，获取该值的类型，简化类型书写。
    2-2. typeof出现在类型注解的位置（参数名称的冒号后面）所处的环境就在类型上下文。
    2-3. 注意：typeof只能用来查询变量或属性的类型，无法查询其它形式的类型（如函数调用的类型）。
*/

// 作用一
console.log(typeof 'hello world')

// 作用二
let p = {x:'peiqi', y:18}
// function Info(info:{x:string, y:number}){
//   console.log(info)
// }
function Info(info:typeof p){
  console.log(info)
}
// 以上两种形式等同
Info(p)

// 注意：typeof只能用来查询变量或属性的类型，无法查询其它形式的类型（如函数调用的类型）
let res1 : typeof p.x

// let res2 : typeof Info(p)    // 报错