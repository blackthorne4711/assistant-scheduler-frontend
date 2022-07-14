import AuthService from '../services/AuthService.js'

const clientid = process.env.VUE_APP_CLIENT_ID
const authority = process.env.VUE_APP_AUTHORITY
//const scopes = [process.env.VUE_APP_SCOPE_READ]
const scopes = ['profile', 'email']

//console.log(`clientid = ${clientid}`)
//console.log(`authority = ${authority}`)
//console.log(`scopes = ${scopes}`)

const authservice = new AuthService(clientid, authority, scopes)

export default {
  namespaced: true,
  state: {
    isAuthenticated: !!JSON.parse(localStorage.getItem('isAuthenticated')),
    user: JSON.parse(localStorage.getItem('user')),
  },
  mutations: {
    updateIsAuthenticated(state, value) {
      state.isAuthenticated = value
      localStorage.setItem('isAuthenticated', JSON.stringify(value))
    },
    updateUser(state, value) {
      state.user = value
      localStorage.setItem('user', JSON.stringify(value))
    },
  },
  actions: {
    async login({ commit }) {
      console.log('DEBUG: Store login called')
      const user = await authservice.login()
      commit('updateUser', user)
      commit('updateIsAuthenticated', true)
      console.log('DEBUG: Store login complete.')
    },
    logout({ commit }) {
      authservice.logout()
      commit('updateUser', {})
      commit('updateIsAuthenticated', false)
    },
  },
}
