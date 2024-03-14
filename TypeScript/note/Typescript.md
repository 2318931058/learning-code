# TypeScript

## 简介

### 环境搭建

```
1. 安装ts：pnpm i -g typescript
2. 查看ts版本：tsc -v
3. 初始化一个tsconfig.json文件：tsc --init
3. 安装ts-node以在node中运行ts文件：pnpm i -g ts-node
4. 使用：新建.ts文件书写代码，在node中通过'ts-node 文件名'运行文件
```

### 疑问

1. ts和js的区别
2. Object和any的区别
3. any和unknown的区别
4. 谈谈你对泛型的理解
5. 谈谈你对void的理解
6. 哪些类型可以接受undefined类型的赋值：undefined、any、unknown
7. 哪些类型可以接收null类型的赋值：null、any、unknown

## JS中的类型

### 数值型

```typescript
const age : number = 18
```

### 布尔型

```typescript
const isTrue : boolean = false
```

### 字符串

```typescript
const userName : string = 'peiqi'
```

### null

> null表示什么都没有，是一个空对象引用

```typescript
const n : null = null

// ..................................................................................................................

// 只有null、any、unknown可以接受null类型的赋值，其余类型赋值null均报错
let a: null = null
let b: any = null
let c: unknown = null
```

### undefined

> undefined用于声明一个变量没有赋值

```typescript
const u : undefined = undefined

// ..................................................................................................................

// 只有undefined、any、unknown可以接受undefined类型的赋值，其余类型赋值undefined均报错
let d: undefined = undefined
let eb: any = undefined
let f: unknown = undefined

// ..................................................................................................................

// 注意：data?:string等同于data: string | undefined
let str: string
function fn(data?:string){
    // !表示忽略undefined
    data!.toString()
}
```

### symbol

```typescript
const s : symbol = Symbol()
```

### 对象

> 在一行代码中指定对象的多个属性时必须使用分号分隔，但如果一行只指定一个属性类型就不需要分号分隔

```typescript
// 基本使用
const person: { 
  // 问号表示可选参数
  name?: string
  age: number
  greet(name: string): void
 } = {
  name: "peiqi",
  age: 18,
  greet(name) {
    console.log("你好", name);
  },
};

// ..................................................................................................................

// readonly只读属性：可以用于对象、接口、类
let obj: { readonly name: string } = {
  name: "peiqi",
};
// obj.name = 'cat'   // 只读属性，无法赋值
```

### 数组

```typescript
// 方式一（推荐）
const arr1 : number[] = [1, 3, 4]   // 数值型数组

// ..................................................................................................................

// 方式二（不推荐）
const arr3 : Array<boolean> = [true, false]   // 布尔型数组

// ..................................................................................................................

// 数组及数组中的元素可读不可改
const arr4 = [1, 2, 4] as const
// arr4[0] = 100	// 报错
```

### 函数

```typescript
// 单独指定参数和返回值的类型---具名函数方式
function add(num1: number, num2: number): number {
  return num1 + num2;
}
const res1 = add(1, 5);
console.log(res1);

// ..................................................................................................................

// 单独指定参数和返回值的类型---函数表达式方式
const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};
const res2 = sum(10, 20);
console.log(res2);

// ..................................................................................................................

// 同时指定参数和返回值的类型---函数表达式方式
const getRes: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2;
};
const res3 = getRes(20, 39);
console.log(res3);

// ..................................................................................................................

// 同时指定参数和返回值的类型------具名函数方式

const getRes2: (num1: number, num2: number) => number = function (num1, num2) {
  return num1 + num2;
};
const res4 = getRes2(20, 39);
console.log(res4);

// ..................................................................................................................

// 函数参数问题：可选参数（可传可不传）
function mySlice(start: number, end?: number): void {
  console.log(start, end);
}
mySlice(1);

// ..................................................................................................................

// rest参数：不确定参数个数时使用
function Info(name: string, age: number, ...rest: any) {
  console.log(name, age, rest);
}
Info("peiqi", 18, "peideluo");

// ..................................................................................................................

// 函数参数解构
type deType = { username: string; age: number; love: boolean };
// 函数解构既可以解构全部参数，也可以只解构部分参数，但必须传递所有参数
function deconstruct({ username, age }: deType) {
  console.log(username, age);
}
// 必须传递所有参数
deconstruct({ username: "peiqi", age: 18, love: false });
```

## TS特有类型

### 根类型

> 根类型除了null和undefined以外均可赋值，可以使用Object表示。**需要与对象类型相区分！！！**

```typescript
// 方式一
let c : Object = 100
let d : Object = 'peiqi'
let e : Object = true
let f : Object = [1, 2, 3, 5]
// let a : Object = null							// 报错
// let b : Object = undefined						// 报错

// ..................................................................................................................

// 方式二：根类型除了可以使用Object表示，还可以使用 {} 表示
let i : {} = 100
let j : {} = 'peiqi'
let k : {} = true
let l : {} = [1, 2, 3, 5]
// let g : {} = null								// 报错
// let h : {} = undefined							// 报错

// ..................................................................................................................

// 注意事项：{}类型和{ xxx:yyy }是完全不同的概念
// let m : { username : string} = 2					// 报错
let n : { username : string} = {username : 'peiqi'}
```

### 枚举

> 枚举是一种用于存放一组固定的常量的序列，可以用来表示一组明确的可选值，其功能类似于 字面量类型+联合类型 的组合。

```typescript
// 基本使用：
enum Direction {Up, Down, Left, Right}
function changeDirection(direction:Direction){
  console.log(direction)
}
changeDirection(Direction.Right)  // 3

// ..................................................................................................................

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

// ..................................................................................................................

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
```

### 联合

> 联合类型：由两个或多个类型组成的类型，表示取值可以是这些类型中的任意一种

```typescript
let arr1 : (number | string)[] = [1, 3, 'peiqi', 6]
let str1 : string | boolean = '佩奇'
```

### 交叉

> 交叉类型：同种类型的数据值进行合并

```typescript
type Obj1 = { username: string }
type Obj2 = { age: number }
// 交叉类型：并非所有的类型都能进行交叉，如number和string就不能交叉
let Obj3 : Obj1 & Obj2 = {
    username: 'peiqi',
    age: 18
} 
```

### 接口

> 1. 当一个对象类型被多次使用时，一般会使用接口interface来描述对象的类型，达到复用的目的.
> 2. 类型别名与接口的区别
>    - 定义类型的范围不同：type可以定义任意类型数据。而接口只能定义对象或接口当名字的函数类型。
>    - 接口可以通过extends或使用类实现一个/多个接口，也可以继承type。但type没有继承功能。
>    - 用type交叉类型可以让类型中的成员合成一个新的type类型，但接口不能交叉合并。
>    - 名称相同的两个接口会合并，名称相同的两个type会出现编译错误

```typescript
// 基本使用
interface Person {
  name: string;
  age: number;
  greet(name: string): void;
}
const person1: Person = {
  name: "peiqi",
  age: 18,
  greet(name) {
    console.log("你好", name);
  },
};

// ..................................................................................................................

// 接口的继承：若两个接口之间具有相同的属性或方法，可以将公共部分抽离出来，通过继承实现复用
interface myOld {
  name: string;
  age: number;
}
interface myNew extends myOld {
  hobby: string[];
}
const latestPerson: myNew = {
  name: "peideluo",
  age: 22,
  hobby: ["吃饭", "睡觉"],
};

// ..................................................................................................................

// 为多个同类别的类提供统一的方法和属性声明
interface List {
  add() : void,
  remove() : void
}
class ArrayList implements List {
  add(): void {
    throw new Error("Method not implemented.");
  }
  remove(): void {
    throw new Error("Method not implemented.");
  }
}
class stringList implements List {
  add(): void {
    throw new Error("Method not implemented.");
  }
  remove(): void {
    throw new Error("Method not implemented.");
  }
}

// ..................................................................................................................

// readonly只读属性：可以用于对象、接口、类 
interface Clothes {
  readonly name: string;
}
let obj: Clothes = {
  name: "skirt",
};
// obj.name = 'cat'   // 只读属性，无法赋值

// ..................................................................................................................

// 可索引签名：不确定接口中有多少个属性时使用
interface pets {
  name: string,
  age: number,
  gender: string,
  // 可索引签名：左边格式是固定的，如果将string改为其它类型，则使用时必须使用指定类型。右边的类型必须兼容该接口中的其它类型，一般用any
  [x: string]: any
}

const dog : pets = {
  name: 'peiqi',
  age: 2,
  gender: 'male',
  // 以下内容可写可不写
  hobby: ['play']
}
```

### 元组

> 元组是另一种类型的数组，它明确知道包含多少个元素，以及每个元素索引对应的类型

```typescript
// 基本使用
const tuple1 : [number, number] = [1, 4]
const tuple2 : [number, string, boolean] = [1, 'peiqi', false]
console.log(tuple2[2])    // 取值

// ..................................................................................................................

// 可变元组(...any[]前面的是固定类型的数据，...any[]表示可以添加任意多个任意类型的数据)
const tuple3 : [string, number, ...any[]] = ['peiqi', 3, 'hello world']
const tuple4 : [number, boolean, ...any[]] = [2, true, 'peideluo']

// 可变元组的解构
const [username, age, ...rest] : [string, number, ...any[]] = ['peiqi', 3, 'hello world']
console.log(username, age, rest)

// ..................................................................................................................

// 元组标签
const tuple5 : [username: string, age: number, ...rest:any[]] = ['peiqi', 3, 'hello world']
console.log(tuple5)
// 元组解构名称与元组标签名称不需要完全相同
const [a, b, ...c] : [username: string, age: number, ...rest:any[]] = ['peiqi', 3, 'hello world']
console.log(a, b, c)
```

### 字面量

> 任意js字面量，如字符串、对象、数字等都可以作为字面量类型使用。通常与联合类型一同使用，用来表示一组明确的可选值的列表

```typescript
type dir = 'up' | 'down' | 'left' | 'right'
function changeDir(direction : dir){
  console.log(direction)
}
changeDir('left')   // 传入的参数必须是up、down、left和right的其中一个，否则报错
```

### 索引访问

```
const sym = Symbol('hello world')
interface Pets {
    name: string,
    age: number,
    well: boolean,
    // symbol类型作为属性名必须使用[]包裹
    [sym]: string
}

// 索引访问类型：获取接口中属性的类型
type a = Pets['name']
type b = Pets['name' | 'age']
type c = Pets['name' | 'age' | 'well']
type d = Pets[typeof sym]

// ..................................................................................................................

// 获取接口中所有的类型(泛型)
type allKeys<T> = T extends any?T:never
type keys = allKeys<keyof Pets>
```

### class类

> 类就是拥有相同属性和方法的一系列对象的集合。简单来说，类就是一个模具，是从该类中包含的所有的具体对象中抽象出来的一个概念。类中定义了全体对象的静态特征/属性和动态特征/方法。如：people类有name、age等静态特征和eat等动态特征。

```typescript
// 基本使用
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

// ..................................................................................................................

// 类的get和set：用于获取和设置值
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
console.log(p.petAge);		// 不符合条件会抛出错误

// ..................................................................................................................

// 类的静态成员：静态属性、静态方法
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

// ..................................................................................................................

// 单件/单例模式（一个类只允许外部获取其唯一的实例对象）
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

// ..................................................................................................................

// 类的继承

// 类的继承：extends（继承父类）
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

// ...........................................................

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

// ..................................................................................................................

// 类的可见性和只读属性（只能对属性使用，不能对方法使用；只读属性必须添加类型注解，否则表示字面量类型；）
class Clothes {
  public name: string; // 任意地方均可访问(默认)
  protected time: string; // 类自身和子类可访问，实例对象也不行
  private quantity: string; // 仅类自身可访问，子类和实例对象也不行
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

// ..................................................................................................................

// keyof属性：获取类、对象或接口类型的所有属性名组成的联合类型
class allkeys {
  username: string = 'peiqi'
  age: number = 18
  isMan: boolean = true
}
type allkeysType = keyof allkeys
let username: allkeysType = "username"
let age: allkeysType = "age"
let isMan: allkeysType = "isMan"
console.log('username, age, isMan：', username, age, isMan)

// ..................................................................................................................

// 举例：用泛型和泛型约束获取类中所有属性名组成的类型
type allTypes<T> = T extends any?T:never
type keys = allTypes<keyof allkeys>
```

### never

> 1. never的含义是：任何值都不是，简言之就是不能有值，即使是undefined和null也不行！
> 2. 使用never类型就是为了避免未来扩展新的类型没有对应类型的实现，写出绝对安全的代码
> 3. 几乎不用never去直接限制变量，因为没有任何意义（对所有赋值都会有警告）

```typescript
// never可以用于限制函数的返回值：如限制函数无任何返回值，包括null和undefined
function demo ():never {
  throw new Error('程序异常退出')
}

// ..................................................................................................................

// type dataFlow = string | number
type dataFlow = string | number | boolean

function dataFlowAnalysisWithNever (data: dataFlow){
    if( typeof data === 'string' ){
        // 判断为string类型，ts会自动只能使用string的方法
        console.log('string', data.length)
    } else if ( typeof data === 'number' ){
        // 判断为number类型，ts会自动只能使用number的方法
        console.log('number', data.toFixed(2))
    }else {
        // 使用never类型就是为了避免未来扩展新的类型没有对应类型的实现，写出绝对安全的代码
        // let other = data         // 若上方的 type dataFlow = string | number不变，则data则为never类型
        let other = data            // 若上方的 type dataFlow = string | number | boolean，则data则为boolean类型
    }
}
```

### any

> 1. 任何可以使用unknown的地方都能使用any，反之错误
> 2. 使用any后会自动关闭类型检测
> 3. 应用场景：自定义守卫（vue3源码）；需要进行as any类型断言的场景

```typescript
// any可以是任何类的父类，即任何类型的变量都可以赋值给any类型(包括null和undefined)
let a : number = 3
let b : any = a

let c : undefined = undefined
let d : any = c

let e : null = null
let f : any = e

// ..................................................................................................................

// any也可以是任何类的子类，即any类型的变量都可以赋值给其它类型的变量(包括null和undefined)
let g : any = 'peiqi'
let h : string = g
let i : undefined = g
let j : null = g

// ..................................................................................................................

// any类型的变量可以获取任意名称的属性和方法
function getData (data: any) {
    console.log(data.name)
}
getData({name:'peiqi'})
```

### void

> 1. void的含义是：null或者undefined，但在严格模式下不能将null赋值给void。
> 2. void多用于限制函数的返回值

```typescript
function myFunc():void{
  console.log('hello ts')
}
myFunc()
```

### unknown

> 1. 任何可以使用unknown的地方都能使用any，反之错误
> 2. unknown一般用作函数参数：用来接收任意类型的变量实参，但在函数内部只用于再次传递或输出结果，不获取属性的场景

```typescript
// unknown可以是任何类的父类，即任何类型的变量都可以赋值给unknown类型(包括null和undefined)
let a : number = 3
let b : unknown = a

let c : undefined = undefined
let d : unknown = c

let e : null = null
let f : unknown = e

// ..................................................................................................................

// unknown不能是任何类的子类
let g : unknown = 'peiqi'
// let h : string = g
// let i : undefined = g
// let j : null = g

// ..................................................................................................................

// unknown类型的变量不可以获取任意名称的属性和方法
// function getData (data: unknown) {
//     console.log(data.name)
// }
// getData({name:'peiqi'})
```

### 泛型

> 泛型是一种定义时不明确、使用时必须明确成某种具体类型数据且编译期间进行数据类型检查的数据类型。

```typescript
// 基本使用：例1
interface base1<T> {
    value: T
}
const myVal1: base1<string> = {
    value: 'peiqi'
}

// ---------------------------------------------

// 基本使用：例2
interface base2<T> {
    value: T
}
type PersonInfo = {
    name: string
    age: number
}
const myVal2: base2<PersonInfo> = {
    value: {name: 'peideluo', age: 18}
}

// ..................................................................................................................

// 泛型的默认值：若在使用时不指定具体的类型，ts会默认为unknown类型，可以通过以下方式指定默认类型
interface defau1<T=any> {
    value: T
}
// 使用时不指定类型就为默认类型
const myDefau1:defau1 = {
    value: 'haxi'
}

// ..................................................................................................................

// 结合类使用
class InfoClass<T> {
    arr: Array<T>
    index: number = 0
    constructor() {
        this.arr = []
    }
    add(ele: T){
        this.arr[this.index++] = ele
    }
    get(index: number) {
        return this.arr[index]
    }
}
let arr1 = new InfoClass<string>()
arr1.add('peiqi')
console.log(arr1.arr)
console.log(arr1.get(0))

// ..................................................................................................................

// 泛型约束(举例：用泛型和泛型约束获取类中所有属性名组成的类型)
class info {
    name: string = 'peiqi'
    age: number = 18
}
// 使用extends关键字进行泛型约束
type allTypes<T> = T extends any?T:never
type keys = allTypes<keyof info>
```

## 其它

### 类型注解

> 类型注解：为变量添加类型约束，语法为     variable : dataType

```typescript
let age : number = 18
// age = '佩奇'        // 若给其它类型就报错
console.log('age', age)
```

### 类型推导

> 1. 类型推导：ts可以根据赋值推断出值的类型
> 2. 类型注解与类型推导的区别：类型注解是定义时主动规定数据类型，类型推断是数据赋值后由ts自动推断出数据类型；

```typescript
let age = 100
// d = 'peiqi'         // 推断出类型后不可重新赋值其它类型数据，否则报错
```

### 类型断言

> 1. 类型断言：绕过ts编译检查，即告诉编译器："我就是这个类型了，不用检查"。
> 2. 使用场景：有时你会比ts更加明确一个值的类型，此时，可以使用类型断言来指定更具体的类型。通过类型断言，可以使类型变得更具体，从而访问标签的特有属性或方法。如getElementById方法返回值的类型是HTMLElement，但不包含a标签特有的href等属性，因此无法操作href等标签特有的属性或方法。其解决方法就是使用类型断言指定更加具体的类型。
> 3. 使用方式：使用as关键字实现类型断言，as后面的类型是一个更加具体的类型，如a标签对应的HTMLAnchorElement、div标签对应的HTMLDivElement等。
> 4. 注意：在浏览器控制台可以通过console.dir()打印dom元素，在属性列表的最后面即可看到该元素的类型

```typescript
// 方式一：
const a = document.getElementById('myA')
// a.href    // 报错

const b = document.getElementById('myA') as HTMLAnchorElement
b.href

// ..................................................................................................................

// 方式二：有bug、不推荐
const c = <HTMLAnchorElement>document.getElementById('myA')
// c.href
```

### 类型别名

> 1. 类型别名type，又称自定义类型，可以为任意类型起别名。当同一类型被多次使用时，可以通过类型别名简化该类型的使用。
> 2. 类型别名与接口的区别
>    * 定义类型的范围不同：type可以定义任意类型数据。而接口只能定义对象或接口当名字的函数类型。
>    * 接口可以通过extends或使用类实现一个/多个接口，也可以继承type。但type没有继承功能。
>    * 用type交叉类型可以让类型中的成员合成一个新的type类型，但接口不能交叉合并。
>    * 名称相同的两个接口会合并，名称相同的两个type会出现编译错误

```typescript
type CustomArray = (number | boolean)[]
const arr1 : CustomArray = [1, 3, true, false]
const arr2 : CustomArray = [false, false, 4, 6]
```

### typeof方法

```typescript
// 作用一：获取数据的类型
console.log(typeof 'hello world')

// ..................................................................................................................

// 作用二：获取已有变量的类型，简化类型书写
let p = {x:'peiqi', y:18}

// function Info(info:{x:string, y:number}){
//   console.log(info)
// }

function Info(info:typeof p){
  console.log(info)
}
// 以上两种形式等同
Info(p)

// ..................................................................................................................

// 注意：typeof只能用来查询变量或属性的类型，无法查询其它形式的类型（如函数调用的类型）
let res1 : typeof p.x
// let res2 : typeof Info(p)    // 报错
```

### 类型兼容性

1. 结构化类型系统包含两种：

   - 结构化类型系统Structural Type System，也叫鸭子类型duck typing，其类型检查关注的是值所具有的形状。也就是说，在该系统中，若两个对象具有相同的形状，则认为他们属于同一类型。

   - 标明类型系统Nominal Type System，如C#、java等语言中，即使两个类具有相同的形状，也是不同的类，类型无法兼容。

2. 类与类可以兼容,接口与接口可以兼容,类和接口也可以兼容.

3. 函数之间的兼容需要考虑三个要素
   - 参数个数:参数少的可以赋值给参数多的(原因是js中经常会省略一些用不到的参数).
   - 参数类型:相同位置的参数类型要相同(简单类型)或兼容(对象类型)---看下方例子
   - 返回值类型:简单类型只需返回值类型相同即可,对象类型按照'成员多的可以赋值给成员少'的规则即可.

```typescript
// 结构化类型系统:成员多的可以赋值给类型少的(对象的兼容)
class Person1 {
  x: number = 1
  y: number = 2
}
class Person2 {
  x: number = 3
  y: number = 4
  z: number = 5
}
// 解释：Person2拥有Person1的全部属性，所以Person2可以给Person1赋值，但反之不行
const p1: Person1 = new Person2();

// ..................................................................................................................

// 接口兼容性：参数多的可以赋值给参数少的
interface Person3 {
  x: number;
  y: number;
}
interface Person4 {
  x: number;
  y: number;
}
interface Person5 {
  x: number;
  y: number;
  z: number;
}
let p3: Person3 = {
  x: 1,
  y: 2,
};
let p4: Person4 = {
  x: 3,
  y: 4,
};
let p5: Person5 = {
  x: 5,
  y: 6,
  z: 7,
};
p3 = p4;
p4 = p3;
p3 = p5;
// p5 = p3    // 报错, p3比p5少了z属性

// ..................................................................................................................

// class和接口之间可以相互兼容
class Person6 {
  x: number = 6
  y: number = 7
}
interface Person7 {
  x: number;
  y: number;
}
let p6: Person7 = new Person6();

// ---------------------------------------------------------------------------------------------

// 函数间的兼容---参数个数的影响(参数少的可以赋值给参数多的)
type T1 = (a: number) => void;
type T2 = (a: number, b: number) => void;
let t1: T1 = function (a) {
  console.log("t1");
};
let t2: T2 = function (a, b) {
  console.log("t2");
};
t2 = t1;
// t1 = t2   报错,参数多的不能赋值给参数少的

// ..................................................................................................................

// 函数间的兼容(简单类型)---参数类型:相同位置的参数类型要相同(简单类型)或兼容(对象类型)
type T3 = (a: number) => void;
type T4 = (a: number) => void;
let t3: T3 = function (a) {
  console.log("t3");
};
let t4: T4 = function (a) {
  console.log("t4");
};
t3 = t4; // 因为类型相同,所以可以兼容.
t4 = t3; // 若一个number/一个string或其它两种不同类型.则不可兼容

// ..................................................................................................................

// 函数间的兼容(对象类型)
interface T5 {
  x: number;
  y: number;
}
interface T6 {
  x: number;
  y: number;
  z: number;
}
type T7 = (p: T5) => void;
type T8 = (p: T6) => void;
let t7: T7 = function (a) {
  console.log("t7");
};
let t8: T8 = function (a) {
  console.log("t8");
};
// 此处不能使用接口间的兼容规则,而是要把接口中对象的每个属性看作一个个参数
// t7 = t8    // 报错,参数多的不能赋值给参数少的
t8 = t7;

// ..................................................................................................................

// 函数间的兼容性(简单类型)---返回值类型:简单类型只需返回值类型相同即可,对象类型按照'成员多的可以赋值给成员少'的规则即可.
type T9 = () => number;
type T10 = () => number;
let t9: T9 = () => {
  return 3;
};
let t10: T10 = () => {
  return 4;
};
t9 = t10;
t10 = t9;

// ..................................................................................................................

// 函数间的兼容性(对象类型)
type T11 = () => { name: string };
type T12 = () => { name: string; age: number };
let t11: T11 = function () {
  return { name: "peiqi" };
};
let t12: T12 = function () {
  return { name: "peiqi", age: 20 };
};
t11 = t12;
// t12 = t11      // 报错,成员少的不能赋值给成员多的
```

