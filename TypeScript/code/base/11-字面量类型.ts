// 任意js字面量，如字符串、对象、数字等都可以作为字面量类型使用。通常与联合类型一同使用，用来表示一组明确的可选值的列表。
type dir = 'up' | 'down' | 'left' | 'right'
function changeDir(direction : dir){
  console.log(direction)
}
changeDir('left')   // 传入的参数必须是up、down、left和right的其中一个，否则报错

export {}