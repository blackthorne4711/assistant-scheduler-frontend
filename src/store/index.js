import { createStore } from 'vuex'
import users from './users'

export default createStore({
  state: {
    user: {},
    status: false,
    sidebarVisible: '',
    sidebarUnfoldable: false,
  },
  getters: {
    user(state) {
      return state.user
    },
    isSignedIn(state) {
      console.log('DEBUG - isSignedIn')
      return state.status
    },
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
    onAuthStateChanged(state, user) {
      console.log('DEBUG - onAuthStateChanged - ' + user)
      state.user = user
    },
    onUserStatusChanged(state, status) {
      console.log('DEBUG - onUserStatusChanged' + status)
      state.status = status
    },
  },
  action: {},
  modules: {
    users: users,
  },
})
