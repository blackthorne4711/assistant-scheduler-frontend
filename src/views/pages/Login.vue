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
                <div>
                  <div id="label">Sign-in with Microsoft Azure AD B2C</div>

                  <button @click="login" v-if="!isLoggedIn">Login</button>
                  <button @click="logout" v-if="isLoggedIn">Logout</button>

                  <div v-if="isLoggedIn">
                    Hello from Vue.js. User is {{ user.name }}
                  </div>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
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
                      placeholder="Användarnamn"
                      autocomplete="username"
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
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <CButton color="primary" class="px-4"> Login </CButton>
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

export default {
  name: 'Login',
  components: {},
  setup() {
    return {
      logo,
    }
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
