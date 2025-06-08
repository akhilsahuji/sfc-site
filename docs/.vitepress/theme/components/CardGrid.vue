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
@import "open-props/style";

.card-grid-section {
  padding-block: var(--size-10);
  padding-inline: var(--size-4);
}

.container {
  max-width: var(--size-content-3);
  margin-inline: auto;
}

.section-header {
  text-align: center;
  margin-block-end: var(--size-8);
}

.section-title {
  font-size: clamp(var(--font-size-4), 3vw, var(--font-size-6));
  font-weight: var(--font-weight-7);
  margin-block-end: var(--size-4);
  line-height: var(--font-lineheight-1);
  font-family: var(--font-serif);
}

.section-subtitle {
  font-size: clamp(var(--font-size-2), 1.5vw, var(--font-size-3));
  opacity: 0.8;
  max-width: var(--size-content-1);
  margin-inline: auto;
  line-height: var(--font-lineheight-3);
}

.card-grid {
  display: grid;
  gap: var(--size-6);
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
}

/* Specific column layouts for larger screens */
@media (width >= 768px) {
  .cols-1 { grid-template-columns: 1fr; }
  .cols-2 { grid-template-columns: repeat(2, 1fr); }
  .cols-3 { grid-template-columns: repeat(3, 1fr); }
  .cols-4 { grid-template-columns: repeat(4, 1fr); }
}

.card {
  background: var(--surface-1);
  border-radius: var(--radius-3);
  padding: var(--size-6);
  box-shadow: var(--shadow-2);
  transition: 
    transform var(--animation-fade-in) var(--ease-3),
    box-shadow var(--animation-fade-in) var(--ease-3);
  text-align: center;
  border: var(--border-size-1) solid var(--surface-3);
}

.card:hover {
  transform: translateY(calc(-1 * var(--size-1)));
  box-shadow: var(--shadow-4);
}

.card-icon {
  margin-block-end: var(--size-4);
}

.card-icon i {
  font-size: var(--font-size-6);
  color: var(--blue-6);
}

.card-image {
  margin-block-end: var(--size-4);
}

.card-image img {
  width: 100%;
  height: var(--size-12);
  object-fit: cover;
  border-radius: var(--radius-2);
  aspect-ratio: var(--ratio-landscape);
}

.card-title {
  font-size: clamp(var(--font-size-2), 1.5vw, var(--font-size-3));
  font-weight: var(--font-weight-6);
  margin-block-end: var(--size-3);
  color: var(--text-1);
  font-family: var(--font-serif);
}

.card-description {
  color: var(--text-2);
  line-height: var(--font-lineheight-3);
  margin-block-end: var(--size-4);
}

.card-link {
  display: inline-flex;
  align-items: center;
  color: var(--blue-6);
  text-decoration: none;
  font-weight: var(--font-weight-5);
  padding: var(--size-2) var(--size-4);
  border: var(--border-size-2) solid var(--blue-6);
  border-radius: var(--radius-2);
  transition: all var(--animation-fade-in) var(--ease-3);
  font-size: var(--font-size-1);
}

.card-link:hover {
  background: var(--blue-6);
  color: var(--gray-0);
  transform: translateY(calc(-1 * var(--size-1)));
}

/* Background Variants */
.bg-white {
  background: var(--gray-0);
  color: var(--text-1);
}

.bg-light {
  background: var(--surface-1);
  color: var(--text-1);
}

.bg-blue {
  background: var(--blue-6);
  color: var(--gray-0);
}

.bg-blue .section-title {
  color: var(--yellow-3);
}

.bg-blue .card {
  background: var(--surface-1-hsl) / 0.1;
  color: var(--gray-0);
  backdrop-filter: blur(var(--size-1));
  border-color: var(--surface-3-hsl) / 0.3;
}

.bg-blue .card-title {
  color: var(--yellow-3);
}

.bg-blue .card-description {
  color: var(--gray-0-hsl) / 0.8;
}

.bg-blue .card-link {
  color: var(--yellow-3);
  border-color: var(--yellow-3);
}

.bg-blue .card-link:hover {
  background: var(--yellow-3);
  color: var(--blue-6);
}

/* Responsive Design */
@media (width <= 768px) {
  .card-grid-section {
    padding-block: var(--size-8);
    padding-inline: var(--size-3);
  }
  
  .card-grid {
    gap: var(--size-4);
  }
  
  .card {
    padding: var(--size-4);
  }
}

@media (width <= 480px) {
  .card-grid-section {
    padding-inline: var(--size-2);
  }
  
  .card {
    padding: var(--size-3);
  }
  
  .card-grid {
    gap: var(--size-3);
  }
}

/* Animation for cards */
@media (prefers-reduced-motion: no-preference) {
  .card {
    animation: card-fade-in var(--animation-fade-in) var(--ease-3) both;
  }
  
  .card:nth-child(2) { animation-delay: 0.1s; }
  .card:nth-child(3) { animation-delay: 0.2s; }
  .card:nth-child(4) { animation-delay: 0.3s; }
}

@keyframes card-fade-in {
  from {
    opacity: 0;
    transform: translateY(var(--size-3));
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .bg-white {
    background: var(--surface-1);
  }
  
  .bg-light {
    background: var(--surface-2);
  }
}
</style> 