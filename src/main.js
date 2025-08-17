import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'

// Simple scroll-reveal directive
const app = createApp(App)
app.directive('reveal', {
  mounted(el, binding) {
    const cls = binding.value || 'fade-in'
    el.classList.add('reveal', cls)
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.unobserve(el)
        }
      })
    }, { threshold: 0.08 })
    io.observe(el)
  }
})

app.use(router).mount('#app')
