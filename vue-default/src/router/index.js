import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/basic',
    name: 'Basic',
    component: () => import(/* webpackChunkName: "about" */ '../views/Basic.vue')
  },
  {
    path: '/dataBinding',
    name: 'DataBinding',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataBinding.vue')
  },
  {
    path: '/dataBindingHtml',
    name: 'DataBindingHtml',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataBindingHtml.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
