import Vue from 'vue'
import Vuex from 'vuex'
// 必须use
Vue.use(Vuex)

export default new Vuex.Store({
  // 要设置的全局访问的state对象
  state: {
    // 要设置的初始化值
    userId: ''
  },
  // 更改Vuex的store中的状态值
  mutations: {
    saveUserId (state, userId) {
      state.userId = userId
    }
  },
  //   处理异步更改  提交 mutations，而不是直接更改状态 异步操作  触发变更 通过storestore.dispatch 进行分发action
  actions: {

  },
  // 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿,为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割
  modules: {

  },
  // 相当于 store中的计算属性 可以对数据进行过滤等操作
  getters: {
    getCount: state => {
      return state.count + 1
    }
  }
})
