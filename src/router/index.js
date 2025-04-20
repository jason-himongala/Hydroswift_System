import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'
import UsertypeView from '@/views/auth/UsertypeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/Usertype',
      name: 'Usertype',
      component: UsertypeView,
    },

  ],
})

export default router

