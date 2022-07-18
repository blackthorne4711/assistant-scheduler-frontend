import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Emitter from 'tiny-emitter'
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiFuVHVuVg1YZTbHytDZvdBR--5hBdLJ4",
  authDomain: "stallhjalpen.firebaseapp.com",
  projectId: "stallhjalpen",
  storageBucket: "stallhjalpen.appspot.com",
  messagingSenderId: "678080177560",
  appId: "1:678080177560:web:4a895fb01ed0076eb237ed",
  measurementId: "G-WHGZ2RYSBT"
}

const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.config.globalProperties.$msalInstance = {}
app.config.globalProperties.$emitter = new Emitter()

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseapp)

app.mount('#app')

