<script setup>
const props = defineProps({
  editions: Array
})

const editionsLabel = computed(() => {
  return props.editions.length > 1 ? 'editions' : 'edition'
})
</script>

<template>
  <div v-if="editions.length" class="dropdown">
    <label tabindex="0" class="link my-1">{{ editions.length }} more {{ editionsLabel }}</label>
    <ul tabindex="0" class="dropdown-content menu menu-compact p-2 shadow bg-base-100 rounded-box w-[35rem]">
      <li v-for="edition of editions">
        <NuxtLink :to="`/books/${edition.id}`" class="inline">
          {{ edition.short_title }}
          <span class="font-bold italic">Edition n°{{ edition.post_1500_edition_number }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>