<script setup>
const props = defineProps({
  person: {
    type: Object,
    required: true,
  },
})

function subtitle(person) {
  if (person.role === 'Student') {
    return person.degree ? `Student · ${person.degree}` : 'Student'
  }
  if (person.role === 'Alumni') {
    const degree = person.degree ? ` · ${person.degree}` : ''
    const year = person.graduationYear ? ` (${person.graduationYear})` : ''
    return `Alumni${degree}${year}`
  }
  return person.role
}
</script>

<template>
  <router-link :to="{ name: 'people-profile', params: { slug: person.slug } }" class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 flex flex-col items-center text-center w-[320px] mx-auto transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg">
    <img :src="person.photo" :alt="person.name" class="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
    <p class="mt-3 font-medium">{{ person.name }}</p>
    <p class="text-sm text-[var(--text-muted)]">{{ subtitle(person) }}</p>
  </router-link>
</template>


