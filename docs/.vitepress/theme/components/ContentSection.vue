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
.content-section {
  padding: 80px 0;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.content-grid.reverse {
  direction: rtl;
}

.content-grid.reverse > * {
  direction: ltr;
}

.content-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  line-height: 1.2;
}

.content-body {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 30px;
}

.content-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.content-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
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

.bg-dark {
  background: #1a1a1a;
  color: white;
}

.bg-blue .content-title,
.bg-dark .content-title {
  color: #ffd700;
}

/* Single column when no image */
.content-section:not(.has-image) .content-grid {
  grid-template-columns: 1fr;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

@media (max-width: 768px) {
  .content-section {
    padding: 60px 0;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .content-grid.reverse {
    direction: ltr;
  }
  
  .content-title {
    font-size: 2rem;
  }
  
  .content-body {
    font-size: 1rem;
  }
}
</style> 