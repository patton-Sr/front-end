import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AdminVue from '@/views/Admin.vue'
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path:'/admin',
    name:'AdminVue',
    component:AdminVue
  }
  // 添加其他路由配置
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
