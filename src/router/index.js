import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from "../views/SignIn";
import Register from "../views/Register";
import ResetPassword from "../views/ResetPassword";
import UserCabinet from "../views/UserCabinet";
import Cart from "../views/Cart";
import Checkout from "../views/Checkout";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
    meta:{requiresAuth:false}
  },
  {
    path:'/register',
    name: 'register',
    component: Register,
    meta:{requiresAuth:false}
  },
  {
    path: '/resetpassword',
    name: 'resetpassword',
    component: ResetPassword,
    meta:{requiresAuth:false}
  },
  {
    path: '/usercabinet',
    name: 'usercabinet',
    component: UserCabinet,
    meta:{requiresAuth:false}
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta:{requiresAuth:false}
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
    meta:{requiresAuth:true}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
