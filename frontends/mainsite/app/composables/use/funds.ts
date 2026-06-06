import type { AccordionItem } from "@nuxt/ui"
import type { CorruptionCase } from "~/types"

const [useFundsComposable, _useFundsStore] = createInjectionState((funds: CorruptionCase[]) => {
  const search = ref('')

  const searchedFunds = computed(() => {
    if (isDefined(search) && search.value.trim() !== '') {
      return funds.filter((fund) => {
        return (
          fund.title.toLowerCase().includes(search.value.toLowerCase()) ||
          fund.description.toLowerCase().includes(search.value.toLowerCase())
        )
      })
    } else {
      return funds
    }
  })

  const sortBy = ref<keyof Pick<CorruptionCase, 'title' | 'amount' | 'date'>>('title')

  const sortedFunds = computed(() => {
    return searchedFunds.value.sort((a, b) => {
      if (sortBy.value === 'amount') {
        return b.amount - a.amount
      } else if (sortBy.value === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else {
        return a.title.localeCompare(b.title)
      }
    })
  })

  const _misUsedFunds = computed(() => {
    return sortedFunds.value.map(fund => ({
      label: `${fund.title} (${fund.amount}€)`,
      icon: 'lucide-alert-triangle',
      content: fund.description
    })) as AccordionItem[]
  })

  return {
    search,
    sortBy,
    misUsedFunds: _misUsedFunds
  }
})

export { useFundsComposable }

export function useFundsStore() {
  
}
