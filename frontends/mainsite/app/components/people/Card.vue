<template>
  <u-card>
    <nuxt-link :to="`/people/${politician.id}`">
      <h2 class="text-lg font-bold">
        {{ politician.firstname }} {{ politician.lastname }}
      </h2>
    </nuxt-link>

    <div class="flex gap-2">
      <u-badge :label="politician.party" color="info" />
      <u-badge :label="politician.state" color="info" />   
      <u-badge :label="`${politician.misUsedFunds.length} cases`" color="info" />   
    </div>
  </u-card>
</template>

<script setup lang="ts">
import type { Politician } from '~/types'

defineProps<{
  politician: Politician
}>()
</script>
