import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store ({
  state: {  
    todos: [
      { id: 1, name: 'bbb' },
      { id: 2, name: 'ccc' }
    ],
    selectedTodo: { id: "", name: '' },
    list: true
  },
  getters: {
    todos (state) { return state.todos},
    selectedTodo (state) { return state.selectedTodo},
    list (state) { return state.list}
  },
  mutations: {
    add (state, payload) {
      state.todos.push({ id: state.todos[state.todos.length - 1].id + 1, name: payload.payload })
    },
    delete (state, payload) {
      state.todos.splice (payload, 1)
    },
    edit (state, payload) {
      state.list = !state.list
      state.selectedTodo = payload
    },
    confirm (state, payload) {
      state.list = !state.list
      state.todos.forEach(item => {
        if (item.id == payload.id) {
          item.name = payload.name
        }
      })
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
    },
    confirm ({ commit }, payload) {
      commit ('confirm', payload)
    }
  },

})

export default store