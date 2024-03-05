/* 
  1. ts中的class具有js中的class的全部的功能，并且还可以作为一种类型存在。
  2. ts中类的继承包含两种：extends继承父类和implements实现接口
  3. 类成员的可见性：使用 TS 来控制 class 的方法或属性对于 class 外的代码是否可见
    3-1. public（默认）：在类属性或方法前面添加public关键字，表示该属性和方法是共有的（任意地方均可访问）。
    3-2. protected：在类属性或方法前面添加protected关键字，表示该属性和方法是受保护的（只有其声明的类和子类中可访问，即使是实例对象也无法访问）。
    3-3. private：在类属性或方法前面添加private关键字，表示该属性和方法是私有的（只有其声明的类可访问，子类和实例对象也无法访问）
  4. readonly：只读修饰符，用来表示在构造函数之外对属性进行赋值
      4-1. 只能对属性使用，不能对方法使用。
      4-2. 接口或者{}表示的对象类型也可以使用readonly
      4-3. 只读属性不加类型注解表示字面量类型，也就是说只读属性必须添加类型注解
*/

// 初始化
class Person {
  age = 2  // 有初始值可以根据类型推论判断类型
  // gender:string   // 没有初始值就一定要有类型
  computer(n:number){
    this.age *=  n
    console.log(this.age)
  }
}
let p1 = new Person()
p1.computer(10)


// 构造函数
class Panda {
  name:string
  age:number
  // 不能为构造函数指定返回值类型
  constructor(name:string, age:number){
    this.name = name
    this.age = age
  }
}
let panda1 = new Panda('fubao', 3)
console.log(panda1)

// 类的继承：extends（继承父类）
class Animal {
  name:string
  age:number
  constructor(name:string, age:number){
    this.name = name
    this.age = age
  }
}
class Dog extends Animal {
  bark(){
    console.log(`${this.name}汪汪汪`)
  }
}
let dog1 = new Dog('peiqi', 2)
console.log(dog1)
dog1.bark()

// 类的继承：implements（实现接口）---ts特有
interface Singable {
  sing():void
}
// 若要实现接口继承就必须提供接口中的所有方法/属性
// 通过 implements 关键字让 class 实现接口
class newPer implements Singable {
  sing(){
    console.log('sing')
  }
}
let newperq = new newPer()
console.log(newperq)


// 类的可见性
class Clothes{
  public name:string  // public任意地方均可访问(默认)
  protected time:string // 自身和子类可访问，实例对象也不行
  private quantity : string // 仅自身可访问，子类和实例对象也不行
  // readonly只读修饰符：除了默认值和构造函数中修改属性，其余地方均不可修改
  readonly isPurchase : boolean

  constructor(name:string, time:string, quantity:string, isPurchase:boolean){
    this.name = name
    this.time = time
    this.quantity = quantity
    this.isPurchase = isPurchase
  }
}
class Cats extends Clothes {
  comments(){
    // 子类可访问公共属性/方法和受保护的属性/方法
    console.log(`我太喜欢${this.time}买的这个的${this.name}了`)
    // console.log(`${this.name}太${this.quantity}了`)  // 私有属性只有自身才能访问，此处报错
  }
}
const t1 = new Cats('太阳帽', '2023年', 'beautiful', true)
t1.comments()
// console.log(t1.time)   // 实例对象无法访问受保护的属性/方法
console.log(t1.name)
// t1.isPurchase = false  // 只读属性只有在构造函数中才能修改