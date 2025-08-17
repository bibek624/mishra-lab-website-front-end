<script setup>
import { computed } from 'vue'
import ResearchCard from '../components/ResearchCard.vue'
import PersonCard from '../components/PersonCard.vue'
import { RESEARCH_ITEMS } from '../data/research.js'
import { PUBLICATIONS } from '../data/publications.js'
import { PEOPLE } from '../data/people.js'

const researchHighlights = computed(() => {
  return RESEARCH_ITEMS.slice().sort((a, b) => new Date(b.startDate) - new Date(a.startDate)).slice(0, 4)
})

const featuredPublication = computed(() => {
  return PUBLICATIONS.slice().sort((a, b) => new Date(b.date) - new Date(a.date))[0]
})

const principalInvestigator = computed(() => PEOPLE.find(p => p.role === 'PI'))
const featuredStudents = computed(() => PEOPLE.filter(p => p.role === 'Student').slice(0, 4))

const sponsors = [
  { name: 'NSF', logo: 'https://dummyimage.com/120x48/64748b/ffffff&text=NSF' },
  { name: 'DOT', logo: 'https://dummyimage.com/120x48/475569/ffffff&text=DOT' },
  { name: 'Partner', logo: 'https://dummyimage.com/120x48/334155/ffffff&text=Partner' },
  { name: 'Industry', logo: 'https://dummyimage.com/120x48/06B6D4/ffffff&text=Industry' },
]
</script>

<template>
  <section class="space-y-16">
    <!-- Hero -->
    <section class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12" v-reveal>
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">Engineering research for resilient, sustainable infrastructure</h1>
        <p class="mt-4 text-[var(--text-muted)]">We blend data-driven methods with domain expertise across materials, rail systems, and sustainability—delivering open, reproducible science with real-world impact.</p>
        <div class="mt-6 flex flex-wrap gap-3">
          <router-link to="/research" class="inline-flex items-center justify-center h-10 px-4 rounded-md border border-[var(--border)] text-[var(--text)] bg-[var(--surface)] hover:bg-[color:var(--border)]/30">Explore research</router-link>
          <router-link to="/publications" class="inline-flex items-center justify-center h-10 px-4 rounded-md border border-[var(--border)] text-[var(--text)] bg-[var(--surface)] hover:bg-[color:var(--border)]/30">View publications</router-link>
        </div>
      </div>
    </section>

    <!-- Research highlights -->
    <section class="space-y-6" v-reveal>
      <div class="flex items-end justify-between">
        <h2 class="text-2xl font-semibold">Research highlights</h2>
        <router-link to="/research" class="text-sm text-[color:var(--brand)] hover:underline">See all</router-link>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ResearchCard v-for="item in researchHighlights" :key="item.id" :item="item" />
      </div>
    </section>

    <!-- Featured publication -->
    <section v-if="featuredPublication" class="space-y-4" v-reveal>
      <h2 class="text-2xl font-semibold">Featured publication</h2>
      <div class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <div class="flex flex-wrap items-baseline justify-between gap-3">
          <div class="max-w-[68ch]">
            <p class="font-medium">{{ featuredPublication.title }}</p>
            <p class="text-sm text-[var(--text-muted)]">{{ featuredPublication.authors }} · <span class="italic">{{ featuredPublication.venue }}</span> · {{ new Date(featuredPublication.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short' }) }} · {{ featuredPublication.type }}</p>
          </div>
          <div class="flex gap-3">
            <a v-if="featuredPublication.doi" :href="`https://doi.org/${featuredPublication.doi}`" target="_blank" class="text-sm text-[color:var(--brand)] hover:underline">DOI</a>
            <router-link to="/publications" class="text-sm text-[color:var(--brand)] hover:underline">All publications</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- People highlight -->
    <section v-if="principalInvestigator" class="space-y-4" v-reveal>
      <h2 class="text-2xl font-semibold">Meet the PI</h2>
      <div class="flex justify-start">
        <PersonCard :person="principalInvestigator" />
      </div>
    </section>

    <!-- Students highlight -->
    <section v-if="featuredStudents.length" class="space-y-4">
      <div class="flex items-end justify-between">
        <h2 class="text-2xl font-semibold">Current students</h2>
        <router-link to="/people" class="text-sm text-[color:var(--brand)] hover:underline">See all</router-link>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <PersonCard v-for="s in featuredStudents" :key="s.id" :person="s" />
      </div>
    </section>

    <!-- Sponsors strip -->
    <section class="space-y-4" v-reveal>
      <h2 class="text-2xl font-semibold">Partners</h2>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
        <div v-for="s in sponsors" :key="s.name" class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 flex items-center justify-center">
          <img :src="s.logo" :alt="s.name" class="h-10 w-auto" />
        </div>
      </div>
    </section>
  </section>
</template>


