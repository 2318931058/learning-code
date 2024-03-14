// void的含义是：null或者undefined，但在严格模式下不能将null赋值给void。

// void多用于限制函数的返回值

function myFunc():void{
  console.log('hello ts')
}
myFunc()

export {}