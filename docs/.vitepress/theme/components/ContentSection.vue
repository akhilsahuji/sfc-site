<template>
  <section class="content-section" :class="[backgroundClass, { 'has-image': image }]">
    <div class="content-container">
      <div class="content-grid" :class="{ reverse: reverse }">
        <div class="content-text">
          <h2 class="content-title" v-if="title">{{ title }}</h2>
          <div class="content-body">
            <slot></slot>
          </div>
          <div class="content-buttons" v-if="$slots.buttons">
            <slot name="buttons"></slot>
          </div>
        </div>
        <div class="content-image" v-if="image">
          <img :src="image" :alt="imageAlt || title" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'ContentSection',
  props: {
    title: {
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
    },
    background: {
      type: String,
      default: 'white' // white, light, blue, dark
    },
    reverse: {
      type: Boolean,
      default: false
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

.content-section {
  padding-block: var(--size-10);
  padding-inline: var(--size-4);
}

.content-container {
  max-width: var(--size-content-3);
  margin-inline: auto;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--size-8);
  align-items: center;
}

.content-grid.reverse {
  direction: rtl;
}

.content-grid.reverse > * {
  direction: ltr;
}

.content-title {
  font-size: clamp(var(--font-size-4), 3vw, var(--font-size-6));
  font-weight: var(--font-weight-7);
  margin-block-end: var(--size-6);
  line-height: var(--font-lineheight-1);
  font-family: var(--font-serif);
}

.content-body {
  font-size: clamp(var(--font-size-1), 1.2vw, var(--font-size-2));
  line-height: var(--font-lineheight-4);
  margin-block-end: var(--size-6);
}

.content-body :deep(p) {
  margin-block-end: var(--size-4);
}

.content-body :deep(p:last-child) {
  margin-block-end: 0;
}

.content-buttons {
  display: flex;
  gap: var(--size-3);
  flex-wrap: wrap;
}

.content-image {
  justify-self: center;
}

.content-image img {
  width: 100%;
  height: auto;
  max-width: var(--size-15);
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-3);
  aspect-ratio: var(--ratio-landscape);
  object-fit: cover;
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

.bg-dark {
  background: var(--gray-9);
  color: var(--gray-0);
}

.bg-blue .content-title,
.bg-dark .content-title {
  color: var(--yellow-3);
}

.bg-blue .content-body,
.bg-dark .content-body {
  color: var(--gray-1);
}

/* Single column when no image */
.content-section:not(.has-image) .content-grid {
  grid-template-columns: 1fr;
  max-width: var(--size-content-2);
  margin-inline: auto;
  text-align: center;
}

/* Responsive Design */
@media (width <= 768px) {
  .content-section {
    padding-block: var(--size-8);
    padding-inline: var(--size-3);
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: var(--size-6);
    text-align: center;
  }
  
  .content-grid.reverse {
    direction: ltr;
  }
  
  .content-image {
    order: -1;
  }
  
  .content-image img {
    max-width: var(--size-13);
  }
}

@media (width <= 480px) {
  .content-section {
    padding-inline: var(--size-2);
  }
  
  .content-grid {
    gap: var(--size-4);
  }
  
  .content-buttons {
    flex-direction: column;
    gap: var(--size-2);
    width: 100%;
  }
}

/* Animation enhancements */
@media (prefers-reduced-motion: no-preference) {
  .content-text {
    animation: content-fade-in var(--animation-fade-in) var(--ease-3);
  }
  
  .content-image {
    animation: content-fade-in var(--animation-fade-in) var(--ease-3) 0.2s both;
  }
}

@keyframes content-fade-in {
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