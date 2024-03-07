// 任何可以使用unknown的地方都能使用any，反之错误

// unknown可以是任何类的父类，即任何类型的变量都可以赋值给unknown类型(包括null和undefined)
let a : number = 3
let b : unknown = a

let c : undefined = undefined
let d : unknown = c

let e : null = null
let f : unknown = e

// unknown不能是任何类的子类
let g : unknown = 'peiqi'
// let h : string = g
// let i : undefined = g
// let j : null = g

// unknown类型的变量不可以获取任意名称的属性和方法
// function getData (data: unknown) {
//     console.log(data.name)
// }
// getData({name:'peiqi'})

// unknown一般用作函数参数：用来接收任意类型的变量实参，但在函数内部只用于再次传递或输出结果，不获取属性的场景

export {}