<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getResearchBySlug } from '../data/research.js'
import { PEOPLE } from '../data/people.js'

const route = useRoute()
const data = ref(null)
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

onMounted(() => {
  const slug = route.params.slug
  data.value = getResearchBySlug(String(slug))
})

const members = computed(() => {
  if (!data.value) return []
  const researchId = data.value.id
  const people = PEOPLE.filter(p => Array.isArray(p.researchIds) && p.researchIds.includes(researchId))
  const normalized = people.map(p => ({
    id: p.id,
    name: p.name,
    role: p.role === 'Student' ? 'Contributor' : (p.role === 'PI' ? 'PI' : 'Contributor'),
    photo: p.photo,
    slug: p.slug,
  }))
  const leadId = data.value.leadStudentId
  const lead = normalized.find(m => m.id === leadId)
  const pi = normalized.find(m => PEOPLE.find(p => p.id === m.id)?.role === 'PI')
  const membersOnly = normalized.filter(m => m !== lead && m !== pi)
  // Ensure there is always a lead, at least one member (if exists), then PI
  const ordered = []
  if (lead) ordered.push({ ...lead, role: 'Lead Student' })
  ordered.push(...membersOnly)
  if (pi) ordered.push({ ...pi, role: 'PI' })
  return ordered
})
</script>

<template>
  <section v-if="data" class="space-y-12">
    <header class="space-y-3">
      <div class="flex items-center gap-3 text-sm text-[var(--text-muted)]">
        <span class="inline-flex items-center px-2 py-0.5 rounded-full border border-[var(--border)]">{{ data.category }}</span>
        <time>{{ new Date(data.startDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' }) }}</time>
      </div>
      <h1 class="text-4xl font-semibold leading-tight tracking-tight">{{ data.title }}</h1>
    </header>

    <section v-if="data.sections?.length" class="grid gap-10">
      <div v-for="(sec, idx) in data.sections" :key="idx" class="space-y-3 max-w-3xl">
        <h2 class="text-2xl font-semibold">{{ sec.heading }}</h2>
        <p class="text-[var(--text-muted)]">{{ sec.body }}</p>
      </div>
    </section>

    <section v-if="data.gallery?.length" class="space-y-3">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-semibold">Gallery</h2>
        <div class="flex gap-2">
            <button @click="prev" aria-label="Previous image" class="h-9 w-9 rounded-md border border-[var(--border)] bg-[var(--surface)]">‹</button>
          <button @click="next" aria-label="Next image" class="h-9 w-9 rounded-md border border-[var(--border)] bg-[var(--surface)]">›</button>
        </div>
      </div>
      <div class="relative">
        <div ref="sliderRef" class="overflow-x-auto whitespace-nowrap snap-x snap-mandatory scroll-smooth">
          <div class="inline-flex gap-4 pr-10">
            <div v-for="(src, i) in data.gallery" :key="src" class="snap-center">
              <img :src="src" :alt="`Gallery image ${i+1}`" class="h-72 w-[46rem] max-w-[90vw] rounded-lg object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="members.length" class="space-y-5">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-semibold">Research Members</h2>
        <!-- <div v-if="data.leadStudentId" class="text-sm text-[var(--text-muted)]">
          Lead student:
          <span class="font-medium">
            {{ (PEOPLE.find(p=>p.id===data.leadStudentId)?.name) || '—' }} 
          </span>
        </div> -->
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <router-link v-for="m in members" :key="m.slug" :to="{ name: 'people-profile', params: { slug: m.slug } }" class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 flex flex-col items-center text-center">
          <img :src="m.photo" :alt="m.name" class="h-16 w-16 rounded-full object-cover" />
          <p class="mt-3 font-medium">{{ m.name }}</p>
          <p class="text-sm text-[var(--text-muted)]">{{ m.role }}</p>
        </router-link>
      </div>
    </section>

    <section v-if="data.sponsors?.length" class="space-y-5">
      <h2 class="text-2xl font-semibold">Sponsors</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <div v-for="s in data.sponsors" :key="s.name" class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 flex flex-col items-center text-center">
          <img :src="s.logo" :alt="s.name" class="h-10 w-auto" />
          <span class="mt-2 text-sm text-[var(--text)]">{{ s.name }}</span>
        </div>
      </div>
    </section>

    <section v-if="data.publications?.length" class="space-y-5">
      <h2 class="text-2xl font-semibold">Publications</h2>
      <ul class="space-y-3">
        <li v-for="p in data.publications" :key="p.id" class="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <p class="font-medium">{{ p.title }}</p>
              <p class="text-sm text-[var(--text-muted)]">{{ p.authors }} · <span class="italic">{{ p.venue }}</span> · {{ p.year }}</p>
            </div>
            <div class="flex gap-2">
              <a v-if="p.doi" :href="`https://doi.org/${p.doi}`" target="_blank" class="text-sm text-[color:var(--brand)] hover:underline">DOI</a>
              <a v-if="p.url" :href="p.url" target="_blank" class="text-sm text-[color:var(--brand)] hover:underline">Link</a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </section>

  <section v-else>
    <h1 class="text-2xl font-semibold">Research not found</h1>
  </section>
</template>


