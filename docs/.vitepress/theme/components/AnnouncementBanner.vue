<template>
  <div v-if="visible" class="announcement-banner" :class="[`banner-${type}`, `position-${position}`]">
    <div class="banner-container">
      <div class="banner-content">
        <div class="banner-icon" v-if="icon">
          <i :class="icon"></i>
        </div>
        <div class="banner-text">
          <h4 v-if="title" class="banner-title">{{ title }}</h4>
          <p v-if="message" class="banner-message">{{ message }}</p>
        </div>
        <div class="banner-actions" v-if="$slots.actions">
          <slot name="actions"></slot>
        </div>
        <button v-if="closable" class="banner-close" @click="close">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
  
  <!-- Popup Modal for Important Announcements -->
  <div v-if="isPopup && visible" class="announcement-popup-overlay" @click="closePopup">
    <div class="announcement-popup" @click.stop>
      <button class="popup-close" @click="closePopup">
        <i class="fas fa-times"></i>
      </button>
      <div class="popup-content">
        <div class="popup-header" v-if="title || icon">
          <div class="popup-icon" v-if="icon">
            <i :class="icon"></i>
          </div>
          <h3 v-if="title" class="popup-title">{{ title }}</h3>
        </div>
        <div class="popup-body">
          <p v-if="message" class="popup-message">{{ message }}</p>
          <div v-if="$slots.content" class="popup-slot-content">
            <slot name="content"></slot>
          </div>
        </div>
        <div class="popup-footer" v-if="$slots.actions">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AnnouncementBanner',
  props: {
    type: {
      type: String,
      default: 'info', // info, success, warning, error
      validator: (value: string) => ['info', 'success', 'warning', 'error'].includes(value)
    },
    position: {
      type: String,
      default: 'top', // top, bottom, fixed-top, fixed-bottom
      validator: (value: string) => ['top', 'bottom', 'fixed-top', 'fixed-bottom'].includes(value)
    },
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: true
    },
    autoClose: {
      type: Boolean,
      default: false
    },
    autoCloseDelay: {
      type: Number,
      default: 5000
    },
    isPopup: {
      type: Boolean,
      default: false
    },
    persistent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: true,
      autoCloseTimer: null as number | null
    }
  },
  mounted() {
    if (this.autoClose && !this.persistent) {
      this.startAutoClose();
    }
    
    // Check localStorage for dismissed announcements
    if (this.persistent && !this.isPopup) {
      const dismissed = localStorage.getItem(`announcement-dismissed-${this.title}`);
      if (dismissed) {
        this.visible = false;
      }
    }
  },
  beforeUnmount() {
    if (this.autoCloseTimer) {
      clearTimeout(this.autoCloseTimer);
    }
  },
  methods: {
    close() {
      this.visible = false;
      
      // Save dismissal state for persistent announcements
      if (this.persistent && this.title) {
        localStorage.setItem(`announcement-dismissed-${this.title}`, 'true');
      }
      
      this.$emit('close');
    },
    closePopup() {
      if (this.isPopup) {
        this.close();
      }
    },
    startAutoClose() {
      this.autoCloseTimer = setTimeout(() => {
        this.close();
      }, this.autoCloseDelay);
    }
  }
}
</script>

<style scoped>
/* Banner Styles with Open Props */
.announcement-banner {
  width: 100%;
  z-index: var(--layer-5);
  animation: var(--animation-slide-in-down) var(--animation-duration-fast-2) var(--ease-3);
}

.position-top {
  position: relative;
  top: 0;
}

.position-bottom {
  position: relative;
  bottom: 0;
}

.position-fixed-top {
  position: fixed;
  top: 0;
}

.position-fixed-bottom {
  position: fixed;
  bottom: 0;
}

.banner-container {
  max-width: var(--size-content-3);
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

.banner-content {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-md);
  position: relative;
  border: var(--border-size-1) solid transparent;
  backdrop-filter: blur(var(--size-2));
  box-shadow: var(--shadow-2);
}

.banner-icon {
  font-size: var(--font-size-3);
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.banner-text {
  flex: 1;
}

.banner-title {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-7);
  margin: 0 0 var(--space-xs) 0;
  line-height: var(--font-lineheight-2);
}

.banner-message {
  margin: 0;
  font-size: var(--font-size-1);
  line-height: var(--font-lineheight-3);
  opacity: 0.9;
}

.banner-actions {
  display: flex;
  gap: var(--space-sm);
}

.banner-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-xs);
  border-radius: var(--radius-sm);
  transition: all var(--animation-duration-fast-1) var(--ease-2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--size-6);
  height: var(--size-6);
  flex-shrink: 0;
}

.banner-close:hover {
  background: var(--surface-4);
  transform: scale(1.1);
}

/* Banner Type Styles with Open Props */
.banner-info .banner-content {
  background: var(--blue-1);
  border-color: var(--blue-5);
  color: var(--blue-9);
}

.banner-info .banner-close {
  color: var(--blue-8);
}

.banner-success .banner-content {
  background: var(--green-1);
  border-color: var(--green-5);
  color: var(--green-9);
}

.banner-success .banner-close {
  color: var(--green-8);
}

.banner-warning .banner-content {
  background: var(--yellow-1);
  border-color: var(--yellow-5);
  color: var(--yellow-9);
}

.banner-warning .banner-close {
  color: var(--yellow-8);
}

.banner-error .banner-content {
  background: var(--red-1);
  border-color: var(--red-5);
  color: var(--red-9);
}

.banner-error .banner-close {
  color: var(--red-8);
}

/* Popup Styles with Open Props */
.announcement-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--surface-4);
  backdrop-filter: blur(var(--size-3));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--layer-overlay);
  padding: var(--space-lg);
  animation: var(--animation-fade-in) var(--animation-duration-fast-2) var(--ease-3);
}

.announcement-popup {
  background: var(--surface-1);
  border: var(--border-size-1) solid var(--surface-3);
  border-radius: var(--radius-lg);
  max-width: var(--size-content-1);
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: var(--shadow-6);
  animation: var(--animation-scale-up) var(--animation-duration-fast-2) var(--ease-4);
}

.popup-close {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  background: var(--surface-2);
  border: var(--border-size-1) solid var(--surface-3);
  font-size: var(--font-size-3);
  cursor: pointer;
  color: var(--text-2);
  padding: var(--space-xs);
  border-radius: var(--radius-round);
  width: var(--size-7);
  height: var(--size-7);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--animation-duration-fast-1) var(--ease-3);
}

.popup-close:hover {
  background: var(--surface-3);
  color: var(--text-1);
  transform: scale(1.1);
}

.popup-content {
  padding: var(--space-xl);
}

.popup-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.popup-icon {
  font-size: var(--font-size-5);
  color: var(--brand);
}

.popup-title {
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-8);
  margin: 0;
  color: var(--text-1);
  line-height: var(--font-lineheight-1);
}

.popup-message {
  font-size: var(--font-size-1);
  line-height: var(--font-lineheight-3);
  color: var(--text-2);
  margin: 0 0 var(--space-lg) 0;
}

.popup-slot-content {
  margin-bottom: var(--space-lg);
}

.popup-footer {
  display: flex;
  gap: var(--space-sm);
  justify-content: flex-end;
  padding-top: var(--space-lg);
  border-top: var(--border-size-1) solid var(--surface-3);
}

/* Responsive Design with Open Props */
@media (width <= 768px) {
  .banner-content {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);
    text-align: center;
  }
  
  .banner-actions {
    align-self: stretch;
    justify-content: center;
  }
  
  .announcement-popup-overlay {
    padding: var(--space-md);
  }
  
  .popup-content {
    padding: var(--space-lg);
  }
  
  .popup-title {
    font-size: var(--font-size-3);
  }
  
  .popup-footer {
    flex-direction: column;
    gap: var(--space-sm);
  }
}

@media (width <= 480px) {
  .banner-content {
    padding: var(--space-sm) var(--space-md);
  }
  
  .banner-title {
    font-size: var(--font-size-1);
  }
  
  .banner-message {
    font-size: var(--font-size-0);
  }
  
  .popup-content {
    padding: var(--space-md);
  }
  
  .banner-container {
    padding: 0 var(--space-md);
  }
}

/* Animation enhancements */
.banner-icon {
  animation: var(--animation-bounce) var(--animation-duration-slow-1) var(--ease-4);
}

.popup-header {
  animation: var(--animation-slide-in-down) var(--animation-duration-slow-2) var(--ease-4);
}

.popup-message {
  animation: var(--animation-fade-in) var(--animation-duration-slow-2) var(--ease-3) 0.1s both;
}

.popup-footer {
  animation: var(--animation-slide-in-up) var(--animation-duration-slow-2) var(--ease-4) 0.2s both;
}
</style> 