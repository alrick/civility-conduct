<script setup>
definePageMeta({ layout: "table" })
const store = useBooksStore()
store.fetchBooks()
</script>

<template>
  <div class="min-h-screen bg-base-300 pt-24 px-4 2xl:px-60">
    <div class="flex my-4">
      <Filters />
      <Sorting />
      <div class="grow"></div>
      <Pagination />
    </div>
    <!-- <label for="main-drawer" class="btn btn-link drawer-button">Open sidebar</label> -->
    <table class="table w-full">
      <thead>
        <tr><th>Author</th><th>Title</th><th>Imprint</th><th></th></tr>
      </thead>
      <tbody>
        <BooksRow v-for="book in store.books" :book="book" />
      </tbody>
      <tfoot>
        <tr><th>Author</th><th>Title</th><th>Imprint</th><th></th></tr>
      </tfoot>
    </table>
    <div class="flex my-4">
      <div class="grow"></div>
      <Pagination v-if="store.total > store.LIMIT" />
    </div>
    </div>
  </template>