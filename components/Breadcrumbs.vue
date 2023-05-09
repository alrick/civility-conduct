<script setup>
defineProps({
  id: String
})
</script>

<template>
  <div class="text-lg breadcrumbs">
    <ul>
      <li>
        <NuxtLink to="/books">Books</NuxtLink>
      </li>
      <li>#{{ id }}</li>
    </ul>
  </div>
</template>