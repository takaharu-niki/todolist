<template>
  <div id="app">
    <List v-if="list"/>
    <Detail v-else />
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
  computed: {
    list () { return this.$store.getters.list }
  }
}
</script>

<style>

</style>