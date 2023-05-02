import { nextTick } from 'vue'

export const useCoinsStore = defineStore('coins', () => {
  const LIMIT = 50
  const SORT_IDENTIFIER_KEY = 'identifier'
  const SORT_IDENTIFIER_VALUE = ['identifier']
  const SORT_DATE_KEY = 'date'
  const SORT_DATE_VALUE = ['date_from', 'identifier']

  const coins: Ref<any> = ref([])
  const page = ref(1)
  const total = ref(1)
  const sort = ref(SORT_IDENTIFIER_VALUE)
  const sortKey = ref(SORT_IDENTIFIER_KEY)

  const maxPage = computed(() => Math.ceil(total.value / LIMIT))

  function prevPage() {
    if (page.value > 1) {
      page.value--
      return fetchCoins()
    }
  }

  function nextPage() {
    if (page.value < maxPage.value) {
      page.value++
      return fetchCoins()
    }
  }

  function goToPage(p: number) {
    page.value = p
    return fetchCoins()
  }

  function setSort(s: string) {
    if (s == SORT_DATE_KEY) {
      sortKey.value = SORT_DATE_KEY
      sort.value = SORT_DATE_VALUE
    } else {
      sortKey.value = SORT_IDENTIFIER_KEY
      sort.value = SORT_IDENTIFIER_VALUE
    }
    return fetchCoins()
  }

  async function fetchCoins() {
    const { data } = await useAsyncGql('GetCoins', { limit: LIMIT, page: page.value, sort: sort.value })
    total.value = data?.value?.coins_aggregated[0]?.count?.id || 0
    coins.value = data?.value?.coins || []

    return nextTick() // return a promise resolved at next DOM update
  }

  return { coins, page, maxPage, total, sort, sortKey, prevPage, nextPage, goToPage, setSort, fetchCoins, SORT_IDENTIFIER_KEY, SORT_DATE_KEY }
})