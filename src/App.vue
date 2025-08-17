<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-[var(--bg)] text-[var(--text)]">
    <AppHeader />
    <main class="page-container py-10">
      <router-view />
    </main>
  </div>
  
</template>

