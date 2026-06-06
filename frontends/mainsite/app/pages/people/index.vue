<template>
  <div id="people" class="max-w-6xl px-5 mx-auto mt-(--navbar-height) py-10">
    <div class="grid grid-cols-12 gap-2">
      <header class="col-span-12">
        <u-card>
          <u-input v-model="searchTerm" placeholder="Search for a politician..." />

          <u-button @click="selectedDisplay = 'list'">
            List
          </u-button>
  
          <u-button @click="selectedDisplay = 'group'">
            Group
          </u-button>

          <u-select v-model="groupBy" :items="groupNames" class="w-20" />

          <u-select v-model="sortBy" :items="['firstname', 'lastname']" class="w-20" />
        </u-card>
      </header>

      <!-- People -->
      <people-displays-list v-if="selectedDisplay === 'list'" :politicians="sortedValues" />
      <people-displays-group v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
const politicians = usePoliticianFixture()
const { searchTerm, searched } = useSearchPoliticianComposable(politicians)
const { sortBy, sortedValues } = useSortPoliticianComposable(searched)
const { groupNames, groupBy } = useGroupingComposable(sortedValues)

const selectedDisplay = ref<'list' | 'group'>('list')
</script>
