<template>
  <div>
    <h2>Välkommen {{ user.name }} ({{ user.userName }})</h2>
  </div>

  <CAlert color="success" v-bind:visible="true">
    <CAlertHeading>Prototype!</CAlertHeading>
    <p>This web app is in prototype phase and will change regularly.</p>
  </CAlert>

  <hr />

  <div>
    <CCard>
      <CCardBody>Här skall det finnas bra information</CCardBody>
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
    user() {
      try {
        var userInfo = JSON.parse(localStorage.getItem('user'))
      } catch (e) {
        throw new Error('Error occured: ', e)
      }
      return userInfo
    },
  },
}
</script>
