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
  background: linear-gradient(135deg, var(--blue-1) 0%, var(--blue-2) 50%, var(--blue-3) 100%);
  background-size: 200% 200%;
  border-bottom: var(--border-size-1) solid var(--blue-4);
  padding: var(--size-6) 0;
  margin-bottom: 0;
  position: relative;
  overflow: hidden;
  animation: gradient-shift 8s ease-in-out infinite;
}

.school-header::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: 
    radial-gradient(circle at 20% 80%, var(--blue-1-hsl) / 0.3 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, var(--blue-2-hsl) / 0.2 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, var(--gray-0-hsl) / 0.1 0%, transparent 50%);
  animation: clouds-float 15s ease-in-out infinite;
  z-index: 1;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes clouds-float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(-20px, -10px) rotate(1deg); }
  66% { transform: translate(10px, -20px) rotate(-1deg); }
}

.header-container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--size-5);
  gap: var(--size-6);
  max-width: 1400px;
  position: relative;
  z-index: 2;
}

/* School Crest (left) */
.school-crest {
  flex-shrink: 0;
  animation: float-left 6s ease-in-out infinite;
  transition: transform var(--animation-fade-in) var(--ease-3);
}

.school-crest:hover {
  transform: translateY(-8px) scale(1.05);
}

.crest-image {
  height: clamp(var(--size-11), 5vw, var(--size-11));
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px var(--blue-6-hsl) / 0.2);
}

@keyframes float-left {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
}

/* School Information (center, left-aligned) */
.school-info {
  flex: 0 0 auto;
  text-align: left;
  margin: 0 var(--size-4);
  min-width: 350px;
}

.school-name {
  font-size: clamp(var(--font-size-2), 2.5vw, var(--font-size-4));
  font-weight: var(--font-weight-6);
  color: var(--blue-9);
  margin: 0;
  line-height: var(--font-lineheight-2);
  font-family: var(--font-serif);
  white-space: nowrap;
  text-shadow: 0 2px 4px var(--blue-6-hsl) / 0.2;
}

.school-location {
  font-size: clamp(var(--font-size-1), 1.8vw, var(--font-size-3));
  font-weight: var(--font-weight-4);
  color: var(--blue-7);
  margin: var(--size-1) 0 0 0;
  font-family: var(--font-serif);
  text-shadow: 0 1px 2px var(--blue-6-hsl) / 0.2;
}

/* Portrait (right) */
.school-portrait {
  flex-shrink: 0;
  animation: float-right 7s ease-in-out infinite;
  transition: transform var(--animation-fade-in) var(--ease-3);
}

.school-portrait:hover {
  transform: translateY(-8px) scale(1.05);
}

.portrait-image {
  height: clamp(var(--size-11), 5vw, var(--size-11));
  width: clamp(var(--size-11), 5vw, var(--size-11));
  border-radius: var(--radius-round);
  object-fit: cover;
  object-position: center 20%;
  background: var(--blue-1);
  display: flex;
  border: 3px solid var(--blue-4);
  box-shadow: 
    0 8px 16px var(--blue-6-hsl) / 0.2,
    0 0 0 4px var(--blue-2-hsl) / 0.3;
  filter: drop-shadow(0 4px 8px var(--blue-6-hsl) / 0.2);
}

@keyframes float-right {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(-1deg); }
}

/* Responsive Design - Simplified with fewer breakpoints */
@media (max-width: 768px) {
  .header-container {
    padding: 0 var(--size-3);
    gap: var(--size-4);
  }
  
  .school-info {
    margin: 0 var(--size-2);
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
    gap: var(--size-5);
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

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .school-header,
  .school-header::before,
  .school-crest,
  .school-portrait {
    animation: none !important;
  }
  
  .school-crest:hover,
  .school-portrait:hover {
    transform: none !important;
  }
}

/* Dark mode support */
.dark .school-header {
  background: linear-gradient(135deg, var(--blue-8) 0%, var(--blue-9) 50%, var(--gray-9) 100%);
  border-bottom-color: var(--blue-6);
}

.dark .school-name {
  color: var(--blue-2);
  text-shadow: 0 2px 4px var(--gray-9-hsl) / 0.5;
}

.dark .school-location {
  color: var(--blue-3);
  text-shadow: 0 1px 2px var(--gray-9-hsl) / 0.5;
}

.dark .portrait-image {
  border-color: var(--blue-5);
  background: var(--blue-8);
  box-shadow: 
    0 8px 16px var(--gray-9-hsl) / 0.4,
    0 0 0 4px var(--blue-7-hsl) / 0.3;
}
</style> 