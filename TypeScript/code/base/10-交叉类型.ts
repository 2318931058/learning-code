// 交叉类型：同种类型的数据值进行合并

// 使用type定义两个类型
type Obj1 = { username: string }
type Obj2 = { age: number }

// 交叉类型：并非所有的类型都能进行交叉，如number和string就不能交叉
let Obj3 : Obj1 & Obj2 = {
    username: 'peiqi',
    age: 18
} 