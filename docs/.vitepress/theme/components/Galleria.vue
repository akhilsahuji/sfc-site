<template>
  <section class="galleria-hero">
    <div class="galleria-container">
      <div class="galleria-slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div 
          v-for="(slide, index) in slides" 
          :key="index"
          class="galleria-slide"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <!-- Arch Overlay Design -->
          <div class="arch-overlay"></div>
          
          <!-- Content positioned in arch -->
          <div class="galleria-content">
            <div class="content-arch">
              <h1 v-if="slide.title" class="galleria-title">{{ slide.title }}</h1>
              <p v-if="slide.subtitle" class="galleria-subtitle">{{ slide.subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Navigation Dots -->
      <div class="galleria-dots" v-if="showDots && slides.length > 1">
        <button 
          v-for="(slide, index) in slides" 
          :key="index"
          class="galleria-dot"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        ></button>
      </div>
      
      <!-- Side Navigation -->
      <button class="galleria-nav galleria-prev" @click="prevSlide" v-if="showNavigation && slides.length > 1">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="galleria-nav galleria-next" @click="nextSlide" v-if="showNavigation && slides.length > 1">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
interface GalleriaSlide {
  image: string;
  title?: string;
  subtitle?: string;
}

export default {
  name: 'Galleria',
  props: {
    slides: {
      type: Array as () => GalleriaSlide[],
      required: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    autoplayInterval: {
      type: Number,
      default: 6000
    },
    showNavigation: {
      type: Boolean,
      default: true
    },
    showDots: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: '80vh'
    }
  },
  data() {
    return {
      currentSlide: 0,
      autoplayTimer: null as number | null
    }
  },
  mounted() {
    if (this.autoplay && this.slides.length > 1) {
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
.galleria-hero {
  position: relative;
  width: 100vw;
  height: v-bind(height);
  overflow: hidden;
  background: var(--vp-c-bg);
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}

.galleria-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.galleria-slides {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform var(--animation-duration-slow-1) var(--ease-3);
}

.galleria-slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

/* Arch Overlay Design */
.arch-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.98) 0%, 
    rgba(248, 249, 250, 0.95) 100%);
  clip-path: ellipse(80% 100% at 0% 50%);
  z-index: var(--layer-1);
  opacity: 0;
  transform: translateY(-100%) translateX(-20%) rotate(-5deg) scale(0.8);
  transform-origin: top left;
  transition: all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.galleria-slide:hover .arch-overlay {
  opacity: 1;
  transform: translateY(0) translateX(0) rotate(0deg) scale(1);
  transition: all 0.9s cubic-bezier(0.25, 0.1, 0.25, 1);
}

/* Dark mode adjustments */
.dark .arch-overlay {
  background: linear-gradient(135deg, 
    rgba(30, 30, 30, 0.98) 0%, 
    rgba(20, 20, 20, 0.95) 100%);
}

/* Custom Animations */
@keyframes slideInArch {
  0% {
    opacity: 0;
    transform: translateY(-100%) translateX(-20%) rotate(-5deg) scale(0.8);
    clip-path: ellipse(40% 60% at -10% 20%);
    background: linear-gradient(135deg, 
      var(--vp-c-bg-alpha-80) 0%, 
      var(--vp-c-bg-alpha-70) 100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translateX(0) rotate(0deg) scale(1);
    clip-path: ellipse(80% 100% at 0% 50%);
    background: linear-gradient(135deg, 
      var(--vp-c-bg-alpha-95) 0%, 
      var(--vp-c-bg-alpha-90) 100%);
  }
}

@keyframes slideOutArch {
  0% {
    opacity: 1;
    transform: translateY(0) translateX(0) rotate(0deg) scale(1);
    clip-path: ellipse(80% 100% at 0% 50%);
  }
  100% {
    opacity: 0;
    transform: translateY(-60%) translateX(-15%) rotate(-3deg) scale(0.9);
    clip-path: ellipse(50% 70% at -5% 30%);
  }
}

/* Content positioned in arch */
.galleria-content {
  position: relative;
  z-index: var(--layer-2);
  width: 50%;
  max-width: var(--size-content-2);
  padding: 0 var(--size-8);
  margin-left: 5%;
  opacity: 0;
  transform: translateY(var(--size-3));
  transition: all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s;
}

.galleria-slide:hover .galleria-content {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) 0.15s;
}

.content-arch {
  animation: none;
}

.galleria-slide:hover .galleria-title {
  animation: smoothSlideInTitle 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) 0.2s both;
}

.galleria-slide:hover .galleria-subtitle {
  animation: smoothSlideInSubtitle 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) 0.35s both;
}

.galleria-title {
  font-size: var(--font-size-fluid-3);
  font-weight: var(--font-weight-8);
  color: var(--vp-c-text-1);
  margin-bottom: var(--size-4);
  line-height: var(--font-lineheight-1);
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.6),
    0 0 8px rgba(0, 0, 0, 0.3),
    0 0 16px rgba(0, 0, 0, 0.1);
  position: relative;
}

.galleria-subtitle {
  font-size: var(--font-size-3);
  color: var(--vp-c-text-1);
  line-height: var(--font-lineheight-3);
  margin-bottom: 0;
  font-weight: var(--font-weight-5);
  text-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.5),
    0 0 6px rgba(0, 0, 0, 0.2);
  opacity: 0.95;
}

/* Dark mode adjustments */
.dark .arch-overlay {
  background: linear-gradient(135deg, 
    rgba(30, 30, 30, 0.98) 0%, 
    rgba(20, 20, 20, 0.95) 100%);
}

.dark .galleria-title {
  color: var(--vp-c-text-1);
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.8),
    0 0 8px rgba(0, 0, 0, 0.5),
    0 0 16px rgba(0, 0, 0, 0.3);
}

.dark .galleria-subtitle {
  color: var(--vp-c-text-1);
  text-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.7),
    0 0 6px rgba(0, 0, 0, 0.4);
}

/* Navigation */
.galleria-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--vp-c-bg-alpha-90);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
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

.galleria-nav:hover {
  background: var(--vp-c-bg);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  transform: translateY(-50%) scale(1.1);
  box-shadow: var(--shadow-4);
}

.galleria-prev {
  left: var(--size-5);
}

.galleria-next {
  right: var(--size-5);
}

/* Dots Navigation */
.galleria-dots {
  position: absolute;
  bottom: var(--size-5);
  right: var(--size-8);
  display: flex;
  gap: var(--size-2);
  z-index: var(--layer-3);
}

.galleria-dot {
  width: var(--size-2);
  height: var(--size-2);
  border-radius: var(--radius-round);
  border: var(--border-size-2) solid var(--vp-c-text-3);
  background: transparent;
  cursor: pointer;
  transition: all var(--animation-duration-fast-2) var(--ease-3);
}

.galleria-dot.active {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  transform: scale(1.3);
}

.galleria-dot:hover {
  border-color: var(--vp-c-brand-2);
  background: var(--vp-c-brand-3);
}

/* Simplified smooth animations */
@keyframes smoothSlideInTitle {
  0% {
    opacity: 0;
    transform: translateY(var(--size-3));
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes smoothSlideInSubtitle {
  0% {
    opacity: 0;
    transform: translateY(var(--size-2));
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (width <= 1024px) {
  .arch-overlay {
    width: 70%;
  }
  
  .galleria-content {
    width: 60%;
    padding: 0 var(--size-6);
  }
  
  .galleria-title {
    font-size: var(--font-size-fluid-2);
  }
  
  .galleria-subtitle {
    font-size: var(--font-size-2);
  }
}

@media (width <= 768px) {
  .arch-overlay {
    width: 85%;
    clip-path: ellipse(90% 100% at 0% 50%);
  }
  
  .galleria-content {
    width: 75%;
    padding: 0 var(--size-5);
    margin-left: 3%;
  }
  
  .galleria-title {
    font-size: var(--font-size-fluid-1);
  }
  
  .galleria-subtitle {
    font-size: var(--font-size-1);
  }
  
  .galleria-nav {
    width: var(--size-7);
    height: var(--size-7);
    font-size: var(--font-size-2);
  }
  
  .galleria-prev {
    left: var(--size-4);
  }
  
  .galleria-next {
    right: var(--size-4);
  }
  
  .galleria-dots {
    right: var(--size-5);
    bottom: var(--size-4);
  }
}

@media (width <= 480px) {
  .galleria-hero {
    height: 70vh;
  }
  
  .arch-overlay {
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
  }
  
  .galleria-content {
    width: 90%;
    padding: 0 var(--size-4);
    margin-left: 0;
  }
  
  .galleria-title {
    font-size: var(--font-size-fluid-0);
    margin-bottom: var(--size-3);
  }
  
  .galleria-subtitle {
    font-size: var(--font-size-0);
  }
  
  .galleria-nav {
    width: var(--size-7);
    height: var(--size-7);
    font-size: var(--font-size-2);
  }
}
</style> 