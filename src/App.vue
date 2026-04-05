<script setup>
import { onBeforeUnmount, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import CircuitBackground from './components/CircuitBackground.vue'
import SiteNavbar from './components/SiteNavbar.vue'

const route = useRoute()
const isProjetPage = computed(() => route.path.startsWith('/projet'))

// Sync the is-projet class on <html> so the static home content toggles correctly
watch(isProjetPage, (val) => {
  document.documentElement.classList.toggle('is-projet', val)
  const homeContent = document.getElementById('home-content')
  if (homeContent) homeContent.style.display = val ? 'none' : ''
}, { immediate: true })

let observer

onMounted(() => {
  const els = document.querySelectorAll('.reveal')

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 },
  )

  els.forEach((el) => observer.observe(el))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <template v-if="isProjetPage">
    <CircuitBackground />
    <SiteNavbar />
    <main>
      <router-view />
    </main>
    <footer>
      <div class="footer-left">
        © 2026 Bintou Karamoko · Administratrice Systèmes &amp; Réseaux Junior
      </div>
    </footer>
  </template>
</template>
