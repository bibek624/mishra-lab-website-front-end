<template>
  <section class="space-y-14">
    <header class="space-y-4">
      <h1 class="text-4xl font-semibold tracking-tight">About the Lab</h1>
      <p class="max-w-3xl text-[var(--text-muted)]">We are an interdisciplinary research group working at the intersection of materials, rail systems, and sustainability. Our goal is to translate fundamental insights into practical, real-world impact through open, collaborative science.</p>
      <div class="grid gap-6 md:grid-cols-2">
        <div class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 class="text-xl font-semibold">Mission</h2>
          <p class="mt-3 text-[var(--text-muted)]">Advance the state of the art in data-driven engineering and resilient infrastructure, while cultivating an inclusive environment that empowers students to lead in academia and industry.</p>
          <div class="mt-4 grid grid-cols-2 gap-4 text-center">
            <div class="rounded-lg border border-[var(--border)] p-4">
              <p class="text-2xl font-semibold">30+</p>
              <p class="text-xs text-[var(--text-muted)]">Peer-reviewed papers</p>
            </div>
            <div class="rounded-lg border border-[var(--border)] p-4">
              <p class="text-2xl font-semibold">10+</p>
              <p class="text-xs text-[var(--text-muted)]">Active projects</p>
            </div>
          </div>
        </div>
        <div class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 flex items-center gap-6">
          <img src="https://i.pravatar.cc/160?img=15" alt="PI photo" class="h-24 w-24 rounded-full object-cover" />
          <div>
            <p class="text-sm text-[var(--text-muted)]">Principal Investigator</p>
            <p class="text-xl font-semibold">Dr. Mishra</p>
            <p class="mt-2 text-[var(--text-muted)] max-w-prose">Our lab combines rigorous modeling with high-impact applications, and we are always looking for curious collaborators and motivated students.</p>
          </div>
        </div>
      </div>
    </header>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold">Story</h2>
      <ol class="relative border-s border-[var(--border)] pl-6 space-y-6">
        <li class="space-y-1">
          <div class="absolute -start-2 mt-1.5 h-3 w-3 rounded-full bg-[var(--brand)]"></div>
          <p class="text-sm text-[var(--text-muted)]">2019</p>
          <p class="font-medium">The lab is founded</p>
          <p class="text-[var(--text-muted)]">Initial focus on materials informatics and applied machine learning for engineering systems.</p>
        </li>
        <li class="space-y-1">
          <div class="absolute -start-2 mt-1.5 h-3 w-3 rounded-full bg-[var(--brand)]"></div>
          <p class="text-sm text-[var(--text-muted)]">2021</p>
          <p class="font-medium">Expansion to rail and infrastructure</p>
          <p class="text-[var(--text-muted)]">New projects on track health monitoring and safety with sensor fusion and real-time analytics.</p>
        </li>
        <li class="space-y-1">
          <div class="absolute -start-2 mt-1.5 h-3 w-3 rounded-full bg-[var(--brand)]"></div>
          <p class="text-sm text-[var(--text-muted)]">2023–Now</p>
          <p class="font-medium">Sustainability and life-cycle thinking</p>
          <p class="text-[var(--text-muted)]">Carbon-aware lab operations, circular design, and LCA integrated across research directions.</p>
        </li>
      </ol>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold">Values</h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <p class="text-lg font-semibold">Rigor & Integrity</p>
          <p class="mt-2 text-[var(--text-muted)]">We design reproducible workflows, share data/code when possible, and prioritize robust, verifiable results.</p>
        </div>
        <div class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <p class="text-lg font-semibold">Mentorship</p>
          <p class="mt-2 text-[var(--text-muted)]">We invest in people—clear expectations, supportive feedback, and opportunities to lead.</p>
        </div>
        <div class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <p class="text-lg font-semibold">Collaboration</p>
          <p class="mt-2 text-[var(--text-muted)]">We work across disciplines and with industry to translate ideas into impact.</p>
        </div>
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold">Facilities</h2>
      <div class="grid gap-6 md:grid-cols-3">
        <img src="https://picsum.photos/seed/fac-1/800/500" alt="Facility 1" class="rounded-lg object-cover w-full h-48" />
        <img src="https://picsum.photos/seed/fac-2/800/500" alt="Facility 2" class="rounded-lg object-cover w-full h-48" />
        <img src="https://picsum.photos/seed/fac-3/800/500" alt="Facility 3" class="rounded-lg object-cover w-full h-48" />
      </div>
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold">Affiliations & Sponsors</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
        <div class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 flex items-center justify-center">
          <img src="https://dummyimage.com/120x48/64748b/ffffff&text=NSF" alt="NSF" class="h-10 w-auto" />
        </div>
        <div class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 flex items-center justify-center">
          <img src="https://dummyimage.com/120x48/475569/ffffff&text=DOT" alt="DOT" class="h-10 w-auto" />
        </div>
        <div class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 flex items-center justify-center">
          <img src="https://dummyimage.com/120x48/334155/ffffff&text=Partner" alt="Partner" class="h-10 w-auto" />
        </div>
        <div class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 flex items-center justify-center">
          <img src="https://dummyimage.com/120x48/4F46E5/ffffff&text=University" alt="University" class="h-10 w-auto" />
        </div>
        <div class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 flex items-center justify-center">
          <img src="https://dummyimage.com/120x48/06B6D4/ffffff&text=Industry" alt="Industry" class="h-10 w-auto" />
        </div>
      </div>
    </section>

    <section class="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <h2 class="text-xl font-semibold">Work with us</h2>
        <p class="mt-2 text-[var(--text-muted)]">We welcome students, collaborators, and industry partners. Reach out to explore opportunities.</p>
      </div>
      <router-link to="/contact" class="inline-flex items-center justify-center h-10 px-4 rounded-md border border-[var(--border)] text-[var(--text)] bg-[var(--surface)] hover:bg-[color:var(--border)]/30">Contact</router-link>
    </section>
  </section>
</template>


