import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import ListView from '@/views/ListView.vue'
import WBSView from '@/views/WBSView.vue'
import ExploreView from '@/views/ExploreView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/list',
    name: 'list',
    component: ListView
  },
  {
    path: '/wbs',
    name: 'wbs',
    component: WBSView
  },
  {
    path: '/explore',
    name: 'expolore',
    component: ExploreView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
