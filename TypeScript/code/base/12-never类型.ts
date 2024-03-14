// never的含义是：任何值都不是，简言之就是不能有值，即使是undefined和null也不行！

// 几乎不用never去直接限制变量，因为没有任何意义（对所有赋值都会有警告）

// 使用never类型就是为了避免未来扩展新的类型没有对应类型的实现，写出绝对安全的代码

// never可以用于限制函数的返回值：如限制函数无任何返回值，包括null和undefined
function demo ():never {
    throw new Error('程序异常退出')
}

// ............................................................................................

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

// ............................................................................................

export {}