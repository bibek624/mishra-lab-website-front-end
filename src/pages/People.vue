<script setup>
import { computed } from 'vue'
import { PEOPLE } from '../data/people.js'
import PersonCard from '../components/PersonCard.vue'

const pi = computed(() => PEOPLE.filter(p => p.role === 'PI'))
const postdocs = computed(() => PEOPLE.filter(p => p.role === 'Postdoc'))
const students = computed(() => PEOPLE.filter(p => p.role === 'Student'))
const alumni = computed(() => PEOPLE.filter(p => p.role === 'Alumni'))

function degreeLabel(person) {
  return person.degree ? `(${person.degree})` : ''
}
</script>

<template>
  <section class="space-y-10 text-center">
    <header>
      <h1 class="text-4xl font-semibold tracking-tight">People</h1>
      <p class="mt-2 text-[var(--text-muted)]">Meet the PI, postdocs, current students, and alumni. Individual profile pages coming soon.</p>
    </header>

    <section v-if="pi.length" class="space-y-4">
      <h2 class="text-2xl font-semibold">Principal Investigator</h2>
      <div class="flex flex-wrap justify-center gap-6">
        <PersonCard v-for="p in pi" :key="p.id" :person="p" />
      </div>
    </section>

    <section v-if="postdocs.length" class="space-y-4">
      <h2 class="text-2xl font-semibold">Postdoctoral Researchers</h2>
      <div class="flex flex-wrap justify-center gap-6">
        <PersonCard v-for="p in postdocs" :key="p.id" :person="p" />
      </div>
    </section>

    <section v-if="students.length" class="space-y-4">
      <h2 class="text-2xl font-semibold">Current Students</h2>
      <div class="flex flex-wrap justify-center gap-6">
        <PersonCard v-for="p in students" :key="p.id" :person="p" />
      </div>
    </section>

    <section v-if="alumni.length" class="space-y-4">
      <h2 class="text-2xl font-semibold">Alumni</h2>
      <div class="flex flex-wrap justify-center gap-6">
        <PersonCard v-for="p in alumni" :key="p.id" :person="p" />
      </div>
    </section>
  </section>
</template>

