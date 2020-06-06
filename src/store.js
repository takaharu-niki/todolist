import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store ({
  state: {  
    todos: [
      { name: 'bbb' },
      { name: 'ccc' }
    ],
    list: true
  },
  getters: {
    todos (state) { return state.todos},
    list (state) { return state.list}
  },
  mutations: {
    add (state, payload) {
      state.todos.push({ name: payload.payload })
    },
    delete (state, payload) {
      state.todos.splice (payload, 1)
    },
    edit (state, payload) {
      state.list = !state.list
      console.log(state.list)
      console.log(payload)
    }
  },
  actions: {
    add ({ commit }, payload) {
      commit ('add', { payload })
    },
    delete ({ commit }, payload) {
      commit ('delete', payload)
    },
    edit ({ commit }, payload) {
      commit ('edit', payload)
    }
  },

})

export default store