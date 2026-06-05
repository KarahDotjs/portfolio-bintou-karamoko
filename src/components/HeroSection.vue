<template>
  <section id="hero">
    <div class="hero-inner">

    <!-- ─── Texte ─── -->
    <div class="hero-text">

      <div class="hero-top">
        <h1 class="hero-name">
          Bintou
          <span class="accent">KARAMOKO</span>
        </h1>
        <img src="/assets/pp.png"
          alt="Portrait de Bintou Karamoko"
          class="circle-photo"
          fetchpriority="high"
          decoding="async" />
      </div>

      <p class="hero-role">Technicienne Systèmes &amp; Réseaux</p>

      <div class="hero-badge">
        <div class="badge-dot"></div>
        Disponible — Stage 3 mois · Juillet 2026
      </div>

      <div class="hero-comment">
        <span class="comment-tag">&lt;/</span>
        En formation TSSR, je construis et documente des labs réseaux pour
        consolider mes compétences en infrastructure. Ouverte aux opportunités
        qui valorisent la progression.
        <span class="comment-tag">&gt;</span>
      </div>

      <div class="hero-actions">
        <a href="/bintou-karamoko-stage-july-2026.pdf" class="btn btn-solid btn-cv"
          target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2.5"
            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Voir mon CV
        </a>

        <div class="actions-sep" aria-hidden="true"></div>

        <div class="actions-icons">
          <a href="https://www.linkedin.com/in/bintou-karamoko" class="icon-btn"
            target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn de Bintou Karamoko">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38A1.56 1.56 0 0 0 6.94 8.5ZM5.62 9.75H8.25V18.25H5.62V9.75ZM9.88 9.75H12.4V10.91H12.43C12.78 10.24 13.64 9.53 14.92 9.53C17.58 9.53 18.07 11.18 18.07 13.33V18.25H15.44V13.89C15.44 12.85 15.42 11.5 13.98 11.5C12.52 11.5 12.3 12.6 12.3 13.81V18.25H9.88V9.75Z"/>
            </svg>
          </a>

          <a href="https://github.com/KarahDotjs" class="icon-btn"
            target="_blank" rel="noopener noreferrer"
            aria-label="GitHub de Bintou Karamoko">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
          </a>

          <a href="mailto:bintou.karamoko.tech@gmail.com" class="icon-btn"
            aria-label="Envoyer un email à Bintou Karamoko">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="hero-certs">
        <div class="hero-certs-label">// Certifications</div>
        <div class="hero-certs-cards">
          <div class="hero-cert-card">
            <div class="hero-cert-icon">☁️</div>
            <div class="hero-cert-info">
              <div class="hero-cert-name">AWS Cloud Practitioner</div>
              <div class="hero-cert-date">Prévu · Septembre 2026</div>
            </div>
            <div class="hero-cert-status">Bientôt</div>
          </div>
          <div class="hero-cert-card planned">
            <div class="hero-cert-icon">🏗️</div>
            <div class="hero-cert-info">
              <div class="hero-cert-name">AWS Cloud Architect</div>
              <div class="hero-cert-date">Objectif 2027</div>
            </div>
            <div class="hero-cert-status planned">Planifié</div>
          </div>
          <div class="hero-cert-card">
            <div class="hero-cert-icon">🎧</div>
            <div class="hero-cert-info">
              <div class="hero-cert-name">TOEIC · Test of English</div>
              <div class="hero-cert-date">Prévu · 2026</div>
            </div>
            <div class="hero-cert-status">Bientôt</div>
          </div>
        </div>
      </div>

    </div>

    </div>
  </section>

</template>

<style scoped>
/* ══════════════════════════════════════
   Scoped overrides — empêchent le display:contents
   et les order globaux de casser la mise en page
══════════════════════════════════════ */

/* Maintient hero-text en colonne flex quelle que soit la taille */
.hero-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: visible;
  min-width: 0;
}

/* Annule les order: 2/4 injectés par le CSS global en responsive */
.hero-name,
.hero-role {
  order: 0;
}

.hero-role {
  font-size: 1.5rem;
  white-space: nowrap;
}

.hero-available {
  font-size: 1rem;
}

#hero {
  display: flex;
  flex-direction: column;
  padding: 0;
  padding-top: 90px;
  min-height: unset;
  width: 100%;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.hero-top {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
}

.circle-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 18%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 16px rgba(0, 43, 92, 0.12);
  flex-shrink: 0;
}

/* ══════════════════════════════════════
   Badge disponibilité
══════════════════════════════════════ */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(0, 200, 224, 0.12);
  border: 1.5px solid rgba(0, 200, 224, 0.5);
  color: #007a8c;
  font-family: 'Space Mono', monospace;
  font-size: 1rem;
  font-weight: 700;
  white-space: nowrap;
  padding: 10px 20px 10px 14px;
  border-radius: 100px;
  margin-bottom: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  width: fit-content;
  animation: badgePulse 2.5s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(0, 200, 224, 0.3);
    border-color: rgba(0, 200, 224, 0.5);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(0, 200, 224, 0);
    border-color: rgba(0, 200, 224, 0.9);
  }
}

.badge-dot {
  width: 9px;
  height: 9px;
  background: #00c8e0;
  border-radius: 50%;
  flex-shrink: 0;
  animation: dotPulse 2.5s ease-in-out infinite;
}

@keyframes dotPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.7; }
}

/* ══════════════════════════════════════
   Intro style commentaire de code
══════════════════════════════════════ */
.hero-comment {
  font-family: 'Manrope', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.75;
  color: var(--slate2);
  border-left: 3px solid var(--blue);
  padding: 12px 16px;
  margin-bottom: 28px;
  background: rgba(0, 82, 165, 0.04);
  border-radius: 0 8px 8px 0;
  animation: heroIn 0.7s 0.38s ease both;
  overflow: visible;
}

.comment-tag {
  color: var(--electric);
  font-weight: 700;
}

/* ══════════════════════════════════════
   Ligne de boutons
══════════════════════════════════════ */
.hero-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  animation: heroIn 0.7s 0.48s ease both;
}

.btn-cv {
  white-space: nowrap;
  font-size: 0.88rem;
  padding: 11px 20px;
  gap: 8px;
}

.actions-sep {
  width: 1px;
  height: 38px;
  background: rgba(0, 82, 165, 0.18);
  flex-shrink: 0;
}

.actions-icons {
  display: flex;
  gap: 8px;
  align-items: center;
}

.icon-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1.5px solid rgba(0, 82, 165, 0.18);
  background: rgba(255, 255, 255, 0.75);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--navy);
  text-decoration: none;
  transition:
    border-color 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.icon-btn:hover {
  border-color: var(--electric);
  color: var(--electric);
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(0, 119, 255, 0.2);
  background: rgba(0, 119, 255, 0.06);
}

.icon-btn svg {
  width: 20px;
  height: 20px;
  display: block;
}


/* ══════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════ */

/* Tablette — colonne unique, photo en premier */
@media (max-width: 900px) {
  #hero {
    display: flex;
    flex-direction: column;
    padding-top: 0;
    gap: 20px;
    text-align: center;
  }
  .hero-text {
    align-items: center;
    order: 1;
  }
  .hero-comment {
    text-align: left;
    max-width: min(480px, 100%);
  }
  .hero-actions {
    justify-content: center;
  }
  .hex-wrapper {
    width: min(240px, 62vw);
    height: min(240px, 62vw);
  }
}

/* Mobile */
@media (max-width: 600px) {
  .hero-badge {
    font-size: 0.68rem;
    padding: 5px 13px 5px 9px;
  }
  .hero-comment {
    font-size: 1.1rem;
    padding: 10px 14px;
  }
  .btn-cv {
    font-size: 0.83rem;
    padding: 10px 16px;
  }
  .hex-wrapper {
    width: min(190px, 56vw);
    height: min(190px, 56vw);
  }
}

.hero-certs {
  margin-top: 24px;
}

.hero-certs-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--electric);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero-certs-label::before {
  content: '';
  width: 16px;
  height: 1.5px;
  background: var(--electric);
}

.hero-certs-cards {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hero-cert-card {
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(0, 82, 165, 0.08);
  border-radius: 10px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-cert-card.planned {
  border-style: dashed;
  border-color: rgba(0, 82, 165, 0.2);
  background: rgba(255, 255, 255, 0.4);
}

.hero-cert-icon {
  font-size: 1.1rem;
  flex-shrink: 0;
}

.hero-cert-info {
  flex: 1;
}

.hero-cert-name {
  font-family: 'Manrope', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 2px;
}

.hero-cert-date {
  font-family: 'Space Mono', monospace;
  font-size: 0.80rem;
  color: var(--slate2);
}

.hero-cert-status {
  font-size: 0.62rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 100px;
  font-family: 'Space Mono', monospace;
  white-space: nowrap;
  background: rgba(0, 119, 255, 0.08);
  color: var(--blue);
  border: 1px solid rgba(0, 119, 255, 0.2);
}

.hero-cert-status.planned {
  background: rgba(74, 94, 114, 0.08);
  color: var(--slate2);
  border-color: rgba(74, 94, 114, 0.2);
}

@media (max-width: 960px) {
  .hero-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .circle-photo {
    width: 100px;
    height: 100px;
    display: block;
    margin: 0 auto;
  }

}
</style>
