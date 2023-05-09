<script setup>
const { id } = useRoute().params
const { data, pending, error } = await useAsyncGql('GetBook', { id: id })
</script>

<template>
  <div class="min-h-screen bg-base-300 py-24">
    <div class="container mx-auto max-w-5xl">
      <Breadcrumbs :id="id" />
      <!-- <AlertLoading v-if="pending" />
      <AlertError v-else-if="error" :error="error" /> -->
      <BookDetails :book="data.book" />
    </div>
  </div>
</template>