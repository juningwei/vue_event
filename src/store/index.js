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
    nickname: state => state.userInfo.nickname, // 昵称
    username: state => state.userInfo.username, // 用户名
    user_pic: state => state.userInfo.user_pic // 用户头像
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
