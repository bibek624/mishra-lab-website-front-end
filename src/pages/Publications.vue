<script setup>
import { ref, computed } from 'vue'
import { PUBLICATIONS, listYears } from '../data/publications.js'

const search = ref('')
const year = ref('All')
const type = ref('All') // Journal | Conference | All

const years = ['All', ...listYears()]
const types = ['All', 'Journal', 'Conference']

const filtered = computed(() => {
  let items = PUBLICATIONS.slice()
  if (year.value !== 'All') {
    items = items.filter(p => new Date(p.date).getFullYear() === Number(year.value))
  }
  if (type.value !== 'All') {
    items = items.filter(p => p.type === type.value)
  }
  const q = search.value.trim().toLowerCase()
  if (q) {
    items = items.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.authors.toLowerCase().includes(q) ||
      p.venue.toLowerCase().includes(q)
    )
  }
  // newest first by date
  items.sort((a,b) => new Date(b.date) - new Date(a.date))
  return items
})
</script>

<template>
  <section class="space-y-6">
    <header class="space-y-3">
      <h1 class="text-4xl font-semibold tracking-tight">Publications</h1>
      <p class="text-[var(--text-muted)]">Filter by year, type, or search by title, authors, or venue.</p>
      <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
        <div class="flex items-center gap-2">
          <label class="text-sm text-[var(--text-muted)]">Year</label>
          <div class="relative w-full">
            <select v-model="year" class="ui-select w-full text-sm pr-8">
              <option v-for="y in years" :key="y" :value="String(y)">{{ y }}</option>
            </select>
            <span class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">▼</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <label class="text-sm text-[var(--text-muted)]">Type</label>
          <div class="relative w-full">
            <select v-model="type" class="ui-select w-full text-sm pr-8">
              <option v-for="t in types" :key="t" :value="t">{{ t }}</option>
            </select>
            <span class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">▼</span>
          </div>
        </div>
        <div class="col-span-2 md:col-span-2">
          <label for="pub-search" class="sr-only">Search publications</label>
          <input id="pub-search" v-model="search" type="search" placeholder="Search publications..." class="h-9 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 text-sm" />
        </div>
      </div>
    </header>

    <ul class="space-y-3">
      <li v-for="p in filtered" :key="p.id" class="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <div class="max-w-[68ch]">
            <p class="font-medium">{{ p.title }}</p>
            <p class="text-sm text-[var(--text-muted)]">{{ p.authors }} · <span class="italic">{{ p.venue }}</span> · {{ new Date(p.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short' }) }} · {{ p.type }}</p>
          </div>
          <div class="flex gap-2">
            <a v-if="p.doi" :href="`https://doi.org/${p.doi}`" target="_blank" class="text-sm text-[color:var(--brand)] hover:underline">DOI</a>
          </div>
        </div>
      </li>
    </ul>
    <p v-if="filtered.length === 0" class="text-[var(--text-muted)]">No publications match your filters.</p>
  </section>
</template>
