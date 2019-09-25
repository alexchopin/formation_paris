import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/posts',
      component: () => import(/* webpackChunkName: "posts" */ './views/Posts.vue'),
      children: [
        {
          path: '',
          name: 'posts-list',
          component: () => import(/* webpackChunkName: "posts" */ './views/posts/List.vue'),
        },
        {
          path: ':id',
          name: 'posts-details',
          component: () => import(/* webpackChunkName: "posts" */ './views/posts/Details.vue'),
        }
      ]
    },
    {
      path: '/todomvc',
      name: 'todomvc',
      component: () => import(/* webpackChunkName: "todomvc" */ './views/Todomvc.vue')
    }
  ]
})