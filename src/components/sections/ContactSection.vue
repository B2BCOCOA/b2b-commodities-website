<template>
  <section class="contact-section" id="contact">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Contact Us</h2>
        <p class="section-description">Get in touch with us to discuss your agricultural needs and how we can help grow your business.</p>
      </div>

      <div class="contact-form-container full-width">
        <form @submit.prevent="submitForm" class="contact-form" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label for="firstName" class="form-label">First Name</label>
              <input id="firstName" name="firstName" type="text" v-model="form.firstName" class="form-input" required />
            </div>
            <div class="form-group">
              <label for="lastName" class="form-label">Last Name</label>
              <input id="lastName" name="lastName" type="text" v-model="form.lastName" class="form-input" required />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input id="email" name="email" type="email" v-model="form.email" class="form-input" required />
            </div>
            <div class="form-group">
              <label for="phone" class="form-label">Phone (Optional)</label>
              <input id="phone" name="phone" type="tel" v-model="form.phone" class="form-input" />
            </div>
          </div>

          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea id="message" name="message" v-model="form.message" class="form-textarea" rows="5" placeholder="Tell us about your project or inquiry..." required></textarea>
          </div>

          <button type="submit" class="form-button" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Submit Inquiry</span>
            <span v-else>Submitting...</span>
          </button>

          <div v-if="submitMessage" class="submit-message" :class="submitMessageType">{{ submitMessage }}</div>
        </form>
      </div>

      <div class="contact-info-inline">
        <div class="info-item">
          <div class="info-icon" aria-hidden="true">📍</div>
          <div class="info-content">
            <p>Tanzania, Dar Es Salaam</p>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon" aria-hidden="true">📞</div>
          <div class="info-content">
            <p>+255764709216</p>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon" aria-hidden="true">✉️</div>
          <div class="info-content">
            <p>info@brofainvestment.co.tz</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitMessageType = ref('')

const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    // Note: Replace 'YOUR_FORM_ID' with your actual Formspree form ID
    const response = await fetch('https://formspree.io/f/xeolwyrg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(form)
    })

    if (response.ok) {
      submitMessage.value = 'Thank you! Your message has been sent successfully.'
      submitMessageType.value = 'success'
      
      // Reset form
      Object.keys(form).forEach(key => {
        form[key] = ''
      })
    } else {
      throw new Error('Failed to submit form')
    }
  } catch (error) {
    submitMessage.value = 'Sorry, there was an error sending your message. Please try again.'
    submitMessageType.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-section { padding: clamp(3.5rem,7vw,5.5rem) 0 0; background:transparent; }
.section-header { text-align:center; margin:0 0 2.5rem; }
.section-title { font-size:clamp(2rem,3.2vw,2.6rem); font-weight:600; color:var(--text-primary); margin:0 0 1.1rem; }
.section-description { font-size: var(--text-lg); color: var(--text-secondary); max-width:760px; margin:0 auto; }

/* Full width form container (no background, no shadow, no overlay) */
.contact-form-container.full-width { width:100%; max-width:100%; margin:0 auto 2.4rem; padding:2.6rem 1.5rem 2.9rem; border-radius:0; background:transparent; box-shadow:none; position:relative; }
.contact-form-container.full-width:before { display:none; }
.contact-form { width:100%; position:relative; z-index:1; }
.form-row { display:grid; grid-template-columns:1fr 1fr; gap:1.2rem 1.4rem; }
.form-group { margin:0 0 1.55rem; position:relative; }
.form-label { display:block; font-size:.7rem; font-weight:600; text-transform:uppercase; letter-spacing:.12em; color:var(--text-secondary); margin:0 0 .15rem .05rem; }
.form-input,.form-textarea,.form-select { width:100%; padding:.85rem .25rem .65rem; border:none; border-bottom:2px solid var(--border-color); background:transparent; font-size:.95rem; font-family:inherit; transition:.25s; border-radius:0; }
/* Removed all drop shadows */
.form-input:focus,.form-textarea:focus { outline:none; border-color:var(--primary-color); box-shadow:none; }
.form-select:focus { outline:none; border-color:var(--primary-color); box-shadow:none; }
.form-textarea { resize:vertical; min-height:140px; line-height:1.45; }
.checkbox-label { display:flex; align-items:center; gap:.55rem; font-size:.8rem; color:var(--text-secondary); cursor:pointer; user-select:none; }
.form-checkbox { width:16px; height:16px; accent-color:var(--primary-color); }
.form-button { width:100%; margin-top:.35rem; padding:1rem 1.25rem; background:var(--primary-color); color:#fff; border:none; border-radius:.35rem; font-size:1rem; font-weight:600; cursor:pointer; transition:.25s; font-family:inherit; letter-spacing:.4px; box-shadow:none; }
.form-button:hover:not(:disabled) { background:var(--primary-dark); transform:translateY(-2px); box-shadow:none; }
.form-button:disabled { opacity:.55; cursor:not-allowed; }
.submit-message { margin-top:1.1rem; padding:.85rem 1rem; border-radius:.75rem; text-align:center; font-weight:500; font-size:.9rem; }
.submit-message.success { background:#d1fae5; color:#065f46; border:1px solid #a7f3d0; }
.submit-message.error { background:#fee2e2; color:#991b1b; border:1px solid #fecaca; }

/* Inline contact info below form */
.contact-info-inline { display:flex; flex-wrap:wrap; gap:2.2rem 3.5rem; width:100vw; margin-left:calc(-50vw + 50%); justify-content:center; align-items:center; background:#EEF5EA; padding:2rem; border-radius:0; }
.contact-info-inline .info-item { display:flex; align-items:center; gap:1.1rem; }
.contact-info-inline .info-icon { font-size:1.4rem; width:44px; height:44px; background:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; color:var(--primary-color); box-shadow:none; }
.contact-info-inline .info-content h3 { font-size:1.05rem; font-weight:600; color:var(--text-primary); margin:0 0 .35rem; letter-spacing:.5px; }
.contact-info-inline .info-content p { color:var(--text-secondary); font-size:.95rem; margin:0; line-height:1.3; }

/* Make this section fluid so the form can span wider */
.contact-section > .container { max-width:100%; width:100%; padding-left:clamp(1rem,4vw,4rem); padding-right:clamp(1rem,4vw,4rem); }
/* Remove internal max-width cap so form uses full fluid width */
.contact-form-container.full-width { width:100%; max-width:100%; margin:0 auto 2.4rem; padding:2.6rem 1.5rem 2.9rem; }
@media (min-width:1400px){
  .contact-form-container.full-width { padding-left:2rem; padding-right:2rem; }
}
@media (min-width:1100px){
  /* stretch inputs horizontally by increasing font-size a bit and reducing internal side padding removal to allow apparent width */
  .form-input,.form-textarea { font-size:1rem; }
  .contact-form-container.full-width { padding-left:1.5rem; padding-right:1.5rem; }
}
@media (min-width:1500px){
  .contact-form-container.full-width { max-width:1800px; }
}
@media (max-width:960px) { .contact-form-container.full-width { padding:2.2rem 1.6rem 2.5rem; } }
@media (max-width:720px) { .form-row { grid-template-columns:1fr; gap:1.1rem; } .contact-info-inline { flex-direction:column; gap:1.9rem; } }
@media (max-width:520px) { .contact-form-container.full-width { padding:1.85rem 1rem 2.1rem; } .section-title { font-size:2.15rem; } }
</style>
