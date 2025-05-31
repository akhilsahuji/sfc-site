<template>
  <section class="hero-section" :style="{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : '' }">
    <div class="hero-overlay"></div>
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title" v-if="title">{{ title }}</h1>
        <p class="hero-subtitle" v-if="subtitle">{{ subtitle }}</p>
        <div class="hero-buttons" v-if="$slots.buttons">
          <slot name="buttons"></slot>
        </div>
      </div>
      <div class="hero-image" v-if="image">
        <img :src="image" :alt="imageAlt || title" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'HeroSection',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    backgroundImage: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    imageAlt: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #2c5aa0 0%, #1e3a6f 100%);
  background-size: cover;
  background-position: center;
  color: white;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(44, 90, 160, 0.8);
}

.hero-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.hero-content {
  z-index: 2;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 30px;
  line-height: 1.6;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.hero-image {
  z-index: 2;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 30px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
}
</style> 