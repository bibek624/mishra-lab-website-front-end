<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

function formatDate(iso) {
  try {
    const d = new Date(iso)
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short' })
  } catch {
    return iso
  }
}
</script>

<template>
  <article class="group rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-soft transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg">
    <div class="aspect-[16/10] bg-[color:var(--border)]/40 relative overflow-hidden">
      <img
        v-if="item.image"
        :src="item.image"
        :alt="item.title"
        class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="p-4" v-reveal>
      <div class="flex items-center justify-between gap-2">
        <span class="inline-flex items-center px-2 py-0.5 text-xs rounded-full border border-[var(--border)] text-[var(--text-muted)]">{{ item.category }}</span>
        <time class="text-xs text-[var(--text-muted)]">{{ formatDate(item.startDate) }}</time>
      </div>
      <h3 class="mt-2 text-lg font-semibold leading-snug text-[var(--text)]">
        {{ item.title }}
      </h3>
      <p class="mt-2 text-sm text-[var(--text-muted)] line-clamp-3 clamp-3">{{ item.description }}</p>
      <div class="mt-3">
        <router-link :to="{ name: 'research-detail', params: { slug: item.slug } }" class="text-sm text-[color:var(--brand)] hover:underline">View details</router-link>
      </div>
    </div>
  </article>
</template>

<style scoped>
.clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>


