import AuthService from '../services/AuthService.js'

//const clientid = process.env.VUE_APP_CLIENT_ID
//const authority = process.env.VUE_APP_AUTHORITY
//const scopes = [process.env.VUE_APP_SCOPE_READ]
const clientid = '6dcb60bd-625f-49f2-9e36-20b5c9cdc873'
const authority = 'https://login.microsoftonline.com/f2e6e048-788b-439f-ab45-6fed3499a1f2/'
const scopes = ['profile', 'email']

console.log(`clientid = ${clientid}`)
console.log(`authority = ${authority}`)
console.log(`scopes = ${scopes}`)

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
      console.log('DEBUG: Auth login called')
      const user = await authservice.login()
      commit('updateUser', user)
      commit('updateIsAuthenticated', true)
      console.log('DEBUG: Auth login complete.')
    },
    logout({ commit }) {
      console.log('DEBUG: Auth logout called')
      authservice.logout()
      commit('updateUser', {})
      commit('updateIsAuthenticated', false)
      console.log('DEBUG: Auth logout complete.')
    },
  },
}
