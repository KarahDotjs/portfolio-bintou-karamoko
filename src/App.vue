<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import CircuitBackground from './components/CircuitBackground.vue'
import SiteNavbar from './components/SiteNavbar.vue'
import PortfolioMain from './components/PortfolioMain.vue'
import SiteFooter from './components/SiteFooter.vue'

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
  <CircuitBackground />

  <SiteNavbar />
  <main>
    <PortfolioMain />
  </main>
  <SiteFooter />
</template>
