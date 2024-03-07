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