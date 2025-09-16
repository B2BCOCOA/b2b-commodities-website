<template>
  <section class="team-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Team</h2>
      </div>

      <div class="team-grid">
        <div class="team-member" v-for="member in teamMembers" :key="member.id">
          <div class="member-image">
            <img :src="member.image" :alt="member.name" />
          </div>
          <div class="member-info">
            <h3 class="member-position">{{ member.position }}</h3>
            <p class="member-name">{{ member.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Import team member images
import sabasabaImage from '@/assets/images/sabasaba_manase.png'
import jumanneImage from '@/assets/images/jamanne_rajabu_salum.jpg'
import nuruImage from '@/assets/images/nuru_sinde_mgisa.png'
import jamesImage from '@/assets/images/james_norbet_mlelwa.png'
import jonsonImage from '@/assets/images/jonson_kaihura_kishumba.png'
import kelvinImage from '@/assets/images/kelvin_kinabo.png'

const teamMembers = ref([
  {
    id: 1,
    position: 'CEO',
    name: 'SabaSaba Manase',
    image: sabasabaImage
  },
  {
    id: 2,
    position: 'Operations Manager',
    name: 'Jumanne Rajabu Salum',
    image: jumanneImage
  },
  {
    id: 3,
    position: 'Logistics Coordinator',
    name: 'Nuru Sinde Mgisa',
    image: nuruImage
  },
  {
    id: 4,
    position: 'Marketing Specialist',
    name: 'James Norbet Mlelwa',
    image: jamesImage
  },
  {
    id: 5,
    position: 'Agricultural Consultant Expert',
    name: 'Jonson Kaihura Kishumba',
    image: jonsonImage
  },
  {
    id: 6,
    position: 'Customer Service Representative',
    name: 'Kelvin Kinabo',
    image: kelvinImage
  }
])
</script>

<style scoped>
.team-section {
  padding: clamp(3.5rem,7vw,5.5rem) 0;
  background-color: var(--background);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(1.9rem,3.2vw,2.4rem);
  font-weight: 500;
  line-height: 1.22;
  color: #313131;
  margin: 0;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem 3rem;
  max-width: 1300px;
  margin: 0 auto;
}

.team-member {
  text-align: center;
  background: transparent;
  padding: 0;
}

.member-image {
  width: 220px;
  height: 220px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-info {
  text-align: center;
}

.member-position {
  font-size: 1.1rem;
  font-weight: 600;
  color: #4a4a4a;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.member-name {
  font-size: 0.95rem;
  color: #888888;
  font-weight: 400;
  margin: 0;
  line-height: 1.3;
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
    max-width: 800px;
  }

  .member-image {
    width: 160px;
    height: 160px;
  }

  .member-position {
    font-size: 1rem;
  }

  .member-name {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .team-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    max-width: 400px;
  }

  .member-image {
    width: 140px;
    height: 140px;
  }
}
</style>
