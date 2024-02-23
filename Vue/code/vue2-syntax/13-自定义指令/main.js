import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 1. 全局注册自定义指令：
// Vue.directive('focus',{
//   // inserted生命周期钩子作用：会在指令所在的元素被插入到页面时触发
//   inserted(el){
//     // el就是指令所绑定的元素
//     el.focus()
//   }
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
