<template>
  <nav class="responsive-nav" ref="navContainer">
    <div class="nav-brand">
      <img 
        v-if="logo" 
        :src="logo" 
        :alt="title" 
        class="nav-logo"
      />
      <span v-if="title" class="nav-title">{{ title }}</span>
    </div>

    <!-- Primary nav items (visible on larger screens) -->
    <div class="nav-primary" ref="primaryNav">
      <div 
        v-for="(item, index) in visibleItems" 
        :key="item.text"
        class="nav-item"
        :class="{ 'nav-dropdown': item.items }"
      >
        <a 
          v-if="!item.items" 
          :href="item.link" 
          class="nav-link"
          :class="{ active: isActive(item.link) }"
        >
          {{ item.text }}
        </a>
        <div v-else class="nav-dropdown-wrapper">
          <button 
            class="nav-dropdown-trigger"
            @click="toggleDropdown(index)"
            :aria-expanded="activeDropdown === index"
          >
            {{ item.text }}
            <i class="nav-arrow" :class="{ 'nav-arrow-up': activeDropdown === index }">
              ▼
            </i>
          </button>
          <div 
            class="nav-dropdown-menu"
            :class="{ 'nav-dropdown-open': activeDropdown === index }"
          >
            <a 
              v-for="subItem in item.items" 
              :key="subItem.text"
              :href="subItem.link" 
              class="nav-dropdown-link"
              :class="{ active: isActive(subItem.link) }"
              @click="closeDropdown"
            >
              {{ subItem.text }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Overflow menu (three dots) for larger screens -->
    <div 
      v-if="overflowItems.length > 0 && !isMobile" 
      class="nav-overflow"
    >
      <button 
        class="nav-overflow-trigger"
        @click="toggleOverflow"
        :aria-expanded="showOverflow"
      >
        <span class="overflow-dots">⋯</span>
      </button>
      <div 
        class="nav-overflow-menu"
        :class="{ 'nav-overflow-open': showOverflow }"
      >
        <div 
          v-for="item in overflowItems" 
          :key="item.text"
          class="nav-overflow-item"
          :class="{ 'has-submenu': item.items }"
        >
          <a 
            v-if="!item.items" 
            :href="item.link" 
            class="nav-overflow-link"
            :class="{ active: isActive(item.link) }"
            @click="closeOverflow"
          >
            {{ item.text }}
          </a>
          <div v-else class="nav-overflow-submenu">
            <span class="nav-overflow-group">{{ item.text }}</span>
            <a 
              v-for="subItem in item.items" 
              :key="subItem.text"
              :href="subItem.link" 
              class="nav-overflow-sublink"
              :class="{ active: isActive(subItem.link) }"
              @click="closeOverflow"
            >
              {{ subItem.text }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile hamburger menu -->
    <div class="nav-mobile">
      <button 
        class="nav-hamburger"
        @click="toggleMobile"
        :aria-expanded="showMobile"
        :class="{ 'hamburger-active': showMobile }"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
      
      <div 
        class="nav-mobile-menu"
        :class="{ 'nav-mobile-open': showMobile }"
      >
        <div 
          v-for="item in allItems" 
          :key="item.text"
          class="nav-mobile-item"
        >
          <a 
            v-if="!item.items" 
            :href="item.link" 
            class="nav-mobile-link"
            :class="{ active: isActive(item.link) }"
            @click="closeMobile"
          >
            {{ item.text }}
          </a>
          <div v-else class="nav-mobile-group">
            <span class="nav-mobile-group-title">{{ item.text }}</span>
            <a 
              v-for="subItem in item.items" 
              :key="subItem.text"
              :href="subItem.link" 
              class="nav-mobile-sublink"
              :class="{ active: isActive(subItem.link) }"
              @click="closeMobile"
            >
              {{ subItem.text }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Overlay for mobile menu -->
    <div 
      v-if="showMobile" 
      class="nav-overlay"
      @click="closeMobile"
    ></div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useData } from 'vitepress'

interface NavItem {
  text: string
  link?: string
  items?: NavItem[]
}

// Props
defineProps<{
  logo?: string
  title?: string
}>()

// VitePress data
const { theme, page } = useData()

// Reactive state
const navContainer = ref<HTMLElement>()
const primaryNav = ref<HTMLElement>()
const isMobile = ref(false)
const availableWidth = ref(0)
const showOverflow = ref(false)
const showMobile = ref(false)
const activeDropdown = ref<number | null>(null)

// Priority navigation items (most important first)
const priorityItems = ['Home', 'About Us', 'Admissions', 'Contact Us']

// All navigation items from VitePress config
const allItems = computed(() => theme.value.nav || [])

// Check if current page is active
const isActive = (link: string) => {
  if (!link) return false
  return page.value.relativePath.includes(link.replace('/', ''))
}

// Calculate visible items based on screen size and available space
const visibleItems = computed(() => {
  if (isMobile.value) return []
  
  // On larger screens, show priority items + as many others as fit
  const priority = allItems.value.filter(item => 
    priorityItems.includes(item.text)
  )
  
  const remaining = allItems.value.filter(item => 
    !priorityItems.includes(item.text)
  )
  
  // Start with priority items, add others if space allows
  let visible = [...priority]
  
  // Estimate space (rough calculation)
  const estimatedItemWidth = 120 // pixels per nav item
  const maxVisibleItems = Math.floor(availableWidth.value / estimatedItemWidth)
  
  if (visible.length < maxVisibleItems && remaining.length > 0) {
    const canAdd = maxVisibleItems - visible.length
    visible = [...visible, ...remaining.slice(0, canAdd)]
  }
  
  return visible.slice(0, 4) // Max 4 items in main nav
})

// Items that go into overflow menu
const overflowItems = computed(() => {
  if (isMobile.value) return []
  return allItems.value.filter(item => 
    !visibleItems.value.some(visible => visible.text === item.text)
  )
})

// Dropdown handling
const toggleDropdown = (index: number) => {
  activeDropdown.value = activeDropdown.value === index ? null : index
  showOverflow.value = false
}

const closeDropdown = () => {
  activeDropdown.value = null
}

// Overflow menu handling
const toggleOverflow = () => {
  showOverflow.value = !showOverflow.value
  activeDropdown.value = null
}

const closeOverflow = () => {
  showOverflow.value = false
}

// Mobile menu handling
const toggleMobile = () => {
  showMobile.value = !showMobile.value
  if (showMobile.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobile = () => {
  showMobile.value = false
  document.body.style.overflow = ''
}

// Responsive handling
const handleResize = () => {
  const width = window.innerWidth
  isMobile.value = width < 768
  
  if (navContainer.value) {
    availableWidth.value = navContainer.value.offsetWidth - 200 // Reserve space for logo
  }
  
  if (!isMobile.value) {
    closeMobile()
  } else {
    closeDropdown()
    closeOverflow()
  }
}

// Click outside handling
const handleClickOutside = (event: Event) => {
  if (navContainer.value && !navContainer.value.contains(event.target as Node)) {
    closeDropdown()
    closeOverflow()
  }
}

// Lifecycle
onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', handleClickOutside)
  
  nextTick(() => {
    handleResize()
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', handleClickOutside)
  document.body.style.overflow = ''
})
</script>

<style scoped>
@import "open-props/style";

.responsive-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--size-3) var(--size-4);
  background: var(--surface-1);
  border-bottom: var(--border-size-1) solid var(--surface-3);
  position: relative;
  z-index: 1000;
}

/* Brand */
.nav-brand {
  display: flex;
  align-items: center;
  gap: var(--size-2);
  font-weight: var(--font-weight-6);
  color: var(--text-1);
}

.nav-logo {
  height: var(--size-8);
  width: auto;
}

.nav-title {
  font-size: var(--font-size-3);
  font-family: var(--font-serif);
}

/* Primary Navigation */
.nav-primary {
  display: flex;
  align-items: center;
  gap: var(--size-1);
}

.nav-item {
  position: relative;
}

.nav-link {
  display: block;
  padding: var(--size-2) var(--size-3);
  color: var(--text-1);
  text-decoration: none;
  border-radius: var(--radius-2);
  transition: all var(--animation-fade-in) var(--ease-3);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-5);
}

.nav-link:hover,
.nav-link.active {
  background: var(--blue-1);
  color: var(--blue-7);
}

/* Dropdown */
.nav-dropdown-trigger {
  display: flex;
  align-items: center;
  gap: var(--size-1);
  padding: var(--size-2) var(--size-3);
  background: none;
  border: none;
  color: var(--text-1);
  cursor: pointer;
  border-radius: var(--radius-2);
  transition: all var(--animation-fade-in) var(--ease-3);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-5);
}

.nav-dropdown-trigger:hover {
  background: var(--blue-1);
  color: var(--blue-7);
}

.nav-arrow {
  font-size: var(--font-size-0);
  transition: transform var(--animation-fade-in) var(--ease-3);
}

.nav-arrow-up {
  transform: rotate(180deg);
}

.nav-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: var(--surface-1);
  border: var(--border-size-1) solid var(--surface-3);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all var(--animation-fade-in) var(--ease-3);
  z-index: 100;
}

.nav-dropdown-open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.nav-dropdown-link {
  display: block;
  padding: var(--size-2) var(--size-3);
  color: var(--text-2);
  text-decoration: none;
  transition: all var(--animation-fade-in) var(--ease-3);
  font-size: var(--font-size-0);
  border-bottom: var(--border-size-1) solid var(--surface-2);
}

.nav-dropdown-link:last-child {
  border-bottom: none;
}

.nav-dropdown-link:hover,
.nav-dropdown-link.active {
  background: var(--blue-1);
  color: var(--blue-7);
}

/* Overflow Menu */
.nav-overflow {
  position: relative;
}

.nav-overflow-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--size-8);
  height: var(--size-8);
  background: none;
  border: none;
  color: var(--text-1);
  cursor: pointer;
  border-radius: var(--radius-2);
  transition: all var(--animation-fade-in) var(--ease-3);
}

.nav-overflow-trigger:hover {
  background: var(--blue-1);
  color: var(--blue-7);
}

.overflow-dots {
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-7);
  line-height: 1;
}

.nav-overflow-menu {
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 250px;
  max-width: 300px;
  background: var(--surface-1);
  border: var(--border-size-1) solid var(--surface-3);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-4);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all var(--animation-fade-in) var(--ease-3);
  z-index: 100;
  max-height: 400px;
  overflow-y: auto;
}

.nav-overflow-open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.nav-overflow-group {
  display: block;
  padding: var(--size-3) var(--size-3) var(--size-1);
  font-weight: var(--font-weight-6);
  color: var(--blue-7);
  font-size: var(--font-size-0);
  border-bottom: var(--border-size-1) solid var(--surface-2);
}

.nav-overflow-link,
.nav-overflow-sublink {
  display: block;
  padding: var(--size-2) var(--size-3);
  color: var(--text-2);
  text-decoration: none;
  transition: all var(--animation-fade-in) var(--ease-3);
  font-size: var(--font-size-0);
}

.nav-overflow-sublink {
  padding-left: var(--size-5);
  border-bottom: var(--border-size-1) solid var(--surface-2);
}

.nav-overflow-link:hover,
.nav-overflow-sublink:hover,
.nav-overflow-link.active,
.nav-overflow-sublink.active {
  background: var(--blue-1);
  color: var(--blue-7);
}

/* Mobile Navigation */
.nav-mobile {
  position: relative;
}

.nav-hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  width: var(--size-8);
  height: var(--size-8);
  background: none;
  border: none;
  cursor: pointer;
  gap: var(--size-1);
  border-radius: var(--radius-2);
  transition: all var(--animation-fade-in) var(--ease-3);
}

.nav-hamburger:hover {
  background: var(--blue-1);
}

.hamburger-line {
  width: 20px;
  height: 2px;
  background: var(--text-1);
  transition: all var(--animation-fade-in) var(--ease-3);
  border-radius: var(--radius-1);
}

.hamburger-active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

.nav-mobile-menu {
  position: fixed;
  top: 100%;
  left: 0;
  width: 100%;
  height: calc(100vh - 100%);
  background: var(--surface-1);
  border-top: var(--border-size-1) solid var(--surface-3);
  padding: var(--size-4);
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform var(--animation-fade-in) var(--ease-3);
  z-index: 99;
}

.nav-mobile-open {
  transform: translateX(0);
}

.nav-mobile-group-title {
  display: block;
  padding: var(--size-3) 0 var(--size-2);
  font-weight: var(--font-weight-6);
  color: var(--blue-7);
  font-size: var(--font-size-1);
  border-bottom: var(--border-size-1) solid var(--surface-2);
  margin-bottom: var(--size-2);
}

.nav-mobile-link,
.nav-mobile-sublink {
  display: block;
  padding: var(--size-3) 0;
  color: var(--text-1);
  text-decoration: none;
  font-size: var(--font-size-1);
  border-bottom: var(--border-size-1) solid var(--surface-2);
  transition: color var(--animation-fade-in) var(--ease-3);
}

.nav-mobile-sublink {
  padding-left: var(--size-4);
  font-size: var(--font-size-0);
  color: var(--text-2);
}

.nav-mobile-link:hover,
.nav-mobile-sublink:hover,
.nav-mobile-link.active,
.nav-mobile-sublink.active {
  color: var(--blue-7);
}

.nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gray-9-hsl) / 0.5;
  z-index: 98;
}

/* Responsive breakpoints */
@media (width < 768px) {
  .nav-primary,
  .nav-overflow {
    display: none;
  }
  
  .nav-hamburger {
    display: flex;
  }
}

@media (width >= 768px) and (width < 1024px) {
  .nav-primary {
    gap: var(--size-1);
  }
  
  .nav-link,
  .nav-dropdown-trigger {
    padding: var(--size-2);
    font-size: var(--font-size-0);
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .nav-dropdown-menu,
  .nav-overflow-menu,
  .nav-mobile-menu {
    background: var(--surface-2);
    border-color: var(--surface-4);
  }
}

/* Animation enhancements */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}
</style> 