<template>
  <section class="projet-hero">
    <div class="container">
      <router-link to="/#projets" class="projet-back">← Retour aux projets</router-link>
      <div class="projet-breadcrumb">
        <router-link to="/">Accueil</router-link> /
        <router-link to="/#projets">Projets</router-link> /
        Routage & Commutation Réseau
      </div>
      <div class="projet-tags">
        <span class="tag">Cisco</span>
        <span class="tag">Routage</span>
        <span class="tag">Packet Tracer</span>
        <span class="tag">IPv4</span>
      </div>
      <h1 class="projet-title">Routage & Commutation <span>Réseau</span></h1>
      <p class="projet-intro">
        Configuration complète d'une infrastructure réseau multi-sites simulée sous Packet Tracer pour l'entreprise fictive "BeeNet" — 3 sites interconnectés (RH, IT, Direction), 2 routeurs Cisco, routage statique et OSPF, sécurisation des équipements.
      </p>
    </div>
  </section>

  <section class="projet-content">
    <div class="container">

      <!-- ═══ CONTEXTE ═══ -->
      <div class="projet-block">
        <h2>📋 Contexte du projet</h2>
        <p>
          Réalisé dans le cadre de ma formation TSSR (modules Paramétrer un actif de type Routeur et Les bases des réseaux IP). L'entreprise fictive "BeeNet" interconnecte trois sites géographiques via un plan d'adressage structuré : Site RH (192.168.10.0/24), Site IT (192.168.20.0/24), Site Direction (192.168.30.0/24).
        </p>
      </div>

      <!-- ═══ OBJECTIFS ═══ -->
      <div class="projet-block">
        <h2>🎯 Objectifs</h2>
        <ul>
          <li>Concevoir un plan d'adressage IPv4 avec découpage en sous-réseaux /24 pour 3 sites distincts (RH, IT, Direction)</li>
          <li>Paramétrer BeeNet-R1 et BeeNet-R2 (hostname, bannière MOTD, enable secret, interfaces)</li>
          <li>Configurer les switches BeeNet-SW-RH, BeeNet-SW-IT et BeeNet-SW-DIR</li>
          <li>Configurer le routage statique entre BeeNet-R1 et BeeNet-R2 via liaison série</li>
          <li>Mettre en œuvre le routage dynamique OSPF pour la découverte automatique des routes</li>
          <li>Sécuriser les switches avec le port-security sur chaque site</li>
          <li>Valider la connectivité end-to-end par tests ping (Site RH ↔ Site Direction)</li>
        </ul>
      </div>

      <!-- ═══ SCHÉMA RÉSEAU ═══ -->
      <div class="projet-block">
        <h2>🗺️ Schéma réseau</h2>
        <div class="projet-image-placeholder">
          <!-- TODO: Remplace par ton image de topologie Packet Tracer -->
          <p>📸 Ajouter une capture de ma topologie Packet Tracer</p>
          <!-- <img src="/assets/projets/routage-topologie.png" alt="Topologie routage sous Packet Tracer" /> -->
        </div>
      </div>

      <!-- ═══ ÉTAPES ═══ -->
      <div class="projet-block">
        <h2>⚙️ Étapes de réalisation</h2>
        <div class="projet-steps">
          <div class="projet-step">
            <div class="step-num">1</div>
            <div>
              <h3>Plan d'adressage IPv4</h3>
              <p>Découpage en 3 sous-réseaux /24 — attribution des plages IP par site : RH (192.168.10.0/24), IT (192.168.20.0/24), Direction (192.168.30.0/24).</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">2</div>
            <div>
              <h3>Configuration des routeurs</h3>
              <p>Paramétrage de BeeNet-R1 et BeeNet-R2 : hostname, bannière MOTD, enable secret, adresses IP sur toutes les interfaces, liaison série inter-routeurs.</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">3</div>
            <div>
              <h3>Configuration des switches</h3>
              <p>Attribution des ports, sécurisation port-security, configuration sur BeeNet-SW-RH, BeeNet-SW-IT et BeeNet-SW-DIR.</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">4</div>
            <div>
              <h3>Routage statique</h3>
              <p>Ajout des routes statiques sur BeeNet-R1 vers BeeNet-R2 pour interconnecter les sous-réseaux.</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">5</div>
            <div>
              <h3>Routage dynamique OSPF</h3>
              <p>Mise en œuvre d'OSPF pour automatiser la découverte des routes entre les 3 sites.</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">6</div>
            <div>
              <h3>Tests et validation</h3>
              <p>show ip route sur BeeNet-R1, ping Site RH → Site Direction, lecture des tables de routage pour valider la connectivité end-to-end.</p>
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
            <p>Capture 1 : Table de routage</p>
            <!-- <img src="/assets/projets/routage-table.png" alt="Table de routage" /> -->
          </div>
          <div class="projet-image-placeholder">
            <p>Capture 2 : Tests de connectivité</p>
            <!-- <img src="/assets/projets/routage-tests.png" alt="Tests ping traceroute" /> -->
          </div>
        </div>
      </div>

      <!-- ═══ DIFFICULTÉS ═══ -->
      <div class="projet-block">
        <h2>🧩 Difficultés anticipées</h2>
        <ul>
          <li>Erreurs de masque de sous-réseau entraînant une impossibilité de communication</li>
          <li>Conflits entre routes statiques et dynamiques</li>
        </ul>
      </div>

      <!-- ═══ COMPÉTENCES ═══ -->
      <div class="projet-block">
        <h2>✅ Compétences visées</h2>
        <div class="projet-competences">
          <span class="stag hot">Routage statique</span>
          <span class="stag hot">Routage dynamique OSPF</span>
          <span class="stag hot">Sous-réseaux IPv4</span>
          <span class="stag">Cisco IOS</span>
          <span class="stag">Tables de routage</span>
          <span class="stag">Port-security</span>
          <span class="stag">Packet Tracer</span>
          <span class="stag">Liaison série</span>
          <span class="stag">Plan d'adressage</span>
        </div>
      </div>

      <!-- ═══ NAVIGATION ═══ -->
      <div class="projet-nav">
        <router-link to="/#projets" class="btn btn-ghost">← Tous les projets</router-link>
        <!-- <router-link to="/projet/vlan" class="btn btn-solid">Projet suivant : VLAN →</router-link> -->
      </div>

    </div>
  </section>
</template>
