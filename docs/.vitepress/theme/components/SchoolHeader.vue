<script setup lang="ts">
// No special logic needed for this header component
</script>

<template>
  <header class="school-header">
    <div class="header-container">
      <!-- School Crest/Logo (left) -->
      <div class="school-crest">
        <img 
          src="/images/logo.png" 
          alt="St. Francis Convent Inter College Crest" 
          class="crest-image"
        />
      </div>
      
      <!-- School Title and Location (center, left-aligned) -->
      <div class="school-info">
        <h1 class="school-name">St. Francis' Convent Inter College</h1>
        <h2 class="school-location">Jhansi</h2>
      </div>
      
      <!-- Portrait Image (right) -->
      <div class="school-portrait">
        <img 
          src="/images/foundress-portrait.jpg" 
          alt="School Foundress Portrait" 
          class="portrait-image"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
@import "open-props/style";

.school-header {
  background: var(--gray-2);
  border-bottom: var(--border-size-1) solid var(--gray-4);
  padding: var(--size-4) 0;
  margin-bottom: 0;
}

.header-container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--size-5);
  gap: var(--size-10);
  max-width: 1400px;
}

/* School Crest (left) */
.school-crest {
  flex-shrink: 0;
}

.crest-image {
  height: clamp(var(--size-8), 5vw, var(--size-10));
  width: auto;
  object-fit: contain;
}

/* School Information (center, left-aligned) */
.school-info {
  flex: 0 0 auto;
  text-align: left;
  margin: 0 var(--size-8);
  min-width: 350px;
}

.school-name {
  font-size: clamp(var(--font-size-2), 2.5vw, var(--font-size-4));
  font-weight: var(--font-weight-4);
  color: var(--gray-9);
  margin: 0;
  line-height: var(--font-lineheight-2);
  font-family: var(--font-serif);
  white-space: nowrap;
}

.school-location {
  font-size: clamp(var(--font-size-1), 1.8vw, var(--font-size-3));
  font-weight: var(--font-weight-3);
  color: var(--gray-7);
  margin: var(--size-1) 0 0 0;
  font-family: var(--font-serif);
}

/* Portrait (right) */
.school-portrait {
  flex-shrink: 0;
}

.portrait-image {
  height: clamp(var(--size-8), 5vw, var(--size-10));
  width: clamp(var(--size-8), 5vw, var(--size-10));
  border-radius: var(--radius-round);
  object-fit: cover;
  object-position: center 20%;
  background: var(--gray-3);
  display: block;
  border: 2px solid var(--gray-4);
}

/* Responsive Design - Simplified with fewer breakpoints */
@media (max-width: 768px) {
  .header-container {
    padding: 0 var(--size-3);
    gap: var(--size-5);
  }
  
  .school-info {
    margin: 0 var(--size-3);
    min-width: 250px;
  }
  
  .school-name {
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
    word-break: break-word;
  }
}

@media (max-width: 480px) {
  .school-header {
    padding: var(--size-3) 0;
  }
  
  .header-container {
    padding: 0 var(--size-2);
    gap: var(--size-3);
    flex-direction: column;
    text-align: center;
  }
  
  .school-info {
    text-align: center;
    margin: 0;
    order: 1;
    min-width: auto;
  }
  
  .school-crest,
  .school-portrait {
    order: 2;
  }
  
  .school-name {
    white-space: normal;
    word-break: normal;
  }
}

/* Dark mode support */
.dark .school-header {
  background: var(--gray-8);
  border-bottom-color: var(--gray-6);
}

.dark .school-name,
.dark .school-location {
  color: var(--gray-1);
}

.dark .school-location {
  color: var(--gray-3);
}
</style> 