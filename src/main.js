import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebaseService from './services/FirebaseService.js'

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

app.mount('#app')
