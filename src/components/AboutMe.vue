<template>
  <section id="about">
    <div class="container">

      <!-- En-tête -->
      <div class="about-header reveal">
        <div class="eyebrow">// Qui suis-je</div>
        <h2 class="section-title">
          Une trajectoire <span>construite</span>
        </h2>
      </div>

      <!-- Grille 2 colonnes -->
      <div class="about-grid">

        <!-- ─── GAUCHE ─── -->
        <div class="about-left">

          <!-- Carte identité -->
          <div class="about-card reveal reveal-d1">
            <div class="about-name">Bintou Karamoko</div>
            <ul class="about-tags">
              <li class="about-tag">
                <span class="about-tag-dot about-tag-dot--blue"></span>
                Île-de-France
              </li>
              <li class="about-tag">
                <span class="about-tag-dot about-tag-dot--blue"></span>
                En formation TSSR
              </li>
              <li class="about-tag">
                <span class="about-tag-dot about-tag-dot--blue"></span>
                Objectif : Cloud Security Engineer
              </li>
            </ul>
          </div>

          <!-- Cartes communauté -->
          <div class="about-card about-community-card reveal reveal-d2">
            <div class="about-community-header">
              <span class="about-community-dot about-community-dot--blue"></span>
              <span class="about-community-name">Tech With Women</span>
            </div>
            <p class="about-community-role">
              Là où j'apprends des expertes et construis ma vision
            </p>
          </div>

          <div class="about-card about-community-card reveal reveal-d3">
            <div class="about-community-header">
              <span class="about-community-dot about-community-dot--cyan"></span>
              <span class="about-community-name">la Bekka Tech Club</span>
            </div>
            <p class="about-community-role">
              Là où je partage mon parcours et soutiens d'autres femmes en reconversion
            </p>
          </div>

          <!-- Keywords -->
          <div class="about-keywords reveal reveal-d4">
            <span class="about-keyword">Persévérante</span>
            <span class="about-keyword">Méthodique</span>
            <span class="about-keyword">Engagée</span>
          </div>

        </div>

        <!-- ─── DROITE ─── -->
        <div class="about-right">

          <div class="about-text reveal reveal-d1">
            <p>Partie du développement web front-end, j'ai réalisé à un moment que je m'accrochais à quelque chose qui <strong>ne me portait plus vraiment</strong>. J'ai pris le temps de <strong>m'informer, d'échanger, de réfléchir</strong>.</p>
            <div class="about-divider"></div>
            <p>C'est en explorant <strong>le cloud et la cybersécurité</strong> que j'ai trouvé ma voie. L'infrastructure, c'est <strong>le tronc commun des deux</strong> : j'ai choisi de construire des <strong>bases solides</strong> avant de me spécialiser.</p>
            <p>Ce chemin, je ne l'ai pas fait seule. C'est dans les échanges avec <strong>Tech With Women</strong> que le déclic s'est produit, et c'est <strong>la Bekka Tech Club</strong> qui a renforcé mon idée et m'a aidée à passer à l'action.</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Section ── */
#about {
  padding: 60px 6%;
  position: relative;
  z-index: 1;
}

/* ── En-tête ── */
.about-header {
  margin-bottom: 52px;
}

/* ── Grille 2 colonnes ── */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 40px;
  align-items: start;
}

/* ══════════════════════════════
   GAUCHE
══════════════════════════════ */
.about-left {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Carte de base */
.about-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px 22px;
  box-shadow: var(--shadow);
}

/* Nom dans la carte identité */
.about-name {
  font-family: 'Syne', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 14px;
  letter-spacing: -0.3px;
}

/* Tags avec point */
.about-tags {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.about-tag {
  display: flex;
  align-items: center;
  gap: 9px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--slate2);
}

.about-tag-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}

.about-tag-dot--blue { background: var(--blue); }

/* Cartes communauté */
.about-community-card {
  padding: 16px 20px;
}

.about-community-header {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 6px;
}

.about-community-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.about-community-dot--blue { background: var(--blue); }
.about-community-dot--cyan { background: var(--cyan); }

.about-community-name {
  font-family: 'Syne', sans-serif;
  font-size: 0.92rem;
  font-weight: 800;
  color: var(--navy);
}

.about-community-role {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem;
  line-height: 1.55;
  color: var(--slate2);
  padding-left: 17px;
}

/* Keywords */
.about-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 4px;
}

.about-keyword {
  font-family: 'Space Mono', monospace;
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--white);
  background: var(--blue);
  border: none;
  padding: 9px 20px;
  border-radius: 100px;
}

/* ══════════════════════════════
   DROITE
══════════════════════════════ */
.about-right {
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding-top: 8px;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.about-text p {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.06rem;
  line-height: 1.8;
  color: var(--slate2);
  text-align: justify;
}

.about-text strong {
  color: var(--navy);
  font-weight: 700;
}

/* Séparateur dégradé blue → cyan */
.about-divider {
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, var(--blue), var(--cyan));
  border-radius: 99px;
  flex-shrink: 0;
  align-self: flex-start;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .about-left {
    order: 1;
  }

  .about-right {
    order: 0;
  }
}

@media (max-width: 600px) {
  #about {
    padding: 64px 6%;
  }

  .about-text p {
    font-size: 0.98rem;
  }

  .about-header {
    margin-bottom: 36px;
  }
}
</style>
