<template>
  <section class="carousel-hero">
    <div class="carousel-container" ref="carouselContainer">
      <div class="carousel-slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div 
          v-for="(slide, index) in slides" 
          :key="index"
          class="carousel-slide"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="carousel-overlay"></div>
          <div class="carousel-content" v-if="slide.title || slide.description">
            <div class="carousel-text">
              <h1 v-if="slide.title" class="carousel-title">{{ slide.title }}</h1>
              <p v-if="slide.description" class="carousel-description">{{ slide.description }}</p>
              <div v-if="slide.buttons" class="carousel-buttons">
                <Button 
                  v-for="(button, btnIndex) in slide.buttons" 
                  :key="btnIndex"
                  :href="button.href"
                  :variant="button.variant || 'primary'"
                  :size="button.size || 'large'"
                >
                  {{ button.text }}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Navigation Arrows -->
      <button class="carousel-nav carousel-prev" @click="prevSlide" v-if="showNavigation">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="carousel-nav carousel-next" @click="nextSlide" v-if="showNavigation">
        <i class="fas fa-chevron-right"></i>
      </button>
      
      <!-- Indicators -->
      <div class="carousel-indicators" v-if="showIndicators">
        <button 
          v-for="(slide, index) in slides" 
          :key="index"
          class="carousel-indicator"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        >
          <img v-if="slide.thumbnail" :src="slide.thumbnail" :alt="`Slide ${index + 1}`" />
          <span v-else>{{ index + 1 }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
interface CarouselSlide {
  image: string;
  thumbnail?: string;
  title?: string;
  description?: string;
  buttons?: Array<{
    text: string;
    href: string;
    variant?: string;
    size?: string;
  }>;
}

export default {
  name: 'CarouselHero',
  props: {
    slides: {
      type: Array as () => CarouselSlide[],
      required: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    autoplayInterval: {
      type: Number,
      default: 5000
    },
    showNavigation: {
      type: Boolean,
      default: true
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: '70vh'
    }
  },
  data() {
    return {
      currentSlide: 0,
      autoplayTimer: null as number | null
    }
  },
  mounted() {
    if (this.autoplay) {
      this.startAutoplay();
    }
  },
  beforeUnmount() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.resetAutoplay();
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
      this.resetAutoplay();
    },
    goToSlide(index: number) {
      this.currentSlide = index;
      this.resetAutoplay();
    },
    startAutoplay() {
      if (this.autoplay && this.slides.length > 1) {
        this.autoplayTimer = setInterval(() => {
          this.nextSlide();
        }, this.autoplayInterval);
      }
    },
    resetAutoplay() {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer);
        this.startAutoplay();
      }
    }
  }
}
</script>

<style scoped>
.carousel-hero {
  position: relative;
  width: 100%;
  height: v-bind(height);
  overflow: hidden;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-4);
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-slides {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform var(--animation-duration-slow-1) var(--ease-3);
}

.carousel-slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: var(--animation-fade-in) var(--animation-duration-slow-1) var(--ease-3);
}

.carousel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-19);
  opacity: 0.6;
}

.carousel-content {
  position: relative;
  z-index: var(--layer-2);
  max-width: var(--size-content-3);
  padding: 0 var(--space-lg);
  text-align: center;
  color: var(--gray-0);
  animation: var(--animation-slide-in-up) var(--animation-duration-slow-2) var(--ease-4);
}

.carousel-title {
  font-size: var(--font-size-fluid-3);
  font-weight: var(--font-weight-9);
  margin-bottom: var(--space-md);
  line-height: var(--font-lineheight-0);
  text-shadow: var(--shadow-6);
  animation: var(--animation-slide-in-up) var(--animation-duration-slow-2) var(--ease-4);
}

.carousel-description {
  font-size: var(--font-size-fluid-1);
  margin-bottom: var(--space-xl);
  line-height: var(--font-lineheight-3);
  opacity: 0.95;
  text-shadow: var(--shadow-3);
  max-width: var(--size-content-2);
  margin-inline: auto;
  animation: var(--animation-slide-in-up) var(--animation-duration-slow-2) var(--ease-4) 0.1s both;
}

.carousel-buttons {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
  animation: var(--animation-slide-in-up) var(--animation-duration-slow-2) var(--ease-4) 0.2s both;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--surface-1);
  backdrop-filter: blur(var(--size-3));
  border: var(--border-size-1) solid var(--surface-3);
  color: var(--text-1);
  width: var(--size-8);
  height: var(--size-8);
  border-radius: var(--radius-round);
  cursor: pointer;
  font-size: var(--font-size-3);
  transition: all var(--animation-duration-fast-2) var(--ease-3);
  z-index: var(--layer-3);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-3);
}

.carousel-nav:hover {
  background: var(--surface-2);
  transform: translateY(-50%) scale(1.1);
  box-shadow: var(--shadow-4);
}

.carousel-nav:active {
  transform: translateY(-50%) scale(0.95);
}

.carousel-prev {
  left: var(--space-lg);
}

.carousel-next {
  right: var(--space-lg);
}

.carousel-indicators {
  position: absolute;
  bottom: var(--space-lg);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--space-sm);
  z-index: var(--layer-3);
}

.carousel-indicator {
  width: var(--size-10);
  height: var(--size-7);
  border: var(--border-size-2) solid var(--surface-1);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--animation-duration-fast-2) var(--ease-3);
  background: var(--surface-1);
  backdrop-filter: blur(var(--size-2));
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-1);
  font-size: var(--font-size-0);
  font-weight: var(--font-weight-6);
  box-shadow: var(--shadow-2);
}

.carousel-indicator img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-indicator.active {
  border-color: var(--brand);
  background: var(--brand);
  color: var(--gray-0);
  box-shadow: var(--shadow-3);
  transform: scale(1.1);
}

.carousel-indicator:hover {
  border-color: var(--brand);
  background: var(--surface-2);
  transform: scale(1.05);
  box-shadow: var(--shadow-3);
}

/* Responsive Design with Open Props */
@media (width <= 768px) {
  .carousel-title {
    font-size: var(--font-size-fluid-2);
  }
  
  .carousel-description {
    font-size: var(--font-size-1);
  }
  
  .carousel-nav {
    width: var(--size-7);
    height: var(--size-7);
    font-size: var(--font-size-2);
  }
  
  .carousel-buttons {
    gap: var(--space-sm);
  }
  
  .carousel-indicators {
    bottom: var(--space-md);
  }
  
  .carousel-indicator {
    width: var(--size-8);
    height: var(--size-6);
  }
}

@media (width <= 480px) {
  .carousel-hero {
    height: 60vh;
    border-radius: var(--radius-md);
  }
  
  .carousel-title {
    font-size: var(--font-size-fluid-1);
  }
  
  .carousel-description {
    font-size: var(--font-size-0);
  }
  
  .carousel-content {
    padding: 0 var(--space-md);
  }
  
  .carousel-prev {
    left: var(--space-md);
  }
  
  .carousel-next {
    right: var(--space-md);
  }
}
</style> 