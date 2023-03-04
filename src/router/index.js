import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path:'/about',
    name: 'AboutPage',
    component: About
  }
  // 添加其他路由配置
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
