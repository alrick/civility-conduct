<script setup>
const store = useSettingsStore()
</script>

<template>
  <div :data-theme="store.theme">
    <Navbar />
    <div class="drawer bg-base-300">
      <input id="main-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <slot />
        <Footer />
      </div>
      <div class="drawer-side">
        <label for="main-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-200 text-base-content py-28">

        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.table th:first-child {
  position: static;
}
</style>