<template>
  <div class="modern-layout">
    <!-- Top Header Bar -->
    <div class="top-header">
      <div class="container">
        <div class="header-info">
          <span class="established">Est. 1894</span>
          <span class="divider">|</span>
          <span class="affiliation">ICSE & ISC Board</span>
          <span class="divider">|</span>
          <span class="contact">📞 +91 7376338453</span>
        </div>
        <div class="header-actions">
          <a href="/contact" class="quick-link">Admissions Open</a>
          <a href="/gallery" class="quick-link">Virtual Tour</a>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <header class="main-header">
      <div class="container">
        <div class="header-content">
          <!-- School Identity -->
          <div class="school-identity">
            <div class="logo-section">
              <img src="/images/logo.png" alt="School Logo" class="school-logo" />
              <div class="school-info">
                <h1 class="school-name">St. Francis Convent Inter College</h1>
                <p class="school-location">Jhansi, Uttar Pradesh</p>
              </div>
            </div>
          </div>

          <!-- Navigation -->
          <nav class="main-navigation">
            <ul class="nav-menu">
              <li><a href="/" class="nav-link">Home</a></li>
              <li class="nav-dropdown">
                <a href="#" class="nav-link">About Us <i class="chevron-down"></i></a>
                <div class="dropdown-menu">
                  <a href="/about/patron">Our Patron</a>
                  <a href="/about/foundress">Our Foundress</a>
                  <a href="/about/history">History</a>
                  <a href="/about/mission">Mission & Vision</a>
                </div>
              </li>
              <li class="nav-dropdown">
                <a href="#" class="nav-link">Academics <i class="chevron-down"></i></a>
                <div class="dropdown-menu">
                  <a href="/prospectus/courses">Curriculum</a>
                  <a href="/achievements">Achievements</a>
                  <a href="/prospectus/school-hours">School Hours</a>
                </div>
              </li>
              <li><a href="/gallery/photos" class="nav-link">Gallery</a></li>
              <li><a href="/contact" class="nav-link cta-link">Contact</a></li>
            </ul>
            
            <!-- Mobile Menu Toggle -->
            <button class="mobile-menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <slot />
    </main>

    <!-- Modern Footer -->
    <footer class="modern-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-logo">
              <img src="/images/logo.png" alt="School Logo" />
              <h3>St. Francis Convent Inter College</h3>
            </div>
            <p class="footer-description">
              Excellence in Education Since 1894. Nurturing minds, building futures.
            </p>
            <div class="social-links">
              <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
              <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
              <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/prospectus/admission">Admissions</a></li>
              <li><a href="/achievements">Achievements</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Academic</h4>
            <ul>
              <li><a href="/prospectus/courses">ICSE/ISC Curriculum</a></li>
              <li><a href="/clubs">School Clubs</a></li>
              <li><a href="/gallery">Photo Gallery</a></li>
              <li><a href="/resources/notices">Notice Board</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Contact Info</h4>
            <div class="contact-info">
              <p><i class="fas fa-map-marker-alt"></i> Jhansi Cantonment, UP 284001</p>
              <p><i class="fas fa-phone"></i> +91 7376338453</p>
              <p><i class="fas fa-envelope"></i> sfcicjhansi@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 St. Francis Convent Inter College. All rights reserved.</p>
          <p>Designed with ❤️ for educational excellence</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Mobile menu functionality
  const mobileToggle = document.querySelector('.mobile-menu-toggle')
  const navMenu = document.querySelector('.nav-menu')
  
  mobileToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('mobile-active')
    mobileToggle.classList.toggle('active')
  })
  
  // Dropdown functionality
  const dropdowns = document.querySelectorAll('.nav-dropdown')
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
      dropdown.querySelector('.dropdown-menu')?.classList.add('show')
    })
    dropdown.addEventListener('mouseleave', () => {
      dropdown.querySelector('.dropdown-menu')?.classList.remove('show')
    })
  })
})
</script>

<style scoped>
/* Modern Layout Styles */
.modern-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Top Header */
.top-header {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  padding: 8px 0;
  font-size: 14px;
}

.top-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.divider {
  opacity: 0.6;
}

.header-actions {
  display: flex;
  gap: 16px;
}

.quick-link {
  color: #fbbf24;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.quick-link:hover {
  color: #f59e0b;
}

/* Main Header */
.main-header {
  background: white;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}

.school-identity {
  flex: 1;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 16px;
}

.school-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.school-name {
  font-size: 24px;
  font-weight: 700;
  color: #1e3a8a;
  margin: 0;
  line-height: 1.2;
}

.school-location {
  font-size: 14px;
  color: #6b7280;
  margin: 4px 0 0 0;
}

/* Navigation */
.main-navigation {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 32px;
  align-items: center;
}

.nav-link {
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  padding: 12px 0;
  position: relative;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-link:hover {
  color: #1e3a8a;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #1e3a8a;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.cta-link {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white !important;
  padding: 12px 24px;
  border-radius: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(30, 58, 138, 0.3);
}

.cta-link::after {
  display: none;
}

/* Dropdown */
.nav-dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 200px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 12px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 100;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu a {
  display: block;
  padding: 12px 20px;
  color: #374151;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.dropdown-menu a:hover {
  background: #f3f4f6;
  color: #1e3a8a;
}

/* Mobile Menu */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  gap: 4px;
}

.mobile-menu-toggle span {
  width: 24px;
  height: 2px;
  background: #374151;
  transition: all 0.3s ease;
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Main Content */
.main-content {
  flex: 1;
}

/* Modern Footer */
.modern-footer {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  color: white;
  padding: 60px 0 20px;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3,
.footer-section h4 {
  color: #fbbf24;
  margin-bottom: 20px;
  font-weight: 600;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.footer-logo img {
  width: 40px;
  height: 40px;
}

.footer-description {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(251, 191, 36, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fbbf24;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #fbbf24;
  color: #1f2937;
  transform: translateY(-2px);
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 12px;
}

.footer-section ul a {
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul a:hover {
  color: #fbbf24;
}

.contact-info p {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  color: #d1d5db;
}

.contact-info i {
  color: #fbbf24;
  width: 16px;
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 20px;
  text-align: center;
  color: #9ca3af;
}

/* Responsive Design */
@media (max-width: 768px) {
  .top-header .container {
    flex-direction: column;
    gap: 8px;
  }
  
  .header-content {
    flex-direction: column;
    gap: 20px;
  }
  
  .school-name {
    font-size: 20px;
  }
  
  .nav-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  }
  
  .nav-menu.mobile-active {
    display: flex;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Chevron Icon */
.chevron-down::after {
  content: '▼';
  font-size: 10px;
  margin-left: 4px;
}
</style>