<template>
  <section class="modern-hero">
    <div class="hero-background">
      <div class="hero-overlay"></div>
      <div class="hero-pattern"></div>
    </div>
    
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-badge">
            <span class="badge-text">Excellence Since 1894</span>
          </div>
          
          <h1 class="hero-title">
            Shaping Tomorrow's
            <span class="highlight">Leaders</span>
          </h1>
          
          <p class="hero-description">
            At St. Francis Convent Inter College, we nurture young minds with 
            world-class education, strong values, and endless opportunities for growth.
          </p>
          
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">126+</div>
              <div class="stat-label">Years of Excellence</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">100%</div>
              <div class="stat-label">Board Results</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">1000+</div>
              <div class="stat-label">Alumni Worldwide</div>
            </div>
          </div>
          
          <div class="hero-actions">
            <a href="/prospectus/admission" class="btn btn-primary">
              Apply Now
              <i class="fas fa-arrow-right"></i>
            </a>
            <a href="/gallery/videos" class="btn btn-secondary">
              <i class="fas fa-play"></i>
              Virtual Tour
            </a>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="hero-image-container">
            <img src="/images/pictues/carousel-01.jpg" alt="School Campus" class="hero-image" />
            <div class="floating-card achievement-card">
              <div class="card-icon">🏆</div>
              <div class="card-content">
                <h4>Top Performer</h4>
                <p>ICSE & ISC Results</p>
              </div>
            </div>
            <div class="floating-card students-card">
              <div class="card-icon">👥</div>
              <div class="card-content">
                <h4>1000+</h4>
                <p>Happy Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <div class="scroll-text">Scroll to explore</div>
      <div class="scroll-arrow">↓</div>
    </div>
  </section>
</template>

<style scoped>
.modern-hero {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(30, 58, 138, 0.1);
}

.hero-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;
  padding: 100px 0;
}

.hero-badge {
  display: inline-block;
  background: rgba(251, 191, 36, 0.2);
  border: 1px solid rgba(251, 191, 36, 0.3);
  border-radius: 25px;
  padding: 8px 20px;
  margin-bottom: 24px;
}

.badge-text {
  color: #fbbf24;
  font-weight: 600;
  font-size: 14px;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  color: white;
  margin-bottom: 24px;
}

.highlight {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 18px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  max-width: 500px;
}

.hero-stats {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #fbbf24;
  line-height: 1;
}

.stat-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 4px;
}

.hero-actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 16px;
}

.btn-primary {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #1e3a8a;
  box-shadow: 0 8px 25px rgba(251, 191, 36, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(251, 191, 36, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.hero-visual {
  position: relative;
}

.hero-image-container {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
}

.hero-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.floating-card {
  position: absolute;
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 12px;
  animation: float 3s ease-in-out infinite;
}

.achievement-card {
  top: 20px;
  right: -20px;
}

.students-card {
  bottom: 20px;
  left: -20px;
  animation-delay: 1.5s;
}

.card-icon {
  font-size: 24px;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-content h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #1e3a8a;
}

.card-content p {
  margin: 4px 0 0 0;
  font-size: 14px;
  color: #6b7280;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  animation: bounce 2s infinite;
}

.scroll-text {
  font-size: 14px;
  margin-bottom: 8px;
}

.scroll-arrow {
  font-size: 20px;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-10px); }
  60% { transform: translateX(-50%) translateY(-5px); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .hero-stats {
    justify-content: center;
    gap: 20px;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .floating-card {
    position: static;
    margin: 20px auto;
    max-width: 200px;
  }
}
</style>