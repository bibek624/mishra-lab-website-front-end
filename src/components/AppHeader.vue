<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const isOpen = ref(false)

const nav = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Research', to: '/research' },
  { name: 'Publications', to: '/publications' },
  { name: 'People', to: '/people' },
  { name: 'Contact', to: '/contact' },
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-[var(--surface)]/90 backdrop-blur border-b border-[var(--border)]">
    <div class="page-container">
      <div class="flex items-center justify-between h-16">
        <router-link to="/" class="inline-flex items-center gap-2 font-semibold text-[var(--text)]">
          <!-- <span class="inline-block h-3 w-3 rounded-full" :style="{background: 'var(--brand)'}"></span> -->
          <span>Mishra Research Lab</span>
        </router-link>

        <nav class="hidden md:flex items-center gap-6 text-sm">
          <router-link v-for="item in nav" :key="item.to" :to="item.to" class="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
            {{ item.name }}
          </router-link>
        </nav>

        <div class="flex items-center gap-2">
          <ThemeToggle />
          <button @click="isOpen = !isOpen" class="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-[var(--border)] text-[var(--text)]" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>

      <div v-if="isOpen" class="md:hidden pb-3">
        <div class="grid gap-2">
          <router-link v-for="item in nav" :key="item.to + '-m'" :to="item.to" class="block px-3 py-2 rounded-md text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[color:var(--border)]/30"
            @click="isOpen=false">
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>


