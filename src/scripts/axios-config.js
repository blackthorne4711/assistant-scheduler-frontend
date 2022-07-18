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
