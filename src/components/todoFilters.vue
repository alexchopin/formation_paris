<template>
  <ul class="filters">
    <li v-for="option in options" :key="option">
      <a :href="'#/' + option" @click.prevent="$emit('change', option)" :class="{selected: filter === option}">
        {{ option }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  model: {
    prop: 'filter',
    event: 'change'
  },
  props: {
    filter: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  }
}
</script>
