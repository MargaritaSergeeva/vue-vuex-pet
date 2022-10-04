export default {
  namespaced: true,
  state () {
    return {
      counter: 0
    }
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    add (state, payload) {
      state.counter += payload
    }
  },
  actions: {
    addAsync (context, payload) {
      setTimeout(() => {
        context.commit('add', payload.value)
      }, payload.delay)
    }
  },
  getters: {
    counter (state) {
      return state.counter
    },
    doubleCounter (state) {
      return state.counter * 2
    }
  }
}
