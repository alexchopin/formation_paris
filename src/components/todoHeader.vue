<template>
  <header class="header">
    <h1>{{ title }}</h1>
    <input v-model.trim="newTodo" v-on:keyup.enter="addTodo" class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?">
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'todos'
    }
  },
  data: function () {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo: function () {
      if (this.newTodo.length) {
        this.$emit('save', {
          id: Date.now(),
          title: this.newTodo,
          completed: false
        })
        this.newTodo = ''
      }
    }
  }
}
</script>
