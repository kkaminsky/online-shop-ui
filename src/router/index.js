import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from "../views/SignIn";
import Register from "../views/Register";
import ListGames from "../views/ListGames";

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
    path:'/list-games',
    name: 'list-games',
    component: ListGames
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
  routes
})

export default router
