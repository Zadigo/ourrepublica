<template>
  <section id="list-people" class="grid grid-cols-12 col-span-12 gap-2">
    <motion-group :preset="VueUseMotions.PopVisibleOnce" tag="div">
      <article v-for="politician in politicians" :key="politician.id" class="col-span-3">
        <people-card :politician="politician" />
      </article>
    </motion-group>
  </section>
</template>

<script setup lang="ts">
import type { Politician } from '~/types'
import { VueUseMotions } from '~/types/motion'

defineProps<{
  politicians: Politician[]
}>()
</script>

