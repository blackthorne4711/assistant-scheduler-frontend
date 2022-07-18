import * as Msal from 'msal'

export default class AzurePopupAuthService {
  constructor(clientid, authority, scopes) {
    this.app = new Msal.UserAgentApplication({
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
    const loginRequest = {
      scopes: this.scopes,
      // prompt: 'consent',
      prompt: 'select_account',
    }

    const accessTokenRequest = {
      scopes: this.scopes,
    }

    try {
      const loginResponse = await this.app.loginPopup(loginRequest)
      console.log(`Login was a success ${loginResponse}`)
    } catch (error) {
      console.log(`Login error ${error}`)
      return undefined
    }

    let tokenResponse = {}

    try {
      tokenResponse = await this.app.acquireTokenSilent(accessTokenRequest)
      console.log(`Token response acquired silently - ${tokenResponse}`)
    } catch (error) {
      console.log(
        `Failed to acquire the token silently, using a pop up -- ${error}`,
      )

      try {
        tokenResponse = await this.app.acquireTokenPopup(accessTokenRequest)
        console.log(`Token response acquired with a pop up - ${tokenResponse}`)
      } catch (errorPopup) {
        console.log(`Error acquiring the popup: ${errorPopup}`)
        return undefined
      }
    }

    return [this.getUser(), tokenResponse.accessToken]
  }

  logout() {
    this.app.logout()
  }

  getUser() {
    return this.app.getAccount()
  }
}
