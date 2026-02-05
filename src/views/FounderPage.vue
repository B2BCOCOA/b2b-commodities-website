<template>
  <div class="founder-page">
    <!-- Hero Section -->
    <section class="founder-hero">
      <div class="hero-content">
        <h1>{{ $t('founder.hero.title') }}</h1>
        <p>{{ $t('founder.hero.subtitle') }}</p>
      </div>
    </section>

    <!-- Founder Profile Section -->
    <section class="founder-profile-section">
      <div class="profile-grid">
        <!-- Left: Bio Content -->
        <div class="profile-info">
          <div class="info-inner">
            <div class="about-badge">
              <img :src="sparkIcon" alt="" class="spark-icon" />
              <span>{{ $t('founder.profile.badge') }}</span>
            </div>
            
            <h2 class="founder-title">Meet <span>Grzegorz Winiarek</span></h2>
            
            <p class="founder-bio">
              {{ $t('founder.profile.bio') }}
            </p>

            <a href="https://www.linkedin.com/in/grzegorz-p-winiarek-b2b-commodities-869992266/" class="linkedin-btn" target="_blank" rel="noopener noreferrer">
              <span>{{ $t('founder.profile.linkedin') }}</span>
              <div class="linkedin-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
            </a>

            <div class="founder-extra">
              <p>{{ $t('founder.profile.extra') }}</p>
              <p class="tracks-invite">{{ $t('founder.profile.tracksTitle') }}</p>
              
              <div class="music-cards-grid">
                <a href="https://www.youtube.com/watch?v=bwB9EMpW8eY" target="_blank" rel="noopener noreferrer" class="music-card">
                  <div class="music-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M9 18V5l12-2v13"></path>
                      <circle cx="6" cy="18" r="3"></circle>
                      <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                  </div>
                  <div class="music-info">
                    <span class="card-song-title">Stand By You</span>
                    <span class="card-singer-name">Rachel Platten</span>
                  </div>
                </a>

                <a href="https://www.youtube.com/watch?v=YcUOgL9fmX8&pp=ygUZc2VtcmUgc2VtcmUga2VyZmFsYSBrYW50ZQ%3D%3D" target="_blank" rel="noopener noreferrer" class="music-card">
                  <div class="music-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M9 18V5l12-2v13"></path>
                      <circle cx="6" cy="18" r="3"></circle>
                      <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                  </div>
                  <div class="music-info">
                    <span class="card-song-title">Semere semere</span>
                    <span class="card-singer-name">Kerfala Kanté</span>
                  </div>
                </a>

                <a href="https://www.youtube.com/watch?v=ZSRFY3UjVVA&pp=ygUSQXNocyBUaGUgQmVzdCBtYWFt" target="_blank" rel="noopener noreferrer" class="music-card">
                  <div class="music-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M9 18V5l12-2v13"></path>
                      <circle cx="6" cy="18" r="3"></circle>
                      <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                  </div>
                  <div class="music-info">
                    <span class="card-song-title">Maam</span>
                    <span class="card-singer-name">Ashs The Best</span>
                  </div>
                </a>

                <a href="https://www.youtube.com/watch?v=rrwvr5DlEUM&pp=ygURc21pbGUgZm9yIG1lIHNpbWk%3D" target="_blank" rel="noopener noreferrer" class="music-card">
                  <div class="music-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M9 18V5l12-2v13"></path>
                      <circle cx="6" cy="18" r="3"></circle>
                      <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                  </div>
                  <div class="music-info">
                    <span class="card-song-title">Smile For Me</span>
                    <span class="card-singer-name">Simi</span>
                  </div>
                </a>
              </div>
            </div>


          </div>
        </div>

        <!-- Right: Full Image -->
        <div class="profile-image">
          <img :src="founderImg" alt="Grzegorz Winiarek" class="founder-image-full" />
        </div>
      </div>
    </section>

    <!-- Stats Marquee -->
    <div class="stats-marquee">
      <div class="stats-track">
        <!-- Group 1 -->
        <div class="stats-group">
          <div class="stat-item">
            <span class="song-title">Stand By You</span>
            <span class="singer-name">Rachel Platten</span>
          </div>
          <img :src="musicNoteIcon" class="separator-icon" alt="" />
          <div class="stat-item">
            <span class="song-title">Semere semere</span>
            <span class="singer-name">Kerfala Kanté</span>
          </div>
          <img :src="musicNoteIcon" class="separator-icon" alt="" />
          <div class="stat-item">
            <span class="song-title">Ashs The Best</span>
            <span class="singer-name">Maam</span>
          </div>
          <img :src="musicNoteIcon" class="separator-icon" alt="" />
          <div class="stat-item">
            <span class="song-title">Smile For Me</span>
            <span class="singer-name">Simi</span>
          </div>
          <img :src="musicNoteIcon" class="separator-icon" alt="" />
          <div class="stat-item">
            <span class="song-title">Murakaza</span>
            <span class="singer-name">Ruti Joel</span>
          </div>
          <img :src="musicNoteIcon" class="separator-icon" alt="" />
        </div>
        <!-- Group 2 (Duplicate) -->
        <div class="stats-group">
          <div class="stat-item">
            <span class="song-title">Stand By You</span>
            <span class="singer-name">Rachel Platten</span>
          </div>
          <img :src="musicNoteIcon" class="separator-icon" alt="" />
          <div class="stat-item">
            <span class="song-title">Semere semere</span>
            <span class="singer-name">Kerfala Kanté</span>
          </div>
          <img :src="musicNoteIcon" class="separator-icon" alt="" />
          <div class="stat-item">
            <span class="song-title">Ashs The Best</span>
            <span class="singer-name">Maam</span>
          </div>
          <img :src="musicNoteIcon" class="separator-icon" alt="" />
          <div class="stat-item">
            <span class="song-title">Smile For Me</span>
            <span class="singer-name">Simi</span>
          </div>
          <img :src="musicNoteIcon" class="separator-icon" alt="" />
          <div class="stat-item">
            <span class="song-title">Murakaza</span>
            <span class="singer-name">Ruti Joel</span>
          </div>
          <img :src="musicNoteIcon" class="separator-icon" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import whiteSparkIcon from '@/assets/images/iconoir_spark-solid-white.png'
import sparkIcon from '@/assets/images/iconoir_spark-solid-brown.png'
import founderImg from '@/assets/images/founder.png'
import musicNoteIcon from '@/assets/images/music-note.png'
</script>

<style scoped>
/* Founder Page Styles */
.founder-page {
  padding-top: 80px;
}

/* Hero Section */
.founder-hero {
  background-color: #8B4513;
  background-image: linear-gradient(rgba(139, 69, 19, 0.9), rgba(139, 69, 19, 0.85)), url('@/assets/images/containerspage.jpg');
  background-size: cover;
  background-position: bottom;
  padding: 6rem 6rem;
  color: white;
}

.hero-content {
  max-width: 800px;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #ffffff;
}

.hero-content p {
  font-size: 1.4rem;
  line-height: 1.35;
  opacity: 0.8;
  font-weight: 300;
  color: #ffffff;
}

/* Founder Profile Section */
.founder-profile-section {
  background-color: white;
  width: 100%;
}

.profile-grid {
  display: flex;
  width: 100%;
  min-height: 100px;
}

.profile-info {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6rem;
}

.info-inner {
  max-width: 600px;
}

.about-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 0.2rem;
}

.spark-icon {
  width: 18px;
  height: 18px;
}

.about-badge span {
  font-size: 1.1rem;
  font-weight: 700;
  color: #313131;
  letter-spacing: 0.05em;
}

.founder-title {
  font-size: 3.5rem;
  color: #313131;
  margin-bottom: 2rem;
  font-weight: 800;
}

.founder-title span {
  color: #702B0E;
}

.founder-bio {
  font-size: 1.35rem;
  line-height: 1.5;
  color: #31313180;
  margin-bottom: 1.1rem;
  text-align: justify;
}

.founder-bio .highlight {
  font-weight: 700;
  color: #313131;
}

.linkedin-btn {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background-color: #702B0E;
  color: white;
  padding: 0.6rem 0.6rem 0.6rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1.1rem;
  transition: background-color 0.3s ease;
}

.linkedin-btn:hover {
  background-color: #3d1c0d;
}

.linkedin-box {
  background-color: white;
  color: #542612;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.founder-extra {
  font-size: 1.35rem;
  color: #4b5563;
  line-height: 1.5;
}

.tracks-invite {
  font-weight: 700;
  color: #1a2b4a;
  margin-top: 0.5rem;
}

.profile-image {
  width: 50%;
  padding: 0;
  margin: 0;
}

.founder-image-full {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: right;
  display: block;
}

/* Music Marquee Styles */
.music-marquee {
  width: 100%;
  overflow: hidden;
  padding: 1rem 0;
  margin-top: 1rem;
  position: relative;
}

.music-track {
  display: flex;
  width: max-content;
  animation: marquee-slow 30s linear infinite;
}

.music-group {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding-right: 3rem;
}

.music-item {
  font-size: 1.1rem;
  font-weight: 500;
  color: #313131;
  white-space: nowrap;
}

.music-separator {
  width: 18px;
  height: 18px;
  object-fit: contain;
  opacity: 0.6;
}

@keyframes marquee-slow {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}


/* Stats Marquee Styles */
.stats-marquee {
  background-color: var(--primary-color);
  color: white;
  width: 100%;
  overflow: hidden;
  padding: 1.5rem 0;
  position: relative;
  z-index: 10;
}

.stats-track {
  display: flex;
  width: max-content;
  animation: marquee 40s linear infinite;
}

.stats-group {
  display: flex;
  align-items: center;
  gap: 6rem;
  padding-right: 6rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  white-space: nowrap;
}

.song-title {
  font-size: 1.15rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.singer-name {
  font-size: 0.85rem;
  font-weight: 400;
  opacity: 0.8;
  margin-top: 0.15rem;
}

.separator-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

@keyframes marquee {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

/* Responsive */
@media (max-width: 1200px) {
  .founder-title {
    font-size: 2.8rem;
  }
}

/* Responsive - Tablet (1024px and below) */
@media (max-width: 1024px) {
  .profile-grid {
    flex-direction: column;
    align-items: center;
  }
  
  .profile-info {
    width: 100%;
    padding: 4rem 2rem;
  }
  
  .info-inner {
    max-width: none;
  }
  
  .profile-image {
    display: none;
  }
  
  .founder-hero {
    padding: 4rem 3rem;
  }
}

/* Responsive - Mobile (768px and below) */
@media (max-width: 768px) {
  .founder-hero {
    padding: 3rem 2rem;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }
  
  .profile-grid {
    flex-direction: column;
    align-items: center;
  }
  
  .profile-info {
    width: 100%;
    padding: 2rem 1.5rem;
    justify-content: center;
  }
  
  .profile-image {
    display: none;
  }
  
  .founder-title {
    font-size: 2.2rem;
  }

  .founder-bio, .founder-extra {
    font-size: 1.1rem;
  }
  
  
  .stats-group {
    gap: 3rem;
    padding-right: 3rem;
  }
  
  .stat-item {
    font-size: 1.25rem;
  }
}

/* Music Cards Styles */
.music-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
  max-width: 500px;
}

.music-card {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background-color: #f9f9f9;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  text-decoration: none;
  border: 1px solid #eee;
  transition: all 0.2s ease;
  cursor: pointer;
}

.music-card:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
  border-color: #ddd;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.music-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #702B0E;
  background-color: rgba(112, 43, 14, 0.1);
  padding: 6px;
  border-radius: 50%;
}

.music-icon-box svg {
  width: 16px;
  height: 16px;
}

.music-info {
  display: flex;
  flex-direction: column;
}

.card-song-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: #313131;
}

.card-singer-name {
  font-size: 0.75rem;
  color: #666;
  line-height: 1.2;
}

@media (max-width: 600px) {
  .music-cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
