<script setup>
import { ref } from 'vue'

const formRef = ref(null)
const isSubmitting = ref(false)
const statusMessage = ref('')
const statusHtml = ref('')
const statusType = ref('')
const statusVisible = ref(false)

const showStatus = (message, type, html = '') => {
  statusMessage.value = message
  statusHtml.value = html
  statusType.value = type
  statusVisible.value = true
}

const handleSubmit = async (event) => {
  event.preventDefault()

  if (!formRef.value.checkValidity()) {
    formRef.value.reportValidity()
    showStatus('Merci de remplir les champs obligatoires.', 'error')
    return
  }

  const formData = new FormData(formRef.value)
  const firstName = String(formData.get('firstName') || '').trim()
  const lastName = String(formData.get('lastName') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const company = String(formData.get('company') || '').trim()
  const subject = String(formData.get('subject') || 'Message depuis le portfolio').trim()
  const message = String(formData.get('message') || '').trim()

  isSubmitting.value = true

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })

    if (!response.ok) throw new Error('Échec de l\'envoi Netlify')

    showStatus('Message envoyé avec succès. Merci, je vous répondrai rapidement.', 'success')
    formRef.value.reset()
  } catch {
    const mailSubject = `${subject} — ${firstName} ${lastName}`
    const mailBody = [
      'Bonjour Bintou,',
      '',
      message,
      '',
      `Prénom : ${firstName}`,
      `Nom : ${lastName}`,
      `Email : ${email}`,
      `Entreprise / Poste : ${company || 'Non renseigné'}`,
    ].join('\n')

    const mailtoLink = `mailto:bintou.karamoko.dev@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`
    showStatus(
      '',
      'error',
      `L'envoi automatique a échoué. <a href="${mailtoLink}" style="color:var(--blue);text-decoration:underline">Envoyer par email à la place</a>`,
    )
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact">
    <div class="container">
      <div class="eyebrow reveal">// Me contacter</div>
      <h2 class="section-title reveal">
        Parlons de <span>votre besoin</span>
      </h2>

      <div class="contact-layout">
        <div class="contact-info reveal">
          <p>
            Vous recherchez un profil junior motivé, rigoureux et capable de monter en compétence rapidement ? Je
            suis disponible pour un stage de 2 à 3 mois en Île-de-France à partir de juin 2026. <strong>Un simple
              échange de 20 minutes peut suffire à vérifier l'adéquation du profil.</strong> N'hésitez pas à me
            contacter.
          </p>
          <div class="contact-items">
            <div class="citem">
              <div class="citem-ico">📧</div>
              <div>
                <div class="citem-label">Email</div>
                <div class="citem-val">bintou.karamoko.dev@gmail.com</div>
              </div>
            </div>
            <div class="citem">
              <div class="citem-ico">📍</div>
              <div>
                <div class="citem-label">Localisation</div>
                <div class="citem-val">Île-de-France, France</div>
              </div>
            </div>
            <div class="citem">
              <div class="citem-ico">🗓</div>
              <div>
                <div class="citem-label">Disponibilité</div>
                <div class="citem-val">Stage — Juin 2026</div>
              </div>
            </div>
          </div>
        </div>

        <form
          ref="formRef"
          class="contact-form reveal reveal-d2"
          id="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          @submit="handleSubmit"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p class="sr-only">
            <label>Ne pas remplir ce champ : <input name="bot-field" type="text" /></label>
          </p>
          <div class="form-row">
            <div class="form-group">
              <label for="first-name">Prénom</label>
              <input id="first-name" name="firstName" type="text" placeholder="Marie" autocomplete="given-name"
                required />
            </div>
            <div class="form-group">
              <label for="last-name">Nom</label>
              <input id="last-name" name="lastName" type="text" placeholder="Dupont" autocomplete="family-name"
                required />
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email professionnel</label>
            <input id="email" name="email" type="email" placeholder="m.dupont@entreprise.com" autocomplete="email"
              required />
          </div>
          <div class="form-group">
            <label for="company">Entreprise / Poste</label>
            <input id="company" name="company" type="text" placeholder="Ex : DSI chez TechCorp"
              autocomplete="organization-title" />
          </div>
          <div class="form-group">
            <label for="subject">Objet</label>
            <select id="subject" name="subject" required>
              <option value="" selected disabled>Choisissez un sujet</option>
              <option>Proposition de stage</option>
              <option>Renseignement</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="6"
              placeholder="Décrivez votre besoin ou votre proposition…" required></textarea>
          </div>
          <button type="submit" class="btn btn-solid contact-submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Envoi en cours...' : '✉️ Envoyer le message' }}
          </button>
          <p
            class="form-status"
            :class="{ 'is-visible': statusVisible, 'is-error': statusType === 'error', 'is-success': statusType === 'success' }"
            aria-live="polite"
          >
            <template v-if="statusHtml">
              <span v-html="statusHtml"></span>
            </template>
            <template v-else>{{ statusMessage }}</template>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
