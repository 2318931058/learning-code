/*
  1. 枚举的功能类似于字面量类型+联合类型的组合，也可以表示一组明确的可选值。
  2. 枚举：定义一组命名常量，用于描述一个值（该值是命名常量中的一个）。
    1-1. 使用enum关键字定义枚举。
    1-2. 枚举中的值以逗号分隔。
    1-3. 定义好枚举后，直接使用枚举名称作为类型注解。
    1-4. 类似于js中的对象，通过 枚举名称.值 访问枚举的成员。
  3. 枚举是有值的，默认从零开始，依次加一。但可以手动给枚举成员赋值。
    3-1. 枚举成员的值是字符串的枚举称为字符串枚举（字符串没有默认值与自增长行为，必须给每个成员手动赋值）。
    3-2. 枚举成员的值是数字的枚举称为数字枚举。
  4. 注意事项：字面量+联合类型   与  枚举   均可用来表示一组明确的可选值列表，但不推荐使用枚举的方式。
  5. 枚举的原理可以通过将其转换为js代码查看
*/

// 枚举的原理
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));

function changeDirection(direction) {
    console.log(direction);
}
changeDirection(Direction.Right); // 3

// 给（数字）枚举成员赋值
var newDir;
(function (newDir) {
    newDir[newDir["a"] = 10] = "a";
    newDir[newDir["b"] = 11] = "b";
    newDir[newDir["c"] = 30] = "c";
})(newDir || (newDir = {}));
function changeNewDir(newdir) {
    console.log(newdir);
}
changeNewDir(newDir.b); // 11

// 给（字符串）枚举成员赋值
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "up";
    Direction1["Down"] = "down";
})(Direction1 || (Direction1 = {}));

function strDir(direction) {
    console.log(direction);
}

strDir(Direction1.Down);
