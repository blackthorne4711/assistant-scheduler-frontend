import { createStore } from 'vuex'
import users from './users'

export default createStore({
  state: {
    authUser: {},
    authStatus: false,
    authInitialized: false,
    sidebarVisible: false,
    sidebarUnfoldable: false,
  },
  getters: {
    user(state) {
      return state.authUser
    },
    isSignedIn(state) {
      console.log('DEBUG - isSignedIn - ' + state.authStatus)
      return state.authStatus
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
    onUserStateChanged(state, user) {
      console.log('DEBUG - onUserStateChanged - ' + user)
      state.authUser = user
      //state.authInitialized = true
    },
    onAuthStatusChanged(state, status) {
      console.log('DEBUG - onAuthStatusChanged - ' + status)
      state.authStatus = status
    },
    onAuthInitialized(state) {
      if (!state.authInitialized) {
        state.authInitialized = true
        console.log(
          'Authentication initialized (' + state.authInitialized + ')',
        )
      }
    },
  },
  action: {},
  modules: {
    users: users,
  },
})
