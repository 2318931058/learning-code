/*
  1. 定义：类就是拥有相同属性和方法的一系列对象的集合；
  2. 理解：类是一个模具，是从该类中包含的所有的具体对象中抽象出来的一个概念。类中定义了全体对象的静态特征(属性)和动态特征(方法)。
  3. 举例：people类有name、age等静态特征和eat等动态特征。
*/

// ............................................................................................

// 1. 基本使用
class Panda {
  // 可以通过赋值符号=给静态属性赋初始值，有初始值可以根据类型推论判断类型
  name: string;
  age: number;
  // 没有初始值就要有类型--除非变为可选参数或用!忽略undefined
  gender?: string;
  nation!: string;
  // 不能为构造函数指定返回值类型
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  eat(foods: string[]) {
    console.log(foods);
  }
}
let panda1 = new Panda("fubao", 3);
panda1.eat(["萝卜", "白菜"]);
console.log(panda1);

// ............................................................................................

// 2. 类的get和set
class Pets {
  name: string;
  age: number = 1;
  constructor(name: string) {
    this.name = name;
  }
  // get用于获取，set用于设置
  get petAge() {
    return this.age;
  }
  set petAge(val: number) {
    if (val > 10 && val < 120) {
      this.age = val;
    } else {
      throw new Error("年龄过大或过小");
    }
  }
}

let p = new Pets("dog");
p.petAge = 201;
console.log(p.petAge);

// ............................................................................................

// 3. 类的静态成员：静态属性、静态方法
class Person {
  name: string;
  // 静态属性：整个 类 共有的属性，可以通过 类名.静态属性名 访问静态属性
  static age: number = 18;
  // 静态方法
  static eat(foods: string[]) {
    console.log(foods);
  }
  constructor(name: string) {
    this.name = name;
  }
}
let Person1 = new Person("peiqi");
Person.eat(["萝卜", "白菜"]);
console.log(Person.age);
console.log(Person1);

// ............................................................................................

// 4. 单件/单例模式（一个类只允许外部获取其唯一的实例对象）
// 方式一：立即/饿汉式创建单件模式
class Utils1 {
  static utils = new Utils1();
  method1() {
    console.log("method1");
  }
  method2() {
    console.log("method2");
  }
}
// export default Utils1.utils

// 方式二
class Utils2 {
  static utils: Utils2;
  private constructor() {
    console.log("创建对象···");
  }
  static getInstance() {
    if (!this.utils) {
      this.utils = new Utils2();
    }
    return this.utils;
  }
}

const a = Utils2.getInstance();
const b = Utils2.getInstance();
console.log(a === b);

// ............................................................................................

// 5. 类的继承

// 5.1 类的继承：extends（继承父类）
class Animal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Dog extends Animal {
  bark() {
    console.log(`${this.name}汪汪汪`);
  }
}
let dog1 = new Dog("peiqi", 2);
console.log(dog1);
dog1.bark();

// ..........................................................

// 类的继承：implements（实现接口）---ts特有
interface Singable {
  sing(): void;
}
// 若要实现接口继承就必须提供接口中的所有方法/属性
// 通过 implements 关键字让 class 实现接口
class newPer implements Singable {
  sing() {
    console.log("sing");
  }
}
let newperq = new newPer();
console.log(newperq);

// ............................................................................................

// 6. 类的可见性
class Clothes {
  public name: string; // public任意地方均可访问(默认)
  protected time: string; // 自身和子类可访问，实例对象也不行
  private quantity: string; // 仅自身可访问，子类和实例对象也不行
  // readonly只读修饰符：除了默认值和构造函数中修改属性，其余地方均不可修改
  readonly isPurchase: boolean;

  constructor(
    name: string,
    time: string,
    quantity: string,
    isPurchase: boolean
  ) {
    this.name = name;
    this.time = time;
    this.quantity = quantity;
    this.isPurchase = isPurchase;
  }
}
class Cats extends Clothes {
  comments() {
    // 子类可访问公共属性/方法和受保护的属性/方法
    console.log(`我太喜欢${this.time}买的这个的${this.name}了`);
    // console.log(`${this.name}太${this.quantity}了`)  // 私有属性只有自身才能访问，此处报错
  }
}
const t1 = new Cats("太阳帽", "2023年", "beautiful", true);
t1.comments();
// console.log(t1.time)   // 实例对象无法访问受保护的属性/方法
console.log(t1.name);
// t1.isPurchase = false  // 只读属性只有在构造函数中才能修改

// ............................................................................................

export {};
