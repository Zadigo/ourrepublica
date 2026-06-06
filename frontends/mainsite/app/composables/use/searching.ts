import type { Politician, PoliticiansGraphqlData, QuerySearch } from '~/types'

export function useSearchPoliticianComposable(politicians: Ref<PoliticiansGraphqlData>) {
  const searchTerm = ref<string>('')

  const query = useUrlSearchParams('history', { removeNullishValues: true }) as QuerySearch

  watch(searchTerm, (newValue) => {
    query.q = newValue
  })

  onMounted(() => { searchTerm.value = query.q || '' })

  const searched = computed(() => {
    if (isDefined(searchTerm) && searchTerm.value !== '') {
      return politicians.value.data.politicians.filter(politician => {
        return (
          politician.firstname.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          politician.lastname.toLowerCase().includes(searchTerm.value.toLowerCase())
        )
      })
    }
    return politicians.value.data.politicians
  })

  return {
    searchTerm,
    searched
  }
}

export type SortBy = keyof Pick<Politician, 'firstname' | 'lastname'>

export function useSortPoliticianComposable(politicians: Ref<Politician[]>) {
  const sortBy = ref<SortBy>('lastname')

  const sortedValues = computed(() => {
    return politicians.value.sort((a, b) => {
      switch (sortBy.value) {
        case 'lastname':
          return a.lastname.localeCompare(b.lastname)
        case 'firstname':
          return a.firstname.localeCompare(b.firstname)
        default:
          return 0
      }
    })
  })

  return {
    sortBy,
    sortedValues
  }
}
