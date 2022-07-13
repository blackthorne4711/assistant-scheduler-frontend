<template>
  <div>
    <h2>Start page</h2>
  </div>

  <CAlert color="success" v-bind:visible="true">
    <CAlertHeading>Prototype!</CAlertHeading>
    <p>This web app is in prototype phase and will change regularly.</p>
  </CAlert>

  <hr />

  <div v-if="isLoggedin">
    <CCard>
      <CCardBody> Välkommen </CCardBody>
      <button @click="logout">Logout</button>
    </CCard>
  </div>
  <div v-else>
    <CCard>
      <CCardBody> Logga in </CCardBody>
      <button @click="login">Login</button>
    </CCard>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {},
  setup() {
    return {}
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login')
    },
    logout() {
      this.$store.dispatch('auth/logout')
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.isAuthenticated
    },
    user() {
      return this.$store.state.auth.user
    },
  },
}
</script>
