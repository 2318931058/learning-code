// 该文件作用：导入app.vue，基于app.vue创建结构渲染index.html

// 1. 引入vue核心包
import Vue from 'vue'
// 2. 导入app.vue根组件
import App from './App.vue'

// 样式文件
import './assets/main.css'

// 3. vue实例化，提供render方法：基于app.vue创建结构渲染index.html
new Vue({
  render: (h) => h(App)
  // $mount的作用等同于el
}).$mount('#app')
