// 当一个对象类型被多次使用时，一般会使用接口interface来描述对象的类型，达到复用的目的

// 接口名称重复时会发生合并现象

// 定义接口：
interface Person {
  name: string;
  age: number;
  greet(name: string): void;
}
// 使用接口
const person1: Person = {
  name: "peiqi",
  age: 18,
  greet(name) {
    console.log("你好", name);
  },
};

// ............................................................................................

// 使用类型别名为对象指定类型
type newPerson = {
  name: string;
  age: number;
};
const person3: newPerson = {
  name: "wangzai",
  age: 20,
};

console.log(person3);

// ............................................................................................

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

// ............................................................................................

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

// ............................................................................................

// readonly只读属性：可以用于{}的对象、接口、类 
interface Clothes {
  readonly name: string;
}
let obj: Clothes = {
  name: "skirt",
};
// obj.name = 'cat'   // 只读属性，无法赋值

// ............................................................................................

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

// ............................................................................................

export {};
