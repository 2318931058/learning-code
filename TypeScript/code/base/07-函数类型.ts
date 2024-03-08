// 1. 单独指定参数和返回值的类型---具名函数方式
function add(num1: number, num2: number): number {
  return num1 + num2;
}
const res1 = add(1, 5);
console.log(res1);

// ..........................................................................

// 2. 单独指定参数和返回值的类型---函数表达式方式
const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};
const res2 = sum(10, 20);
console.log(res2);

// ..........................................................................

// 3. 同时指定参数和返回值的类型---函数表达式方式
const getRes: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2;
};
const res3 = getRes(20, 39);
console.log(res3);

// ..........................................................................

// 4. 同时指定参数和返回值的类型------具名函数方式

const getRes2: (num1: number, num2: number) => number = function(num1, num2) {
  return num1 + num2;
};
const res4 = getRes2(20, 39);
console.log(res4);

// ..........................................................................

// 5. 函数参数问题：可选参数（可传可不传）
function mySlice(start: number, end?: number): void {
  console.log(start, end);
}
mySlice(1);

// ..........................................................................

// 6. rest参数
function Info(name: string, age: number, ...rest: any){
  console.log(name, age, rest)
}
Info('peiqi', 18, 'peideluo')

// ..........................................................................

export {};
