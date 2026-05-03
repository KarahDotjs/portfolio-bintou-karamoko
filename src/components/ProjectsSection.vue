<template>
  <section id="projects">
    <div class="container">

      <div class="projects-header reveal">
        <div class="eyebrow">// Projets &amp; Labs</div>
        <h2 class="section-title">Ce que je <span>construis</span></h2>
      </div>

      <div class="projects-grid">

        <!-- Carte 1 — Labs Réseaux -->
        <div class="proj-card reveal reveal-d1">
          <div class="proj-card-header header-navy">
            <div class="proj-badge badge-cyan">Labs documentés</div>
            <h3 class="proj-title">Labs Réseaux · Packet Tracer</h3>
            <p class="proj-desc">
              Tous mes labs Cisco Packet Tracer documentés sur GitHub — configurations réelles,
              fiches de révision, topologies commentées.
            </p>
            <div class="proj-tags">
              <span class="ptag">VLANs</span>
              <span class="ptag">ACL</span>
              <span class="ptag">Routage</span>
              <span class="ptag">HSRP</span>
              <span class="ptag">Port Security</span>
              <span class="ptag">SSH</span>
            </div>
          </div>
          <div class="proj-card-footer">
            <span class="proj-url">github.com/KarahDotjs/tssr-labs</span>
            <a href="https://github.com/KarahDotjs/tssr-labs"
               target="_blank" rel="noopener noreferrer"
               class="proj-btn">Voir les labs →</a>
          </div>
        </div>

        <!-- Carte 2 — BeeNet -->
        <div class="proj-card reveal reveal-d2">
          <div class="proj-card-header header-gradient">
            <div class="proj-badge badge-orange">En cours</div>
            <h3 class="proj-title">BeeNet · Réseau multi-sites</h3>
            <p class="proj-desc">
              Conception et déploiement d'un réseau d'entreprise multi-sites sous Cisco Packet
              Tracer — VLANs, routage inter-sites, sécurité et documentation complète.
            </p>
            <div class="proj-tags">
              <span class="ptag">Cisco</span>
              <span class="ptag">VLANs</span>
              <span class="ptag">OSPF</span>
              <span class="ptag">ACL</span>
              <span class="ptag">Packet Tracer</span>
            </div>
          </div>
          <div class="proj-card-footer">
            <span class="proj-url">Disponible bientôt</span>
            <button class="proj-btn proj-btn-disabled" disabled>En construction</button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
#projects {
  padding: 90px 0;
  position: relative;
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 6%;
}

.projects-header {
  margin-bottom: 52px;
}

/* ── Grille ── */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
}

/* ── Cards ── */
.proj-card {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(0, 82, 165, 0.1);
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px rgba(0, 43, 92, 0.08);
}

.proj-card-header {
  padding: 28px;
  flex: 1;
}

.header-navy {
  background: var(--navy);
}

.header-gradient {
  background: linear-gradient(135deg, var(--navy) 0%, #003a7a 100%);
}

/* ── Badges ── */
.proj-badge {
  display: inline-flex;
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 100px;
  margin-bottom: 14px;
}

.badge-cyan {
  background: rgba(0, 200, 224, 0.15);
  color: var(--cyan);
  border: 1px solid rgba(0, 200, 224, 0.3);
}

.badge-orange {
  background: rgba(196, 122, 0, 0.2);
  color: #f4a020;
  border: 1px solid rgba(196, 122, 0, 0.4);
  animation: badgePulse 2s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.65; }
}

/* ── Contenu ── */
.proj-title {
  font-family: 'Manrope', sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 12px;
  line-height: 1.3;
}

.proj-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.6;
  margin-bottom: 18px;
}

/* ── Tags ── */
.proj-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.ptag {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 4px 9px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

/* ── Footer ── */
.proj-card-footer {
  background: rgba(255, 255, 255, 0.97);
  padding: 14px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.proj-url {
  font-family: 'Space Mono', monospace;
  font-size: 0.68rem;
  color: var(--slate2);
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.proj-btn {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 8px;
  background: var(--navy);
  color: var(--white);
  border: none;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s ease, transform 0.2s ease;
  flex-shrink: 0;
}

.proj-btn:hover {
  background: var(--blue);
  transform: translateY(-1px);
}

.proj-btn-disabled {
  background: rgba(0, 82, 165, 0.1);
  color: var(--slate2);
  cursor: not-allowed;
}

.proj-btn-disabled:hover {
  background: rgba(0, 82, 165, 0.1);
  transform: none;
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
.reveal-d1 { transition-delay: 0.1s; }
.reveal-d2 { transition-delay: 0.2s; }

/* ── Responsive ── */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
