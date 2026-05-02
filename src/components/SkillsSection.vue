<template>
  <section id="skills">
    <div class="container">

      <div class="skills-header reveal">
        <div class="eyebrow">// Mes expertises</div>
        <h2 class="section-title">Ce que je <span>sais faire</span></h2>
      </div>

      <div class="skills-grid">

        <!-- 1. Systèmes & Administration -->
        <div class="skill-category reveal reveal-d1">
          <div class="skill-cat-title">🖥️ Systèmes &amp; Administration</div>
          <div class="skill-tags">
            <span class="stag hot">Windows Server 2019/2022</span>
            <span class="stag hot">Active Directory</span>
            <span class="stag hot">GPO</span>
            <span class="stag">Gestion utilisateurs &amp; groupes</span>
            <span class="stag">Unités organisationnelles</span>
            <span class="stag">Administration distante</span>
            <span class="stag">DHCP / DNS</span>
          </div>
        </div>

        <!-- 2. Réseaux & Protocoles -->
        <div class="skill-category reveal reveal-d2">
          <div class="skill-cat-title">🌐 Réseaux &amp; Protocoles</div>
          <div class="skill-tags">
            <span class="stag hot">Cisco Packet Tracer</span>
            <span class="stag hot">VLANs</span>
            <span class="stag hot">Routage statique &amp; dynamique</span>
            <span class="stag">TCP/IP</span>
            <span class="stag">Modèle OSI</span>
            <span class="stag">IPv4 / IPv6</span>
            <span class="stag">Commutation</span>
            <span class="stag">Câblage réseau</span>
          </div>
        </div>

        <!-- 3. Sécurité & Bonnes pratiques -->
        <div class="skill-category reveal reveal-d1">
          <div class="skill-cat-title">🔒 Sécurité &amp; Bonnes pratiques</div>
          <div class="skill-tags">
            <span class="stag hot">ACL</span>
            <span class="stag hot">SSH</span>
            <span class="stag hot">Port Security</span>
            <span class="stag">HSRP</span>
            <span class="stag">Permissions NTFS</span>
          </div>
        </div>

        <!-- 4. Linux -->
        <div class="skill-category reveal reveal-d2">
          <div class="skill-cat-title">🐧 Linux</div>
          <div class="skill-tags">
            <span class="stag hot">Debian</span>
            <span class="stag">Commandes shell</span>
            <span class="stag">Gestion des droits</span>
            <span class="stag">Services réseau</span>
            <span class="stag">SSH</span>
          </div>
        </div>

        <!-- 5. Virtualisation -->
        <div class="skill-category reveal reveal-d1">
          <div class="skill-cat-title">⚙️ Virtualisation</div>
          <div class="skill-tags">
            <span class="stag hot">VMware</span>
            <span class="stag">UTM</span>
            <span class="stag">Réseaux virtuels</span>
          </div>
        </div>

        <!-- 6. PowerShell / Bash -->
        <div class="skill-category reveal reveal-d2">
          <div class="skill-cat-title">💻 PowerShell / Bash</div>
          <div class="skill-tags">
            <span class="stag hot">Scripts PowerShell</span>
            <span class="stag">Automatisation tâches</span>
            <span class="stag">Gestion AD via PS</span>
            <span class="stag">Bash basique</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
#skills {
  padding: 90px 0;
  position: relative;
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 6%;
}

.skills-header {
  margin-bottom: 52px;
}

/* ── Grille 2 colonnes ── */
.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

/* ── Catégorie ── */
.skill-category {
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(0, 82, 165, 0.08);
  border-radius: 14px;
  padding: 20px;
}

.skill-cat-title {
  font-family: 'Space Mono', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--navy);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 14px;
}

/* ── Tags ── */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.stag {
  display: inline-flex;
  align-items: center;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 82, 165, 0.1);
  color: var(--slate);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stag:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow);
}

.stag.hot {
  background: rgba(0, 119, 255, 0.07);
  border-color: rgba(0, 119, 255, 0.2);
  color: var(--blue);
  font-weight: 600;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
