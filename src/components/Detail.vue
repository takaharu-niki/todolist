<template>
  <div class="detail">
    <input type="text" :value="selectedTodo.name" ref="selectedTodo">
    <textarea :value="selectedTodo.descriptionTodo" ref="textarea"></textarea>
    <button @click="confirmTodo">ok</button>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  methods: {
    confirmTodo () {
      this.$store.dispatch ('confirm', { id: this.selectedTodo.id, name: this.$refs.selectedTodo.value, description: this.$refs.textarea.value})
    }
  },
  computed: {
    todos () { return this.$store.getters.todos },
    selectedTodo () { return this.$store.getters.selectedTodo },
    descriptionTodo () { return this.$store.getters.descriptionTodo },
    list () { return this.$store.getters.list }
  }
}
</script>

<style>

</style>