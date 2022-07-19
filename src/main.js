import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebaseService from './services/FirebaseService.js'
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'

import Toaster from '@meforma/vue-toaster'

// Initialize Firebase service
firebaseService.init()

const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.use(Toaster, { position: 'top' })
app.provide('icons', icons)
app.component('CIcon', CIcon)

// if (firebaseService.onAuth()) {
//   app.mount('#app')
// }

// firebase.auth().onAuthStateChanged((user) => {
//   store.commit('onUserStateChanged', user)
//   store.commit('onAuthStatusChanged', user.uid ? true : false)
//   store.commit('onAuthInitialized')
//   firebaseService.init()
//   app.mount('#app')
// })

// firebase.auth().onAuthStateChanged((user) => {
//   const isAuthenticated = Boolean(user)

//   store.commit('onUserStateChanged', user)
//   store.commit('onAuthStatusChanged', user.uid ? true : false)
//   store.commit('onAuthInitialized')

//   if (isAuthenticated) {
//     console.log('Redirect to dashboard (main)')
//     router.push('/dashboard')
//   } else {
//     console.log('Redirect to login (main)')
//     router.push('/pages/login')
//   }
// })

app.mount('#app')
