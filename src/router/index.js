import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'
import UsertypeView from '@/views/auth/UsertypeView.vue'
import RegistercustomerView from '@/views/auth/RegistercustomerView.vue'
import RegisterstationView from '@/views/auth/RegisterstationView.vue'
import ConfirmationView from '@/views/auth/ConfirmationView.vue'
import HomepageView from '@/views/auth/HomepageView.vue'
import ProfileView from '@/views/auth/ProfileView.vue'
import HistoryView from '@/views/auth/HistoryView.vue'
import OrderView from '@/views/auth/OrderView.vue'
import PlaceorderView from '@/views/auth/PlaceorderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/Login',
    },

    {
      path: '/Login',
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
    {
      path: '/Homepage',
      name: 'Homepage',
      component: HomepageView,
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: ProfileView,
    },
    {
      path: '/History',
      name: 'History',
      component: HistoryView,
    },

    {
      path: '/Order',
      name: 'Order',
      component: OrderView,
    },
    {
      path: '/placeorder',
      name: 'Placeorder',
      component: PlaceorderView,
    },

  ],
})

export default router
