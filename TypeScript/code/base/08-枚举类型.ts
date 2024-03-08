// 枚举是一种用于存放一组固定的常量的序列，可以用来表示一组明确的可选值，其功能类似于 字面量类型+联合类型 的组合。

// 普通使用：
enum Direction {Up, Down, Left, Right}
function changeDirection(direction:Direction){
  console.log(direction)
}
changeDirection(Direction.Right)  // 3

// ............................................................................................

/* 
  数字枚举：
    1. 有默认值和自增值，可以赋值也可以不赋值：默认从零开始，依次加一。
    2. 可以由value取key，反之错误
*/
enum newDir {a=10, b, c=30}
function changeNewDir(newdir:newDir){
  console.log(newdir)
}
changeNewDir(newDir.b)    // 11

// ............................................................................................

/* 
  字符串枚举：
    1. 没有默认值与自增长行为，必须给每个成员手动赋值
    2. 既可以由value取key，也可以由key取value
*/
enum Direction1 {Up='up', Down='down'}
function strDir(direction:Direction1){
  console.log(direction)
}
strDir(Direction1.Down)

// ............................................................................................

export {}