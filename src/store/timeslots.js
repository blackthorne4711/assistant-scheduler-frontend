import axios from 'axios'

export default {
  namespaced: true,
  state: {
    users: {},
  },
  actions: {
    async getTimeslots({ commit }) {
      try {
        const data = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        )
        commit('SET_USERS', data.data)
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users
    },
  },
}
