import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Index from '../components/Index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/index', component: Index }
]

const router = new VueRouter({
  routes
})

export default router
