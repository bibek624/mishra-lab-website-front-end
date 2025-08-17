<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getPersonBySlug } from '../data/people.js'
import { RESEARCH_ITEMS } from '../data/research.js'
import { PUBLICATIONS, getPublicationsByAuthorId } from '../data/publications.js'
import ResearchCard from '../components/ResearchCard.vue'

const route = useRoute()
const person = computed(() => getPersonBySlug(String(route.params.slug)))

const involvedResearch = computed(() => {
  if (!person.value?.researchIds) return []
  return RESEARCH_ITEMS.filter(r => person.value.researchIds.includes(r.id))
})

const authoredPublications = computed(() => {
  if (!person.value) return []
  return getPublicationsByAuthorId(person.value.id)
})

const sliderRef = ref(null)
function prev() {
  const el = sliderRef.value
  if (!el) return
  el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' })
}
function next() {
  const el = sliderRef.value
  if (!el) return
  el.scrollBy({ left: el.clientWidth, behavior: 'smooth' })
}

const isAlumni = computed(() => person.value?.role === 'Alumni')
const statusLabel = computed(() => {
  if (!person.value) return ''
  if (person.value.role === 'Alumni') {
    return person.value.graduationYear ? `Alumni · ${person.value.graduationYear}` : 'Alumni'
  }
  if (person.value.role === 'Student') {
    if (person.value.degree === 'PhD') return 'PhD Student'
    if (person.value.degree === 'MSc') return 'MSc Student'
    return 'Student'
  }
  if (person.value.role === 'Postdoc') return 'Postdoctoral Researcher'
  if (person.value.role === 'PI') return 'Principal Investigator'
  return person.value.role
})
</script>

<template>
  <section v-if="person" class="space-y-12">
    <!-- Header -->
    <header class="space-y-4 text-center">
      <img :src="person.photo" :alt="person.name" class="h-50 w-50 rounded-full object-cover mx-auto" />
      <div class="space-y-2">
        <h1 class="text-3xl md:text-4xl font-semibold tracking-tight">{{ person.name }}</h1>
        <p class="text-sm text-[var(--text-muted)]">{{ statusLabel }}</p>
        <p v-if="person.bio" class="mx-auto max-w-3xl text-[var(--text-muted)]">{{ person.bio }}</p>
        <div v-if="isAlumni && person.currentAffiliation" class="text-sm text-[var(--text-muted)]">
          <span class="font-medium">Current affiliation:</span>
          {{ person.currentAffiliation.title }}
          <span v-if="person.currentAffiliation.unit"> · {{ person.currentAffiliation.unit }}</span>,
          {{ person.currentAffiliation.organization }}
        </div>
      </div>
    </header>

    <!-- Education & Past Affiliations -->
    <section class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <h2 class="text-xl font-semibold">Education</h2>
        <ul class="mt-3 space-y-2 text-[var(--text-muted)]">
          <li v-for="(e, i) in person.education" :key="i">
            <span class="font-medium">{{ e.degree }}</span> – {{ e.field }}, {{ e.institution }} ({{ e.year }})
          </li>
        </ul>
      </div>
      <div class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <h2 class="text-xl font-semibold">Past Affiliations</h2>
        <ul class="mt-3 list-disc pl-5 text-[var(--text-muted)]">
          <li v-for="(a, i) in person.pastAffiliations" :key="i">{{ a }}</li>
        </ul>
      </div>
    </section>

  

    <!-- Research Involvement -->
    <section v-if="involvedResearch.length" class="space-y-4">
      <div class="flex items-end justify-between">
        <h2 class="text-2xl font-semibold">Research Involvement</h2>
        <!-- <router-link to="/research" class="text-sm text-[color:var(--brand)] hover:underline">See all</router-link> -->
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ResearchCard v-for="r in involvedResearch" :key="r.id" :item="r" />
      </div>
    </section>

    <!-- Publications -->
    <section v-if="authoredPublications.length" class="space-y-4">
      <h2 class="text-2xl font-semibold">Publications</h2>
      <ul class="space-y-3">
        <li v-for="p in authoredPublications" :key="p.id" class="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <div class="max-w-[68ch]">
              <p class="font-medium">{{ p.title }}</p>
              <p class="text-sm text-[var(--text-muted)]">{{ p.authors }} · <span class="italic">{{ p.venue }}</span> · {{ new Date(p.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short' }) }} · {{ p.type }}</p>
            </div>
            <a v-if="p.doi" :href="`https://doi.org/${p.doi}`" target="_blank" class="text-sm text-[color:var(--brand)] hover:underline">DOI</a>
          </div>
        </li>
      </ul>
    </section>
  </section>

  <!-- Gallery -->
  <section v-if="person.gallery?.length" class="space-y-4 mt-10">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-semibold">Gallery</h2>
        <div class="flex gap-2">
          <button @click="prev" aria-label="Previous image" class="h-9 w-9 rounded-md border border-[var(--border)] bg-[var(--surface)]">‹</button>
          <button @click="next" aria-label="Next image" class="h-9 w-9 rounded-md border border-[var(--border)] bg-[var(--surface)]">›</button>
        </div>
      </div>
      <div ref="sliderRef" class="overflow-x-auto whitespace-nowrap snap-x snap-mandatory scroll-smooth">
        <div class="inline-flex gap-4 pr-10">
          <div v-for="(src, i) in person.gallery" :key="src" class="snap-center">
            <img :src="src" :alt="`Gallery image ${i+1}`" class="h-80 w-[46rem] max-w-[70vw] rounded-lg object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

  <section v-else>
    <h1 class="text-2xl font-semibold">Person not found</h1>
  </section>
</template>


