<template>
  <section id="methodo">
    <div class="container">

      <div class="methodo-header reveal">
        <div class="eyebrow">// Ma méthode de travail</div>
        <h2 class="section-title">Comment je <span>travaille</span></h2>
      </div>

      <div class="methodo-grid">

        <div class="mcard reveal reveal-d1">
          <div class="mcard-bar bar-1"></div>
          <div class="mcard-icon">📁</div>
          <div class="mcard-title">Je documente tout</div>
          <div class="mcard-desc">Chaque lab a son README, ses topologies commentées et ses fiches de révision. Si ce n'est pas documenté, ce n'est pas fini.</div>
          <div class="mcard-tag">GitHub · Notion</div>
        </div>

        <div class="mcard reveal reveal-d2">
          <div class="mcard-bar bar-2"></div>
          <div class="mcard-icon">🧪</div>
          <div class="mcard-title">Je teste avant de valider</div>
          <div class="mcard-desc">Je simule d'abord dans Packet Tracer ou VMware — je ne passe pas à l'étape suivante sans avoir compris celle d'avant.</div>
          <div class="mcard-tag">Packet Tracer · VMware</div>
        </div>

        <div class="mcard reveal reveal-d3">
          <div class="mcard-bar bar-3"></div>
          <div class="mcard-icon">🔁</div>
          <div class="mcard-title">J'itère sur les erreurs</div>
          <div class="mcard-desc">Une erreur est une occasion d'apprendre. Je note ce qui a bloqué, pourquoi, et comment j'ai résolu — c'est ça qui ancre les connaissances.</div>
          <div class="mcard-tag">Debug · Analyse</div>
        </div>

        <div class="mcard reveal reveal-d4">
          <div class="mcard-bar bar-4"></div>
          <div class="mcard-icon">🏗️</div>
          <div class="mcard-title">Je travaille sur du concret</div>
          <div class="mcard-desc">Mes labs sont inspirés de scénarios réels — BeeNet simule un vrai réseau d'entreprise multi-sites avec toutes ses contraintes.</div>
          <div class="mcard-tag">BeeNet · Scénarios réels</div>
        </div>

        <div class="mcard reveal reveal-d5">
          <div class="mcard-bar bar-5"></div>
          <div class="mcard-icon">🛠️</div>
          <div class="mcard-title">J'utilise les bons outils</div>
          <div class="mcard-desc">VS Code, Git, Packet Tracer, VMware, UTM, Notion — je construis un environnement de travail pro dès maintenant pour être opérationnelle en stage.</div>
          <div class="mcard-tag">VS Code · Git · Notion</div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
#methodo {
  padding: 90px 0;
  position: relative;
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 6%;
}

.methodo-header {
  margin-bottom: 52px;
}

/* ── Flexbox centré ── */
.methodo-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.methodo-grid > * {
  flex: 1 1 calc(33.333% - 16px);
  max-width: calc(33.333% - 16px);
  min-width: 280px;
}

/* ── Cards ── */
.mcard {
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(0, 82, 165, 0.08);
  border-radius: 14px;
  padding: 22px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.mcard:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 43, 92, 0.12);
}

/* ── Barres de couleur ── */
.mcard-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
}

.bar-1 { background: linear-gradient(90deg, #002b5c, #0052a5); }
.bar-2 { background: linear-gradient(90deg, #0052a5, #0077ff); }
.bar-3 { background: linear-gradient(90deg, #0077ff, #00c8e0); }
.bar-4 { background: linear-gradient(90deg, #8a5700, #c47a00); }
.bar-5 { background: linear-gradient(90deg, #002b5c, #00c8e0); }

/* ── Contenu ── */
.mcard-icon {
  font-size: 1.6rem;
  margin-top: 6px;
}

.mcard-title {
  font-family: 'Manrope', sans-serif;
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--navy);
  line-height: 1.3;
}

.mcard-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: var(--slate);
  line-height: 1.6;
  flex: 1;
}

.mcard-tag {
  font-family: 'Space Mono', monospace;
  font-size: 0.62rem;
  font-weight: 700;
  color: var(--electric);
  letter-spacing: 0.06em;
  margin-top: 4px;
}

/* ── Reveal ── */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-d1 { transition-delay: 0.08s; }
.reveal-d2 { transition-delay: 0.16s; }
.reveal-d3 { transition-delay: 0.24s; }
.reveal-d4 { transition-delay: 0.32s; }
.reveal-d5 { transition-delay: 0.40s; }

/* ── Responsive ── */
@media (max-width: 600px) {
  .methodo-grid > * {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
