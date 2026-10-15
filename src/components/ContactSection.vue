<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const sujets = ['Opportunité', 'Question technique', 'Reconversion', 'Autre']

const form = ref({
  nom: '',
  email: '',
  sujet: '',
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
        from_name: form.value.nom,
        from_email: form.value.email,
        // Le template EmailJS affiche ce champ : on y place le sujet choisi
        entreprise: form.value.sujet ? `Sujet : ${form.value.sujet}` : '',
        message: form.value.message,
        to_email: 'bintou.karamoko.tech@gmail.com'
      },
      'mRjofijMUokyb0X9E'
    )
    success.value = true
    form.value = { nom: '', email: '', sujet: '', message: '' }
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
      <div class="contact-card reveal">

        <!-- Panneau gauche -->
        <div class="contact-panel">
          <div class="panel-eyebrow">// Me contacter</div>
          <h2 class="panel-title">Prenons <span>contact</span></h2>
          <p class="panel-text">
            Une question, un projet ou simplement envie d'échanger sur le cloud,
            l'infrastructure ou la reconversion ? Écrivez-moi.
          </p>

          <div class="panel-links">
            <a href="mailto:bintou.karamoko.tech@gmail.com" class="panel-link">
              <span class="link-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <span class="link-text">
                <span class="link-label">Email</span>
                <span class="link-val">bintou.karamoko.tech@gmail.com</span>
              </span>
              <span class="link-arrow" aria-hidden="true">→</span>
            </a>

            <a href="https://www.linkedin.com/in/bintou-karamoko" target="_blank" rel="noopener noreferrer"
              class="panel-link">
              <span class="link-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38A1.56 1.56 0 0 0 6.94 8.5ZM5.62 9.75H8.25V18.25H5.62V9.75ZM9.88 9.75H12.4V10.91H12.43C12.78 10.24 13.64 9.53 14.92 9.53C17.58 9.53 18.07 11.18 18.07 13.33V18.25H15.44V13.89C15.44 12.85 15.42 11.5 13.98 11.5C12.52 11.5 12.3 12.6 12.3 13.81V18.25H9.88V9.75Z" />
                </svg>
              </span>
              <span class="link-text">
                <span class="link-label">LinkedIn</span>
                <span class="link-val">bintou-karamoko</span>
              </span>
              <span class="link-arrow" aria-hidden="true">→</span>
            </a>

            <a href="https://github.com/KarahDotjs" target="_blank" rel="noopener noreferrer" class="panel-link">
              <span class="link-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </span>
              <span class="link-text">
                <span class="link-label">GitHub</span>
                <span class="link-val">KarahDotjs</span>
              </span>
              <span class="link-arrow" aria-hidden="true">→</span>
            </a>
          </div>

          <div class="panel-note">
            <span class="note-dot"></span>
            Réponse sous 24 h · Île-de-France
          </div>
        </div>

        <!-- Formulaire -->
        <form class="contact-form" @submit.prevent="sendEmail">
          <div class="form-row">
            <div class="form-group">
              <label for="c-nom">Nom</label>
              <input id="c-nom" v-model="form.nom" type="text" placeholder="Marie Dupont" required />
            </div>
            <div class="form-group">
              <label for="c-email">Email</label>
              <input id="c-email" v-model="form.email" type="email" placeholder="marie@exemple.com" required />
            </div>
          </div>

          <fieldset class="form-group">
            <legend>Sujet</legend>
            <div class="chips">
              <label v-for="s in sujets" :key="s" class="chip" :class="{ active: form.sujet === s }">
                <input v-model="form.sujet" type="radio" name="sujet" :value="s" />
                {{ s }}
              </label>
            </div>
          </fieldset>

          <div class="form-group">
            <label for="c-message">Message</label>
            <textarea id="c-message" v-model="form.message" rows="5" placeholder="Votre message…" required></textarea>
          </div>

          <button type="submit" class="btn-submit" :disabled="sending">
            {{ sending ? 'Envoi en cours…' : 'Envoyer le message' }}
            <span v-if="!sending" aria-hidden="true">→</span>
          </button>

          <p v-if="success" class="form-feedback form-success">✅ Message envoyé ! Je vous réponds sous 24 h.</p>
          <p v-if="error" class="form-feedback form-error">❌ Une erreur s'est produite. Écrivez-moi directement par
            email.</p>
        </form>

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

/* ── Carte unique ── */
.contact-card {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

/* ── Panneau gauche ── */
.contact-panel {
  position: relative;
  background: linear-gradient(150deg, var(--navy) 0%, var(--navy2) 55%, var(--blue) 100%);
  color: var(--white);
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.contact-panel::after {
  content: '';
  position: absolute;
  right: -90px;
  bottom: -90px;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--cyan) 0%, transparent 70%);
  opacity: 0.25;
  pointer-events: none;
}

.panel-eyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--cyan);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin-bottom: 10px;
}

.panel-title {
  font-family: 'Manrope', sans-serif;
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -1px;
  margin-bottom: 16px;
}

.panel-title span {
  color: var(--cyan);
}

.panel-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 32px;
}

.panel-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 32px;
}

.panel-link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--white);
  text-decoration: none;
  transition: background 0.25s, transform 0.25s, border-color 0.25s;
}

.panel-link:hover {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateX(4px);
}

.link-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.12);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.link-icon svg {
  width: 18px;
  height: 18px;
}

.link-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
}

.link-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--cyan);
}

.link-val {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.link-arrow {
  font-size: 1.1rem;
  opacity: 0.6;
  transition: opacity 0.25s;
}

.panel-link:hover .link-arrow {
  opacity: 1;
}

.panel-note {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
}

.note-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--cyan);
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.08);
}

/* ── Formulaire ── */
.contact-form {
  padding: 48px 44px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: none;
  padding: 0;
  margin: 0;
  min-width: 0;
}

.form-group label,
.form-group legend {
  font-family: 'Space Mono', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--navy);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0;
}

.form-group legend {
  margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  color: var(--navy);
  background: var(--sand);
  border: 1.5px solid transparent;
  border-radius: 12px;
  padding: 13px 16px;
  outline: none;
  transition: border-color 0.2s, background 0.2s;
  resize: none;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--electric);
  background: var(--white);
}

/* ── Chips sujet ── */
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.form-group .chip {
  position: relative;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0;
  color: var(--slate2);
  background: var(--sand);
  border: 1.5px solid transparent;
  border-radius: 100px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.chip input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.chip:hover {
  border-color: var(--electric);
  color: var(--electric);
}

.form-group .chip.active {
  background: var(--blue);
  color: var(--white);
  border-color: var(--blue);
}

.chip:has(input:focus-visible) {
  outline: 2px solid var(--electric);
  outline-offset: 2px;
}

/* ── Bouton ── */
.btn-submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: 'Manrope', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
  background: var(--blue);
  border: none;
  border-radius: 12px;
  padding: 15px;
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
  font-size: 0.9rem;
  border-radius: 10px;
  padding: 12px 16px;
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
@media (max-width: 900px) {
  .contact-card {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .contact-panel,
  .contact-form {
    padding: 32px 22px;
  }

  .panel-title {
    font-size: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
