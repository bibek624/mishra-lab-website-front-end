<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import ResearchCard from '../components/ResearchCard.vue'
import { CATEGORIES, RESEARCH_ITEMS } from '../data/research.js'

const search = ref('')
const category = ref('All')
const sort = ref('newest') // 'newest' | 'oldest'
const visibleCount = ref(9) // number of items shown; grows with infinite scroll

const categories = CATEGORIES

const filtered = computed(() => {
  let items = RESEARCH_ITEMS.slice()
  if (category.value !== 'All') {
    items = items.filter((i) => i.category === category.value)
  }
  const q = search.value.trim().toLowerCase()
  if (q) {
    items = items.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q)
    )
  }
  items.sort((a, b) => {
    const da = new Date(a.startDate).getTime()
    const db = new Date(b.startDate).getTime()
    return sort.value === 'newest' ? db - da : da - db
  })
  return items
})

const visibleItems = computed(() => filtered.value.slice(0, visibleCount.value))

function onScroll() {
  const scrollPosition = window.innerHeight + window.scrollY
  const threshold = document.body.offsetHeight - 200
  if (scrollPosition >= threshold) {
    // Load more items in chunks of 6
    if (visibleCount.value < filtered.value.length) {
      visibleCount.value += 6
    }
  }
}

function resetAndTop() {
  visibleCount.value = 9
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <section class="space-y-6">
    <header class="grid gap-4 md:gap-6 lg:grid-cols-2">
      <div>
        <h1 class="text-4xl font-semibold tracking-tight">Research</h1>
        <p class="mt-2 text-[var(--text-muted)]">Explore our current research across categories. Filter and sort to find what interests you.</p>
      </div>
      <div class="grid grid-cols-2 gap-3 items-center lg:grid-cols-3">
        <div class="flex items-center gap-2">
          <label class="text-sm text-[var(--text-muted)]">Category</label>
          <div class="relative w-full">
            <select v-model="category" @change="resetAndTop" class="ui-select w-full text-sm pr-8">
              <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
            </select>
            <span class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">▼</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <label class="text-sm text-[var(--text-muted)]">Sort</label>
          <div class="relative w-full">
            <select v-model="sort" @change="resetAndTop" class="ui-select w-full text-sm pr-8">
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
            <span class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">▼</span>
          </div>
        </div>
        <div class="col-span-2 lg:col-span-1 flex items-center gap-2 w-full">
          <label for="search" class="sr-only">Search</label>
          <input id="search" v-model="search" @input="resetAndTop" type="search" placeholder="Search..." class="h-9 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 text-sm"/>
        </div>
      </div>
    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ResearchCard v-for="item in visibleItems" :key="item.id" :item="item" />
    </div>

    <div v-if="visibleItems.length < filtered.length" class="flex justify-center pt-4">
      <button @click="visibleCount += 6" class="h-10 px-4 rounded-md border border-[var(--border)] bg-[var(--surface)] text-sm">Load more</button>
    </div>

    <p v-if="filtered.length === 0" class="text-[var(--text-muted)]">No research items match your filters.</p>
  </section>
</template>
