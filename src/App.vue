<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
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
  <div id="circuit-layer">
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path d="M0 80 H90 V40 H260 V90 H440 V60 H620" stroke="#0052A5" stroke-width="1.4" />
      <circle cx="620" cy="60" r="3.5" fill="#0052A5" />
      <path d="M260 90 V160 H180 V240 H80 V320" stroke="#0052A5" stroke-width="1.4" />
      <circle cx="80" cy="320" r="3.5" fill="#0052A5" />
      <path d="M0 220 H50 V180 H160 V280 H100 V380 H40 V460 H0" stroke="#0052A5" stroke-width="1.4" />
      <path d="M440 60 V160 H380 V240 H500 V200 H600 V260" stroke="#0052A5" stroke-width="1.4" />
      <circle cx="600" cy="260" r="3.5" fill="#0052A5" />
      <path d="M1440 60 H1340 V120 H1220 V80 H1060 V130 H900" stroke="#0052A5" stroke-width="1.4" />
      <circle cx="900" cy="130" r="3.5" fill="#0052A5" />
      <path d="M1220 80 V40 H1100" stroke="#0052A5" stroke-width="1.4" />
      <circle cx="1100" cy="40" r="3.5" fill="#0052A5" />
      <path d="M1340 120 V220 H1400 V300 H1440" stroke="#0052A5" stroke-width="1.4" />
      <path d="M1060 130 V200 H1140 V280 H1080 V360 H1200 V420" stroke="#0052A5" stroke-width="1.4" />
      <circle cx="1200" cy="420" r="3.5" fill="#0052A5" />
      <rect x="650" y="340" width="140" height="120" rx="3" stroke="#0052A5" stroke-width="1.8" />
      <path d="M650 365 H600 M650 385 H580 M650 405 H600 M650 425 H580 M650 445 H600" stroke="#0052A5" stroke-width="1.4" />
      <path d="M790 365 H840 M790 385 H860 M790 405 H840 M790 425 H860 M790 445 H840" stroke="#0052A5" stroke-width="1.4" />
      <path d="M690 340 V290 M710 340 V275 M730 340 V290 M750 340 V275 M770 340 V290" stroke="#0052A5" stroke-width="1.4" />
      <path d="M690 460 V510 M710 460 V525 M730 460 V510 M750 460 V525 M770 460 V510" stroke="#0052A5" stroke-width="1.4" />
      <circle cx="600" cy="365" r="3" fill="#0052A5" />
      <circle cx="580" cy="385" r="3" fill="#0052A5" />
      <circle cx="600" cy="405" r="3" fill="#0052A5" />
      <circle cx="580" cy="425" r="3" fill="#0052A5" />
      <circle cx="840" cy="365" r="3" fill="#0052A5" />
      <circle cx="860" cy="385" r="3" fill="#0052A5" />
      <circle cx="840" cy="405" r="3" fill="#0052A5" />
      <circle cx="860" cy="425" r="3" fill="#0052A5" />
      <path d="M0 700 H120 V760 H280 V820 H460 V870 H640" stroke="#0052A5" stroke-width="1.4" />
      <circle cx="640" cy="870" r="3.5" fill="#0052A5" />
      <path d="M280 820 V900" stroke="#0052A5" stroke-width="1.4" />
      <path d="M1440 720 H1320 V780 H1160 V840 H980 V900" stroke="#0052A5" stroke-width="1.4" />
      <path d="M1160 840 H1080 V900" stroke="#0052A5" stroke-width="1.4" />
      <circle cx="1080" cy="900" r="3.5" fill="#0052A5" />
    </svg>
  </div>

  <SiteNavbar />
  <main>
    <PortfolioMain />
  </main>
  <SiteFooter />
</template>
