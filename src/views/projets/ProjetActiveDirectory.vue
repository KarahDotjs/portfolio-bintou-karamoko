<template>
  <section class="projet-hero">
    <div class="container">
      <router-link to="/#projets" class="projet-back">← Retour aux projets</router-link>
      <div class="projet-breadcrumb">
        <router-link to="/">Accueil</router-link> /
        <router-link to="/#projets">Projets</router-link> /
        Labo Active Directory & GPO
      </div>
      <div class="projet-tags">
        <span class="tag">Windows Server</span>
        <span class="tag">Active Directory</span>
        <span class="tag">GPO</span>
        <span class="tag">VMware Fusion</span>
      </div>
      <h1 class="projet-title">Labo Active Directory <span>& GPO</span></h1>
      <p class="projet-intro">
        Mise en place d'un domaine Active Directory complet : installation et configuration d'AD,
        création d'unités organisationnelles, gestion des utilisateurs et groupes,
        déploiement de stratégies de groupe (GPO) et intégration de postes au domaine.
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
          (modules Installer et configurer un domaine ActiveDirectory).
          L'objectif était de simuler un environnement d'entreprise avec un domaine AD complet
          sous VMware Fusion sur Mac M2.
        </p>
      </div>

      <!-- ═══ OBJECTIFS ═══ -->
      <div class="projet-block">
        <h2>🎯 Objectifs</h2>
        <ul>
          <li>Installer Windows Server 2022 et promouvoir en contrôleur de domaine</li>
          <li>Créer et organiser les unités organisationnelles (OUs) par service</li>
          <li>Gérer les utilisateurs et groupes selon la structure de l'entreprise</li>
          <li>Déployer des GPO de sécurité (mots de passe, accès USB, fond d'écran…)</li>
          <li>Intégrer des postes clients au domaine</li>
        </ul>
      </div>

      <!-- ═══ SCHÉMA ═══ -->
      <div class="projet-block">
        <h2>🗺️ Schéma de l'infrastructure</h2>
        <div class="projet-image-placeholder">
          <!-- TODO: Remplace par ton image -->
          <p>📸 Ajoute ici un schéma de ton infrastructure AD (arborescence OUs, architecture réseau)</p>
          <!-- <img src="/assets/projets/ad-schema.png" alt="Schéma Active Directory" /> -->
        </div>
      </div>

      <!-- ═══ ÉTAPES ═══ -->
      <div class="projet-block">
        <h2>⚙️ Étapes de réalisation</h2>
        <div class="projet-steps">
          <div class="projet-step">
            <div class="step-num">1</div>
            <div>
              <h3>Installation de Windows Server</h3>
              <p><!-- TODO --> Installation de Windows Server 2022 sur une VM VMware Fusion (Mac M2). Configuration
                réseau avec IP fixe.</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">2</div>
            <div>
              <h3>Promotion en contrôleur de domaine</h3>
              <p><!-- TODO --> Installation du rôle AD DS et promotion du serveur en contrôleur de domaine (ex :
                entreprise.local).</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">3</div>
            <div>
              <h3>Création des OUs</h3>
              <p><!-- TODO --> Organisation de l'annuaire : OUs par service (Direction, Comptabilité, IT, RH…).</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">4</div>
            <div>
              <h3>Gestion des utilisateurs et groupes</h3>
              <p><!-- TODO --> Création des comptes utilisateurs, des groupes de sécurité et attribution aux OUs.</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">5</div>
            <div>
              <h3>Déploiement des GPO</h3>
              <p><!-- TODO --> Création et liaison de GPO : politique de mots de passe, restrictions d'accès,
                configuration des postes.</p>
            </div>
          </div>
          <div class="projet-step">
            <div class="step-num">6</div>
            <div>
              <h3>Intégration et tests</h3>
              <p><!-- TODO --> Jonction de postes clients Windows au domaine, vérification de l'application des GPO,
                tests de connexion.</p>
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
            <p>Capture 1 : Arborescence Active Directory (OUs)</p>
            <!-- <img src="/assets/projets/ad-ous.png" alt="Arborescence OUs" /> -->
          </div>
          <div class="projet-image-placeholder">
            <p>Capture 2 : Configuration GPO</p>
            <!-- <img src="/assets/projets/ad-gpo.png" alt="GPO" /> -->
          </div>
          <div class="projet-image-placeholder">
            <p>Capture 3 : Poste intégré au domaine</p>
            <!-- <img src="/assets/projets/ad-jonction.png" alt="Jonction domaine" /> -->
          </div>
        </div>
      </div>

      <!-- ═══ DIFFICULTÉS ═══ -->
      <div class="projet-block">
        <h2>🧩 Difficultés rencontrées</h2>
        <ul>
          <li><!-- TODO --> Exemple : Windows Server ARM sur Mac M2 — adaptation nécessaire</li>
          <li><!-- TODO --> Exemple : résolution DNS à configurer avant la promotion en DC</li>
        </ul>
      </div>

      <!-- ═══ COMPÉTENCES ═══ -->
      <div class="projet-block">
        <h2>✅ Compétences acquises</h2>
        <div class="projet-competences">
          <span class="stag hot">Active Directory</span>
          <span class="stag hot">GPO</span>
          <span class="stag hot">Windows Server 2022</span>
          <span class="stag">Unités organisationnelles</span>
          <span class="stag">Gestion utilisateurs/groupes</span>
          <span class="stag">VMware Fusion</span>
        </div>
      </div>

      <!-- ═══ NAVIGATION ═══ -->
      <div class="projet-nav">
        <router-link to="/projet/vlan" class="btn btn-ghost">← Projet VLAN</router-link>
        <router-link to="/projet/routage" class="btn btn-solid">Projet suivant : Routage →</router-link>
      </div>

    </div>
  </section>
</template>
