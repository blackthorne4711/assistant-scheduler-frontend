// TO BE DELETED
export default {
  namespaced: true,
  state: {
    user: {},
    status: false,
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
    onAuthStateChanged(state, user) {
      console.log('DEBUG - onAuthStateChanged')
      state.user = user
    },
    onUserStatusChanged(state, status) {
      console.log('DEBUG - onUserStatusChanged')
      state.status = status
    },
  },
  actions: {},
}
