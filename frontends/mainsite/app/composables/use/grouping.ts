import type { Politician, QuerySearch } from '~/types'

export type GroupValues = Pick<Politician, 'party' | 'state'>

export type GroupNames = keyof GroupValues

const [useGroupingComposable, _useGroupingStore] = createInjectionState((politicians: Ref<Politician[]>) => {
  const groupNames: GroupNames[] = ['party', 'state']
  const groupBy = ref<GroupNames>('party')

  const searchParams = useUrlSearchParams('history') as QuerySearch
  watch(groupBy, (newValue) => {
    searchParams.groupBy = newValue
    searchParams.group = 'true'
  })

  const groupedValues = computed(() => {
    const groups: Partial<Record<string, Politician[]>> = {}
    
    politicians.value.forEach(politician => {
      if (!Object.keys(groups).includes(politician[groupBy.value])) {
        groups[politician[groupBy.value]] = []
      }
      
      groups?.[politician[groupBy.value]]?.push(politician)
    })
    
    return groups
  })

  return {
    groupBy,
    groupNames,
    groupedValues,
  }
})

export { useGroupingComposable }

export function useGroupingStore() {
  const store = _useGroupingStore()
  if (!store) {
    throw new Error('useGroupingStore must be used within a useGroupingComposable')
  }
  return store
}
