<script setup>
import { SITE } from '../data/site.js'
</script>

<template>
  <section class="space-y-10">
    <header class="space-y-3">
      <h1 class="text-4xl font-semibold tracking-tight">Contact</h1>
      <p class="text-[var(--text-muted)]">Get in touch with the lab. We welcome inquiries from students, collaborators, and industry.</p>
    </header>

    <div class="grid gap-8 md:grid-cols-2">
      <div class="space-y-6">
        <div class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 class="text-xl font-semibold">Address</h2>
          <address class="not-italic mt-3 text-[var(--text-muted)]">
            <p v-for="(line, i) in SITE.addressLines" :key="i">{{ line }}</p>
          </address>
        </div>
        <div class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 class="text-xl font-semibold">Contact</h2>
          <p class="mt-3 text-[var(--text-muted)]">
            <span class="font-medium">Email:</span>
            <a :href="`mailto:${SITE.email}`" class="text-[color:var(--brand)] hover:underline">{{ SITE.email }}</a>
          </p>
          <p class="text-[var(--text-muted)] mt-1">
            <span class="font-medium">Phone:</span>
            <a :href="`tel:${SITE.phone}`" class="text-[color:var(--brand)] hover:underline">{{ SITE.phone }}</a>
          </p>
          <div class="mt-3 flex gap-3">
            <a v-if="SITE.socials.linkedin" :href="SITE.socials.linkedin" target="_blank" class="text-sm text-[color:var(--brand)] hover:underline">LinkedIn</a>
            <a v-if="SITE.socials.github" :href="SITE.socials.github" target="_blank" class="text-sm text-[color:var(--brand)] hover:underline">GitHub</a>
            <a v-if="SITE.socials.scholar" :href="SITE.socials.scholar" target="_blank" class="text-sm text-[color:var(--brand)] hover:underline">Google Scholar</a>
          </div>
        </div>
      </div>

      <div class="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden min-h-[320px]">
        <iframe :src="SITE.mapUrl" class="w-full h-full min-h-[320px]" style="border:0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>

    <section class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <h2 class="text-xl font-semibold">Send us a message</h2>
      <form class="mt-4 grid gap-4 md:grid-cols-2">
        <div class="md:col-span-1">
          <label class="block text-sm text-[var(--text-muted)] mb-1">Name</label>
          <input type="text" class="h-10 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3" placeholder="Your name" />
        </div>
        <div class="md:col-span-1">
          <label class="block text-sm text-[var(--text-muted)] mb-1">Email</label>
          <input type="email" class="h-10 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3" placeholder="Your email" />
        </div>
        <div class="md:col-span-2">
          <label class="block text-sm text-[var(--text-muted)] mb-1">Message</label>
          <textarea rows="5" class="w-full rounded-md border border-[var(--border)] bg-[var(--surface)] p-3" placeholder="Your message"></textarea>
        </div>
        <div class="md:col-span-2">
          <button type="button" class="h-10 px-4 rounded-md border border-[var(--border)] text-[var(--text)] bg-[var(--surface)] hover:bg-[color:var(--border)]/30">Submit</button>
        </div>
      </form>
    </section>
  </section>
</template>


