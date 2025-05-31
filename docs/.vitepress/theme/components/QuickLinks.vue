<template>
  <section class="quick-links" :class="backgroundClass">
    <div class="container">
      <div class="links-header" v-if="title || subtitle">
        <h2 class="links-title" v-if="title">{{ title }}</h2>
        <p class="links-subtitle" v-if="subtitle">{{ subtitle }}</p>
      </div>
      
      <div class="links-grid" :class="`columns-${columns}`">
        <a 
          v-for="(link, index) in links" 
          :key="index"
          :href="link.href"
          :target="link.external ? '_blank' : '_self'"
          :rel="link.external ? 'noopener noreferrer' : ''"
          class="link-item"
          :class="[`link-${link.type || 'default'}`, { 'link-featured': link.featured }]"
        >
          <div class="link-icon" v-if="link.icon">
            <i :class="link.icon"></i>
          </div>
          <div class="link-image" v-else-if="link.image">
            <img :src="link.image" :alt="link.title" />
          </div>
          <div class="link-content">
            <h4 class="link-title">{{ link.title }}</h4>
            <p v-if="link.description" class="link-description">{{ link.description }}</p>
            <span v-if="link.badge" class="link-badge">{{ link.badge }}</span>
          </div>
          <div class="link-arrow" v-if="showArrows">
            <i class="fas fa-arrow-right"></i>
          </div>
        </a>
      </div>
      
      <!-- Featured Links Section -->
      <div class="featured-links" v-if="featuredLinks.length">
        <h3 class="featured-title">Quick Access</h3>
        <div class="featured-grid">
          <a 
            v-for="(link, index) in featuredLinks" 
            :key="index"
            :href="link.href"
            :target="link.external ? '_blank' : '_self'"
            :rel="link.external ? 'noopener noreferrer' : ''"
            class="featured-item"
            :style="{ backgroundColor: link.color || '#2c5aa0' }"
          >
            <div class="featured-icon" v-if="link.icon">
              <i :class="link.icon"></i>
            </div>
            <div class="featured-content">
              <h5>{{ link.title }}</h5>
              <p v-if="link.subtitle">{{ link.subtitle }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
interface QuickLink {
  title: string;
  href: string;
  description?: string;
  icon?: string;
  image?: string;
  type?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  badge?: string;
  featured?: boolean;
  external?: boolean;
  color?: string;
  subtitle?: string;
}

export default {
  name: 'QuickLinks',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    links: {
      type: Array as () => QuickLink[],
      required: true
    },
    featuredLinks: {
      type: Array as () => QuickLink[],
      default: () => []
    },
    columns: {
      type: Number,
      default: 3,
      validator: (value: number) => value >= 1 && value <= 6
    },
    showArrows: {
      type: Boolean,
      default: true
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
.quick-links {
  padding: 60px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.links-header {
  text-align: center;
  margin-bottom: 50px;
}

.links-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.2;
}

.links-subtitle {
  font-size: 1.2rem;
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
}

.links-grid {
  display: grid;
  gap: 25px;
  margin-bottom: 50px;
}

.columns-1 { grid-template-columns: 1fr; }
.columns-2 { grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); }
.columns-3 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
.columns-4 { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
.columns-5 { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.columns-6 { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }

.link-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.link-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: #2c5aa0;
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.link-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: #2c5aa0;
}

.link-item:hover::before {
  transform: scaleY(1);
}

.link-featured {
  border-color: #2c5aa0;
  background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
}

.link-icon,
.link-image {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.link-icon {
  background: #f8f9fa;
  color: #2c5aa0;
  font-size: 1.5rem;
}

.link-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.link-content {
  flex: 1;
}

.link-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 5px 0;
  line-height: 1.3;
}

.link-description {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  line-height: 1.4;
}

.link-badge {
  display: inline-block;
  padding: 3px 8px;
  background: #e3f2fd;
  color: #1976d2;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 12px;
  margin-top: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.link-arrow {
  flex-shrink: 0;
  color: #999;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.link-item:hover .link-arrow {
  color: #2c5aa0;
  transform: translateX(5px);
}

/* Link Type Variations */
.link-primary .link-icon {
  background: #2c5aa0;
  color: white;
}

.link-secondary .link-icon {
  background: #6c757d;
  color: white;
}

.link-success .link-icon {
  background: #28a745;
  color: white;
}

.link-warning .link-icon {
  background: #ffc107;
  color: #212529;
}

.link-danger .link-icon {
  background: #dc3545;
  color: white;
}

/* Featured Links */
.featured-links {
  margin-top: 50px;
}

.featured-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 25px;
  text-align: center;
  color: #333;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.featured-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  border-radius: 12px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.featured-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
  pointer-events: none;
}

.featured-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.featured-icon {
  flex-shrink: 0;
  font-size: 1.8rem;
  opacity: 0.9;
}

.featured-content h5 {
  margin: 0 0 3px 0;
  font-size: 1rem;
  font-weight: 600;
}

.featured-content p {
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.9;
}

/* Background Variations */
.bg-white {
  background: #ffffff;
  color: #333;
}

.bg-light {
  background: #f8f9fa;
  color: #333;
}

.bg-blue {
  background: linear-gradient(135deg, #2c5aa0 0%, #1e3a6f 100%);
  color: white;
}

.bg-blue .link-item {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: white;
  backdrop-filter: blur(10px);
}

.bg-blue .link-description {
  color: rgba(255, 255, 255, 0.8);
}

.bg-blue .link-arrow {
  color: rgba(255, 255, 255, 0.6);
}

.bg-blue .link-item:hover .link-arrow {
  color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .links-grid {
    grid-template-columns: 1fr !important;
    gap: 20px;
  }
  
  .featured-grid {
    grid-template-columns: 1fr;
  }
  
  .links-title {
    font-size: 2rem;
  }
  
  .link-item {
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .quick-links {
    padding: 40px 0;
  }
  
  .link-item {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .link-arrow {
    display: none;
  }
  
  .links-title {
    font-size: 1.8rem;
  }
  
  .featured-item {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
}
</style> 