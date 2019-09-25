<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> | 
      <router-link to="/posts">Posts</router-link> | 
      <router-link :to="{ name: 'todomvc' }">Todomvc</router-link> | 
      <button v-if="$store.state.user" @click="$store.dispatch('logout')">
        {{ $store.state.user.name }} (Logout)
      </button>
      <button v-else @click="$store.dispatch('login')">Login</button>
    </nav>
    <router-view/>
  </div>
</template>

<style>
.router-link-exact-active {
  color: green;
}
</style>