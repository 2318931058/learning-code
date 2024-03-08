// 普通使用
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

// ............................................................................................

// 数字枚举
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

// ............................................................................................

// 字符串枚举
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "up";
    Direction1["Down"] = "down";
})(Direction1 || (Direction1 = {}));

function strDir(direction) {
    console.log(direction);
}

strDir(Direction1.Down);
