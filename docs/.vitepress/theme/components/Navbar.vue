<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Logo and School Name -->
      <div class="nav-brand">
        <img src="/images/logo.png" alt="School Logo" class="nav-logo" />
        <div class="school-name">
          <h1>St. Francis Convent Inter College, Jhansi</h1>
        </div>
      </div>

      <!-- Navigation Menu -->
      <ul class="nav-menu" :class="{ active: isMenuOpen }">
        <li class="nav-item">
          <a href="/" class="nav-link" @click="closeMenu">Home</a>
        </li>
        <li class="nav-item">
          <a href="#about" class="nav-link" @click="closeMenu">About</a>
        </li>
        <li class="nav-item">
          <a href="#academics" class="nav-link" @click="closeMenu">Academics</a>
        </li>
        <li class="nav-item">
          <a href="#admissions" class="nav-link" @click="closeMenu">Admissions</a>
        </li>
        <li class="nav-item">
          <a href="#facilities" class="nav-link" @click="closeMenu">Facilities</a>
        </li>
        <li class="nav-item">
          <a href="#gallery" class="nav-link" @click="closeMenu">Gallery</a>
        </li>
        <li class="nav-item">
          <a href="#contact" class="nav-link" @click="closeMenu">Contact</a>
        </li>
      </ul>

      <!-- Mobile Menu Toggle -->
      <div class="hamburger" :class="{ active: isMenuOpen }" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  },
  mounted() {
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target && target.closest && !target.closest('.navbar')) {
        this.isMenuOpen = false;
      }
    });
  }
}
</script>

<style scoped>
/* Navigation Bar */
.navbar {
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 90px;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-logo {
  width: 70px;
  height: 70px;
  object-fit: contain;
}

.school-name h1 {
  font-size: 1.6rem;
  color: #2c5aa0;
  margin: 0;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
}

.nav-item {
  position: relative;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1rem;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #2c5aa0;
  background: rgba(44, 90, 160, 0.1);
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 5px;
  left: 50%;
  background: #2c5aa0;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 70%;
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 5px;
}

.bar {
  width: 25px;
  height: 3px;
  background: #333;
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

.hamburger.active .bar:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.active .bar:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 15px;
    min-height: 70px;
  }
  
  .nav-brand {
    gap: 15px;
  }
  
  .school-name h1 {
    font-size: 1.2rem;
  }
  
  .nav-logo {
    width: 50px;
    height: 50px;
  }

  .hamburger {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: white;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    padding: 20px 0;
    gap: 0;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-item {
    margin: 10px 0;
  }

  .nav-link {
    padding: 15px 20px;
    display: block;
    width: 100%;
  }

  .nav-link::after {
    display: none;
  }
}

@media (max-width: 480px) {
  .nav-brand {
    gap: 10px;
  }
  
  .school-name h1 {
    font-size: 0.9rem;
    white-space: normal;
    line-height: 1.1;
  }
  
  .nav-logo {
    width: 40px;
    height: 40px;
  }
  
  .nav-container {
    min-height: 60px;
  }
}
</style> 