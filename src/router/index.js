import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
//import firebaseService from '../services/FirebaseService.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import store from '../store'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },
      {
        path: '/booking',
        name: 'Booking',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/booking/bookings',
        children: [
          {
            path: '/booking/bookings',
            name: 'Bookings',
            component: () => import('@/views/booking/Bookings.vue'),
          },
          {
            path: '/booking/timeslots',
            name: 'Timeslots',
            component: () => import('@/views/booking/Timeslots.vue'),
          },
        ],
      },
      {
        path: '/admin',
        name: 'Admin',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/admin/assistants',
        children: [
          {
            path: '/admin/assistants',
            name: 'Assistants',
            component: () => import('@/views/admin/Assistants.vue'),
          },
          {
            path: '/admin/config',
            name: 'Config',
            component: () => import('@/views/admin/Config.vue'),
          },
          {
            path: '/admin/schedule',
            name: 'Schedule',
            component: () => import('@/views/admin/Schedule.vue'),
          },
          {
            path: '/admin/users',
            name: 'Users',
            component: () => import('@/views/admin/Users.vue'),
          },
        ],
      },
      {
        path: '/user',
        name: 'User',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/user/settings',
        children: [
          {
            path: '/user/settings',
            name: 'Settings',
            component: () => import('@/views/user/Settings.vue'),
          },
        ],
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/pages',
    redirect: '/pages/404',
    name: 'Pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/pages/Page404'),
      },
      {
        path: '500',
        name: 'Page500',
        component: () => import('@/views/pages/Page500'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/Login'),
      },
      {
        path: 'logout',
        name: 'Logout',
        component: () => import('@/views/pages/Logout'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/Register'),
      },
    ],
    meta: {
      requiresAuth: false,
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject,
    )
  })

router.beforeEach(async (to, from, next) => {
  let user = await getCurrentUser()

  console.log(user)

  const requiresAuth = to.meta.requiresAuth
  const isInitialised = store.state.authInitialized
  const isAuthenticated = store.state.authStatus

  console.log('DEBUG: Requires authentication ' + String(requiresAuth))
  console.log('DEBUG: Is initialized ' + String(isInitialised))
  console.log('DEBUG: Is authenticated ' + String(isAuthenticated))

  if (isInitialised) {
    if (requiresAuth && !isAuthenticated && to.name !== 'Login') {
      console.log('Redirect to login')
      next('/pages/login')
      return
    } else if (isAuthenticated && to.name == 'Login') {
      console.log('Redirect to dashboard')
      next('/dashboard')
      return
    }
  }

  next()
})

export default router
