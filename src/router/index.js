import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

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
          {
            path: '/user/login',
            name: 'Login',
            component: () => import('@/views/user/Login'),
          },
          {
            path: '/user/logout',
            name: 'Logout',
            component: () => import('@/views/user/Logout'),
          },
          {
            path: '/user/register',
            name: 'Register',
            component: () => import('@/views/user/Register'),
          },
        ],
      },
    ],
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
    ],
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

export default router
