<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import ParcoursTimeline from '../components/ParcoursTimeline.vue'
import AboutSection from '../components/AboutSection.vue'
import ExpertisesSection from '../components/ExpertisesSection.vue'
import ProjetsSection from '../components/ProjetsSection.vue'
import MethodologieSection from '../components/MethodologieSection.vue'
import DispoSection from '../components/DispoSection.vue'
import ContactSection from '../components/ContactSection.vue'

/** @type {IntersectionObserver | undefined} */
let observer

onMounted(() => {
  const els = document.querySelectorAll('#home-view .reveal')
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 },
  )
  els.forEach((el) => observer?.observe(el))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <main id="home-view">
    <HeroSection />
    <ParcoursTimeline />
    <AboutSection />
    <ExpertisesSection />
    <ProjetsSection />
    <MethodologieSection />
    <DispoSection />
    <ContactSection />
  </main>
</template>
