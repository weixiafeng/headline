import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '../utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // user:JSON.parse(window.localStorage.getItem('userMessage'))
    user: getItem('userMessage')
  },
  mutations: {
    setUserMes(state, user) {
      state.user = user
      // window.localStorage.setItem('userMessage', JSON.stringify(user))
      setItem('userMessage', state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
