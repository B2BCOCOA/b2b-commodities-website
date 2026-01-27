<template>
  <section class="contact-section" id="contact">
    <div class="contact-container-split">
      <!-- Left: Image Grid -->
      <div class="contact-images-grid">
        <div class="img-wrapper"><img :src="img1" alt="Cocoa" class="contact-grid-img" /></div>
        <div class="img-wrapper"><img :src="img2" alt="Coffee" class="contact-grid-img" /></div>
        <div class="img-wrapper"><img :src="img3" alt="Walnuts" class="contact-grid-img" /></div>
        <div class="img-wrapper"><img :src="img4" alt="Green Coffee" class="contact-grid-img" /></div>
        <div class="img-wrapper"><img :src="img5" alt="Mixed Beans" class="contact-grid-img" /></div>
        <div class="img-wrapper"><img :src="img6" alt="Dried Fruits" class="contact-grid-img" /></div>
      </div>

      <!-- Right: Form Content -->
      <div class="contact-form-side">
        <div class="form-side-content">
          <div class="section-header-side">
            <h2 class="section-title">{{ $t('contact.hero.title') }}</h2>
          </div>

          <form @submit.prevent="submitForm" class="contact-form" novalidate>
            <div class="form-row">
              <div class="form-group">
                <label for="firstName" class="form-label">{{ $t('contact.form.firstName') }}</label>
                <input id="firstName" name="firstName" type="text" v-model="form.firstName" class="form-input" required />
              </div>
              <div class="form-group">
                <label for="lastName" class="form-label">{{ $t('contact.form.lastName') }}</label>
                <input id="lastName" name="lastName" type="text" v-model="form.lastName" class="form-input" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="email" class="form-label">{{ $t('contact.form.email') }}</label>
                <input id="email" name="email" type="email" v-model="form.email" class="form-input" required />
              </div>
              <div class="form-group">
                <label for="phone" class="form-label">{{ $t('contact.form.phone') }}</label>
                <input id="phone" name="phone" type="tel" v-model="form.phone" class="form-input" />
              </div>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">{{ $t('contact.form.message') }}</label>
              <textarea id="message" name="message" v-model="form.message" class="form-textarea" rows="4" :placeholder="$t('contact.form.placeholder')" required></textarea>
            </div>

            <button type="submit" class="form-button" :disabled="isSubmitting">
              <span v-if="!isSubmitting">{{ $t('contact.form.submit') }}</span>
              <span v-else>{{ $t('contact.form.submitting') }}</span>
            </button>

            <div v-if="submitMessage" class="submit-message" :class="submitMessageType">{{ submitMessage }}</div>
          </form>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import img1 from '@/assets/images/contact-img1.jpg'
import img2 from '@/assets/images/contact-img2.jpg'
import img3 from '@/assets/images/contact-img3.jpg'
import img4 from '@/assets/images/contact-img4.jpg'
import img5 from '@/assets/images/contact-img5.jpg'
import img6 from '@/assets/images/contact-img6.jpg'

const { t } = useI18n()

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
      submitMessage.value = t('contact.form.success')
      submitMessageType.value = 'success'
      
      // Reset form
      Object.keys(form).forEach(key => {
        form[key] = ''
      })
    } else {
      throw new Error('Failed to submit form')
    }
  } catch (error) {
    submitMessage.value = t('contact.form.error')
    submitMessageType.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-section { padding: 0; background: #fff; overflow: hidden; }

.contact-container-split {
  display: flex;
  width: 100%;
  min-height: auto;
}

/* Left side: Images */
.contact-images-grid {
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 270px);
  gap: 0;
}

.img-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.contact-grid-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.img-wrapper:hover .contact-grid-img {
  transform: scale(1.08);
}

/* Right side: Form */
.contact-form-side {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 6rem;
  background-color: #ffffff;
}

.form-side-content {
  max-width: 550px;
  width: 100%;
}

.section-header-side {
  margin-bottom: 2.5rem;
}

.section-title { 
  font-size: 2.5rem; 
  font-weight: 700; 
  color: #313131; 
  text-align: center;
}

.section-description { 
  font-size: 1.1rem; 
  color: #31313180; 
  line-height: 1.5; 
}

.contact-form { width:100%; box-shadow: none; }
.form-row { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
.form-group { margin-bottom: 1.5rem; }
.form-label { display:block; font-size:.7rem; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color: #313131; margin-bottom: 0.5rem; }
.form-input,.form-textarea { width:100%; padding: 0.8rem 0; border:none; border-bottom:1px solid #e0e0e0; background:transparent; font-size:1rem; transition:.25s; }
.form-input:focus,.form-textarea:focus { outline:none; border-color:var(--primary-color); }
.form-textarea { resize:vertical; min-height:100px; }

.form-button { width:100%; margin-top: 1rem; padding:1.1rem; background:#702B0E; color:#fff; border:none; border-radius:4px; font-size:1rem; font-weight:600; cursor:pointer; transition:.3s; }
.form-button:hover:not(:disabled) { background:#542612; transform:translateY(-2px); }
.form-button:disabled { opacity:.5; }

.submit-message { margin-top:1rem; padding:1rem; border-radius:4px; text-align:center; font-size:.9rem; }
.submit-message.success { background:#f0fdf4; color:#166534; }
.submit-message.error { background:#fef2f2; color:#991b1b; }

.contact-details-minimal {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-details-minimal p {
  font-size: 0.95rem;
  color: #31313190;
  margin: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .contact-container-split { flex-direction: column-reverse; }
  .contact-images-grid, .contact-form-side { width: 100%; }
  .contact-form-side { padding: 4rem 2rem; }
  .contact-images-grid { height: 600px; }
}

@media (max-width: 640px) {
  .form-row { grid-template-columns: 1fr; gap: 0; }
  .contact-images-grid { height: 450px; }
}
</style>
