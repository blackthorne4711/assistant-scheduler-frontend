//import axios from 'axios'
import auth from '../store'

export default {
  endpoint: 'https://myendpoint.com',

  requestInterceptor: (config) => {
    config.headers.Authorization = auth.getAccessToken
    return config
  },

  init() {
    //Vue.prototype.$http = axios.create({ baseURL: this.endpoint })
    //Vue.prototype.$http.interceptors.request.use(this.requestInterceptor)
  },
}


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);