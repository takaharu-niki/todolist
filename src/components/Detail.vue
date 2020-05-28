<template>
  <div class="detail">
    <input type="text" :value="selectedItem">
    <textarea :value="textarea" @input="inputText"></textarea>
    <button @click="confirmItem">ok</button>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data: function () {
    return {
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
    confirmItem () {
      if (this.textareaChild === "") {
        this.textareaChild = this.textarea
      }
      console.log(this.textareaChild)
      this.$emit('datail-event', this.textareaChild);
    }

  } 
}
</script>

<style>

</style>