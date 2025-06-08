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
@import "open-props/style";

.hero-section {
  position: relative;
  min-height: clamp(400px, 50vh, 600px);
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--blue-6) 0%, var(--blue-8) 100%);
  background-size: cover;
  background-position: center;
  color: var(--gray-0);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: var(--blue-6-hsl) / 0.8;
}

.hero-container {
  position: relative;
  max-width: var(--size-content-3);
  margin-inline: auto;
  padding-block: var(--size-8);
  padding-inline: var(--size-4);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--size-8);
  align-items: center;
}

.hero-content {
  z-index: var(--layer-2);
}

.hero-title {
  font-size: clamp(var(--font-size-4), 4vw, var(--font-size-8));
  font-weight: var(--font-weight-7);
  margin-block-end: var(--size-4);
  line-height: var(--font-lineheight-1);
  font-family: var(--font-serif);
}

.hero-subtitle {
  font-size: clamp(var(--font-size-2), 2vw, var(--font-size-4));
  margin-block-end: var(--size-6);
  line-height: var(--font-lineheight-3);
  opacity: 0.9;
  max-width: var(--size-content-1);
}

.hero-buttons {
  display: flex;
  gap: var(--size-3);
  flex-wrap: wrap;
}

.hero-image {
  z-index: var(--layer-2);
  justify-self: center;
}

.hero-image img {
  width: 100%;
  height: auto;
  max-width: var(--size-15);
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-6);
  aspect-ratio: var(--ratio-golden);
  object-fit: cover;
}

/* Responsive Design using OpenProps breakpoints */
@media (width <= 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--size-6);
    padding-inline: var(--size-3);
  }
  
  .hero-image {
    order: -1;
  }
  
  .hero-image img {
    max-width: var(--size-13);
  }
}

@media (width <= 480px) {
  .hero-container {
    gap: var(--size-4);
    padding-inline: var(--size-2);
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: var(--size-2);
    width: 100%;
  }
}

/* Enhanced animation and interaction */
@media (prefers-reduced-motion: no-preference) {
  .hero-content {
    animation: hero-fade-up var(--animation-fade-in) var(--ease-3);
  }
  
  .hero-image {
    animation: hero-fade-up var(--animation-fade-in) var(--ease-3) 0.2s both;
  }
}

@keyframes hero-fade-up {
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
  .hero-overlay {
    background: var(--blue-8-hsl) / 0.9;
  }
}
</style> 