import { createRouter, createWebHistory } from 'vue-router'
import JingDonghome from '../layout/Home.vue'


const routes = [
  { path:'/',component: JingDonghome }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
