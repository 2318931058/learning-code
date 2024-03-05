// 联合类型：由两个或多个其它欸行组成的类型，表示可以是这些类型中的任意一种。

// 需求：数组中既有number类型，又有string类型
let arr1 : (number | string)[] = [1, 3, 'peiqi', 6]

console.log(arr1)