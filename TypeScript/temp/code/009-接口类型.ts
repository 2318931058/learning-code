/*
  1. 当一个对象类型被多次使用时，一般会使用接口interface来描述对象的类型，达到复用的目的。
    1-1. 使用interface关键字来声明接口。
    1-2. 接口名称可以是任意的合法的变量名称，如Person
    1-3. 声明接口后直接使用接口名称作为变量的类型。
    1-4. 因为每行只有一个属性类型，因此，属性类型后没有分号。
  2. 接口与类型别名（自定义类型）的异同：
    2-1：相同点：都可以为对象指定类型。
    2-2：不同点：接口只能给对象指定类型，类型别名可以为任意类型指定别名。
  3. 接口的继承：若两个接口之间具有相同的属性或方法，可以将公共部分抽离出来，通过继承实现复用。
    3-1. 使用extends关键字实现两个接口间的继承。
    3-2. 继承后，（假设b继承了a），b就有了a的全部属性/方法。
  4. readonly只读属性：可以用于{}的对象、接口、类  

*/

interface Person {
  name:string
  age:number
  greet(name:string):void
}

const person1 : Person = {
  name:'peiqi',
  age:18,
  greet(name){
    console.log('你好', name)
  }
}

const person2 : Person = {
  name:'peideluo',
  age:38,
  greet(name){
    console.log('你好', name)
  }
}
console.log(person1, person2)

// 使用类型别名为对象指定类型
type newPerson = {
  name: string
  age: number
}
const person3 : newPerson = {
  name:'wangzai',
  age:20
}

console.log(person3)


// 接口的继承
interface old {
  name:string
  age:number
}
interface latestOld extends old {
  hobby:string[]
}
const oldPerson : old = {
  name:'peiqi',
  age:18
}
const latestPerson :latestOld = {
  name:'peideluo',
  age:22,
  hobby:['吃饭', '睡觉']
}
console.log(oldPerson)
console.log(latestPerson)


// 接口的只读属性
interface Clothes {
  readonly name : string
}
let obj : Clothes = {
  name:'skirt'
}
// obj.name = 'cat'   // 只读属性，无法赋值