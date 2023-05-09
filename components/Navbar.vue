<script setup>
const store = useSettingsStore()
</script>

<template>
  <div class="navbar bg-base-100 fixed z-50">
    <div class="navbar-start">
      <NavbarMobile />
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
        Conduct DB
      </NuxtLink>
      <NavbarMenu class="hidden lg:inline-flex" />
    </div>
    <div class="navbar-end">
      <NavbarTheme />
    </div>
  </div>
</template>