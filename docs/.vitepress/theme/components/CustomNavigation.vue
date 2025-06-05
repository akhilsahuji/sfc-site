<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useData, useRouter } from 'vitepress'

const { site, theme, isDark } = useData()
const router = useRouter()

const mobileMenuOpen = ref(false)
const activeDropdown = ref<string | null>(null)

// Navigation items from config
const navItems = [
  { text: "Home", link: "/" },
  {
    text: "About Us",
    items: [
      { text: "Our Patron", link: "/about/patron" },
      { text: "Our Foundress", link: "/about/foundress" },
      { text: "History", link: "/about/history" },
      { text: "Our Mission & Vision", link: "/about/mission" },
      { text: "School Anthem", link: "/about/anthem" },
      { text: "Prayers/Hymns", link: "/about/prayers" },
      { text: "The Pledge", link: "/about/pledge" },
    ],
  },
  {
    text: "Admissions",
    items: [
      { text: "Admission Information", link: "/prospectus/admission" },
      { text: "Courses Offered", link: "/prospectus/courses" },
      { text: "School Hours", link: "/prospectus/school-hours" },
      { text: "Office Hours", link: "/prospectus/office-hours" },
      { text: "Fee Rules", link: "/rules/fee-rules" },
      { text: "School Magazine", link: "/prospectus/magazine" },
    ],
  },
  {
    text: "Leadership",
    items: [
      { text: "Principal's Message", link: "/messages/principal" },
      { text: "Manager's Message", link: "/messages/manager" },
      { text: "Head Girl Message", link: "/messages/head-girl" },
    ],
  },
  {
    text: "Achievements",
    items: [
      { text: "School Achievements", link: "/achievements" },
      { text: "ISC Toppers", link: "/achievements/isc-toppers" },
      { text: "ICSE Toppers", link: "/achievements/icse-toppers" },
    ],
  },
  {
    text: "School Life",
    items: [
      { text: "Photo Gallery", link: "/gallery/photos" },
      { text: "Video Gallery", link: "/gallery/videos" },
      { text: "Media Gallery", link: "/gallery/media" },
      { text: "School Clubs", link: "/clubs" },
    ],
  },
  {
    text: "Resources",
    items: [
      { text: "Notice Board", link: "/notices" },
      { text: "Circulars", link: "/circulars" },
      { text: "Syllabus", link: "/notices/syllabus" },
      { text: "Bulletin Board", link: "/gallery/bulletin" },
    ],
  },
  {
    text: "Policies & Rules",
    items: [
      { text: "Discipline Policy", link: "/rules/discipline" },
      { text: "Rules of Conduct", link: "/rules/conduct" },
      { text: "Attendance Rules", link: "/rules/absence" },
      { text: "School Uniform", link: "/rules/uniform" },
      { text: "Parent Guidelines", link: "/rules/recommendations" },
    ],
  },
  {
    text: "Staff & Administration",
    items: [
      { text: "Principals", link: "/office-bearers/principals" },
      { text: "Managers", link: "/office-bearers/managers" },
      { text: "Staff Photos", link: "/office-bearers/staff" },
      { text: "Student Cabinet", link: "/office-bearers/cabinet" },
      { text: "Investiture Ceremony", link: "/office-bearers/investiture" },
    ],
  },
  { text: "Contact Us", link: "/contact" },
]

const socialLinks = [
  { icon: "youtube", link: "https://youtube.com/@sfcicjhs?si=9OjvOCxwKZ-vN3pB" },
  { icon: "facebook", link: "https://facebook.com/sfcjhansi" },
  { icon: "instagram", link: "https://instagram.com/sfcjhs" },
]

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  activeDropdown.value = null
}

function toggleDropdown(itemText: string) {
  activeDropdown.value = activeDropdown.value === itemText ? null : itemText
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
  activeDropdown.value = null
}

function navigateTo(link: string) {
  router.go(link)
  closeMobileMenu()
}

function toggleTheme() {
  const newTheme = isDark.value ? 'light' : 'dark'
  document.documentElement.classList.toggle('dark', newTheme === 'dark')
}

onMounted(() => {
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const nav = document.querySelector('.custom-nav')
    if (nav && !nav.contains(e.target as Node)) {
      closeMobileMenu()
    }
  })
})
</script>

<template>
  <nav class="custom-nav">
    <div class="nav-container">
      <!-- Logo and Site Title -->
      <div class="nav-brand">
        <img src="/images/logo.png" alt="SFCI Logo" class="nav-logo" />
        <span class="nav-title">SFCI</span>
      </div>

      <!-- Desktop Navigation -->
      <div class="nav-links desktop-nav">
        <template v-for="item in navItems" :key="item.text">
          <!-- Simple link -->
          <a 
            v-if="!item.items" 
            :href="item.link" 
            class="nav-link"
            @click.prevent="navigateTo(item.link)"
          >
            {{ item.text }}
          </a>
          
          <!-- Dropdown -->
          <div v-else class="nav-dropdown">
            <button 
              class="nav-link dropdown-trigger"
              @click="toggleDropdown(item.text)"
            >
              {{ item.text }}
              <span class="dropdown-arrow">▼</span>
            </button>
            
            <div 
              v-show="activeDropdown === item.text" 
              class="dropdown-menu"
            >
              <a 
                v-for="subItem in item.items" 
                :key="subItem.text"
                :href="subItem.link"
                class="dropdown-item"
                @click.prevent="navigateTo(subItem.link)"
              >
                {{ subItem.text }}
              </a>
            </div>
          </div>
        </template>
      </div>

      <!-- Actions (Theme Toggle, Social Links) -->
      <div class="nav-actions">
        <!-- Theme Toggle -->
        <button class="theme-toggle" @click="toggleTheme" title="Toggle theme">
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </button>

        <!-- Social Links -->
        <div class="social-links">
          <a 
            v-for="social in socialLinks" 
            :key="social.icon"
            :href="social.link" 
            target="_blank"
            class="social-link"
            :title="social.icon"
          >
            <span v-if="social.icon === 'youtube'">📺</span>
            <span v-else-if="social.icon === 'facebook'">📘</span>
            <span v-else-if="social.icon === 'instagram'">📷</span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          :class="{ active: mobileMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="mobileMenuOpen" class="mobile-menu">
      <template v-for="item in navItems" :key="item.text">
        <!-- Simple link -->
        <a 
          v-if="!item.items" 
          :href="item.link" 
          class="mobile-nav-link"
          @click.prevent="navigateTo(item.link)"
        >
          {{ item.text }}
        </a>
        
        <!-- Dropdown -->
        <div v-else class="mobile-dropdown">
          <button 
            class="mobile-nav-link dropdown-trigger"
            @click="toggleDropdown(item.text)"
          >
            {{ item.text }}
            <span class="dropdown-arrow">{{ activeDropdown === item.text ? '▲' : '▼' }}</span>
          </button>
          
          <div 
            v-show="activeDropdown === item.text" 
            class="mobile-dropdown-menu"
          >
            <a 
              v-for="subItem in item.items" 
              :key="subItem.text"
              :href="subItem.link"
              class="mobile-dropdown-item"
              @click.prevent="navigateTo(subItem.link)"
            >
              {{ subItem.text }}
            </a>
          </div>
        </div>
      </template>
    </div>

    <!-- Mobile Menu Overlay -->
    <div 
      v-show="mobileMenuOpen" 
      class="mobile-overlay"
      @click="closeMobileMenu"
    ></div>
  </nav>
</template>

<style scoped>
.custom-nav {
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 64px;
}

/* Brand */
.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-logo {
  height: 32px;
  width: auto;
}

.nav-title {
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--vp-c-brand-1);
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link:hover {
  color: var(--vp-c-brand-1);
}

/* Dropdown */
.nav-dropdown {
  position: relative;
}

.dropdown-arrow {
  font-size: 0.8rem;
  transition: transform 0.2s;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  z-index: 1001;
  margin-top: 0.5rem;
}

.dropdown-item {
  display: block;
  padding: 0.75rem 1rem;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-brand-1);
}

/* Actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.theme-toggle {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.theme-toggle:hover {
  background: var(--vp-c-bg-alt);
}

.social-links {
  display: flex;
  gap: 0.5rem;
}

.social-link {
  font-size: 1.2rem;
  padding: 0.25rem;
  border-radius: 4px;
  transition: background-color 0.2s;
  text-decoration: none;
}

.social-link:hover {
  background: var(--vp-c-bg-alt);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 3px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu-btn span {
  width: 20px;
  height: 2px;
  background: var(--vp-c-text-1);
  transition: all 0.3s;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
  max-height: calc(100vh - 64px);
  overflow-y: auto;
  z-index: 999;
}

.mobile-nav-link {
  display: block;
  padding: 1rem;
  color: var(--vp-c-text-1);
  text-decoration: none;
  border-bottom: 1px solid var(--vp-c-divider-light);
  cursor: pointer;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-nav-link:hover {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-brand-1);
}

.mobile-dropdown-menu {
  background: var(--vp-c-bg-alt);
}

.mobile-dropdown-item {
  display: block;
  padding: 0.75rem 2rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.mobile-dropdown-item:hover {
  background: var(--vp-c-bg);
  color: var(--vp-c-brand-1);
}

.mobile-overlay {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 998;
}

/* Responsive */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .social-links {
    display: none;
  }
}

@media (max-width: 640px) {
  .nav-container {
    padding: 0 0.75rem;
  }
  
  .nav-title {
    font-size: 1rem;
  }
  
  .nav-logo {
    height: 28px;
  }
}
</style> 