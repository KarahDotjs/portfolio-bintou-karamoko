<template>
  <section id="about" class="about-section">
    <div class="about-eyebrow">// D'où je viens ?</div>
    <div class="about-title">Une trajectoire <span>construite</span></div>

    <!-- Texte en haut -->
    <div class="about-text">
      <p>Partie du développement web front-end, j'ai réalisé à un moment que je m'accrochais à quelque chose qui <strong>ne me portait plus vraiment</strong>. J'ai pris le temps de <strong>m'informer, d'échanger, de réfléchir</strong>.</p>
      <div class="about-divider"></div>
      <p>C'est en explorant <strong>le cloud et la cybersécurité</strong> que j'ai trouvé ma voie. L'infrastructure, c'est <strong>le tronc commun des deux</strong> : j'ai choisi de construire des <strong>bases solides</strong> avant de me spécialiser.</p>
      <p>Ce chemin, je ne l'ai pas fait seule. C'est dans les échanges avec <strong>Tech With Women</strong> que le déclic s'est produit, et c'est <strong>la Bekka Tech Club</strong> qui a renforcé mon idée et m'a aidée à passer à l'action.</p>
    </div>

    <!-- 3 colonnes en bas -->
    <div class="about-bottom">

      <!-- Carte identité -->
      <div class="about-identity-card">
        <div class="about-name">Bintou Karamoko</div>
        <div class="about-tag"><span class="about-tag-dot"></span>Île-de-France</div>
        <div class="about-tag"><span class="about-tag-dot"></span>En formation TSSR</div>
        <div class="about-tag"><span class="about-tag-dot"></span>Objectif : Cloud Security Engineer</div>
      </div>

      <!-- Communautés -->
      <div class="about-communities">
        <div class="about-community">
          <div class="community-dot blue"></div>
          <div>
            <div class="community-name">Tech With Women</div>
            <div class="community-role">Là où j'apprends des expertes et construis ma vision</div>
          </div>
        </div>
        <div class="about-community">
          <div class="community-dot cyan"></div>
          <div>
            <div class="community-name">la Bekka Tech Club</div>
            <div class="community-role">Là où je partage mon parcours et soutiens d'autres femmes en reconversion</div>
          </div>
        </div>
      </div>

      <!-- Keywords -->
      <div class="about-keywords">
        <span class="about-keyword">Persévérante</span>
        <span class="about-keyword">Méthodique</span>
        <span class="about-keyword">Engagée</span>
      </div>

    </div>
  </section>
</template>

<style scoped>
section {
  min-width: 0;
}

.about-section {
  padding: 0;
  border-left: 1px solid rgba(0, 82, 165, 0.1);
  padding-left: 32px;
}

.about-eyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 1rem;
  font-weight: 700;
  color: var(--electric);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.about-eyebrow::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 1.5px;
  background: var(--electric);
}

.about-title {
  font-family: 'Manrope', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--navy);
  letter-spacing: -0.5px;
  line-height: 1.1;
  margin-bottom: 20px;
}

.about-title span { color: var(--electric); }

.about-text {
  margin-bottom: 24px;
}

.about-text p {
  font-size: 1.1rem !important;
  color: var(--slate2);
  line-height: 1.8;
  margin-bottom: 14px;
}

.about-text strong {
  color: var(--navy);
  font-weight: 700;
}

.about-divider {
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, var(--blue), var(--cyan));
  border-radius: 99px;
  margin: 16px 0;
}

.about-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  align-items: start;
}

.about-identity-card {
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(0, 82, 165, 0.08);
  border-radius: 12px;
  padding: 14px 16px;
}

.about-name {
  font-family: 'Manrope', sans-serif;
  font-size: 0.88rem;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 8px;
}

.about-tag {
  font-size: 0.75rem;
  color: var(--slate2);
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}

.about-tag-dot {
  width: 4px;
  height: 4px;
  background: var(--electric);
  border-radius: 50%;
  flex-shrink: 0;
}

.about-communities {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.about-community {
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(0, 82, 165, 0.08);
  border-radius: 10px;
  padding: 10px 13px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.community-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 3px;
}

.community-dot.blue { background: var(--blue); }
.community-dot.cyan { background: var(--cyan); }

.community-name {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 2px;
}

.community-role {
  font-size: 0.7rem;
  color: var(--slate2);
  line-height: 1.4;
}

.about-keywords {
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
}

.about-keyword {
  font-family: 'Space Mono', monospace;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--white);
  background: var(--blue);
  padding: 8px 16px;
  border-radius: 100px;
  text-align: center;
}

@media (max-width: 768px) {
  .about-bottom {
    grid-template-columns: 1fr;
  }
  .about-section {
    border-left: none;
    padding-left: 0;
  }
}
</style>
