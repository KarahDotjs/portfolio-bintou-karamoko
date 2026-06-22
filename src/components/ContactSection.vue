<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({
  prenom: '',
  nom: '',
  email: '',
  entreprise: '',
  message: ''
})

const sending = ref(false)
const success = ref(false)
const error = ref(false)

const sendEmail = async () => {
  sending.value = true
  error.value = false
  success.value = false
  try {
    await emailjs.send(
      'service_zofu8mb',
      'template_ux8bqsy',
      {
        from_name: `${form.value.prenom} ${form.value.nom}`,
        from_email: form.value.email,
        entreprise: form.value.entreprise,
        message: form.value.message,
        to_email: 'bintou.karamoko.tech@gmail.com'
      },
      'mRjofijMUokyb0X9E'
    )
    success.value = true
    form.value = { prenom: '', nom: '', email: '', entreprise: '', message: '' }
  } catch (e) {
    error.value = true
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section id="contact">
    <div class="container">

      <div class="contact-header reveal">
        <div class="eyebrow">// Me contacter</div>
        <h2 class="section-title">Prenons <span>contact</span></h2>
        <p class="contact-subtitle">
          Vous recherchez un profil junior motivé et capable de monter en compétences rapidement ?
          <strong>Un simple échange de 20 minutes</strong> peut suffire à vérifier l'adéquation.
        </p>
      </div>

      <div class="contact-layout">

        <!-- Colonne gauche -->
        <div class="contact-left reveal reveal-d1">

          <div class="contact-info-card">
            <div class="cinfo-item">
              <span class="cinfo-icon">✉️</span>
              <div>
                <div class="cinfo-label">Email</div>
                <div class="cinfo-val">bintou.karamoko.tech@gmail.com</div>
              </div>
            </div>
            <div class="cinfo-item">
              <span class="cinfo-icon">📍</span>
              <div>
                <div class="cinfo-label">Localisation</div>
                <div class="cinfo-val">Île-de-France, France</div>
              </div>
            </div>
            <div class="cinfo-item">
              <span class="cinfo-icon">📅</span>
              <div>
                <div class="cinfo-label">Disponibilité</div>
                <div class="cinfo-val">Stage · Septembre 2026 · 3 mois</div>
              </div>
            </div>
          </div>

          <div class="contact-socials">
            <a href="https://www.linkedin.com/in/bintou-karamoko" target="_blank" rel="noopener noreferrer"
              class="social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path
                  d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38A1.56 1.56 0 0 0 6.94 8.5ZM5.62 9.75H8.25V18.25H5.62V9.75ZM9.88 9.75H12.4V10.91H12.43C12.78 10.24 13.64 9.53 14.92 9.53C17.58 9.53 18.07 11.18 18.07 13.33V18.25H15.44V13.89C15.44 12.85 15.42 11.5 13.98 11.5C12.52 11.5 12.3 12.6 12.3 13.81V18.25H9.88V9.75Z" />
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/KarahDotjs" target="_blank" rel="noopener noreferrer" class="social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
              GitHub
            </a>
            <a href="mailto:bintou.karamoko.tech@gmail.com" class="social-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email
            </a>
          </div>

          <div class="contact-note">
            <strong>Temps de réponse :</strong> Je réponds généralement sous 24h. N'hésitez pas à me contacter
            directement par email ou LinkedIn.
          </div>

        </div>

        <!-- Colonne droite — Formulaire -->
        <div class="contact-right reveal reveal-d2">
          <form class="contact-form" @submit.prevent="sendEmail">

            <div class="form-row">
              <div class="form-group">
                <label>Prénom</label>
                <input v-model="form.prenom" type="text" placeholder="Marie" required />
              </div>
              <div class="form-group">
                <label>Nom</label>
                <input v-model="form.nom" type="text" placeholder="Dupont" required />
              </div>
            </div>

            <div class="form-group">
              <label>Email professionnel</label>
              <input v-model="form.email" type="email" placeholder="m.dupont@entreprise.com" required />
            </div>

            <div class="form-group">
              <label>Entreprise / Poste</label>
              <input v-model="form.entreprise" type="text" placeholder="Ex : DSI chez TechCorp" />
            </div>

            <div class="form-group">
              <label>Message</label>
              <textarea v-model="form.message" rows="4" placeholder="Décrivez votre besoin ou votre proposition…"
                required></textarea>
            </div>

            <button type="submit" class="btn-submit" :disabled="sending">
              {{ sending ? 'Envoi en cours…' : '✉ Envoyer le message' }}
            </button>

            <p v-if="success" class="form-feedback form-success">✅ Message envoyé ! Je vous répondrai sous 24h.</p>
            <p v-if="error" class="form-feedback form-error">❌ Une erreur s'est produite. Contactez-moi directement par
              email.</p>

          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
#contact {
  padding: 90px 0;
  position: relative;
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 6%;
}

.contact-header {
  margin-bottom: 48px;
}

.contact-subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: var(--slate2);
  line-height: 1.7;
  margin-top: 12px;
  max-width: 600px;
}

/* ── Layout ── */
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 40px;
  align-items: start;
}

/* ── Colonne gauche ── */
.contact-info-card {
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(0, 82, 165, 0.08);
  border-radius: 14px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
}

.cinfo-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.cinfo-icon {
  font-size: 1.1rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.cinfo-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.62rem;
  font-weight: 700;
  color: var(--electric);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 2px;
}

.cinfo-val {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--navy);
}

/* ── Socials ── */
.contact-socials {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: 16px;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--navy);
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 82, 165, 0.12);
  border-radius: 8px;
  padding: 8px 12px;
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;
}

.social-btn:hover {
  border-color: var(--electric);
  color: var(--electric);
  transform: translateY(-1px);
}

/* ── Note ── */
.contact-note {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  color: var(--slate2);
  line-height: 1.6;
  background: rgba(0, 82, 165, 0.04);
  border-left: 3px solid var(--blue);
  border-radius: 0 8px 8px 0;
  padding: 10px 14px;
}

/* ── Formulaire ── */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-group label {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--navy);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.form-group input,
.form-group textarea {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  color: var(--navy);
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(0, 82, 165, 0.12);
  border-radius: 8px;
  padding: 10px 14px;
  outline: none;
  transition: border-color 0.2s;
  resize: none;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--electric);
}

.btn-submit {
  font-family: 'Manrope', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--white);
  background: var(--blue);
  border: none;
  border-radius: 10px;
  padding: 13px;
  width: 100%;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.btn-submit:hover:not(:disabled) {
  background: var(--electric);
  transform: translateY(-1px);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-feedback {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  border-radius: 8px;
  padding: 10px 14px;
  margin-top: 4px;
}

.form-success {
  background: rgba(45, 106, 79, 0.08);
  color: #2d6a4f;
  border: 1px solid rgba(45, 106, 79, 0.2);
}

.form-error {
  background: rgba(180, 0, 0, 0.06);
  color: #b40000;
  border: 1px solid rgba(180, 0, 0, 0.15);
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
