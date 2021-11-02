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
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example.vue')
  },
  {
    path: '/example2',
    name: 'Example2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example2.vue')
  },
  {
    path: '/example3',
    name: 'Example3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example3.vue')
  },
  {
    path: '/example4',
    name: 'Example4',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example4.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
