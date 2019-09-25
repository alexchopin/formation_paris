<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> | 
      <router-link to="/posts">Posts</router-link> | 
      <router-link :to="{ name: 'todomvc' }">Todomvc</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
.router-link-exact-active {
  color: green;
}
</style>