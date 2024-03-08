const sym = Symbol('hello world')
interface Pets {
    name: string,
    age: number,
    well: boolean,
    // symbol类型作为属性名必须使用[]包裹
    [sym]: string
}

// 索引访问类型：获取接口中属性的类型
type a = Pets['name']
type b = Pets['name' | 'age']
type c = Pets['name' | 'age' | 'well']
type d = Pets[typeof sym]

// ............................................................................................

// 获取接口中所有的类型(泛型)
type allKeys<T> = T extends any?T:never
type keys = allKeys<keyof Pets>

// ............................................................................................

export {}