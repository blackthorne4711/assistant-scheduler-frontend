<template>
  <CDropdown variant="nav-item">
    <CDropdownToggle placement="bottom-end" class="py-0" :caret="false">
      <CAvatar :src="avatar" size="md" />
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
      <CDropdownItem>
        <CNavLink href="#/user/logout">
          <CIcon icon="cil-lock-locked" /> Logout
        </CNavLink>
      </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script>
import avatar from '@/assets/images/User-icon.png'
export default {
  name: 'AppHeaderDropdownAccnt',
  setup() {
    return {
      avatar: avatar,
      itemsCount: 42,
    }
  },
}
</script>
