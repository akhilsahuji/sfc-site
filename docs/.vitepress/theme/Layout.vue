<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
</script>

<template>
  <DefaultTheme.Layout />
</template>

<style>
/* Center the navigation menu */
.VPNav .VPNavBar .container {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.VPNav .VPNavBar .title {
  display: none !important;
}

.VPNav .VPNavBar .content {
  justify-content: center !important;
  flex: none !important;
}

.VPNav .VPNavBar .content-body {
  justify-content: center !important;
}

.VPNavBarMenu.VPNavBarMenu {
  flex: none !important;
}

/* Hide search button */
.VPNavBarSearch {
  display: none !important;
}

/* Center the navigation items */
.VPNavBarMenu .VPNavBarMenuGroup {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

/* Hero section improvements */
.VPHome .VPHero {
  padding: 40px 24px;
}

/* Bigger hero title with gradient */
.VPHome .VPHero .name {
  font-size: clamp(2.5rem, 8vw, 4rem) !important;
  font-weight: 800 !important;
  line-height: 1.1 !important;
  background: linear-gradient(45deg, #2c5aa0, #1e4080, #4a90d9) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  margin-bottom: 20px !important;
}

/* Bigger tagline with gradient */
.VPHome .VPHero .text {
  font-size: clamp(1.2rem, 4vw, 1.8rem) !important;
  font-weight: 600 !important;
  background: linear-gradient(45deg, #2c5aa0, #4a90d9) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  margin-bottom: 30px !important;
}

/* Reduce space between image and text */
.VPHome .VPHero .container {
  gap: 20px !important;
}

.VPHome .VPHero .main {
  gap: 20px !important;
}

/* Bigger logo */
.VPHome .VPHero .image img {
  max-width: clamp(200px, 30vw, 300px) !important;
  max-height: clamp(200px, 30vw, 300px) !important;
}

/* Action buttons styling */
.VPHome .VPHero .actions .VPButton.brand {
  background: linear-gradient(45deg, #2c5aa0, #1e4080) !important;
  border: none !important;
  font-size: 1.1rem !important;
  padding: 14px 28px !important;
  font-weight: 600 !important;
}

.VPHome .VPHero .actions .VPButton.alt {
  background: transparent !important;
  color: #2c5aa0 !important;
  border: 2px solid #2c5aa0 !important;
  font-size: 1.1rem !important;
  padding: 12px 26px !important;
  font-weight: 600 !important;
}

.VPHome .VPHero .actions .VPButton:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 25px rgba(44, 90, 160, 0.3) !important;
}
</style>
