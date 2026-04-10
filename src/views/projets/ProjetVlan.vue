<template>
  <section class="projet-hero">
    <div class="container">
      <router-link to="/#projets" class="projet-back">← Retour aux projets</router-link>
      <div class="projet-breadcrumb">
        <router-link to="/">Accueil</router-link> /
        <router-link to="/#projets">Projets</router-link> /
        Architecture Réseau VLAN
      </div>
      <div class="projet-tags">
        <span class="tag">Cisco</span>
        <span class="tag">VLAN</span>
        <span class="tag">Routage inter-VLAN</span>
        <span class="tag">Packet Tracer</span>
      </div>
      <h1 class="projet-title">Architecture Réseau <span>VLAN</span></h1>
      <p class="projet-intro">
        Conception et déploiement d'une architecture réseau segmentée sous Packet Tracer :
        création de VLANs, configuration du routage inter-VLAN et commutation de couche 3. — Projet à venir.
      </p>
    </div>
  </section>

  <section class="projet-content">
    <div class="container">

      <!-- ═══ CONTEXTE ═══ -->
      <div class="projet-block">
        <h2>📋 Contexte du projet</h2>
        <p>
          Ce projet sera réalisé dans le cadre de ma formation TSSR
          (modules Configurer la connectivité filaire et Configurer les VLANs).
          L'objectif est de segmenter un réseau d'entreprise fictif en plusieurs VLANs
          pour isoler les services.
        </p>
      </div>

      <!-- ═══ OBJECTIFS ═══ -->
      <div class="projet-block">
        <h2>🎯 Objectifs</h2>
        <ul>
          <li>Segmenter le réseau en VLANs par service (ex : Direction, Comptabilité, IT)</li>
          <li>Configurer le routage inter-VLAN pour permettre la communication contrôlée</li>
          <li>Mettre en place la commutation de couche 3</li>
          <li>Sécuriser les ports des switches</li>
        </ul>
      </div>

      <!-- ═══ SCHÉMA RÉSEAU ═══ -->
      <div class="projet-block">
        <h2>🗺️ Schéma réseau</h2>
        <div class="projet-image-placeholder">
          <!-- TODO: Remplace par ton image de topologie Packet Tracer -->
          <p>📸 Ajoute ici une capture de ta topologie Packet Tracer</p>
          <!-- <img src="/assets/projets/vlan-topologie.png" alt="Topologie VLAN sous Packet Tracer" /> -->
        </div>
      </div>

      <!-- ═══ ÉTAPES ═══ -->
      <div class="projet-block">
        <h2>⚙️ Étapes de réalisation prévues</h2>
        <div class="projet-steps">
          <div class="projet-step">
            <div class="step-num">1</div>
            <div>
              <h3>Conception de l'adressage IP</h3>
              <p>Définition du plan d'adressage pour chaque VLAN et sous-réseau.</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">2</div>
            <div>
              <h3>Configuration des switches</h3>
              <p>Création des VLANs sur les switches, attribution des ports aux VLANs.</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">3</div>
            <div>
              <h3>Mise en place des trunks</h3>
              <p>Configuration des liens trunk entre switches pour le transport des VLANs.</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">4</div>
            <div>
              <h3>Routage inter-VLAN</h3>
              <p>Configuration du routeur-on-a-stick ou de la commutation couche 3.</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">5</div>
            <div>
              <h3>Sécurisation des ports</h3>
              <p>Application de la sécurité des ports (port-security) sur les switches.</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">6</div>
            <div>
              <h3>Tests et validation</h3>
              <p>Vérification de la connectivité entre VLANs, tests ping, traceroute.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══ CAPTURES ═══ -->
      <div class="projet-block">
        <h2>📸 Captures d'écran</h2>
        <div class="projet-gallery">
          <!-- TODO: Ajoute tes captures ici -->
          <div class="projet-image-placeholder">
            <p>Capture 1 : Configuration des VLANs</p>
            <!-- <img src="/assets/projets/vlan-config.png" alt="Config VLANs" /> -->
          </div>
          <div class="projet-image-placeholder">
            <p>Capture 2 : Tests de connectivité</p>
            <!-- <img src="/assets/projets/vlan-tests.png" alt="Tests ping" /> -->
          </div>
        </div>
      </div>

      <!-- ═══ DIFFICULTÉS ═══ -->
      <div class="projet-block">
        <h2>🧩 Difficultés anticipées</h2>
        <ul>
          <li>Mauvaise attribution des ports trunk au début</li>
          <li>Problème de connectivité inter-VLAN à résoudre en vérifiant les sous-interfaces</li>
        </ul>
      </div>

      <!-- ═══ COMPÉTENCES ═══ -->
      <div class="projet-block">
        <h2>✅ Compétences visées</h2>
        <div class="projet-competences">
          <span class="stag hot">VLANs</span>
          <span class="stag hot">Routage inter-VLAN</span>
          <span class="stag hot">Commutation couche 3</span>
          <span class="stag">Sécurité des ports</span>
          <span class="stag">Cisco IOS</span>
          <span class="stag">Packet Tracer</span>
        </div>
      </div>

      <!-- ═══ NAVIGATION ═══ -->
      <div class="projet-nav">
        <router-link to="/projet/routage" class="btn btn-ghost">← Projet Routage</router-link>
        <router-link to="/projet/active-directory" class="btn btn-solid">Projet suivant : AD & GPO →</router-link>
      </div>

    </div>
  </section>
</template>
