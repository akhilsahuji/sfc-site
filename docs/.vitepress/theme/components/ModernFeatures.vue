<template>
  <section class="modern-features">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Why Choose St. Francis?</h2>
        <p class="section-subtitle">
          Discover what makes us the premier choice for quality education in Jhansi
        </p>
      </div>
      
      <div class="features-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <div class="feature-icon">
            <i :class="feature.icon"></i>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
          <a :href="feature.link" class="feature-link">
            Learn More <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: 'fas fa-graduation-cap',
    title: 'ICSE/ISC Excellence',
    description: 'Comprehensive curriculum with 100% board results and exceptional academic performance.',
    link: '/prospectus/courses'
  },
  {
    icon: 'fas fa-users',
    title: 'Expert Faculty',
    description: 'Qualified and experienced teachers dedicated to nurturing young minds with personalized attention.',
    link: '/office-bearers/staff'
  },
  {
    icon: 'fas fa-building',
    title: 'Modern Infrastructure',
    description: 'State-of-the-art facilities including smart classrooms, laboratories, and sports complexes.',
    link: '/gallery/photos'
  },
  {
    icon: 'fas fa-trophy',
    title: 'Outstanding Results',
    description: 'Consistent 100% pass rate with students excelling in academics and co-curricular activities.',
    link: '/achievements'
  },
  {
    icon: 'fas fa-heart',
    title: 'Values-Based Education',
    description: 'Character building and moral development alongside academic excellence in Franciscan tradition.',
    link: '/about/mission'
  },
  {
    icon: 'fas fa-globe',
    title: 'Global Perspective',
    description: 'Preparing students for international opportunities with modern teaching methodologies.',
    link: '/about/history'
  }
]
</script>

<style scoped>
.modern-features {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 20px;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 18px;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.feature-card {
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1) rotate(5deg);
}

.feature-icon i {
  font-size: 32px;
  color: white;
}

.feature-title {
  font-size: 24px;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 16px;
  line-height: 1.3;
}

.feature-description {
  font-size: 16px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 24px;
}

.feature-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #1e3a8a;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.feature-link:hover {
  color: #3b82f6;
  transform: translateX(5px);
}

.feature-link i {
  font-size: 14px;
  transition: transform 0.3s ease;
}

.feature-link:hover i {
  transform: translateX(3px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .modern-features {
    padding: 60px 0;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .feature-card {
    padding: 30px 20px;
  }
  
  .section-header {
    margin-bottom: 50px;
  }
}
</style>