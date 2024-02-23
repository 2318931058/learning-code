/* 
  mitt相当于事件总线，可以实现任意组件通信（体积很小）
    1. pnpm i mitt安装mitt
    2. 新建.ts文件，并引入和调用mitt，最后再暴露该文件
    3. main.ts中引入该文件
    4. 在任意组件绑定emitter.on、触发emitter.emit、销毁emitter.off
    5. 若要销毁全部，则可以emitter.all.clear()
    6. 一般来说，组件销毁时需要销毁某事件

*/

// 引入mitt
import mitt from 'mitt'
// 调用mitt
const emitter = mitt()
// 暴露
export default emitter