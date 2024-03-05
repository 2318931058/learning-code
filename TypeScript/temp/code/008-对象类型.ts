/*
  1. js中的对象是由属性和方法构成的，而ts中对象的类型就是在描述对象的解构（有什么类型的属性和方法）。
    1-1. 直接使用{}来描述对象结构。属性采用 属性名:类型 的形式，方法采用 方法名():返回值类型 的形式。
    1-2. 若方法有参数，就在方法名后面的小括号中指定参数类型，如：greet(name:string):void
    1-3. 在一行代码中指定对象的多个属性时必须使用分号分隔，但如果一行只指定一个属性类型就不需要分号分隔。
    1-4. 方法的类型也可以使用箭头函数形式，如：sayHi:()=>void
  2. 可选属性：可选属性的语法与函数的可选参数语法一直，都是使用问号来表示。
  3. readonly只读属性：可以用于{}的对象、接口、类
*/

// 方式一：
const person1 : {
  name : string
  age : number
  greet(name:string):void
} = {
  name:'peiqi',
  age:18,
  greet(name){
    console.log('你好', name)
  }
}

// 方式二：
const person2 : {name:string; age:number; greet(name:string):void} = {
  name:'peideluo',
  age:10,
  greet(name){
    console.log('你好', name)
  }
}

console.log(person1, person2)

// readonly只读属性
let obj : {readonly name:string} = {
  name:'peiqi'
}
// obj.name = 'cat'   // 只读属性，无法赋值