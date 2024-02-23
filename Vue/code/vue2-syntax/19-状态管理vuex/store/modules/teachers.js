const state = {
  teacherInfo: {
    name: '张三',
    age: 18
  },
  hobby: ['吃饭', '睡觉', '打豆豆']
}

const mutations = {
  changeAgeadd (state, n) {
    state.teacherInfo.age += n
  },
  changeName (state, newName) {
    state.teacherInfo.name = newName
  }
}

const actions = {
  changeNameAction (context, newName) {
    setTimeout(() => {
      context.commit('changeName', newName)
    }, 1000)
  }
}

const getters = {
  reduceAge (state) {
    return state.teacherInfo.age - 10
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
