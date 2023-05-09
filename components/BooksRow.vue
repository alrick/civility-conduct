<script setup>
const props = defineProps({
  book: Object
})
</script>

<template>
  <tr>
    <td class="whitespace-normal">
      <div class="flex items-center space-x-3">
        <div>
          <div>{{ book.author_modern_attribution }}</div>
          <div class="text-sm opacity-50">{{ book.implied_gender_of_author }}</div>
        </div>
      </div>
    </td>
    <td class="whitespace-normal">
      <div class="font-bold">{{ book.short_title }}</div>
      <div><EditionsMenu :editions="book.other_editions" /></div>
    </td>
    <td>
      <div class="flex items-center space-x-3">
        <div>
          <div>{{ book.location_on_imprint }}</div>
          <div class="text-sm opacity-50">{{ book.date_of_imprint }}</div>
        </div>
      </div>
    </td>
    <th>
      <NuxtLink :to="`/books/${book.id}`" class="btn btn-ghost btn-xs">
        details
      </NuxtLink>
    </th>
  </tr>
</template>