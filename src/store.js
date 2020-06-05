import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store ({
  state: {  
    todos: [
      { name: 'bbb' },
      { name: 'ccc' }
    ]
  },
  getters: {
    todos (state) { return state.todos}
  },
  mutations: {
    add (state, payload) {
      state.todos.push({ name: payload.payload })
    },
    delete (state, payload) {
      state.todos.splice (payload, 1)
    }
  },
  actions: {
    add ({ commit }, payload) {
      commit ('add', { payload })
    },
    delete ({ commit }, payload) {
      commit ('delete', payload)
    }
  },

})

export default store