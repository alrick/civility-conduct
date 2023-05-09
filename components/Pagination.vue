<script setup>
const store = useBooksStore()

function scrollToTop() {
  const element = document.getElementById('nuxtpage');
  if (element) {
    element.scrollIntoView();
  }
}

async function handleNextPage() {
  await store.nextPage()
  scrollToTop()
}

async function handlePrevPage() {
  await store.prevPage()
  scrollToTop()
}

async function handleGoToPage(p) {
  await store.goToPage(p)
  scrollToTop()
}
</script>

<template>
  <div class="btn-group">
    <button @click="handlePrevPage()" class="btn btn-sm btn-ghost" :class="{ 'btn-disabled': store.page == 1 }">
      <IconPrev />
    </button>
    <template v-for="p in store.maxPage">
      <button @click="handleGoToPage(p)" class="btn btn-sm btn-ghost" :class="{ 'btn-active': p == store.page }">{{ p }}</button>
    </template>
    <button @click="handleNextPage()" class="btn btn-sm btn-ghost" :class="{ 'btn-disabled': store.page == store.maxPage }">
      <IconNext />
    </button>
  </div>
</template>