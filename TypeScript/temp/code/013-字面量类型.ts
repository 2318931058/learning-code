/*
  1. 任意js字面量，如字符串、对象、数字等都可以作为字面量类型使用。
  2. 使用场景：通常与联合类型一同使用，用来表示一组明确的可选值的列表。
  3. 注意事项：字面量+联合类型   与  枚举   均可用来表示一组明确的可选值列表，但不推荐使用枚举的方式。
*/
let a = 'peiqi'       // string
const b = 'peiqi'     // peiqi字面量

// 使用场景
function changeDir(direction:'up' | 'down' | 'left' | 'right'){
  console.log(direction)
}
changeDir('left')   // 传入的参数必须是up、down、left和right的其中一个，否则报错