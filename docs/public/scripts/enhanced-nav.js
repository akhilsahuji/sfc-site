// Enhanced VitePress Navigation with Smart Overflow Menu
(function() {
  'use strict';

  // Configuration
  const config = {
    priorityItems: ['Home', 'About Us', 'Admissions', 'Contact Us'],
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1200
    },
    maxVisibleItems: {
      tablet: 3,
      desktop: 4,
      large: 6
    }
  };

  // Global state
  let overflowMenu = null;
  let overflowTrigger = null;
  let isOverflowOpen = false;
  let navItems = [];
  let hiddenItems = [];

  // Initialize the enhanced navigation
  function initEnhancedNav() {
    if (typeof window === 'undefined') return;
    
    // Wait for VitePress to load
    const checkForNav = () => {
      const navbar = document.querySelector('.VPNavBar');
      if (navbar) {
        setupEnhancedNavigation();
      } else {
        setTimeout(checkForNav, 100);
      }
    };
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', checkForNav);
    } else {
      checkForNav();
    }
  }

  // Setup the enhanced navigation
  function setupEnhancedNavigation() {
    const navbar = document.querySelector('.VPNavBar');
    const menuGroup = navbar?.querySelector('.VPNavBarMenuGroup');
    
    if (!navbar || !menuGroup) return;

    // Get all navigation items
    navItems = Array.from(menuGroup.querySelectorAll('.VPNavBarMenuLink'));
    
    if (navItems.length === 0) return;

    // Create overflow menu structure
    createOverflowMenu(menuGroup);
    
    // Setup responsive behavior
    setupResponsiveBehavior();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initial calculation
    calculateVisibleItems();
  }

  // Create the overflow menu DOM structure
  function createOverflowMenu(menuGroup) {
    // Create overflow trigger button
    overflowTrigger = document.createElement('button');
    overflowTrigger.className = 'nav-overflow-trigger';
    overflowTrigger.innerHTML = '⋯';
    overflowTrigger.setAttribute('aria-label', 'More navigation options');
    overflowTrigger.setAttribute('aria-expanded', 'false');
    
    // Create overflow menu container
    overflowMenu = document.createElement('div');
    overflowMenu.className = 'nav-overflow-menu';
    overflowMenu.setAttribute('role', 'menu');
    
    // Append to menu group
    menuGroup.appendChild(overflowTrigger);
    menuGroup.appendChild(overflowMenu);
  }

  // Setup responsive behavior
  function setupResponsiveBehavior() {
    const mediaQuery = window.matchMedia(`(min-width: ${config.breakpoints.mobile}px)`);
    
    function handleResize() {
      if (mediaQuery.matches) {
        calculateVisibleItems();
      } else {
        // Mobile: hide overflow menu, show all items in hamburger
        showAllItems();
        hideOverflowMenu();
      }
    }
    
    mediaQuery.addListener(handleResize);
    handleResize(); // Initial call
  }

  // Calculate which items should be visible
  function calculateVisibleItems() {
    const screenWidth = window.innerWidth;
    let maxVisible;
    
    if (screenWidth >= config.breakpoints.desktop) {
      maxVisible = config.maxVisibleItems.large;
    } else if (screenWidth >= config.breakpoints.tablet) {
      maxVisible = config.maxVisibleItems.desktop;
    } else {
      maxVisible = config.maxVisibleItems.tablet;
    }
    
    // Always prioritize certain items
    const priorityItems = getPriorityItems();
    const regularItems = navItems.filter(item => !priorityItems.includes(item));
    
    // Determine visible and hidden items
    const visibleItems = [
      ...priorityItems.slice(0, maxVisible),
      ...regularItems.slice(0, Math.max(0, maxVisible - priorityItems.length))
    ].slice(0, maxVisible);
    
    hiddenItems = navItems.filter(item => !visibleItems.includes(item));
    
    // Update DOM
    updateNavigationVisibility(visibleItems, hiddenItems);
  }

  // Get priority navigation items
  function getPriorityItems() {
    return navItems.filter(item => {
      const text = item.textContent.trim();
      return config.priorityItems.includes(text);
    });
  }

  // Update navigation visibility
  function updateNavigationVisibility(visible, hidden) {
    // Show/hide nav items
    navItems.forEach(item => {
      if (visible.includes(item)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
    
    // Update overflow menu
    if (hidden.length > 0) {
      populateOverflowMenu(hidden);
      overflowTrigger.style.display = 'flex';
    } else {
      overflowTrigger.style.display = 'none';
      overflowMenu.innerHTML = '';
    }
  }

  // Show all items (for mobile)
  function showAllItems() {
    navItems.forEach(item => {
      item.style.display = '';
    });
    overflowTrigger.style.display = 'none';
  }

  // Populate overflow menu with hidden items
  function populateOverflowMenu(items) {
    overflowMenu.innerHTML = '';
    
    items.forEach(item => {
      const link = item.querySelector('a') || item;
      const dropdownItems = getDropdownItems(item);
      
      if (dropdownItems.length > 0) {
        // Handle dropdown items
        const group = document.createElement('div');
        group.className = 'nav-overflow-group';
        group.textContent = link.textContent.trim();
        overflowMenu.appendChild(group);
        
        dropdownItems.forEach(subItem => {
          const overflowSublink = createOverflowLink(subItem, 'nav-overflow-sublink');
          overflowMenu.appendChild(overflowSublink);
        });
      } else {
        // Handle regular items
        const overflowItem = createOverflowLink(link, 'nav-overflow-link');
        overflowMenu.appendChild(overflowItem);
      }
    });
  }

  // Create overflow menu link
  function createOverflowLink(originalLink, className) {
    const container = document.createElement('div');
    container.className = 'nav-overflow-item';
    
    const link = document.createElement('a');
    link.className = className;
    link.href = originalLink.href || '#';
    link.textContent = originalLink.textContent.trim();
    link.setAttribute('role', 'menuitem');
    
    // Copy any data attributes
    Array.from(originalLink.attributes).forEach(attr => {
      if (attr.name.startsWith('data-')) {
        link.setAttribute(attr.name, attr.value);
      }
    });
    
    container.appendChild(link);
    return container;
  }

  // Get dropdown items from a nav item
  function getDropdownItems(item) {
    const flyout = item.querySelector('.VPFlyout');
    if (!flyout) return [];
    
    const items = flyout.querySelectorAll('a');
    return Array.from(items);
  }

  // Setup event listeners
  function setupEventListeners() {
    // Overflow trigger click
    overflowTrigger?.addEventListener('click', toggleOverflowMenu);
    
    // Click outside to close
    document.addEventListener('click', handleClickOutside);
    
    // Escape key to close
    document.addEventListener('keydown', handleKeydown);
    
    // Window resize
    window.addEventListener('resize', debounce(calculateVisibleItems, 250));
    
    // Route changes (for SPA navigation)
    if (typeof window !== 'undefined' && window.history) {
      window.addEventListener('popstate', () => {
        setTimeout(calculateVisibleItems, 100);
      });
    }
  }

  // Toggle overflow menu
  function toggleOverflowMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (isOverflowOpen) {
      hideOverflowMenu();
    } else {
      showOverflowMenu();
    }
  }

  // Show overflow menu
  function showOverflowMenu() {
    if (!overflowMenu) return;
    
    overflowMenu.classList.add('open');
    overflowTrigger.setAttribute('aria-expanded', 'true');
    isOverflowOpen = true;
    
    // Focus first menu item
    const firstLink = overflowMenu.querySelector('a');
    if (firstLink) {
      setTimeout(() => firstLink.focus(), 100);
    }
  }

  // Hide overflow menu
  function hideOverflowMenu() {
    if (!overflowMenu) return;
    
    overflowMenu.classList.remove('open');
    overflowTrigger?.setAttribute('aria-expanded', 'false');
    isOverflowOpen = false;
  }

  // Handle click outside
  function handleClickOutside(e) {
    if (!overflowMenu || !overflowTrigger) return;
    
    if (!overflowMenu.contains(e.target) && !overflowTrigger.contains(e.target)) {
      hideOverflowMenu();
    }
  }

  // Handle keyboard navigation
  function handleKeydown(e) {
    if (e.key === 'Escape' && isOverflowOpen) {
      hideOverflowMenu();
      overflowTrigger?.focus();
    }
    
    if (isOverflowOpen && overflowMenu) {
      const focusableElements = overflowMenu.querySelectorAll('a');
      const currentIndex = Array.from(focusableElements).indexOf(document.activeElement);
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % focusableElements.length;
        focusableElements[nextIndex]?.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = currentIndex <= 0 ? focusableElements.length - 1 : currentIndex - 1;
        focusableElements[prevIndex]?.focus();
      }
    }
  }

  // Utility: Debounce function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Handle SPA navigation updates
  function handleRouteChange() {
    setTimeout(() => {
      setupEnhancedNavigation();
    }, 100);
  }

  // Initialize when DOM is ready
  if (typeof window !== 'undefined') {
    initEnhancedNav();
    
    // Listen for Vue router changes (VitePress uses Vue Router)
    if (window.Vue && window.Vue.version) {
      // Handle Vue 3 router changes
      const observer = new MutationObserver(() => {
        const newNavbar = document.querySelector('.VPNavBar');
        if (newNavbar && !newNavbar.querySelector('.nav-overflow-trigger')) {
          handleRouteChange();
        }
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }

  // Export for potential external use
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      initEnhancedNav,
      calculateVisibleItems,
      hideOverflowMenu
    };
  }
})(); 