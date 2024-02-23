const state = {
  studentInfo: {
    name: '张三',
    age: 18
  },
  hobby: ['吃饭', '睡觉', '打豆豆']
}

const mutations = {
  changeAgedel (state, n) {
    state.studentInfo.age -= n
  },
  changeName (state, newName) {
    state.studentInfo.name = newName
  }
}

const actions = {
  changeNameeAction (context, newName) {
    setTimeout(() => {
      context.commit('changeName', newName)
    }, 1000)
  }
}

const getters = {
  addAge (state) {
    return state.studentInfo.age + 10
  }
}

export default {
  // 开启命名空间
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
