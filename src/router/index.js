import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DesubView from '../views/DesubView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/desub',
    name: 'desub',
    component: DesubView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
