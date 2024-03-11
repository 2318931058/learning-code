定义：融合了后端面向思想的超级版的JavaScript语言。

环境搭建：

```
// 方式一
1. 安装ts：pnpm i -g typescript
2. 查看ts版本：tsc -v
3. 安装ts-node以在node中运行ts文件：pnpm i -g ts-node
4. 使用：新建.ts文件书写代码，在node中通过'ts-node 文件名'运行文件

// 方式二
npm init -y
pnpm i typescript -D	// -D不行就-g
tsc --init
```

优势

```
1. 编译时静态类型检测：函数或方法传参或变量赋值不匹配时，会出现编译错误提示，规避了开发期间的大量低级错误，省时省力；
2. 自动提示更清晰明确；
3. 引入了泛型和一系列的TS特有的类型；
4. 强大的d.ts声明文件：声明文件像一个书的目录一样，清晰直观地展示了依赖库文件的接口，如type类型、类、函数和变量等声明；
5. 轻松编译成js文件：即使ts文件有错误，绝大多数情况也能编译出js文件；
6. 灵活性高：尽管ts时一门强类型检查语言，但也体统了any类型和as any类型，这提高了ts的灵活性；
```

疑问：
    1. Object和any的区别
    2. any和unknown的区别
    4. 谈谈你对泛型的理解
    5. 谈谈你对void的理解
    6. 哪些类型可以接受undefined类型的赋值：undefined、any、unknown
    7. 哪些类型可以接收null类型的赋值：null、any、unknown

