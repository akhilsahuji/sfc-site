<template>
  <section class="card-grid-section" :class="backgroundClass">
    <div class="container">
      <div class="section-header" v-if="title || subtitle">
        <h2 class="section-title" v-if="title">{{ title }}</h2>
        <p class="section-subtitle" v-if="subtitle">{{ subtitle }}</p>
      </div>
      <div class="card-grid" :class="`cols-${columns}`">
        <div 
          v-for="(card, index) in cards" 
          :key="index"
          class="card"
          :class="{ 'has-icon': card.icon }"
        >
          <div class="card-icon" v-if="card.icon">
            <i :class="card.icon"></i>
          </div>
          <div class="card-image" v-if="card.image">
            <img :src="card.image" :alt="card.title" />
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ card.title }}</h3>
            <p class="card-description" v-if="card.description">{{ card.description }}</p>
            <a v-if="card.link" :href="card.link" class="card-link">
              {{ card.linkText || 'Learn More' }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
interface Card {
  title: string;
  description?: string;
  icon?: string;
  image?: string;
  link?: string;
  linkText?: string;
}

export default {
  name: 'CardGrid',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    cards: {
      type: Array as () => Card[],
      required: true
    },
    columns: {
      type: Number,
      default: 3
    },
    background: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    backgroundClass() {
      return `bg-${this.background}`;
    }
  }
}
</script>

<style scoped>
.card-grid-section {
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.2rem;
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
}

.card-grid {
  display: grid;
  gap: 30px;
}

.cols-1 { grid-template-columns: 1fr; }
.cols-2 { grid-template-columns: repeat(2, 1fr); }
.cols-3 { grid-template-columns: repeat(3, 1fr); }
.cols-4 { grid-template-columns: repeat(4, 1fr); }

.card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.card-icon {
  margin-bottom: 20px;
}

.card-icon i {
  font-size: 3rem;
  color: #2c5aa0;
}

.card-image {
  margin-bottom: 20px;
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
}

.card-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.card-link {
  display: inline-block;
  color: #2c5aa0;
  text-decoration: none;
  font-weight: 500;
  padding: 10px 20px;
  border: 2px solid #2c5aa0;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.card-link:hover {
  background: #2c5aa0;
  color: white;
}

/* Background Variants */
.bg-white {
  background: #ffffff;
  color: #333;
}

.bg-light {
  background: #f8f9fa;
  color: #333;
}

.bg-blue {
  background: #2c5aa0;
  color: white;
}

.bg-blue .section-title {
  color: #ffd700;
}

.bg-blue .card {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(10px);
}

.bg-blue .card-title {
  color: #ffd700;
}

.bg-blue .card-description {
  color: rgba(255, 255, 255, 0.8);
}

.bg-blue .card-link {
  color: #ffd700;
  border-color: #ffd700;
}

.bg-blue .card-link:hover {
  background: #ffd700;
  color: #2c5aa0;
}

@media (max-width: 768px) {
  .card-grid-section {
    padding: 60px 0;
  }
  
  .cols-2,
  .cols-3,
  .cols-4 {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .card {
    padding: 25px;
  }
}

@media (max-width: 480px) {
  .card {
    padding: 20px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
}
</style> 