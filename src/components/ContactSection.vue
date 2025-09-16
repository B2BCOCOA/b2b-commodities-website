<template>
  <section id="contact" class="contact-section section">
    <div class="container">
      <div class="section-header text-center mb-16">
        <h2 class="section-title">Get in Touch</h2>
        <p class="section-description">
          Ready to start your investment journey? Contact us today for a free consultation 
          and discover how we can help you achieve your financial goals.
        </p>
      </div>

      <div class="contact-content">
        <!-- Contact Information -->
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-color)">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div class="contact-details">
              <h3 class="contact-title">Email</h3>
              <p class="contact-text">info@brofainvestment.com</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-color)">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div class="contact-details">
              <h3 class="contact-title">Phone</h3>
              <p class="contact-text">+1 (555) 123-4567</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-color)">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div class="contact-details">
              <h3 class="contact-title">Address</h3>
              <p class="contact-text">123 Business St, Finance District<br>City, State 12345</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-color)">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div class="contact-details">
              <h3 class="contact-title">Business Hours</h3>
              <p class="contact-text">
                Monday - Friday: 9:00 AM - 6:00 PM<br>
                Saturday: 10:00 AM - 4:00 PM<br>
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form-wrapper">
          <form 
            class="contact-form" 
            @submit.prevent="submitForm"
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
          >
            <div class="form-group">
              <label for="name" class="form-label">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                v-model="form.name"
                class="form-input" 
                required
                :disabled="isSubmitting"
              >
            </div>

            <div class="form-group">
              <label for="email" class="form-label">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                v-model="form.email"
                class="form-input" 
                required
                :disabled="isSubmitting"
              >
            </div>

            <div class="form-group">
              <label for="phone" class="form-label">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                v-model="form.phone"
                class="form-input"
                :disabled="isSubmitting"
              >
            </div>

            <div class="form-group">
              <label for="service" class="form-label">Service Interest</label>
              <select 
                id="service" 
                name="service" 
                v-model="form.service"
                class="form-select"
                :disabled="isSubmitting"
              >
                <option value="">Select a service</option>
                <option value="portfolio-management">Portfolio Management</option>
                <option value="wealth-planning">Wealth Planning</option>
                <option value="investment-advisory">Investment Advisory</option>
                <option value="risk-management">Risk Management</option>
                <option value="corporate-finance">Corporate Finance</option>
                <option value="general-inquiry">General Inquiry</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                v-model="form.message"
                class="form-textarea" 
                rows="5" 
                required
                placeholder="Tell us about your investment goals and how we can help you..."
                :disabled="isSubmitting"
              ></textarea>
            </div>

            <button 
              type="submit" 
              class="btn btn-primary btn-lg form-submit"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else>Sending...</span>
            </button>

            <!-- Success/Error Messages -->
            <div v-if="submitStatus === 'success'" class="form-message success">
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
            <div v-if="submitStatus === 'error'" class="form-message error">
              Sorry, there was an error sending your message. Please try again.
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref('')

const submitForm = async (event) => {
  isSubmitting.value = true
  submitStatus.value = ''

  try {
    // Note: Replace 'YOUR_FORM_ID' with your actual Formspree form ID
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })

    if (response.ok) {
      submitStatus.value = 'success'
      // Reset form
      Object.keys(form).forEach(key => {
        form[key] = ''
      })
    } else {
      submitStatus.value = 'error'
    }
  } catch (error) {
    console.error('Form submission error:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-section {
  background-color: var(--background-light);
}

.section-header {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.section-description {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: 1.7;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3xl);
  align-items: start;
  max-width: 1100px;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }
}

/* Contact Information */
.contact-info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--space-lg);
  align-items: center;
  justify-content: center;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-md);
  padding: var(--space-lg);
  background-color: white;
  border-radius: var(--radius-lg);
  box-shadow: none;
  flex: 0 1 200px;
  min-width: 180px;
}

.contact-icon {
  width: 48px;
  height: 48px;
  background-color: rgba(30, 64, 175, 0.1);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: none;
}

.contact-title {
  color: var(--text-primary);
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: var(--space-sm);
}

.contact-text {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* Contact Form */
.contact-form-wrapper {
  background-color: white;
  border-radius: var(--radius-xl);
  padding: var(--space-2xl);
  box-shadow: none;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: var(--space-sm);
  font-size: var(--text-sm);
}

.form-input,
.form-select,
.form-textarea {
  padding: var(--space-md);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  transition: border-color var(--transition-fast);
  background-color: white;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-submit {
  width: 100%;
  margin-top: var(--space-md);
  box-shadow: none;
}

.form-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-message {
  padding: var(--space-md);
  border-radius: var(--radius-md);
  margin-top: var(--space-md);
  font-weight: 500;
}

.form-message.success {
  background-color: #d1fae5;
  color: #065f46;
  border: 1px solid #a7f3d0;
}

.form-message.error {
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #fca5a5;
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .contact-content {
    gap: var(--space-2xl);
  }
}

@media (max-width: 900px) {
  .contact-info {
    gap: var(--space-md);
  }
  
  .contact-item {
    flex: 0 1 160px;
    min-width: 150px;
  }
}

@media (max-width: 600px) {
  .contact-info {
    flex-direction: column;
    gap: var(--space-lg);
  }
  
  .contact-item {
    flex: none;
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 767px) {
  .contact-form-wrapper {
    padding: var(--space-lg);
  }
  
  .contact-item {
    padding: var(--space-md);
  }
  
  .contact-icon {
    width: 40px;
    height: 40px;
  }
}
</style>
