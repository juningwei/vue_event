import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { getUserInfoAPI } from '@/api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: {}
  },
  getters: {
  },
  mutations: {
    updateToken (state, newToken) {
      state.token = newToken
    },
    updateUserInfo (state, val) {
      state.userInfo = val
    }
  },
  actions: {
    async getUserInfoActions (store) {
      const res = await getUserInfoAPI()
      console.log(res)
      store.commit('updateUserInfo', res.data.data)
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
