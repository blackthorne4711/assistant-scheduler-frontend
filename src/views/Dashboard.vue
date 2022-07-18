<template>
  <div>
    <h2>Välkommen</h2>
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
import firebaseService from '../services/FirebaseService.js'

export default {
  name: 'Dashboard',
  components: {},
  setup() {
    return {}
  },
  methods: {},
  computed: {
    user() {
      return firebaseService.getUser()
    },
  },
}
</script>
