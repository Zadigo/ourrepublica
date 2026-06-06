<template>
  <section id="politician" class="max-w-6xl mx-auto grid grid-cols-12 gap-5 mt-(--navbar-height) py-10">
    <div class="col-span-12">

    </div>

    <div class="col-span-6 space-y-4">
      <!-- Image -->
      <div class="rounded-md overflow-hidden">
        <motion :preset="VueUseMotions.Pop">
          <nuxt-img src="/images/img1.jpg" />
        </motion>
      </div>

      <!-- Sources -->
      <u-card class="space-y-4">
        <template #header>
          <h2 class="text-xl font-semibold">
            <u-badge :label="sources.length" color="primary" />
            Sources
          </h2>
        </template>

        <lazy-people-details-sources :source-details="sources" hydrate-on-visible />
      </u-card>
    </div>
    
    <div class="col-span-6 space-y-2">
      <u-card class="space-y-4">
        <h1 class="text-3xl font-bold mb-5">
          {{ politician?.firstname }} {{ politician?.lastname }}
        </h1>

        <div class="flex gap-2">
          <u-badge :label="politician?.state" color="info" />
          <u-badge :label="politician?.party" color="info" />
        </div>
      </u-card>

      <u-card class="space-y-4">
        <p>
          {{ politician?.description }}
        </p>

        <div class="flex mt-2 gap-2">
          <u-button to="https://example.com" variant="subtle">
            <icon name="i-fa7-brands-wikipedia-w" />
            Wikipedia
          </u-button>
        </div>
      </u-card>

      <!-- Funds -->
      <u-card class="space-y-4">
        <lazy-people-details-mis-used-funds :misUsedFunds="politician?.misUsedFunds || []" hydrate-on-visible />
      </u-card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { VueUseMotions } from '~/types/motion'

const politicians = usePoliticianFixture()
const politician = computed(() => politicians.value.data.politicians[0])
const sources = computed(() => politician.value?.misUsedFunds.map(fund => fund.sources).flat() || [])
</script>
