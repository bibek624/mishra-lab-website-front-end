<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const slug = route.params.slug
</script>

<template>
  <section class="space-y-3">
    <h1 class="text-4xl font-semibold tracking-tight">Profile</h1>
    <p class="text-[var(--text-muted)]">Profile page for <strong>{{ slug }}</strong> will be implemented later.</p>
  </section>
</template>


