<template>
  <CDropdown variant="nav-item">
    <CDropdownToggle placement="bottom-end" class="py-0" :caret="false">
      <CAvatar :src="avatar" size="md" />
      {{ user.email }}
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">
      <CDropdownHeader component="h6" class="bg-light fw-semibold py-2">
        User
      </CDropdownHeader>
      <CDropdownItem>
        <CNavLink href="#/user/settings">
          <CIcon icon="cil-user" /> Settings
        </CNavLink>
      </CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem @click="logout">
        <CNavLink href="#/pages/logout">
          <CIcon icon="cil-lock-locked" @click="logout" /> Logout
        </CNavLink>
      </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script>
import avatar from '@/assets/images/User-icon.png'
import firebaseService from '../services/FirebaseService.js'

export default {
  name: 'AppHeaderDropdownAccnt',
  setup() {
    return {
      avatar: avatar,
    }
  },
  computed: {
    user() {
      return firebaseService.getUser()
    },
  },
  methods: {
    logout() {
      firebaseService.logout()
    },
  },
}
</script>
