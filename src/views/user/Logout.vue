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
                  <h1>Du har loggats ut</h1>
                  <p class="text-medium-emphasis">
                    Klicka nedan för att komma vidare till inloggningssidan.
                  </p>
                  <CRow>
                    <CCol :xs="6">
                      <CNavLink href="#/user/login">
                        <CButton color="primary" class="px-4">
                          Gå till Login
                        </CButton>
                      </CNavLink>
                    </CCol>
                  </CRow>
                </CForm>
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
}
</script>
