<template>
  <div class="list">
    <input @keypress.enter="addTodo" type="text" ref="title">
    <button @click="addTodo">add</button>
    <!-- <div v-for="item in items" :key="item.id">
      <div>
        <input type="text" :value="item.title2" @input="inputItem">
        <button @click="editItem(item)">detail</button>
        <button @click="deleteItem(item)">delete</button>
      </div>
    </div> -->
    <div v-for="todo in todos" :key="todo.id">
      <input type="text" :value="todo.name" ref="refTodo">
      <button @click="editTodo(todo)">detail</button>
      <button @click="deleteTodo(todo)">delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    items: Array
  },
  data: function () {
    return {
      itemChild: ''
    }
  },
  methods: {
    // inputItem (event) {
    //   this.itemChild = event.target.value
    // },
    // editItem (item) {
    //   if (!this.itemChild) {
    //     this.itemChild = this.items[this.items.indexOf(item)].title2
    //   }
    //   this.$emit('edit-child', { title2: this.itemChild, index: this.items.indexOf(item) })
    // },
    // deleteItem (item) {
    //   this.$emit('delete-child', this.items.indexOf(item))
    // },
    deleteTodo (todo) {
      this.$store.dispatch ('delete', this.todos.indexOf(todo))
    },
    addTodo () {
      if (this.$refs.title.value) {
        this.$store.dispatch ('add', this.$refs.title.value)
        this.$refs.title.value = ""
        this.$refs.title.focus()
      }
    },
    editTodo (todo) {
      this.$store.dispatch ('edit', { id: this.todos[this.todos.indexOf(todo)].id, name: this.$refs.refTodo[this.todos.indexOf(todo)].value})
    },
  },
  computed: {
    todos () { return this.$store.getters.todos },
    list () { return this.$store.getters.list }
  }  
}
</script>

<style>

</style>