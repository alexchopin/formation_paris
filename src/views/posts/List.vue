<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <router-link :to="{ name: 'posts-details', params: { id: post.id }}">{{ post.title }}</router-link>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      try {
        var response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.posts = response.data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
