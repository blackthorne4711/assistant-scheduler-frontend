import firebase from 'firebase/compat/app'
import { getAnalytics } from 'firebase/analytics'
import 'firebase/compat/auth'
import store from '../store'
//import store from '../store'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: 'AIzaSyDiFuVHVuVg1YZTbHytDZvdBR--5hBdLJ4',
  authDomain: 'stallhjalpen.firebaseapp.com',
  //databaseURL: 'https://fir-auth-9fe24.firebaseio.com', TODO change
  projectId: 'stallhjalpen',
  storageBucket: 'stallhjalpen.appspot.com',
  messagingSenderId: '678080177560',
  appId: '1:678080177560:web:4a895fb01ed0076eb237ed',
  measurementId: 'G-WHGZ2RYSBT',
}

export default {
  init() {
    getAnalytics(firebase.initializeApp(config))
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  },
  loginWithGooglePopup() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  },
  loginWithBasicAuth(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  },
  logout() {
    firebase.auth().signOut()
    store.commit('onUserStateChanged', {})
    store.commit('onAuthStatusChanged', false)
  },
  onAuth() {
    firebase.auth().onAuthStateChanged((user) => {
      user = user ? user : {}
      store.commit('onUserStateChanged', user)
      store.commit('onAuthStatusChanged', user.uid ? true : false)
      store.commit('onAuthInitialized')
    })
  },
  getUser() {
    // getAnalytics(firebase.initializeApp(config))
    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    let user = firebase.auth().currentUser
    return (user = user ? user : {})
  },
}
