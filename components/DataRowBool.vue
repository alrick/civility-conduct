<script setup>
const props = defineProps({
  title: String,
  data: Boolean
})
</script>

<template>
  <div class="table-row">
    <div class="table-cell font-bold pr-6 w-1/3 text-right">{{ title }}</div>
    <div class="table-cell pb-2 flex item-center relative">
      <template v-if="data">
        <IconRoundedCheck class="absolute" />
        <span class="ml-7">Yes</span>
      </template>
      <template v-else>
        <IconRoundedX class="absolute" />
        <span class="ml-7">No</span>
      </template>
    </div>
  </div>
</template>