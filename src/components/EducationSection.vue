<template>
  <section id="education">
    <div class="container">

      <div class="education-header reveal">
        <div class="eyebrow">// Formations &amp; Diplômes</div>
        <h2 class="section-title">Mon <span>parcours académique</span></h2>
      </div>

      <div class="education-grid">

        <!-- Colonne gauche : Parcours Tech -->
        <div class="education-col">
          <div class="col-label">🖥️ Parcours Tech</div>

          <div class="education-card reveal reveal-d1 card-tech-current">
            <div class="card-status status-current">En cours</div>
            <div class="card-title">Titre TSSR — Technicien Supérieur Systèmes &amp; Réseaux</div>
            <div class="card-school">Studi · RNCP Niveau 5</div>
            <div class="card-date">Mars 2026 → Octobre 2026</div>
            <div class="card-desc">Réseaux, systèmes, cybersécurité, infrastructure</div>
          </div>

          <div class="education-card reveal reveal-d2 card-tech">
            <div class="card-status status-validated">Validé</div>
            <div class="card-title">Formation Développeur Front-End</div>
            <div class="card-school">Le Réacteur · Bootcamp intensif</div>
            <div class="card-date">2024</div>
            <div class="card-desc">Vue.js, JavaScript, HTML/CSS, Git</div>
          </div>

          <div class="education-card reveal reveal-d3 card-tech">
            <div class="card-status status-validated">Validé</div>
            <div class="card-title">Formation Développeur Fullstack</div>
            <div class="card-school">Simplon</div>
            <div class="card-date">2016 – 2017</div>
            <div class="card-desc">HTML, CSS, JavaScript, bases du développement web</div>
          </div>
        </div>

        <!-- Colonne droite : Autres formations -->
        <div class="education-col">
          <div class="col-label">🎓 Autres formations</div>

          <div class="education-card reveal reveal-d1 card-other">
            <div class="card-status status-obtained">Obtenu</div>
            <div class="card-title">BTS Management des Unités Commerciales</div>
            <div class="card-school">Formation professionnelle</div>
            <div class="card-date">2015</div>
            <div class="card-desc">Gestion commerciale, management, relation client</div>
          </div>

          <div class="education-card reveal reveal-d2 card-other">
            <div class="card-status status-obtained">Obtenu</div>
            <div class="card-title">CAP Pâtissier</div>
            <div class="card-school">Formation à distance · Stage en France</div>
            <div class="card-date">2020 – 2022</div>
            <div class="card-desc">Rigueur, précision, gestion des process — compétences transférables</div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
#education {
  padding: 90px 0;
  position: relative;
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 6%;
}

.education-header {
  margin-bottom: 52px;
}

/* ── Grille 2 colonnes ── */
.education-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.education-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.col-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--navy);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 4px;
}

/* ── Cards ── */
.education-card {
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(0, 82, 165, 0.08);
  border-radius: 12px;
  padding: 16px 18px;
  position: relative;
  overflow: hidden;
}

.education-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
}

.card-tech-current::before {
  background: linear-gradient(to bottom, var(--blue), var(--cyan));
}

.card-tech::before {
  background: var(--blue);
}

.card-other::before {
  background: #8a5700;
}

/* ── Statuts ── */
.card-status {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.status-current  { color: var(--electric); }
.status-validated { color: #2d6a4f; }
.status-obtained  { color: #8a5700; }

/* ── Contenu ── */
.card-title {
  font-family: 'Manrope', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 4px;
  line-height: 1.4;
}

.card-school {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--slate);
  margin-bottom: 3px;
}

.card-date {
  font-family: 'Space Mono', monospace;
  font-size: 0.68rem;
  color: var(--slate2);
  margin-bottom: 8px;
  letter-spacing: 0.04em;
}

.card-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem;
  color: var(--slate);
  line-height: 1.5;
}

/* ── Reveal animations ── */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-d1 { transition-delay: 0.1s; }
.reveal-d2 { transition-delay: 0.2s; }
.reveal-d3 { transition-delay: 0.3s; }

/* ── Responsive ── */
@media (max-width: 768px) {
  .education-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
