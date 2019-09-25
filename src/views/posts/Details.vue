<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <div v-html="post.body"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      post: null
    }
  },
  created () {
    this.getPost()
  },
  methods: {
    async getPost () {
      try {
        var response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id)
        this.post = response.data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
