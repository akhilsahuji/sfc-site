<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
</script>

<template>
  <div class="custom-layout-wrapper">
    <!-- Default VitePress Layout with enhanced navigation -->
    <DefaultTheme.Layout />
  </div>
</template>

<style>
.custom-layout-wrapper {
  min-height: 100vh;
}
</style>
