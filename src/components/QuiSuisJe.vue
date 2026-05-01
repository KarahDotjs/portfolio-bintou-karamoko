<template>
  <section id="qui-suis-je">
    <div class="container">

      <!-- En-tête -->
      <div class="qsj-header reveal">
        <div class="eyebrow">// Qui suis-je</div>
        <h2 class="section-title">
          Une trajectoire <span>construite</span>
        </h2>
      </div>

      <!-- Grille 2 colonnes -->
      <div class="qsj-grid">

        <!-- ─── GAUCHE ─── -->
        <div class="qsj-left">

          <!-- Carte identité -->
          <div class="qsj-card reveal reveal-d1">
            <div class="qsj-card-name">Bintou Karamoko</div>
            <ul class="qsj-tags">
              <li class="qsj-tag">
                <span class="tag-dot tag-dot--blue"></span>
                Île-de-France
              </li>
              <li class="qsj-tag">
                <span class="tag-dot tag-dot--blue"></span>
                En formation TSSR
              </li>
              <li class="qsj-tag">
                <span class="tag-dot tag-dot--blue"></span>
                Objectif : Cloud Security Engineer
              </li>
            </ul>
          </div>

          <!-- Cartes communauté -->
          <div class="qsj-card qsj-card--community reveal reveal-d2">
            <div class="community-header">
              <span class="community-dot community-dot--blue"></span>
              <span class="community-name">Tech With Women</span>
            </div>
            <p class="community-sub">
              Là où j'apprends des expertes et construis ma vision
            </p>
          </div>

          <div class="qsj-card qsj-card--community reveal reveal-d3">
            <div class="community-header">
              <span class="community-dot community-dot--cyan"></span>
              <span class="community-name">la Bekka Tech Club</span>
            </div>
            <p class="community-sub">
              Là où je partage mon parcours et soutiens d'autres femmes en reconversion
            </p>
          </div>

          <!-- Pills -->
          <div class="qsj-pills reveal reveal-d4">
            <span class="qsj-pill">Persévérante</span>
            <span class="qsj-pill">Méthodique</span>
            <span class="qsj-pill">Engagée</span>
          </div>

        </div>

        <!-- ─── DROITE ─── -->
        <div class="qsj-right">

          <p class="qsj-para reveal reveal-d1">
            Partie du développement web front-end, j'ai réalisé à un moment que je
            m'accrochais à quelque chose qui ne me portait plus vraiment. J'ai pris
            le temps de m'informer, d'échanger, de réfléchir.
          </p>

          <div class="qsj-sep reveal reveal-d2"></div>

          <p class="qsj-para reveal reveal-d2">
            C'est en explorant le cloud et la cybersécurité que j'ai trouvé ma voie.
            L'infrastructure, c'est le tronc commun des deux : j'ai choisi de construire
            des bases solides avant de me spécialiser.
          </p>

          <p class="qsj-para reveal reveal-d3">
            Ce chemin, je ne l'ai pas fait seule. C'est dans les échanges avec
            <strong>Tech With Women</strong> que le déclic s'est produit. Et c'est
            <strong>la Bekka Tech Club</strong> qui m'a aidée à passer à l'action.
          </p>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Section ── */
#qui-suis-je {
  padding: 90px 6%;
  position: relative;
  z-index: 1;
}

/* ── En-tête ── */
.qsj-header {
  margin-bottom: 52px;
}

/* ── Grille 2 colonnes ── */
.qsj-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 40px;
  align-items: start;
}

/* ══════════════════════════════
   GAUCHE
══════════════════════════════ */
.qsj-left {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Carte de base */
.qsj-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 20px 22px;
  box-shadow: var(--shadow);
}

/* Nom dans la carte identité */
.qsj-card-name {
  font-family: 'Syne', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 14px;
  letter-spacing: -0.3px;
}

/* Tags avec point */
.qsj-tags {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.qsj-tag {
  display: flex;
  align-items: center;
  gap: 9px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--slate2);
}

.tag-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}

.tag-dot--blue { background: var(--blue); }

/* Cartes communauté */
.qsj-card--community {
  padding: 16px 20px;
}

.community-header {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 6px;
}

.community-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.community-dot--blue { background: var(--blue); }
.community-dot--cyan { background: var(--cyan); }

.community-name {
  font-family: 'Syne', sans-serif;
  font-size: 0.92rem;
  font-weight: 800;
  color: var(--navy);
}

.community-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem;
  line-height: 1.55;
  color: var(--slate2);
  padding-left: 17px;
}

/* Pills */
.qsj-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 4px;
}

.qsj-pill {
  font-family: 'Space Mono', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--blue);
  background: rgba(0, 82, 165, 0.06);
  border: 1px solid rgba(0, 82, 165, 0.18);
  border-radius: 100px;
  padding: 5px 14px;
  letter-spacing: 0.03em;
  white-space: nowrap;
}

/* ══════════════════════════════
   DROITE
══════════════════════════════ */
.qsj-right {
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding-top: 8px;
}

.qsj-para {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.06rem;
  line-height: 1.8;
  color: var(--slate2);
}

.qsj-para strong {
  color: var(--navy);
  font-weight: 700;
}

/* Séparateur dégradé blue → cyan */
.qsj-sep {
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, var(--blue), var(--cyan));
  border-radius: 99px;
  flex-shrink: 0;
  align-self: flex-start;
  margin: -4px 0;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .qsj-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .qsj-left {
    /* Réorganise : pills → cartes communauté → carte identité sur mobile */
    order: 1;
  }

  .qsj-right {
    order: 0;
  }
}

@media (max-width: 600px) {
  #qui-suis-je {
    padding: 64px 6%;
  }

  .qsj-para {
    font-size: 0.98rem;
  }

  .qsj-header {
    margin-bottom: 36px;
  }
}
</style>
