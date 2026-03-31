<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const handleResize = () => {
  if (window.innerWidth > 768) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <nav :class="{ 'menu-open': isOpen }">
    <a href="/" class="nav-logo">Bintou<span><em>KR</em></span></a>

    <button class="nav-toggle" type="button" :aria-label="isOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
      :aria-expanded="String(isOpen)" aria-controls="nav-menu" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="nav-links" id="nav-menu">
      <li><a href="#about" @click="closeMenu">À propos</a></li>
      <li><a href="#expertises" @click="closeMenu">Expertises</a></li>
      <li><a href="#projets" @click="closeMenu">Projets</a></li>
      <li><a href="#dispo" @click="closeMenu">Disponibilité</a></li>
      <li><a href="#contact" class="nav-cta" @click="closeMenu">Contact</a></li>
    </ul>
  </nav>
</template>
