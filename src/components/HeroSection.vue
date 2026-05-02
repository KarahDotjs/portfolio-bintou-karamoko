<template>
  <!-- ══ HERO : 2 colonnes texte | photo hexagonale ══ -->
  <section id="hero">

    <!-- ─── GAUCHE : texte ─── -->
    <div class="hero-text">

      <h1 class="hero-name">
        Bintou
        <span class="accent">KARAMOKO</span>
      </h1>

      <p class="hero-role">Technicienne Systèmes &amp; Réseaux</p>

      <div class="hero-badge">
        <div class="badge-dot"></div>
        Disponible — Stage 3 mois · Juin 2026
      </div>

      <div class="hero-comment">
        <span class="comment-tag">&lt;/</span>
        En formation TSSR, je construis et documente des labs réseaux pour
        consolider mes compétences en infrastructure. Ouverte aux opportunités
        qui valorisent la progression.
        <span class="comment-tag">&gt;</span>
      </div>

      <div class="hero-actions">
        <a href="/bintou_karamoko_stage_june-2026.pdf" class="btn btn-solid btn-cv"
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

          <a href="mailto:bintoukaramoko3@gmail.com" class="icon-btn"
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

    </div>

    <!-- ─── DROITE : photo hexagonale ─── -->
    <div class="hero-visual">
      <div class="hex-wrapper">

        <div class="hex-halo"></div>

        <svg class="hex-ring" viewBox="-12 -12 224 224"
          fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <polygon points="100,0 200,50 200,150 100,200 0,150 0,50"
            stroke="var(--electric)" stroke-width="1.5" stroke-opacity="0.35"/>
        </svg>

        <div class="hex-photo-wrap">
          <img src="/assets/pp.png"
            alt="Portrait de Bintou Karamoko"
            class="hex-photo"
            fetchpriority="high"
            decoding="async" />
        </div>

        <div class="hex-dot hex-dot-top"></div>
        <div class="hex-dot hex-dot-br"></div>
        <div class="hex-dot hex-dot-tl"></div>

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
}

/* Annule les order: 2/4 injectés par le CSS global en responsive */
.hero-name,
.hero-role {
  order: 0;
}

.hero-role {
  font-size: 1.4rem;
  white-space: nowrap;
}

/* Override explicite du grid pour contrôler le responsive depuis ici */
#hero {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  min-height: unset;
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
  font-size: 0.85rem;
  font-weight: 700;
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
  font-size: 1.2rem;
  font-weight: 600;
  max-width: 440px;
  line-height: 1.75;
  color: var(--slate2);
  border-left: 3px solid var(--blue);
  padding: 12px 16px;
  margin-bottom: 28px;
  background: rgba(0, 82, 165, 0.04);
  border-radius: 0 8px 8px 0;
  animation: heroIn 0.7s 0.38s ease both;
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
  width: 48px;
  height: 48px;
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
   Colonne visuelle — surcharge l'animation globale
   pour ajouter softFloat après le heroIn
══════════════════════════════════════ */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 0;
  animation:
    heroIn 0.8s 0.2s ease both,
    softFloat 8s ease-in-out infinite 1.4s;
}

/* ══════════════════════════════════════
   Conteneur hexagonal
══════════════════════════════════════ */
.hex-wrapper {
  position: relative;
  width: min(300px, 78vw);
  height: min(300px, 78vw);
}

/* Halo cyan qui pulse */
.hex-halo {
  position: absolute;
  inset: -28px;
  background: radial-gradient(
    circle,
    rgba(0, 200, 224, 0.22) 0%,
    rgba(0, 200, 224, 0.07) 50%,
    transparent 70%
  );
  border-radius: 50%;
  animation: haloPulse 3.5s ease-in-out infinite;
  z-index: 0;
  pointer-events: none;
}

@keyframes haloPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.1); }
}

/* Hexagone externe qui tourne */
.hex-ring {
  position: absolute;
  inset: -14px;
  width: calc(100% + 28px);
  height: calc(100% + 28px);
  transform-origin: center;
  animation: hexRotate 20s linear infinite;
  z-index: 1;
  pointer-events: none;
}

@keyframes hexRotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* Photo clippée en hexagone */
.hex-photo-wrap {
  position: absolute;
  inset: 0;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  overflow: hidden;
  z-index: 2;
}

.hex-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 10%;
  display: block;
}

/* 3 points aux sommets */
.hex-dot {
  position: absolute;
  border-radius: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.hex-dot-top {
  width: 9px;
  height: 9px;
  top: 0%;
  left: 50%;
  background: var(--electric);
  animation: dotGlow 2.4s ease-in-out infinite;
}

.hex-dot-br {
  width: 8px;
  height: 8px;
  top: 75%;
  left: 100%;
  background: var(--cyan);
  animation: dotGlow 2.4s ease-in-out infinite 0.8s;
}

.hex-dot-tl {
  width: 7px;
  height: 7px;
  top: 25%;
  left: 0%;
  background: var(--electric);
  animation: dotGlow 2.4s ease-in-out infinite 1.6s;
}

@keyframes dotGlow {
  0%, 100% { transform: translate(-50%, -50%) scale(1);   opacity: 1; }
  50%       { transform: translate(-50%, -50%) scale(1.7); opacity: 0.5; }
}

/* ══════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════ */

/* Tablette — colonne unique, photo en premier */
@media (max-width: 900px) {
  #hero {
    display: flex;
    flex-direction: column;
    padding-top: 90px;
    gap: 20px;
    text-align: center;
  }
  .hero-text {
    align-items: center;
    order: 1;
  }
  .hero-visual {
    order: -1;
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
</style>
