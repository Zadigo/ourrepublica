<template>
  <section id="list-people" class="grid grid-cols-12 col-span-12 gap-2">
    <article v-for="politician in politicians" :key="politician.id" class="col-span-3">
      <people-card :politician="politician" />
    </article>
  </section>
</template>

<script setup lang="ts">
import type { Politician } from '~/types'

defineProps<{
  politicians: Politician[]
}>()
</script>

