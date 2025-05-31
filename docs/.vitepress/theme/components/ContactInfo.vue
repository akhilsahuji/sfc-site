<template>
  <section class="contact-info" :class="backgroundClass">
    <div class="container">
      <div class="contact-header" v-if="title || subtitle">
        <h2 class="contact-title" v-if="title">{{ title }}</h2>
        <p class="contact-subtitle" v-if="subtitle">{{ subtitle }}</p>
      </div>
      
      <div class="contact-grid">
        <!-- Phone Contact -->
        <div class="contact-item" v-if="phone || phones.length">
          <div class="contact-icon">
            <i class="fas fa-phone"></i>
          </div>
          <div class="contact-details">
            <h4 class="contact-label">Call Us</h4>
            <div v-if="phone" class="contact-value">
              <a :href="`tel:${phone.replace(/\s/g, '')}`">{{ phone }}</a>
            </div>
            <div v-if="phones.length" class="contact-values">
              <a 
                v-for="(phoneNum, index) in phones" 
                :key="index"
                :href="`tel:${phoneNum.replace(/\s/g, '')}`"
                class="contact-value"
              >
                {{ phoneNum }}
              </a>
            </div>
          </div>
        </div>
        
        <!-- Email Contact -->
        <div class="contact-item" v-if="email || emails.length">
          <div class="contact-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <div class="contact-details">
            <h4 class="contact-label">Email Us</h4>
            <div v-if="email" class="contact-value">
              <a :href="`mailto:${email}`">{{ email }}</a>
            </div>
            <div v-if="emails.length" class="contact-values">
              <a 
                v-for="(emailAddr, index) in emails" 
                :key="index"
                :href="`mailto:${emailAddr}`"
                class="contact-value"
              >
                {{ emailAddr }}
              </a>
            </div>
          </div>
        </div>
        
        <!-- Address -->
        <div class="contact-item" v-if="address">
          <div class="contact-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <div class="contact-details">
            <h4 class="contact-label">Visit Us</h4>
            <div class="contact-value">{{ address }}</div>
          </div>
        </div>
        
        <!-- Working Hours -->
        <div class="contact-item" v-if="hours">
          <div class="contact-icon">
            <i class="fas fa-clock"></i>
          </div>
          <div class="contact-details">
            <h4 class="contact-label">{{ hoursLabel || 'Office Hours' }}</h4>
            <div class="contact-value">{{ hours }}</div>
          </div>
        </div>
      </div>
      
      <!-- Social Media Links -->
      <div class="social-media" v-if="socialLinks.length">
        <h4 class="social-title">Follow Us</h4>
        <div class="social-links">
          <a 
            v-for="(link, index) in socialLinks" 
            :key="index"
            :href="link.url"
            :target="link.target || '_blank'"
            :rel="link.target === '_blank' ? 'noopener noreferrer' : ''"
            class="social-link"
            :title="link.name"
          >
            <i :class="link.icon"></i>
            <span v-if="showSocialLabels">{{ link.name }}</span>
          </a>
        </div>
      </div>
      
      <!-- Quick Actions -->
      <div class="quick-actions" v-if="$slots.actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
interface SocialLink {
  name: string;
  url: string;
  icon: string;
  target?: string;
}

export default {
  name: 'ContactInfo',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    },
    phones: {
      type: Array as () => string[],
      default: () => []
    },
    email: {
      type: String,
      default: ''
    },
    emails: {
      type: Array as () => string[],
      default: () => []
    },
    address: {
      type: String,
      default: ''
    },
    hours: {
      type: String,
      default: ''
    },
    hoursLabel: {
      type: String,
      default: 'Office Hours'
    },
    socialLinks: {
      type: Array as () => SocialLink[],
      default: () => []
    },
    showSocialLabels: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: 'light'
    },
    layout: {
      type: String,
      default: 'grid', // grid, horizontal, vertical
      validator: (value: string) => ['grid', 'horizontal', 'vertical'].includes(value)
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
.contact-info {
  padding: var(--space-2xl) 0;
}

.container {
  max-width: var(--size-content-3);
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

.contact-header {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.contact-title {
  font-size: var(--font-size-fluid-3);
  font-weight: var(--font-weight-9);
  margin-bottom: var(--space-md);
  line-height: var(--font-lineheight-1);
  color: var(--text-1);
}

.contact-subtitle {
  font-size: var(--font-size-fluid-1);
  color: var(--text-2);
  max-width: var(--size-content-1);
  margin: 0 auto;
  line-height: var(--font-lineheight-3);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--size-content-1), 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  padding: var(--space-lg);
  background: var(--surface-1);
  border: var(--border-size-1) solid var(--surface-3);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-2);
  transition: all var(--animation-duration-fast-2) var(--ease-3);
  position: relative;
  overflow: hidden;
}

.contact-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: var(--border-size-3);
  height: 100%;
  background: var(--gradient-8);
  transform: scaleY(0);
  transition: transform var(--animation-duration-fast-2) var(--ease-4);
}

.contact-item:hover {
  transform: translateY(calc(-1 * var(--size-1)));
  box-shadow: var(--shadow-4);
  border-color: var(--brand);
}

.contact-item:hover::before {
  transform: scaleY(1);
}

.contact-icon {
  flex-shrink: 0;
  width: var(--size-8);
  height: var(--size-8);
  background: var(--brand);
  color: var(--gray-0);
  border-radius: var(--radius-round);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-3);
  box-shadow: var(--shadow-3);
}

.contact-details {
  flex: 1;
}

.contact-label {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-7);
  margin-bottom: var(--space-sm);
  color: var(--text-1);
}

.contact-value,
.contact-values {
  font-size: var(--font-size-1);
  color: var(--text-2);
  line-height: var(--font-lineheight-3);
}

.contact-values {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.contact-value a,
.contact-values a {
  color: var(--brand);
  text-decoration: none;
  transition: color var(--animation-duration-fast-1) var(--ease-2);
  font-weight: var(--font-weight-5);
}

.contact-value a:hover,
.contact-values a:hover {
  color: var(--brand-dark);
  text-decoration: underline;
}

.social-media {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.social-title {
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-7);
  margin-bottom: var(--space-lg);
  color: var(--text-1);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: var(--brand);
  color: var(--gray-0);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--animation-duration-fast-2) var(--ease-3);
  font-size: var(--font-size-0);
  font-weight: var(--font-weight-6);
  box-shadow: var(--shadow-2);
}

.social-link:hover {
  background: var(--brand-dark);
  transform: translateY(calc(-1 * var(--size-1)));
  box-shadow: var(--shadow-3);
}

.social-link i {
  font-size: var(--font-size-2);
}

.quick-actions {
  display: flex;
  justify-content: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

/* Background Variations with Open Props */
.bg-white {
  background: var(--gray-0);
  color: var(--text-1);
}

.bg-light {
  background: var(--surface-1);
  color: var(--text-1);
}

.bg-blue {
  background: var(--gradient-12);
  color: var(--gray-0);
}

.bg-blue .contact-item {
  background: var(--surface-glass);
  backdrop-filter: blur(var(--size-3));
  border-color: var(--surface-4);
}

.bg-blue .contact-label {
  color: var(--gray-0);
}

.bg-blue .contact-value,
.bg-blue .contact-values {
  color: var(--gray-2);
}

.bg-blue .contact-value a,
.bg-blue .contact-values a {
  color: var(--gray-0);
}

.bg-blue .contact-title {
  color: var(--gray-0);
}

.bg-blue .contact-subtitle {
  color: var(--gray-2);
}

.bg-blue .social-title {
  color: var(--gray-0);
}

.bg-blue .social-link {
  background: var(--surface-glass);
  color: var(--gray-0);
  border: var(--border-size-1) solid var(--surface-4);
}

.bg-blue .social-link:hover {
  background: var(--surface-2);
}

/* Responsive Design with Open Props */
@media (width <= 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
  
  .contact-item {
    padding: var(--space-md);
  }
  
  .contact-title {
    font-size: var(--font-size-fluid-2);
  }
  
  .social-links {
    gap: var(--space-sm);
  }
  
  .social-link {
    padding: var(--space-sm) var(--space-md);
    font-size: var(--font-size-00);
  }
}

@media (width <= 480px) {
  .contact-info {
    padding: var(--space-xl) 0;
  }
  
  .contact-item {
    flex-direction: column;
    text-align: center;
    gap: var(--space-md);
  }
  
  .contact-title {
    font-size: var(--font-size-fluid-1);
  }
  
  .contact-subtitle {
    font-size: var(--font-size-1);
  }
  
  .quick-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .container {
    padding: 0 var(--space-md);
  }
}

/* Animation enhancements */
.contact-item {
  animation: var(--animation-fade-in) var(--animation-duration-slow-1) var(--ease-3);
}

.contact-icon {
  animation: var(--animation-scale-up) var(--animation-duration-slow-2) var(--ease-4);
}

.social-link {
  animation: var(--animation-slide-in-up) var(--animation-duration-slow-2) var(--ease-4);
}
</style> 