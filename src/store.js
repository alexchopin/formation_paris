import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    }
  },
  actions: {
    login (payload) {
      // API + cookie
      payload.commit('SET_USER', { name: 'Alex' })
    },
    logout (payload) {
      // API + cookie
      payload.commit('SET_USER', null)
    }
  }
})