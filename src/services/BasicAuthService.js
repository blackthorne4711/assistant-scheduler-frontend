import * as Msal from '@azure/msal-browser'

export default class AuthService {
  constructor(clientid, authority, scopes) {
    this.pca = new Msal.PublicClientApplication({
      auth: {
        clientId: clientid,
        authority,
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: true,
      },
    })
    this.scopes = scopes
  }

  async login() {
    const usernamePasswordRequest = {
      scopes: this.scopes,
      username: 'test', // Add your username here
      password: 'testing', // Add your password here
    }

    let tokenResponse = {}

    try {
      tokenResponse = await this.pca.acquireTokenByUsernamePassword(
        usernamePasswordRequest,
      )
      console.log('BasicAuth - acquired token by password grant')
      console.log(`Token response acquired with basic auth - ${tokenResponse}`)
    } catch (error) {
      console.log('ERROR BasicAuth - failed to acquire token by password grant')
      console.log(error)
    }

    return [this.getUser(), tokenResponse.accessToken]
  }

  logout() {
    this.pca.logout()
  }

  getUser() {
    return this.pca.getAccount()
  }
}
