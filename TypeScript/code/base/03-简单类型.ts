// 数值型
const age : number = 18

// .......................................................................................

// 字符串型
const userName : string = 'peiqi'

// .......................................................................................

// 布尔型
const isTrue : boolean = false

// .......................................................................................

// null：null表示什么都没有，是一个空对象引用，
const n : null = null

// 只有null、any、unknown可以接受null类型的赋值
// let str: string = null
let a: null = null
let b: any = null
let c: unknown = null

// .......................................................................................

// undefined：声明一个变量没有赋值，
const u : undefined = undefined

// 只有undefined、any、unknown可以接受undefined类型的赋值
// let str: string = undefined
let d: undefined = undefined
let eb: any = undefined
let f: unknown = undefined

// data?:string等同于data: string | undefined
let str: string
function fn(data?:string){
    // !表示忽略undefined
    data!.toString()
}

// .......................................................................................

// symbol
const s : symbol = Symbol()

// .......................................................................................

export {}