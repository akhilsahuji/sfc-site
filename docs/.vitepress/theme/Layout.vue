<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'

onMounted(() => {
  // Hide the default logo and title in navbar to center navigation
  setTimeout(() => {
    const navbar = document.querySelector('.VPNavBar')
    if (navbar) {
      const title = navbar.querySelector('.VPNavBarTitle') as HTMLElement
      if (title) {
        title.style.display = 'none'
      }
    }
  }, 100)
})
</script>

<template>
  <DefaultTheme.Layout>
    
  </DefaultTheme.Layout>
</template>

<style>
/* Import the layout styles */
@import './styles/layout.css';
</style>
