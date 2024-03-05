/*
  1. 函数类型实际上指的是：函数参数和返回值的类型
    1-1. 单独指定参数和返回值的类型
    1-2. 同时指定参数和返回值的类型(只适用于函数表达式形式)

  2. 函数参数问题：可选参数（可传可不传）
    2-1，语法：再可传可不传的参数名称后面添加问号?
    2-2. 注意：可选参数只能出现在参数列表的最后，也就是说可选参数后面不能再出现必选参数！！！
*/

// 1-1. 单独指定参数和返回值的类型---具名函数方式
function add(num1:number, num2:number):number{
  return num1 + num2
}
const res1 = add(1, 5)
console.log(res1)

// 1-1. 单独指定参数和返回值的类型---函数表达式方式
const sum = (num1:number, num2:number):number => {
  return num1 + num2
}
const res2 = sum(10, 20)
console.log(res2)

// 1-2. 同时指定参数和返回值的类型(只适用于函数表达式形式)
const getRes : (num1:number, num2:number) => number = (num1, num2) => {
  return num1 + num2
}
const res3 = getRes(20, 39)
console.log(res3)

// 2. 函数参数问题：可选参数（可传可不传）
function mySlice(start:number, end?:number):void{
  console.log(start, end)
}
mySlice(1)