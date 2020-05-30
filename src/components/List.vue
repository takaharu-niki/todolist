<template>
  <div class="list">
    <input @keypress.enter="addItem2" type="text" ref="title">
    <button @click="addItem2">add</button>
    <div v-for="item in items" :key="item.id">
      <div>
        <input type="text" :value="item.title2" @input="inputItem">
        <button @click="editItem2(item)">detail</button>
        <button @click="deleteItem2(item)">delete</button>
      </div>
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
    inputItem (event) {
      this.itemChild = event.target.value
    },
    editItem2 (item) {
      if (!this.itemChild) {
        this.itemChild = this.items[this.items.indexOf(item)].title2
      }
      this.$emit('edit-child', { title2: this.itemChild, index: this.items.indexOf(item) })
    },
    deleteItem2 (item) {
      this.$emit('delete-child', this.items.indexOf(item))
    },
    addItem2 () {
      this.$emit('add-child', this.$refs.title)
    }
  } 
}
</script>

<style>

</style>