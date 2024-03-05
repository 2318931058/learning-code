// 方式一（推荐）
const arr1 : number[] = [1, 3, 4]   // 数值型数组
const arr2 : string[] = ['peiqi', 'xiaozhu']  // 字符串型数组

console.log(arr1, arr2)
// ..............................................................

// 方式二（不推荐）
const arr3 : Array<boolean> = [true, false]   // 布尔型数组
console.log(arr3)