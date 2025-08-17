import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import People from '../pages/People.vue'
import Research from '../pages/Research.vue'
import Publications from '../pages/Publications.vue'
import Contact from '../pages/Contact.vue'
import ResearchDetail from '../pages/ResearchDetail.vue'
import PeopleProfile from '../pages/PeopleProfile.vue'

const router = createRouter({
  // Use hash history for GitHub Pages reliability (no server-side rewrites)
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/people', name: 'people', component: People },
    { path: '/people/:slug', name: 'people-profile', component: PeopleProfile },
    { path: '/research', name: 'research', component: Research },
    { path: '/research/:slug', name: 'research-detail', component: ResearchDetail },
    { path: '/publications', name: 'publications', component: Publications },
    { path: '/contact', name: 'contact', component: Contact },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router


