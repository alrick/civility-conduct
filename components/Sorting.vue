<script setup>
const store = useBooksStore()
</script>

<template>
  <a @click="store.setSort(store.SORT_IDENTIFIER_KEY)" class="btn btn-sm btn-ghost mr-4" :class="{ 'btn-link': store.sortKey == store.SORT_IDENTIFIER_KEY }">
    <IconAscendingLetters class="inline" />
    Title
  </a>
  <a @click="store.setSort(store.SORT_DATE_KEY)" class="btn btn-sm btn-ghost mr-4" :class="{ 'btn-link': store.sortKey == store.SORT_DATE_KEY }">
    <IconAscendingNumbers class="inline" />
    Asc. Date
  </a>
  <a @click="store.setSort(store.SORT_DATED_KEY)" class="btn btn-sm btn-ghost mr-4" :class="{ 'btn-link': store.sortKey == store.SORT_DATED_KEY }">
    <IconDescendingNumbers class="inline" />
    Desc. Date
  </a>
</template>