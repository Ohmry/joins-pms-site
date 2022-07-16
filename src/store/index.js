import Vue from 'vue'
import Vuex from 'vuex'
import {
  SAVE_TOKEN
} from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: '',
    refreshToken: ''
  },
  getters: {
    accessToken: function (state) {
      return state.accessToken
    },
    refreshToken: function (state) {
      return state.refreshToken
    }
  },
  mutations: {
    [SAVE_TOKEN] (state, payload) {
      state.accessToken = payload.accessToken
      state.refreshToken = payload.refreshToken
    }
  },
  actions: {
    [SAVE_TOKEN] ({ commit }, payload) {
      try {
        commit(SAVE_TOKEN, payload)
      } catch (err) {
        console.error(err)
      }
    }
  },
  modules: {
  }
})
