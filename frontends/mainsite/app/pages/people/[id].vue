<template>
  <section id="politician" class="max-w-6xl mx-auto grid grid-cols-12 gap-5 mt-(--navbar-height) py-10">
    <div class="col-span-12">

    </div>

    <div class="col-span-6">
      <div class="rounded-md overflow-hidden">
        <motion :preset="VueUseMotions.Pop">
          <nuxt-img src="/images/img1.jpg" />
        </motion>
      </div>
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
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.
        </p>
      </u-card>

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
</script>
