import { createStore, createLogger } from 'vuex'
import counterModule from './modules/counter'

export default createStore({
  plugins: [createLogger()],
  modules: {
    count: counterModule
  },
  state () {
    return {
      appTitle: 'Vuex working'
    }
  },
  getters: {
    uppercaseTitle (state) {
      return state.appTitle.toUpperCase()
    }
  }
})
