// 任何可以使用unknown的地方都能使用any，反之错误

// any可以是任何类的父类，即任何类型的变量都可以赋值给any类型(包括null和undefined)
let a : number = 3
let b : any = a

let c : undefined = undefined
let d : any = c

let e : null = null
let f : any = e

// any也可以是任何类的子类，即any类型的变量都可以赋值给其它类型的变量(包括null和undefined)
let g : any = 'peiqi'
let h : string = g
let i : undefined = g
let j : null = g





// any类型的变量可以获取任意名称的属性和方法
function getData (data: any) {
    console.log(data.name)
}
getData({name:'peiqi'})


// 应用场景：自定义守卫（vue3源码）；需要进行as any类型断言的场景

export {}