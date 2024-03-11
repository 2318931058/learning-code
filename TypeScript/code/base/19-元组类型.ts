/* 
  元组是另一种类型的数组，它明确知道包含多少个元素，以及特定元素索引对应的类型
    * 在定义时每个元素的类型都确定；
    * 元素值的数据类型必须是当前元素定义的类型；
    * 元素值的个数必须和定义时个数相同；

*/

// ............................................................................................

// 1. 基本使用
const tuple1 : [number, number] = [1, 4]
const tuple2 : [number, string, boolean] = [1, 'peiqi', false]
console.log(tuple2[2])    // 取值

// ............................................................................................

// 2. 可变元组(...any[]前面的是固定类型的数据，...any[]表示可以添加任意多个任意类型的数据)
const tuple3 : [string, number, ...any[]] = ['peiqi', 3, 'hello world']
const tuple4 : [number, boolean, ...any[]] = [2, true, 'peideluo']

// 可变元组的解构
const [username, age, ...rest] : [string, number, ...any[]] = ['peiqi', 3, 'hello world']
console.log(username, age, rest)

// ............................................................................................

// 3. 元组标签
const tuple5 : [username: string, age: number, ...rest:any[]] = ['peiqi', 3, 'hello world']
console.log(tuple5)
// 元组解构名称与元组标签名称不需要完全相同
const [a, b, ...c] : [username: string, age: number, ...rest:any[]] = ['peiqi', 3, 'hello world']
console.log(a, b, c)

// ............................................................................................

export {}