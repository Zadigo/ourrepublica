<template>
  <div>
    <div v-for="(sourceDetail, idx) in sourceDetails" :key="sourceDetail.id" class="bg-slate-50 rounded-md hover:bg-slate-100 p-3 cursor-pointer">
      {{ idx + 1 }}. {{ sourceDetail.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SourceDetails } from '~/types'

defineProps<{
  sourceDetails: SourceDetails[]
}>()
</script>
