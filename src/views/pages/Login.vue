<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CIcon
            custom-class-name="login-brand-full"
            :icon="logo"
            :height="80"
          />
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p class="text-medium-emphasis">
                    Logga in med ditt Stallhjälpen konto
                  </p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput
                      type="email"
                      placeholder="Email"
                      autocomplete="email"
                      @input="loginemail = $event.target.value"
                    />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Lösenord"
                      autocomplete="current-password"
                      @input="loginpassword = $event.target.value"
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <CButton color="primary" class="px-4" @click="basiclogin">
                        Login
                      </CButton>
                    </CCol>
                    <CCol :xs="6" class="text-right">
                      <CButton color="link" class="px-0">
                        Glömt lösenord?
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard class="text-white bg-primary py-5" style="width: 44%">
              <CCardBody class="text-center">
                <div>
                  <h2>Anmäl dig</h2>
                  <p>
                    Om du saknar konto så kan du ansöka om konto här, för att
                    kunna se tillgängliga tider att hjälpa till i stallet.
                  </p>
                  <CNavLink href="#/pages/register">
                    <CButton color="light" variant="outline" class="mt-3">
                      Registrering
                    </CButton>
                  </CNavLink>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import { logo } from '@/assets/logo/logo'
import firebaseService from '../../services/FirebaseService.js'

export default {
  name: 'Login',
  components: {},
  created: function () {
    firebaseService.onAuth()
  },
  setup() {
    let loginemail = ''
    let loginpassword = ''

    return {
      logo,
      loginemail,
      loginpassword,
    }
  },
  methods: {
    basiclogin() {
      firebaseService
        .loginWithBasicAuth(this.loginemail, this.loginpassword)
        .then(() => {
          console.log('Successfully logged in')
          firebaseService.onAuth()
          this.$router.push('/dashboard')
        })
        .catch((err) => {
          console.log(err)
          console.log(
            'Error loggin in - ' + err.code + ' (' + err.message + ')',
          )
          setTimeout(this.$toast.clear, 3000)
          this.$toast.error(
            'Inloggningen misslyckades. Kontrollera email och lösenord, och försök igen.',
          )
        })
    },
  },
}
</script>
