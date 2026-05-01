<template>
  <section id="labs-reseaux">
    <div class="container">
      <div class="eyebrow reveal">// Labs réseaux</div>
      <h2 class="section-title reveal">🧪 Labs Réseaux</h2>
      <div class="labs-reseaux-content reveal"
        style="max-width: 600px; margin: 0 auto 32px auto; text-align: center;">
        <p style="font-size:1.35rem; margin-bottom: 24px;"><strong>Retrouvez mes labs Packet Tracer documentés sur
            GitHub</strong></p>
        <a href="https://github.com/KarahDotjs/tssr-labs/tree/main" class="btn btn-solid" target="_blank"
          rel="noopener noreferrer" style="font-size:1.08rem;">
          Voir mes labs &rarr;
        </a>
      </div>
    </div>
  </section>

  <section id="projets">
    <div class="container">
      <div class="eyebrow reveal">// Réalisations concrètes</div>
      <h2 class="section-title reveal">Projets &amp; <span>Labo</span></h2>

      <div class="projets-grid">
        <div class="proj-card reveal reveal-d1">
          <div class="proj-thumb" style="background: linear-gradient(135deg, #001f4d, #0052a5)">
            🌐
          </div>
          <div class="proj-body">
            <div class="proj-tags">
              <span class="tag">Cisco</span><span class="tag">Routage</span><span class="tag">Packet Tracer</span>
            </div>
            <div class="proj-name">Routage &amp; Commutation Réseau</div>
            <p class="proj-desc">
              Simulation d'un réseau multi-sites entreprise sous Cisco Packet Tracer. Configuration de routeurs et
              switches, segmentation IPv4 en sous-réseaux, routage statique et dynamique OSPF, sécurisation
              port-security.
            </p>
            <router-link to="/projet/routage" class="proj-link">Voir le projet →</router-link>
          </div>
        </div>
      </div>

      <div class="labo-card reveal" style="margin-top: 22px">
        <div class="labo-visual">
          <div>
            <div class="labo-badge">🧪 Projet Phare</div>
            <div class="labo-title">Labo Infrastructure<br />Windows Server &amp; Réseau</div>
            <div class="labo-sub">
              Projet de synthèse qui regroupera l'ensemble de mes apprentissages :
              adressage IP, configuration Cisco, VLANs, routage, Windows Server,
              Active Directory et GPO. Réalisé de A à Z en environnement
              virtualisé, ce projet illustrera ma capacité à déployer et
              interconnecter les briques d'une infrastructure réelle, de bout en bout.
            </div>
          </div>
          <div class="labo-stack">
            <span class="lstack">Packet Tracer</span>
            <span class="lstack">Windows Server</span>
            <span class="lstack">Active Directory</span>
            <span class="lstack">VLANs</span>
            <span class="lstack">Routage</span>
          </div>
        </div>
        <div class="labo-details">
          <h4>Étapes prévues</h4>
          <ul class="labo-steps">
            <li>
              <div class="step-num">1</div>
              Configuration de l'adressage IP et découpage en sous-réseaux IPv4
            </li>
            <li>
              <div class="step-num">2</div>
              Paramétrage des switches et routeurs Cisco sous Packet Tracer
            </li>
            <li>
              <div class="step-num">3</div>
              Création des VLANs et configuration du routage inter-VLAN
            </li>
            <li>
              <div class="step-num">4</div>
              Installation de Windows Server et déploiement d'Active Directory via VMware Fusion (macOS M2)
            </li>
            <li>
              <div class="step-num">5</div>
              Création des OUs, utilisateurs, groupes et déploiement des GPO
            </li>
            <li>
              <div class="step-num">6</div>
              Intégration des postes au domaine et tests de validation
            </li>
          </ul>
          <a href="#contact" class="btn btn-solid" style="margin-top: 24px">📁 Demander la doc technique</a>
        </div>
      </div>
    </div>
  </section>
</template>
