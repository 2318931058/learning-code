/*
  1. 结构化类型系统包含两种：
    1-1. 结构化类型系统Structural Type System，也叫鸭子类型duck typing，其类型检查关注的是值所具有的形状。也就是说，在该系统中，若两个对象具有相同的形状，则认为他们属于同一类型。
    1-2. 标明类型系统Nominal Type System，如C#、java等语言中，即使两个类具有相同的形状，也是不同的类，类型无法兼容。
  2. 类与类可以兼容,接口与接口可以兼容,类和接口也可以兼容.
  3. 函数之间的兼容需要考虑三个要素
    3-1. 参数个数:参数少的可以赋值给参数多的(原因是js中经常会省略一些用不到的参数).
    3-2. 参数类型:相同位置的参数类型要相同(简单类型)或兼容(对象类型)---看下方例子
    3-3. 返回值类型:简单类型只需返回值类型相同即可,对象类型按照'成员多的可以赋值给成员少'的规则即可.

*/

// ---------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------

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

// ------------------------------------------------------------------

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

// ------------------------------------------------------------------

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

// ------------------------------------------------------------------

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

// ------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------

export {};