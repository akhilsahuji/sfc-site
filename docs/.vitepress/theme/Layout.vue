<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import SchoolHeader from './components/SchoolHeader.vue'
</script>

<template>
  <div class="custom-layout-wrapper">
    <!-- Place header outside of VitePress layout completely -->
    <SchoolHeader />
    
    <!-- VitePress Layout -->
    <DefaultTheme.Layout />
  </div>
</template>

<style>
.custom-layout-wrapper {
  min-height: 100vh;
}

/* Ensure the school header appears at the very top */
.custom-layout-wrapper > .school-header {
  position: relative;
  z-index: 1000;
}

/* Reset any VitePress navbar positioning */
.custom-layout-wrapper :deep(.VPNavBar) {
  position: relative !important;
  top: 0 !important;
  margin-top: 0 !important;
}

/* Ensure content flows properly */
.custom-layout-wrapper :deep(.VPDoc) {
  margin-top: 0;
}

.custom-layout-wrapper :deep(.Layout) {
  margin-top: 0;
}

/* Custom header styling */
.custom-header {
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  border-bottom: 1px solid var(--vp-c-divider);
  order: -1; /* Ensure it appears first */
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
}

.header-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.header-description {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
}

/* Content area */
.vitepress-content {
  flex: 1;
}

/* Hide the default VitePress navbar */
.vitepress-content :deep(.VPNavBar) {
  display: none !important;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .custom-header {
    padding: 0.75rem 1rem;
  }
  
  .header-title {
    font-size: 1.25rem;
  }
  
  .header-description {
    font-size: 0.8rem;
  }
}

/* Dark mode support */
.dark .custom-header {
  background: linear-gradient(135deg, var(--vp-c-brand-dark), var(--vp-c-bg-alt));
  border-bottom-color: var(--vp-c-divider);
}

/* Push VitePress navbar down to create space for our header */
.VPNavBar {
  margin-top: 0 !important;
  position: relative !important;
}

/* Ensure proper spacing between header and navbar */
.layout-top + * {
  margin-top: 0;
}

/* Add a small gap between header and navbar */
.VPNav {
  border-top: 1px solid transparent;
}

/* Responsive adjustments for mobile */
@media (max-width: 768px) {
  .VPNavBar {
    margin-top: 0 !important;
  }
}
</style>
