<template>
  <div id="app">
    <List v-if="isList" @edit-child="editItem($event)" @delete-child="deleteItem($event)" :items="items"/>
    <Detail v-else @datail-event="trueList($event)" :selectedItem="selectedItem" :textarea="selectedTextareaParent" />
  </div>
</template>

<script>
import List from './components/List.vue'
import Detail from './components/Detail.vue'

export default {
  name: 'App',
  components: {
    List,
    Detail
  },
  data: function () {
    return {
      isList: true,
      items: [
        { title2: 'ddd'},
        { title2: 'gaa'}
      ],
      selectedItem: '',
      textareaParent: [
        { text: 'aaaaa'},
        { text: 'bbbbb'}
      ],
      selectedTextareaParent: '',
      index: ''
    }
  },
  methods: {
    trueList (Child) {
      this.textareaParent[this.index].text = Child.text 
      this.items[this.index].title2 = Child.item 
      this.isList = true
    },
    deleteItem (index) {
      this.items.splice(index,1)
    },
    editItem (title3) {
      this.selectedItem = title3.title2
      this.index = title3.index
      this.selectedTextareaParent = this.textareaParent[title3.index].text
      this.isList = false
    }
  },
}
</script>

<style>

</style>