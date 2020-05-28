<template>
  <div id="app">
    <List v-if="isList" @edit="editItem($event)" @delete="deleteItem($event)" @add="addItem($event)" :items="items"/>
    <Detail v-else @datail-event="trueList($event)" :selectedItem="selectedItem" :textarea="textareaParent[0].text" />
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
      ]
    }
  },
  methods: {
    trueList (textareaChild) {
      console.log(textareaChild)
      // this.textareaParent[0].text = textareaChild 
      this.isList = true
    },
    addItem (title) {
      if (title.value !== '') {
        this.items.push({ title2: title.value})
        title.value = ""
        title.focus()
      }
    },
    deleteItem (index) {
      this.items.splice(index,1)
    },
    editItem (title2) {
      this.selectedItem = title2.title2
      console.log(title2.title2)
      console.log(title2.index)
      this.textareaParent[title2.index].text = 
      this.isList = false
    }
  }
}
</script>

<style>

</style>