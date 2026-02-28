import { createRouter, createWebHistory } from 'vue-router'
import Lunch from '../Lunch.vue'
import HotSearch from '../HotSearch.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Lunch
  },
  {
    path: '/hotsearch',
    name: 'HotSearch',
    component: HotSearch
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router