<template>
  <nav class="responsive-nav" ref="navContainer">
    <!-- Logo/Brand Section -->
    <div class="nav-brand">
      <a href="/" class="brand-link">
        <img 
          v-if="siteLogo" 
          :src="siteLogo" 
          :alt="siteTitle + ' Logo'"
          class="brand-logo"
        />
        <span class="brand-title">{{ siteTitle }}</span>
      </a>
    </div>

    <!-- Mobile Hamburger Button -->
    <button 
      class="hamburger-btn"
      @click="toggleMobileMenu"
      :class="{ active: isMobileMenuOpen }"
      aria-label="Toggle navigation menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Navigation Items Container -->
    <div class="nav-items-container" :class="{ 'mobile-open': isMobileMenuOpen }">
      <!-- Main Navigation Items -->
      <div class="main-nav-items" ref="mainNavItems">
        <a 
          v-for="(item, index) in visibleItems" 
          :key="index"
          :href="item.link"
          class="nav-item"
          :class="{ active: isActiveLink(item.link) }"
          @click="handleNavClick"
        >
          {{ item.text }}
        </a>
      </div>

      <!-- More Dropdown -->
      <div 
        v-if="hiddenItems.length > 0 || hasMoreItems"
        class="more-dropdown"
        @mouseenter="showMoreDropdown"
        @mouseleave="hideMoreDropdown"
      >
        <button 
          class="more-btn nav-item"
          @click="toggleMoreDropdown"
          :class="{ active: isMoreDropdownOpen }"
        >
          More
          <svg class="dropdown-icon" :class="{ rotated: isMoreDropdownOpen }" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </button>
        
        <div 
          class="more-dropdown-content"
          :class="{ show: isMoreDropdownOpen }"
        >
          <!-- Hidden Navigation Items -->
          <a 
            v-for="(item, index) in hiddenItems" 
            :key="'hidden-' + index"
            :href="item.link"
            class="dropdown-item"
            :class="{ active: isActiveLink(item.link) }"
            @click="handleDropdownClick"
          >
            {{ item.text }}
          </a>

          <!-- Nested More Items (if configured) -->
          <template v-if="moreItems.length > 0">
            <div class="dropdown-separator"></div>
            <div 
              v-for="(group, groupIndex) in moreItems"
              :key="'group-' + groupIndex"
              class="dropdown-group"
            >
              <div v-if="group.text" class="dropdown-group-title">{{ group.text }}</div>
              <a 
                v-for="(subItem, subIndex) in group.items || [group]"
                :key="'more-' + groupIndex + '-' + subIndex"
                :href="subItem.link"
                class="dropdown-item"
                :class="{ active: isActiveLink(subItem.link) }"
                @click="handleDropdownClick"
              >
                {{ subItem.text }}
              </a>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Social Links -->
    <div v-if="socialLinks.length > 0" class="nav-social">
      <a 
        v-for="(social, index) in socialLinks"
        :key="index"
        :href="social.link"
        :aria-label="social.icon"
        class="social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i :class="getSocialIcon(social.icon)"></i>
      </a>
    </div>

    <!-- Mobile Overlay -->
    <div 
      v-if="isMobileMenuOpen"
      class="mobile-overlay"
      @click="closeMobileMenu"
    ></div>
  </nav>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useData } from 'vitepress'

export default {
  name: 'ResponsiveNavigation',
  setup() {
    const { site } = useData()
    const navContainer = ref(null)
    const mainNavItems = ref(null)
    const isMobileMenuOpen = ref(false)
    const isMoreDropdownOpen = ref(false)
    const containerWidth = ref(0)
    const itemWidths = ref([])
    const moreButtonWidth = ref(120)

    // Site configuration
    const siteTitle = computed(() => site.value?.title || 'St. Francis Convent Inter College')
    const siteLogo = computed(() => site.value?.themeConfig?.logo || null)
    const socialLinks = computed(() => site.value?.themeConfig?.socialLinks || [])

    // Navigation items from VitePress config with fallback
    const allNavItems = computed(() => {
      try {
        const nav = site.value?.themeConfig?.nav || []
        const mainItems = nav.filter(item => item.text !== 'More' && !item.items)
        
        // Fallback navigation if config isn't loading
        if (mainItems.length === 0) {
          return [
            { text: 'Home', link: '/' },
            { text: 'About Us', link: '/about' },
            { text: 'Admissions', link: '/admissions' },
            { text: 'Contact Us', link: '/contact' }
          ]
        }
        
        return mainItems
      } catch (error) {
        console.warn('Error loading navigation config:', error)
        return [
          { text: 'Home', link: '/' },
          { text: 'About Us', link: '/about' },
          { text: 'Admissions', link: '/admissions' },
          { text: 'Contact Us', link: '/contact' }
        ]
      }
    })

    // Items that go into the "More" dropdown from config
    const moreItems = computed(() => {
      try {
        const nav = site.value?.themeConfig?.nav || []
        const moreItem = nav.find(item => item.text === 'More')
        return moreItem?.items || []
      } catch (error) {
        console.warn('Error loading More navigation items:', error)
        return []
      }
    })

    // Include dropdown navigation items from About Us and Admissions
    const dropdownNavItems = computed(() => {
      try {
        const nav = site.value?.themeConfig?.nav || []
        const dropdownItems = nav.filter(item => item.items && item.text !== 'More')
        
        let flatItems = []
        dropdownItems.forEach(dropdown => {
          if (dropdown.items) {
            dropdown.items.forEach(subItem => {
              flatItems.push({
                text: subItem.text,
                link: subItem.link,
                parent: dropdown.text
              })
            })
          }
        })
        
        return flatItems
      } catch (error) {
        console.warn('Error loading dropdown navigation items:', error)
        return []
      }
    })

    // Responsive breakpoint
    const isMobile = computed(() => containerWidth.value < 768)

    // Items visible in main nav vs hidden in More dropdown
    const visibleItems = ref([])
    const hiddenItems = ref([])

    // Check if there are configured More items
    const hasMoreItems = computed(() => moreItems.value.length > 0)

    // Get social icon class
    const getSocialIcon = (iconType) => {
      const iconMap = {
        'github': 'fab fa-github',
        'youtube': 'fab fa-youtube',
        'facebook': 'fab fa-facebook',
        'instagram': 'fab fa-instagram',
        'twitter': 'fab fa-twitter',
        'linkedin': 'fab fa-linkedin'
      }
      return iconMap[iconType] || 'fas fa-link'
    }

    // Calculate responsive navigation
    const calculateResponsiveNav = () => {
      if (isMobile.value) {
        // On mobile, show all main items in hamburger menu
        visibleItems.value = [...allNavItems.value]
        hiddenItems.value = []
        return
      }

      // On desktop, calculate which items fit
      const brandWidth = 200 // Estimated brand width
      const socialWidth = socialLinks.value.length * 40 // Estimated social links width
      const availableWidth = containerWidth.value - brandWidth - socialWidth - moreButtonWidth.value - 100
      let totalWidth = 0
      let visibleCount = 0

      for (let i = 0; i < allNavItems.value.length; i++) {
        const itemWidth = itemWidths.value[i] || 120
        if (totalWidth + itemWidth <= availableWidth) {
          totalWidth += itemWidth
          visibleCount++
        } else {
          break
        }
      }

      // Always show at least 2 items and always have More if there are hidden items or configured More items
      visibleCount = Math.max(2, visibleCount)
      if (hasMoreItems.value || allNavItems.value.length > visibleCount) {
        visibleCount = Math.min(visibleCount, allNavItems.value.length - 1)
      }

      visibleItems.value = allNavItems.value.slice(0, visibleCount)
      hiddenItems.value = allNavItems.value.slice(visibleCount)
    }

    // Measure item widths
    const measureItemWidths = async () => {
      await nextTick()
      if (!mainNavItems.value) return

      const items = mainNavItems.value.querySelectorAll('.nav-item')
      itemWidths.value = Array.from(items).map(item => item.offsetWidth + 32) // Increased margin
    }

    // Handle window resize with debouncing
    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        if (navContainer.value) {
          containerWidth.value = navContainer.value.offsetWidth
          calculateResponsiveNav()
        }
      }, 100)
    }

    // Mobile menu functions
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
      if (isMobileMenuOpen.value) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false
      document.body.style.overflow = ''
    }

    // More dropdown functions
    const showMoreDropdown = () => {
      if (!isMobile.value) {
        isMoreDropdownOpen.value = true
      }
    }

    const hideMoreDropdown = () => {
      if (!isMobile.value) {
        setTimeout(() => {
          isMoreDropdownOpen.value = false
        }, 100)
      }
    }

    const toggleMoreDropdown = () => {
      isMoreDropdownOpen.value = !isMoreDropdownOpen.value
    }

    // Navigation handlers
    const handleNavClick = (event) => {
      if (isMobile.value) {
        closeMobileMenu()
      }
    }

    const handleDropdownClick = (event) => {
      isMoreDropdownOpen.value = false
      if (isMobile.value) {
        closeMobileMenu()
      }
    }

    // Check if link is active
    const isActiveLink = (link) => {
      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname
        return currentPath === link || (link !== '/' && currentPath.startsWith(link))
      }
      return false
    }

    // Lifecycle
    onMounted(async () => {
      // Wait a bit for VitePress to initialize
      await new Promise(resolve => setTimeout(resolve, 100))
      
      handleResize()
      await measureItemWidths()
      calculateResponsiveNav()
      
      window.addEventListener('resize', handleResize)
      
      // Debug logging
      console.log('Navigation items loaded:', allNavItems.value)
      console.log('More items loaded:', moreItems.value)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
      document.body.style.overflow = ''
      clearTimeout(resizeTimeout)
    })

    return {
      navContainer,
      mainNavItems,
      isMobileMenuOpen,
      isMoreDropdownOpen,
      visibleItems,
      hiddenItems,
      moreItems,
      dropdownNavItems,
      hasMoreItems,
      isMobile,
      siteTitle,
      siteLogo,
      socialLinks,
      getSocialIcon,
      toggleMobileMenu,
      closeMobileMenu,
      showMoreDropdown,
      hideMoreDropdown,
      toggleMoreDropdown,
      handleNavClick,
      handleDropdownClick,
      isActiveLink
    }
  }
}
</script>

<style scoped>
.responsive-nav {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

/* Logo/Brand Section */
.nav-brand {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.brand-link {
  text-decoration: none;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand-logo {
  width: 32px;
  height: 32px;
}

.brand-title {
  font-size: 1.2rem;
  font-weight: 600;
}

/* Hamburger Button */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.hamburger-btn span {
  width: 24px;
  height: 2px;
  background: var(--vp-c-text-1);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-btn.active span:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Navigation Items Container */
.nav-items-container {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}

.main-nav-items {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Navigation Items */
.nav-item {
  color: var(--vp-c-text-1);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.3s ease;
  position: relative;
}

.nav-item:hover {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-brand-dimm);
}

.nav-item.active {
  color: var(--vp-c-brand);
  font-weight: 600;
}

/* More Dropdown */
.more-dropdown {
  position: relative;
  display: inline-block;
}

.more-btn {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  border: none;
  background: transparent;
}

.dropdown-icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
  transition: transform 0.3s ease;
}

.dropdown-icon.rotated {
  transform: rotate(180deg);
}

.more-dropdown-content {
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 200px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: var(--vp-shadow-3);
  padding: 0.5rem 0;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.more-dropdown-content.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  display: block;
  color: var(--vp-c-text-1);
  text-decoration: none;
  padding: 0.75rem 1rem;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.dropdown-item:hover {
  background-color: var(--vp-c-brand-dimm);
  color: var(--vp-c-brand);
}

.dropdown-item.active {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-brand-dimm);
  font-weight: 600;
}

.dropdown-separator {
  height: 1px;
  background: var(--vp-c-divider);
  margin: 0.5rem 0;
}

.dropdown-group-title {
  padding: 0.5rem 1rem 0.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Social Links */
.nav-social {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.social-link {
  color: var(--vp-c-text-1);
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.social-link:hover {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-brand-dimm);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .hamburger-btn {
    display: flex;
  }

  .nav-brand {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    flex: none;
  }

  .nav-social {
    position: absolute;
    right: 0;
    flex: none;
  }

  .nav-items-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--vp-c-bg);
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 4rem 2rem 2rem;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transform: translateX(-100%);
    transition: all 0.3s ease;
    overflow-y: auto;
  }

  .nav-items-container.mobile-open {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

  .main-nav-items {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    width: 100%;
  }

  .nav-item {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid var(--vp-c-divider);
    border-radius: 0;
    font-size: 1.1rem;
  }

  .more-dropdown {
    width: 100%;
  }

  .more-dropdown-content {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    border: none;
    box-shadow: none;
    background: var(--vp-c-bg-soft);
    border-radius: 0;
    margin-top: 0.5rem;
  }

  .more-dropdown-content.show {
    display: block;
  }

  .dropdown-item {
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid var(--vp-c-divider-light);
  }

  /* Mobile brand adjustments */
  .brand-title {
    font-size: 1rem;
  }

  .brand-logo {
    width: 28px;
    height: 28px;
  }
}

.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

/* Smooth transitions */
* {
  transition: color 0.3s ease, background-color 0.3s ease;
}
</style> 