<template>
  <section id="career" class="parcours-section">
    <div class="container">

      <div class="parcours-header reveal" ref="header">
        <span class="eyebrow">// Mon parcours</span>
        <h2 class="section-title">
          Du code à l'infra,<br>une <span>reconversion assumée</span>
        </h2>
      </div>

      <div class="parcours-outer">

        <!-- PÉRIODE 1 -->
        <div class="tl-col reveal reveal-d1" ref="col1">
          <div class="tl-period-badge badge-p1">2016 – 2018</div>
          <div class="tl-period-title">Les premières fondations</div>
          <div class="tl-period-sub">Du code comme première langue</div>
          <div class="tl-period-intro">
            Le syndrome de l'imposteur s'installe. Cette remise en question va tout changer.
          </div>
          <div class="tl-connector p1" :class="{ drawn: lineDrawn }"></div>
          <div class="tl-steps">
            <div class="tl-step" v-for="(step, i) in periode1" :key="i"
              :style="{ transitionDelay: `${0.3 + i * 0.1}s` }" :class="{ visible: lineDrawn }">
              <div class="tl-step-date">{{ step.date }}</div>
              <div class="tl-step-text" v-html="step.text"></div>
            </div>
          </div>
        </div>

        <!-- FLÈCHE 1 -->
        <div class="tl-arrow reveal reveal-d2">
          <div class="tl-arrow-line"></div>
          <div class="tl-arrow-head"></div>
          <div class="tl-arrow-label">pivot</div>
        </div>

        <!-- PÉRIODE 2 -->
        <div class="tl-col reveal reveal-d2" ref="col2">
          <div class="tl-period-badge badge-p2">2019 – 2024</div>
          <div class="tl-period-title">La parenthèse qui construit</div>
          <div class="tl-period-sub">Précision, adaptabilité, résilience</div>
          <div class="tl-period-intro">
            Je quitte le code, pas la rigueur. Cette parenthèse m'apprend à m'adapter à tout.
          </div>
          <div class="tl-connector p2" :class="{ drawn: lineDrawn }"></div>
          <div class="tl-steps">
            <div class="tl-step amber" v-for="(step, i) in periode2" :key="i"
              :style="{ transitionDelay: `${0.5 + i * 0.1}s` }" :class="{ visible: lineDrawn }">
              <div class="tl-step-date amber">{{ step.date }}</div>
              <div class="tl-step-text" v-html="step.text"></div>
            </div>
          </div>
        </div>

        <!-- FLÈCHE 2 -->
        <div class="tl-arrow reveal reveal-d3">
          <div class="tl-arrow-line"></div>
          <div class="tl-arrow-head"></div>
          <div class="tl-arrow-label">retour</div>
        </div>

        <!-- PÉRIODE 3 -->
        <div class="tl-col reveal reveal-d3" ref="col3">
          <div class="tl-period-badge badge-p3">2026 – 2028</div>
          <div class="tl-period-title">L'infrastructure comme destination</div>
          <div class="tl-period-sub">Une direction choisie, pas subie</div>
          <div class="tl-period-intro">
            Un choix clair : l'infrastructure d'abord, la spécialisation ensuite.
          </div>
          <div class="tl-connector p3" :class="{ drawn: lineDrawn }"></div>
          <div class="tl-steps">
            <div class="tl-step teal" v-for="(step, i) in periode3" :key="i"
              :style="{ transitionDelay: `${0.7 + i * 0.1}s` }" :class="{ visible: lineDrawn }">
              <div class="tl-step-date teal">{{ step.date }}</div>
              <div class="tl-step-text" v-html="step.text"></div>
            </div>
          </div>
        </div>

      </div>

      <!-- BLOC FINAL -->
      <div class="tl-final reveal reveal-d4">
        <div>
          <div class="tl-final-label">Là où je vais</div>
          <div class="tl-final-text">Cloud Security Engineer</div>
        </div>
        <div class="tl-hourglass">
          <svg viewBox="0 0 40 60" width="40" height="60" xmlns="http://www.w3.org/2000/svg">
            <!-- Contour sablier -->
            <path d="M8 4 L32 4 L32 8 L24 28 L32 52 L32 56 L8 56 L8 52 L16 28 L8 8 Z"
                  fill="none" stroke="rgba(0,200,224,0.6)" stroke-width="1.5" stroke-linejoin="round"/>
            <!-- Sable qui tombe (partie haute) -->
            <polygon points="10,8 30,8 22,26 18,26" fill="rgba(0,200,224,0.3)" class="sand-top"/>
            <!-- Sable en bas -->
            <polygon points="18,42 22,42 28,52 12,52" fill="rgba(0,200,224,0.5)" class="sand-bottom"/>
            <!-- Filet de sable -->
            <line x1="20" y1="26" x2="20" y2="42" stroke="rgba(0,200,224,0.8)" stroke-width="1" class="sand-flow"/>
          </svg>
          <span class="tl-hourglass-label">2028</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const header = ref(null)
const col1 = ref(null)
const lineDrawn = ref(false)

const periode1 = [
  { date: 'Sept. 2016', text: '<strong>Simplon.</strong> Formation Développeur fullstack' },
  { date: '2017', text: '<strong>Stages startups.</strong> Premiers projets réels' },
  { date: '2018', text: '<strong>OpenClassrooms.</strong> Formation Développeur React, abandonnée' },
]

const periode2 = [
  { date: '2018 – 2021', text: '<strong>UK & CAP Pâtissier.</strong> Londres, formation à distance, stage pâtisserie en France' },
  { date: '2021 – 2023', text: '<strong>Auto-entrepreneuse.</strong> Pâtisserie en Suisse, rigueur des process' },
  { date: '2024', text: '<strong>Le Réacteur.</strong> Retour au front-end, Vue.js' },
]

const periode3 = [
  { date: 'Mars 2026', text: '<strong>Formation TSSR.</strong> Studi, réseaux & systèmes' },
  { date: '2026', text: '<strong>Stage.</strong> Île-de-France, en recherche' },
  { date: 'Début 2027', text: '<strong>Bachelor.</strong> Systèmes, Réseaux & Cloud' },
]

let observer = null

onMounted(() => {
  // Scroll reveal général
  const revealEls = document.querySelectorAll('#career .reveal')
  const revealObserver = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.1 }
  )
  revealEls.forEach(el => revealObserver.observe(el))

  // Animation des lignes au scroll
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => { lineDrawn.value = true }, 200)
          observer.disconnect()
        }
      })
    },
    { threshold: 0.3 }
  )
  if (col1.value) observer.observe(col1.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
/* ── Section ── */
.parcours-section {
  padding: 90px 0;
  position: relative;
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 6%;
}

.parcours-header {
  margin-bottom: 52px;
}

/* ── Layout 3 colonnes + flèches ── */
.parcours-outer {
  display: grid;
  grid-template-columns: 1fr 28px 1fr 28px 1fr;
  gap: 24px;
  align-items: start;
  width: 100%;
}

/* ── Colonne ── */
.tl-col {
  min-width: 0;
}

/* ── Badge période ── */
.tl-period-badge {
  display: inline-flex;
  font-size: 0.92rem;
  font-weight: 700;
  font-family: 'DM Sans', sans-serif;
  padding: 5px 14px;
  border-radius: 100px;
  margin-bottom: 8px;
  letter-spacing: 0.04em;
}

.badge-p1 {
  background: var(--navy);
  color: var(--white);
  border: none;
}

.badge-p2 {
  background: #8a5700;
  color: var(--white);
  border: none;
}

.badge-p3 {
  background: var(--blue);
  color: var(--white);
  border: none;
}

.tl-period-title {
  font-family: 'Manrope', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 3px;
  line-height: 1.3;
}

.tl-period-sub {
  font-size: 0.88rem;
  color: var(--slate);
  font-style: normal;
  font-weight: 600;
  margin-bottom: 10px;
}

.tl-period-intro {
  font-size: 0.9rem;
  color: var(--slate);
  line-height: 1.6;
  font-weight: 500;
  margin-bottom: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--border);
}

/* ── Ligne animée ── */
.tl-connector {
  height: 2px;
  border-radius: 99px;
  margin-bottom: 14px;
  width: 0;
  transition: width 0.9s cubic-bezier(0.4, 0, 0.2, 1);
}

.tl-connector.drawn {
  width: 100%;
}

.tl-connector.p1 {
  background: linear-gradient(90deg, rgba(0, 43, 92, 0.5), rgba(0, 43, 92, 0.08));
}

.tl-connector.p2 {
  background: linear-gradient(90deg, rgba(196, 122, 0, 0.5), rgba(196, 122, 0, 0.08));
}

.tl-connector.p3 {
  background: linear-gradient(90deg, #0052a5, rgba(0, 200, 224, 0.3));
}

/* ── Étapes ── */
.tl-steps {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tl-step {
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 10px;
  border: 1px solid rgba(0, 82, 165, 0.07);
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.tl-step.visible {
  opacity: 1;
  transform: translateY(0);
}

.tl-step.amber {
  border-color: rgba(196, 122, 0, 0.1);
  background: rgba(255, 248, 235, 0.75);
}

.tl-step.teal {
  border-color: rgba(0, 82, 165, 0.1);
  background: rgba(235, 244, 255, 0.75);
}

.tl-step-date {
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--electric);
  margin-bottom: 2px;
}

.tl-step-date.amber {
  color: #8a5700;
}

.tl-step-date.teal {
  color: var(--blue);
}

.tl-step-text {
  font-size: 0.88rem;
  color: var(--slate2);
  line-height: 1.45;
}

.tl-step-text :deep(strong) {
  color: var(--navy);
  font-weight: 600;
}

/* ── Flèches entre périodes ── */
.tl-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 44px;
  width: 36px;
}

.tl-arrow-line {
  width: 1px;
  height: 24px;
  background: rgba(0, 82, 165, 0.35);
}

.tl-arrow-head {
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 9px solid rgba(0, 119, 255, 0.5);
}

.tl-arrow-label {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--electric);
  font-family: 'Space Mono', monospace;
  writing-mode: vertical-rl;
  letter-spacing: 0.08em;
  margin-top: 6px;
  opacity: 0.8;
  background: rgba(0, 82, 165, 0.06);
  padding: 4px 3px;
  border-radius: 4px;
}

/* ── Bloc final ── */
.tl-final {
  margin-top: 28px;
  background: var(--navy);
  border-radius: 12px;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tl-final-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--cyan);
  letter-spacing: 0.1em;
  margin-bottom: 4px;
}

.tl-final-text {
  font-family: 'Manrope', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--white);
  letter-spacing: -0.5px;
}

.tl-final-badge {
  background: rgba(0, 200, 224, 0.15);
  border: 1px solid rgba(0, 200, 224, 0.3);
  color: var(--cyan);
  font-size: 0.68rem;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 100px;
  font-family: 'Space Mono', monospace;
  white-space: nowrap;
}

/* ── Reveal général ── */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-d1 {
  transition-delay: 0.1s;
}

.reveal-d2 {
  transition-delay: 0.2s;
}

.reveal-d3 {
  transition-delay: 0.3s;
}

.reveal-d4 {
  transition-delay: 0.4s;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .parcours-outer {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .tl-arrow {
    flex-direction: row;
    padding-top: 0;
    width: 100%;
    height: 24px;
    gap: 6px;
  }

  .tl-arrow-line {
    width: 40px;
    height: 1px;
  }

  .tl-arrow-head {
    border-left: 7px solid transparent;
    border-right: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 7px solid rgba(0, 119, 255, 0.3);
  }

  .tl-arrow-label {
    writing-mode: horizontal-tb;
    margin-top: 0;
    margin-left: 4px;
  }
}

.tl-hourglass {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  animation: hourglassSpin 4s ease-in-out infinite;
}

.tl-hourglass-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--cyan);
  letter-spacing: 0.1em;
}

@keyframes hourglassSpin {
  0%, 45% { transform: rotate(0deg); }
  50%, 95% { transform: rotate(180deg); }
  100% { transform: rotate(180deg); }
}
</style>
