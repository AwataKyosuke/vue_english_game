import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import SignUp from '@/views/SignUp.vue'
import Login from '@/views/Login.vue'
import ResetPassword from '@/views/ResetPassword.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: SignUp,
    component: SignUp
  },
  {
    path: '/login',
    name: Login,
    component: Login
  },
  {
    path: '/resetPassword',
    name: ResetPassword,
    component: ResetPassword
  }
]

const router = new VueRouter({
  routes
})

export default router
