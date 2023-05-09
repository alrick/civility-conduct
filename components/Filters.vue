<script setup>
const store = useBooksStore()
</script>

<template>
  <h2 class="font-bold text-xl mr-8">{{ store.total }} Records</h2>
</template>