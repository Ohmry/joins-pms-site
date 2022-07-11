import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExploreView from '@/views/ExploreView.vue'
import GroupView from '@/views/GroupView.vue'
import ProjectView from '@/views/ProjectView.vue'
import SignupView from '@/views/SignupView.vue'
import SigninView from '@/views/SigninView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/explore',
    name: 'explore',
    component: ExploreView
  },
  {
    path: '/group',
    name: 'group',
    component: GroupView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
