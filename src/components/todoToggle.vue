<template>
  <div>
    <input id="toggle-all" v-model="toggleAll" class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'status',
    event: 'checked'
  },
  props: {
    status: Boolean
  },
  computed: {
    toggleAll: {
      get () {
        return this.status
      },
      set (value) {
        this.$emit('checked', value)
      }
    }
  }
}
</script>