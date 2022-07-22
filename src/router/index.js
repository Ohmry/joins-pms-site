import Vue from 'vue'
import VueRouter from 'vue-router'
import ExploreView from '@/views/ExploreView.vue'
import GroupView from '@/views/GroupView.vue'
import ProjectView from '@/views/ProjectView.vue'
import SignupView from '@/views/SignupView.vue'
import SigninView from '@/views/SigninView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signin',
    component: SigninView
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(function (to, from, next) {
  const userInfo = JSON.parse(sessionStorage.getItem('user'))
  if (to.path === '/') {
    if (userInfo !== null && userInfo.accessToken.length > 0) {
      next({
        path: '/explore',
        replace: true
      })
    } else {
      next()
    }
  } else if (to.path === '/signup') {
    next()
  } else {
    if (userInfo === null || userInfo.accessToken.length < 1) {
      next({
        path: '/',
        replace: true
      })
    } else {
      next()
    }
  }
})

export default router
