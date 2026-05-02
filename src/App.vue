<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CircuitBackground from './components/CircuitBackground.vue'
import SiteNavbar from './components/SiteNavbar.vue'

const route = useRoute()
const isProjetPage = computed(() => route.path.startsWith('/projet'))
</script>

<template>
  <CircuitBackground />
  <SiteNavbar />
  <template v-if="isProjetPage">
    <main>
      <router-view />
    </main>
  </template>
  <template v-else>
    <router-view />
  </template>
  <footer>
    <div class="footer-left">
      © 2026 Bintou Karamoko · Administratrice Systèmes &amp; Réseaux Junior
    </div>
    <div v-if="!isProjetPage" class="footer-links">
      <a href="#hero">Accueil</a>
      <a href="#skills">Expertises</a>
      <a href="#projects">Projets</a>
      <a href="#contact">Contact</a>
    </div>
  </footer>
</template>
