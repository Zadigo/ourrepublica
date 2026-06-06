<template>
  <div>
    <div class="flex">
      <u-input v-model="search" />
      <u-select :items="['title', 'amount', 'date']" class="min-w-25" v-model="sortBy" />
    </div>

    <u-accordion :items="_misUsedFunds">
      <template #default="{ item }">
        <h1 class="text-lg font-bold">
          {{ item.label }}
        </h1>
      </template>
    </u-accordion>
  </div>
</template>

<script setup lang="ts">
import type { CorruptionCase } from '~/types'
import type { AccordionItem } from '@nuxt/ui'

const { misUsedFunds } = defineProps<{
  misUsedFunds: CorruptionCase[]
}>()

const search = ref('')

const searchedFunds = computed(() => {
  if (isDefined(search) && search.value.trim() !== '') {
    return misUsedFunds.filter((fund) => {
      return (
        fund.title.toLowerCase().includes(search.value.toLowerCase()) ||
        fund.description.toLowerCase().includes(search.value.toLowerCase())
      )
    })
  } else {
    return misUsedFunds
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
</script>
