/* 
    定义：是一种定义时不明确、使用时必须明确成某种具体类型数据且编译期间进行数据类型检查的数据类型。
*/

// ---------------------------------------------------------------------------------------------

// 基本使用

// 例1
interface base1<T> {
    value: T
}
const myVal1: base1<string> = {
    value: 'peiqi'
}

// ---------------------------------------------

// 例2
interface base2<T> {
    value: T
}
type PersonInfo = {
    name: string
    age: number
}
const myVal2: base2<PersonInfo> = {
    value: {name: 'peideluo', age: 18}
}

// ---------------------------------------------------------------------------------------------

// 2. 泛型的默认值：若在使用时不指定具体的类型，ts会默认为unknown类型，可以通过以下方式指定默认类型
interface defau1<T=any> {
    value: T
}
// 使用时不指定类型就为默认类型
const myDefau1:defau1 = {
    value: 'haxi'
}

// ---------------------------------------------------------------------------------------------

// 3. 结合类使用
class InfoClass<T> {
    arr: Array<T>
    index: number = 0
    constructor() {
        this.arr = []
    }
    add(ele: T){
        this.arr[this.index++] = ele
    }
    get(index: number) {
        return this.arr[index]
    }
}
let arr1 = new InfoClass<string>()
arr1.add('peiqi')
console.log(arr1.arr)
console.log(arr1.get(0))

// ---------------------------------------------------------------------------------------------

// 4. 泛型约束(举例：用泛型和泛型约束获取类中所有属性名组成的类型)
class info {
    name: string = 'peiqi'
    age: number = 18
}
// 使用extends关键字进行泛型约束
type allTypes<T> = T extends any?T:never
type keys = allTypes<keyof info>


// ---------------------------------------------------------------------------------------------

export {}