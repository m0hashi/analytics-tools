import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    alias: '/home',
    component: Home
  },
  {
    path: '/pivot',
    name: 'Pivot',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pivot.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
     path: '/github',
     name: 'github',
     beforeEnter() {location.href = 'http://github.com'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
