<script setup>
const props = defineProps({
  title: String,
  data: Array
})
</script>

<template>
  <div class="table-row">
    <div class="table-cell font-bold pr-6 w-1/3 text-right">{{ title }}</div>
    <div v-if="data" class="table-cell pb-2">
      <span v-for="d of data" class="badge badge-outline mr-2">{{ d }}</span>
    </div>
    <div v-else class="table-cell pb-2"><UndefinedData /></div>
  </div>
</template>