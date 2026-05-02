<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import CareerTimeline from '../components/CareerTimeline.vue'
import AboutMe from '../components/AboutMe.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import MethodologySection from '../components/MethodologySection.vue'
import AvailabilitySection from '../components/AvailabilitySection.vue'
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
    <CareerTimeline />
    <AboutMe />
    <SkillsSection />
    <ProjectsSection />
    <MethodologySection />
    <AvailabilitySection />
    <ContactSection />
  </main>
</template>
