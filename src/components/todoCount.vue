<template>
  <span class="todo-count">
    <strong>{{ remaining }} item{{ remaining > 1 ? 's' : ''}}</strong> left
  </span>
</template>

<script>
export default {
  props: {
    remaining: {
      type: Number,
      required: true
    }
  }
}
</script>
