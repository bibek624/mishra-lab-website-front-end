<script setup>
import { onMounted, ref } from 'vue'

const isDark = ref(false)

function applyTheme(dark) {
  const root = document.documentElement
  root.classList.toggle('dark', dark)
  try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch (e) {}
}

function toggle() {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
}

onMounted(() => {
  try {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = stored ? stored === 'dark' : prefersDark
  } catch (e) {}
})
</script>

<template>
  <button @click="toggle" class="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-[var(--border)] text-[var(--text)] bg-[var(--surface)] hover:bg-[color:var(--border)]/30 transition-colors" aria-label="Toggle theme">
    <span class="sr-only">Toggle theme</span>
    <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/></svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/></svg>
  </button>
</template>


