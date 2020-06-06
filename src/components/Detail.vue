<template>
  <div class="detail">
    <input type="text" :value="selectedItem" @input="inputItem">
    <textarea :value="textarea" @input="inputText"></textarea>
    <!-- <button @click="confirmItem">ok</button> -->
    <button @click="confirmTodo">ok</button>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data: function () {
    return {
      itemChild: '',
      textareaChild: ''
    }
  },
  props: {
    selectedItem: String,
    textarea: String
  },
  methods: {
    inputText (event) {
      this.textareaChild = event.target.value
    },
    inputItem (event) {
      this.itemChild = event.target.value
    },
    confirmItem () {
      if (this.textareaChild === "") {
        this.textareaChild = this.textarea
      }
      if (this.itemChild === "") {
        this.itemChild = this.selectedItem
      }
      this.$emit('datail-event', {item: this.itemChild, text: this.textareaChild});
    },
    confirmTodo () {
      this.$store.dispatch ('edit')
    }
  },
  computed: {
    list () { return this.$store.getters.list }
  }
}
</script>

<style>

</style>