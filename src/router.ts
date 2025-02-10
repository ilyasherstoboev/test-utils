import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import TestsView from './views/TestsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/tests', component: TestsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
