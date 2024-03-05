// 类型注解：为变量添加类型约束，语法为     variable : dataType
let age : number = 18
// age = '佩奇'        // 若给其它类型就报错
console.log('age', age)

// .......................................................................................

// 类型注解练习：参数x、参数y及函数返回值都必须是number类型
function temp(x : number, y : number) : number {
    return x + y
}
let res = temp(100, 200)          // 参数的个数、类型必须与定义时相一致
console.log('res', res)

// .......................................................................................

// 正常情况下，ts中的变量名都为全局变量名，若想让某文件中的变量名只在本文件生效，可以
export {}