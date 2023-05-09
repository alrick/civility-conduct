import { nextTick } from 'vue'

export const useBooksStore = defineStore('books', () => {
  const LIMIT = 50
  const SORT_IDENTIFIER_KEY = 'title'
  const SORT_IDENTIFIER_VALUE = ['short_title', 'post_1500_edition_number']
  const SORT_DATE_KEY = 'date'
  const SORT_DATE_VALUE = ['date_of_imprint', 'short_title', 'post_1500_edition_number']
  const SORT_DATED_KEY = 'dated'
  const SORT_DATED_VALUE = ['-date_of_imprint', 'short_title', 'post_1500_edition_number']

  const books: Ref<any> = ref([])
  const page = ref(1)
  const total = ref(1)
  const sort = ref(SORT_IDENTIFIER_VALUE)
  const sortKey = ref(SORT_IDENTIFIER_KEY)

  const maxPage = computed(() => Math.ceil(total.value / LIMIT))

  function prevPage() {
    if (page.value > 1) {
      page.value--
      return fetchBooks()
    }
  }

  function nextPage() {
    if (page.value < maxPage.value) {
      page.value++
      return fetchBooks()
    }
  }

  function goToPage(p: number) {
    page.value = p
    return fetchBooks()
  }

  function setSort(s: string) {
    if (s == SORT_DATE_KEY) {
      sortKey.value = SORT_DATE_KEY
      sort.value = SORT_DATE_VALUE
    } else if (s == SORT_DATED_KEY) {
      sortKey.value = SORT_DATED_KEY
      sort.value = SORT_DATED_VALUE
    } else {
      sortKey.value = SORT_IDENTIFIER_KEY
      sort.value = SORT_IDENTIFIER_VALUE
    }
    return fetchBooks()
  }

  async function fetchBooks() {
    const { data } = await useAsyncGql('GetBooks', { limit: LIMIT, page: page.value, sort: sort.value })
    total.value = data?.value?.books_aggregated[0]?.count?.id || 0
    books.value = data?.value?.books || []

    return nextTick() // return a promise resolved at next DOM update
  }

  return { books, page, maxPage, total, sort, sortKey, prevPage, nextPage, goToPage, setSort, fetchBooks, SORT_IDENTIFIER_KEY, SORT_DATE_KEY, SORT_DATED_KEY, LIMIT }
})