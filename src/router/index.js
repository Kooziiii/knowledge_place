import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/japanese',
        name: 'Japanese',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "japanese" */ '../views/Japanese.vue')
      },
      {
        path: '/foreigner',
        name: 'Foreigner',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "foreigner" */ '../views/Foreigner.vue')
      },
      {
          path: '/information',
          name: 'Information',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "information" */ '../views/Information.vue')
      },
      {
          path: '/contact',
          name: 'Contact',
          component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
      }
    ]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
