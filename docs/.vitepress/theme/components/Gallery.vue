<template>
  <section class="gallery-section" :class="backgroundClass">
    <div class="container">
      <div class="section-header" v-if="title || subtitle">
        <h2 class="section-title" v-if="title">{{ title }}</h2>
        <p class="section-subtitle" v-if="subtitle">{{ subtitle }}</p>
      </div>
      <div class="gallery-grid">
        <div 
          v-for="(image, index) in images" 
          :key="index"
          class="gallery-item"
          @click="openModal(index)"
        >
          <img :src="image.src" :alt="image.alt || `Gallery image ${index + 1}`" />
          <div class="gallery-overlay">
            <div class="gallery-info" v-if="image.title || image.description">
              <h4 v-if="image.title">{{ image.title }}</h4>
              <p v-if="image.description">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal -->
    <div v-if="modalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">&times;</button>
        <img :src="images[currentImageIndex]?.src" :alt="images[currentImageIndex]?.alt" />
        <div class="modal-info" v-if="images[currentImageIndex]?.title || images[currentImageIndex]?.description">
          <h3 v-if="images[currentImageIndex]?.title">{{ images[currentImageIndex]?.title }}</h3>
          <p v-if="images[currentImageIndex]?.description">{{ images[currentImageIndex]?.description }}</p>
        </div>
        <button class="modal-nav modal-prev" @click="prevImage" v-if="images.length > 1">&#8249;</button>
        <button class="modal-nav modal-next" @click="nextImage" v-if="images.length > 1">&#8250;</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
interface GalleryImage {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
}

export default {
  name: 'Gallery',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    images: {
      type: Array as () => GalleryImage[],
      required: true
    },
    background: {
      type: String,
      default: 'white'
    }
  },
  data() {
    return {
      modalOpen: false,
      currentImageIndex: 0
    }
  },
  computed: {
    backgroundClass() {
      return `bg-${this.background}`;
    }
  },
  methods: {
    openModal(index: number) {
      this.currentImageIndex = index;
      this.modalOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.modalOpen = false;
      document.body.style.overflow = '';
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentImageIndex = this.currentImageIndex === 0 ? this.images.length - 1 : this.currentImageIndex - 1;
    }
  },
  mounted() {
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (this.modalOpen) {
        if (e.key === 'Escape') this.closeModal();
        if (e.key === 'ArrowRight') this.nextImage();
        if (e.key === 'ArrowLeft') this.prevImage();
      }
    });
  }
}
</script>

<style scoped>
.gallery-section {
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

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.gallery-item {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4/3;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-info {
  color: white;
}

.gallery-info h4 {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.gallery-info p {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-content img {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 10px;
}

.modal-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.modal-nav:hover {
  background: rgba(255, 255, 255, 0.3);
}

.modal-prev {
  left: -70px;
}

.modal-next {
  right: -70px;
}

.modal-info {
  color: white;
  text-align: center;
  margin-top: 20px;
  max-width: 600px;
}

.modal-info h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.modal-info p {
  opacity: 0.9;
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

@media (max-width: 768px) {
  .gallery-section {
    padding: 60px 0;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .modal-nav {
    display: none;
  }
  
  .modal-close {
    top: -30px;
    font-size: 1.5rem;
  }
}
</style> 