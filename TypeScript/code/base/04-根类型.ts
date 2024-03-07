// 根类型除了null和undefined以外均可赋值，可以使用Object表示

// let a : Object = null
// let b : Object = undefined

let c : Object = 100
let d : Object = 'peiqi'
let e : Object = true
let f : Object = [1, 2, 3, 5]

// .......................................................................................

// 根类型除了可以使用Object表示，还可以使用 {} 表示

// let g : {} = null
// let h : {} = undefined

let i : {} = 100
let j : {} = 'peiqi'
let k : {} = true
let l : {} = [1, 2, 3, 5]

// .......................................................................................
// 注意：{}类型和{ xxx:yyy }是完全不同的概念
// let m : { username : string} = 2
let n : { username : string} = {username : 'peiqi'}



// .......................................................................................

export {}