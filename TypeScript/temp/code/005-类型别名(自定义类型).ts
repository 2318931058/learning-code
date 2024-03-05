/* 
  1. 类型别名（自定义类型）：为任意类型起别名。
  2. 使用场景：当同一（复杂）类型被多次使用时，可以通过类型别名简化该类型的使用。
  3. 语法：使用type关键字创建类型别名后直接使用类型别名作为变量的类型注解即可。
  4. 注意：类型别名可以自定义，如：CustomArray
  5. 接口与类型别名（自定义类型）的异同：
    5-1：相同点：都可以为对象指定类型。
    5-2：不同点：接口只能给对象指定类型，类型别名可以为任意类型指定别名。
*/


type CustomArray = (number | boolean)[]

const arr1 : CustomArray = [1, 3, true, false]
const arr2 : CustomArray = [false, false, 4, 6]

console.log(arr1, arr2)

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

// 使用接口为对象指定类型
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
console.log(person1)