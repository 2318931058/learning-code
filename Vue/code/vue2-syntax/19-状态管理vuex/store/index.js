// 导入 vue
import Vue from 'vue'
// 导入 vuex
import Vuex from 'vuex'

// 导入模块
import students from './modules/students.js'
import teachers from './modules/teachers.js'
// vuex也是vue的插件, 需要use一下, 进行插件的安装初始化
Vue.use(Vuex)

// 创建仓库 store
const store = new Vuex.Store({
  // 严格模式---上线时需要移除---开启后组件直接修改数据会报错
  strict: true,
  // 通过state提供数据
  state: {
    title: '大标题',
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  //   通过mutations定义方法(同步修改)
  mutations: {
    // mutataions中所有函数的第一个参数都是state属性，第二个参数为传递过来的参数
    addCount (state, n) {
      state.count += n
    },
    delCount (state, n) {
      state.count -= n
    },
    changeCount (state, newCount) {
      state.count = newCount
    },
    changeTitle (state, newTitle) {
      state.title = newTitle
    }
  },
  //   通过actions处理异步
  //   context为上下文，相当于store仓库，可以通过context.commit调用mutations中的方法
  actions: {
    changeTitleAction (context, newTitle) {
      // 此处使用定时器模拟异步，一般是用作发送请求
      setTimeout(() => {
        context.commit('changeTitle', newTitle)
      }, 1000)
    }
  },
  //   getters相当于计算属性computed
  getters: {
    // 第一个形参为state
    filterList (state) {
      return state.list.filter(item => item > 5)
    }
  },

  // 模块化拆分
  modules: {
    students,
    teachers
  }
})

// 导出仓库
export default store
