import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/generation/:id/',
    name: 'Generation',
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Generation.vue')
  },
  {
    path: '/pokemon/:name/:generation',
    name: 'Pokemon',
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Pokemon.vue')
  }
]

const router = createRouter({
  scrollBehavior() {
    return { top: 0 }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
