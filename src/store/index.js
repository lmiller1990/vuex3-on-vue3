import Vuex from '../vuex'

const store = new Vuex.Store({
  state: {
    count: 0
  },

  getters: {
    double (state) {
      return state.count * 2
    }
  },

  actions: {
    increment ({ commit }) {
      commit('increment')
    },

    decrement ({ commit }) {
      commit('decrement')
    }
  },

  mutations: {
    increment (state) {
      state.count++
    },

    decrement (state) {
      state.count--
    }
  },

  modules: {
    moduleA: {
      namespaced: true,

      state () {
        return {
          value: 'Module A Value'
        }
      },

      getters: {
        valuePlus (state) {
          return state.value +  ' Plus!'
        }
      },

      actions: {
        change ({ commit }, value) {
          commit('change', value)
        },

        reset ({ commit }) {
          commit('reset')
        }
      },

      mutations: {
        change (state, value) {
          state.value = value
        },

        reset (state) {
          state.value = 'Module A Value'
        }
      }
    }
  }
})

export default store
