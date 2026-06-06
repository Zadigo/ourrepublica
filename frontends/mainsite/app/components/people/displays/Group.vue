<template>
  <section id="group-people" class="col-span-12 gap-2">
    <div v-for="group in Object.keys(groupedValues)" :key="group" class="col-span-12">
      <div class="p-3 rounded-md bg-slate-100 my-5 font-bold flex items-center gap-2">
        <u-badge :label="groupedValues[group]?.length || 0" color="neutral" />
        <span>{{ group }}</span>
      </div>

      <div class="grid grid-cols-12 gap-2">
        <article v-for="politician in groupedValues[group]" :key="politician.id" class="col-span-3">
          <people-card :politician="politician" />
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { groupedValues } = useGroupingStore()
</script>
