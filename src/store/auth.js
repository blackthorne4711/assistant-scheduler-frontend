import AzurePopupAuthService from '../services/AzurePopupAuthService.js'
import BasicAuthService from '../services/BasicAuthService.js'
import router from '../router'

//const clientid = process.env.VUE_APP_CLIENT_ID
//const authority = process.env.VUE_APP_AUTHORITY
const azureclientid = '6dcb60bd-625f-49f2-9e36-20b5c9cdc873'
const azureauthority =
  'https://login.microsoftonline.com/f2e6e048-788b-439f-ab45-6fed3499a1f2/'
const scopes = ['profile', 'email']

//console.log(`clientid = ${clientid}`)
//console.log(`authority = ${authority}`)
//console.log(`scopes = ${scopes}`)

const azurepopupauthservice = new AzurePopupAuthService(
  azureclientid,
  azureauthority,
  scopes,
)
const basicauthservice = new BasicAuthService(
  azureclientid,
  azureauthority,
  scopes,
)

const TYPEOFAUTH = {
  NONE: 0,
  AZUREPOPUP: 1,
  BASIC: 2,
}

export default {
  namespaced: true,
  state: {
    isAuthenticated: !!JSON.parse(localStorage.getItem('isAuthenticated')),
    user: JSON.parse(localStorage.getItem('user')),
    accesstoken: JSON.parse(localStorage.getItem('accesstoken')),
    typeOfAuth: JSON.parse(localStorage.getItem('typeOfAuth')),
  },
  getters: {
    getAccessToken(state) {
      return state.accesstoken
    },
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
    updateAccesstoken(state, value) {
      state.accesstoken = value
      localStorage.setItem('accesstoken', JSON.stringify(value))
    },
    updateTypeOfAuth(state, value) {
      state.typeOfAuth = value
      localStorage.setItem('typeOfAuth', JSON.stringify(value))
    },
  },
  actions: {
    async azurepopuplogin({ commit }) {
      console.log('Auth azurepopuplogin called')
      const [user, accesstoken] = await azurepopupauthservice.login()
      commit('updateUser', user)
      commit('updateAccesstoken', accesstoken)
      commit('updateIsAuthenticated', true)
      commit('updateTypeOfAuth', TYPEOFAUTH.POPUP)
      console.log('Auth azurepopuplogin complete.')
      router.push('/dashboard')
    },
    async basiclogin({ commit }) {
      console.log('Auth basiclogin called')
      const [user, accesstoken] = await basicauthservice.login()
      commit('updateUser', user)
      commit('updateAccesstoken', accesstoken)
      commit('updateIsAuthenticated', true)
      commit('updateTypeOfAuth', TYPEOFAUTH.BASIC)
      console.log('Auth basiclogin complete.')
      router.push('/dashboard')
    },
    logout({ commit }) {
      console.log('Auth logout called')
      if (this.state.typeOfAuth == TYPEOFAUTH.AZUREPOPUP) {
        console.log('Auth azurepopuplogout identified.')
        azurepopupauthservice.logout()
        console.log('Auth azurepopuplogout  complete.')
      } else if (this.state.typeOfAuth == TYPEOFAUTH.BASIC) {
        console.log('Basic Auth logout identified.')
        basicauthservice.logout()
        console.log('Basic Auth logout complete.')
      }
      commit('updateUser', {})
      commit('updateAccesstoken', {})
      commit('updateIsAuthenticated', false)
      commit('updateTypeOfAuth', TYPEOFAUTH.NONE)
      console.log('Auth logout complete.')
    },
  },
}
