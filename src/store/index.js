import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserToken: null
  },
  mutations: {
    setToken (state, token) {
      state.UserToken = token
    },
    removeToken (state) {
      state.UserToken = null
    }
  },
  actions: {
    signup ({ commit, state }, { email, password }) {
      // 外部サービスにサインアップ処理を実装し、トークンを受信する
      const token = 'hogehoge'
      // クッキーに書き込む
      Vue.$cookies.set('UserToken', token)
      // stateに書き込む
      commit('setToken', token)
    },
    login ({ commit, state }, { email, password }) {
      // 外部サービスにログイン処理を実装し、トークンを受信する
      const token = 'hogehoge'
      // クッキーに書き込む
      Vue.$cookies.set('UserToken', token)
      // stateに書き込む
      commit('setToken', token)
    },
    logout ({ commit, state }) {
      // 外部サービスにログアウト処理を実装し、実行
      // クッキーを削除
      Vue.$cookies.remove('UserToken')
      // stateに書き込む
      commit('removeToken')
    }
  },
  modules: {
  }
})
