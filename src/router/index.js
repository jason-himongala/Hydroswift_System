import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'
import UsertypeView from '@/views/auth/UsertypeView.vue'
import RegistercustomerView from '@/views/auth/RegistercustomerView.vue'
import RegisterstationView from '@/views/auth/RegisterstationView.vue'
import ConfirmationView from '@/views/auth/ConfirmationView.vue'

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
    {
      path: '/Customer',
      name: 'Customer',
      component: RegistercustomerView,
    },
    {
      path: '/Station',
      name: 'Station',
      component: RegisterstationView,
    },
    {
      path: '/Confirmation',
      name: 'Confirmation',
      component: ConfirmationView,
    },


  ],
})

export default router

