<template>
  <section id="availability" class="availability-section">
    <div class="container">
      <div class="dispo-card">
        <div class="dispo-inner">

          <!-- Colonne gauche -->
          <div class="dispo-left">
            <div class="dispo-eyebrow">// Disponibilité</div>
            <div class="dispo-title">Prête à intégrer<br>votre équipe</div>
            <div class="dispo-date">Juin 2026</div>
            <div class="dispo-sub">Île-de-France · Présentiel ou hybride<br>Stage de 3 mois minimum</div>
            <div class="dispo-stats">
              <div class="dispo-stat">
                <div class="dispo-stat-val">3 mois</div>
                <div class="dispo-stat-label">Durée minimum</div>
              </div>
              <div class="dispo-stat-sep"></div>
              <div class="dispo-stat">
                <div class="dispo-stat-val">Île-de-France</div>
                <div class="dispo-stat-label">Zone de mobilité</div>
              </div>
            </div>
          </div>

          <!-- Colonne droite -->
          <div class="dispo-right">
            <div class="dispo-checks">
              <div class="dispo-check">
                <div class="check-icon">✓</div>
                <div class="check-text"><strong>Stage 3 mois</strong> · Disponible dès juin 2026</div>
              </div>
              <div class="dispo-check">
                <div class="check-icon">✓</div>
                <div class="check-text"><strong>Mobilité</strong> · Toute l'Île-de-France</div>
              </div>
              <div class="dispo-check">
                <div class="check-icon">✓</div>
                <div class="check-text"><strong>Format</strong> · Présentiel, hybride ou full remote</div>
              </div>
              <div class="dispo-check">
                <div class="check-icon">✓</div>
                <div class="check-text"><strong>Formation</strong> · Titre TSSR en cours de validation</div>
              </div>
              <div class="dispo-check">
                <div class="check-icon">✓</div>
                <div class="check-text"><strong>Entretien</strong> · Disponible rapidement</div>
              </div>
            </div>
            <a href="mailto:bintoukaramoko3@gmail.com" class="btn-dispo">📅 Planifier un entretien</a>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.availability-section {
  padding: 90px 0;
  position: relative;
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 6%;
}

.dispo-card {
  background: linear-gradient(135deg, #001a3a 0%, #002b5c 50%, #003d82 100%);
  border-radius: 20px;
  padding: 48px;
  position: relative;
  overflow: hidden;
}

.dispo-card::before {
  content: '';
  position: absolute;
  top: -80px;
  right: -80px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0, 200, 224, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.dispo-card::after {
  content: '';
  position: absolute;
  bottom: -60px;
  left: 30%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0, 119, 255, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.dispo-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.dispo-eyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--cyan);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 12px;
}

.dispo-title {
  font-family: 'Manrope', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--white);
  line-height: 1.15;
  letter-spacing: -0.5px;
  margin-bottom: 12px;
}

.dispo-date {
  font-family: 'Space Mono', monospace;
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--cyan);
  letter-spacing: -2px;
  line-height: 1;
  margin-bottom: 12px;
}

.dispo-sub {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  margin-bottom: 20px;
}

.dispo-stats {
  display: flex;
  gap: 20px;
  align-items: center;
}

.dispo-stat-val {
  font-family: 'Space Mono', monospace;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 2px;
}

.dispo-stat-label {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.5);
}

.dispo-stat-sep {
  width: 1px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
}

.dispo-checks {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.dispo-check {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.check-icon {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(0, 200, 224, 0.15);
  border: 1.5px solid rgba(0, 200, 224, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--cyan);
  font-size: 0.7rem;
  font-weight: 700;
  margin-top: 1px;
}

.check-text {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
}

.check-text strong {
  color: var(--white);
  font-weight: 600;
}

.btn-dispo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--cyan);
  color: var(--navy);
  font-size: 0.88rem;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 10px;
  text-decoration: none;
  font-family: 'Manrope', sans-serif;
  transition: all 0.3s;
}

.btn-dispo:hover {
  background: #00e5ff;
  box-shadow: 0 0 24px rgba(0, 200, 224, 0.4);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .dispo-inner {
    grid-template-columns: 1fr;
  }
  .dispo-card {
    padding: 32px;
  }
}
</style>
