<script setup>
const { id } = useRoute().params
const { data } = await useAsyncGql('GetBook', { id: id })
</script>

<template>
  <ErrorHero v-if="!data" />
  <div v-else class="min-h-screen bg-base-300 py-24">
    <div class="container mx-auto max-w-5xl">
      <Breadcrumbs :id="id" />
      <BookDetails :book="data?.book" />
    </div>
  </div>
</template>