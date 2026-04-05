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
        Configuration complète d'une infrastructure réseau sous Packet Tracer : paramétrage
        de routeurs et switches Cisco, routage statique et dynamique, découpage en sous-réseaux
        IPv4 et sécurisation des ports.
      </p>
    </div>
  </section>

  <section class="projet-content">
    <div class="container">

      <!-- ═══ CONTEXTE ═══ -->
      <div class="projet-block">
        <h2>📋 Contexte du projet</h2>
        <p>
          <!-- TODO: Décris ici le contexte -->
          Ce projet a été réalisé dans le cadre de ma formation TSSR
          (modules Paramétrer un actif de type Routeur et Les bases des réseaux IP).
          L'objectif était de configurer une infrastructure réseau complète simulant un
          réseau multi-sites d'entreprise.
        </p>
      </div>

      <!-- ═══ OBJECTIFS ═══ -->
      <div class="projet-block">
        <h2>🎯 Objectifs</h2>
        <ul>
          <li>Concevoir un plan d'adressage IPv4 avec découpage en sous-réseaux</li>
          <li>Paramétrer des routeurs et switches Cisco</li>
          <li>Configurer le routage statique entre sous-réseaux</li>
          <li>Mettre en œuvre un protocole de routage dynamique</li>
          <li>Sécuriser les équipements réseau</li>
        </ul>
      </div>

      <!-- ═══ SCHÉMA RÉSEAU ═══ -->
      <div class="projet-block">
        <h2>🗺️ Schéma réseau</h2>
        <div class="projet-image-placeholder">
          <!-- TODO: Remplace par ton image de topologie Packet Tracer -->
          <p>📸 Ajoute ici une capture de ta topologie Packet Tracer</p>
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
              <p><!-- TODO --> Découpage du réseau en sous-réseaux, attribution des plages IP par site/service.</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">2</div>
            <div>
              <h3>Configuration des routeurs</h3>
              <p><!-- TODO --> Paramétrage des interfaces, configuration des noms d'hôtes, mots de passe et bannières.
              </p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">3</div>
            <div>
              <h3>Routage statique</h3>
              <p><!-- TODO --> Ajout des routes statiques pour interconnecter les différents sous-réseaux.</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">4</div>
            <div>
              <h3>Routage dynamique</h3>
              <p><!-- TODO --> Mise en œuvre d'un protocole de routage (ex : RIP, OSPF) pour automatiser la découverte
                des routes.</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">5</div>
            <div>
              <h3>Configuration des switches</h3>
              <p><!-- TODO --> Attribution des ports, sécurisation port-security, configuration des trunks.</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">6</div>
            <div>
              <h3>Tests et validation</h3>
              <p><!-- TODO --> Tests ping, traceroute, lecture des tables de routage pour valider la connectivité.</p>
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
        <h2>🧩 Difficultés rencontrées</h2>
        <ul>
          <li><!-- TODO --> Exemple : erreur de masque de sous-réseau entraînant une impossibilité de communication</li>
          <li><!-- TODO --> Exemple : conflit entre routes statiques et dynamiques</li>
        </ul>
      </div>

      <!-- ═══ COMPÉTENCES ═══ -->
      <div class="projet-block">
        <h2>✅ Compétences acquises</h2>
        <div class="projet-competences">
          <span class="stag hot">Routage statique</span>
          <span class="stag hot">Routage dynamique</span>
          <span class="stag hot">Sous-réseaux IPv4</span>
          <span class="stag">Cisco IOS</span>
          <span class="stag">Tables de routage</span>
          <span class="stag">Packet Tracer</span>
        </div>
      </div>

      <!-- ═══ NAVIGATION ═══ -->
      <div class="projet-nav">
        <router-link to="/projet/active-directory" class="btn btn-ghost">← Projet AD & GPO</router-link>
        <router-link to="/#projets" class="btn btn-solid">Tous les projets →</router-link>
      </div>

    </div>
  </section>
</template>
