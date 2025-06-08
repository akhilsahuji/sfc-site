<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>St. Francis Convent Inter College</h3>
          <p>Jhansi, Uttar Pradesh</p>
          <p>Established: 1894</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#academics">Academics</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contact Info</h4>
          <p>Email: info@sfcjhansi.edu.in</p>
          <p>Phone: +91-510-XXXXXXX</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 St. Francis Convent Inter College. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'Footer'
}
</script>

<style scoped>
@import "open-props/style";

.footer {
  background: var(--blue-6);
  color: var(--gray-0);
  margin-block-start: auto;
}

.footer-container {
  max-width: var(--size-content-3);
  margin-inline: auto;
  padding-block: var(--size-8) var(--size-4);
  padding-inline: var(--size-4);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  gap: var(--size-6);
  margin-block-end: var(--size-6);
}

.footer-section h3 {
  color: var(--yellow-3);
  margin-block-end: var(--size-3);
  font-size: clamp(var(--font-size-2), 1.5vw, var(--font-size-3));
  font-weight: var(--font-weight-6);
  font-family: var(--font-serif);
}

.footer-section h4 {
  color: var(--yellow-3);
  margin-block-end: var(--size-2);
  font-size: clamp(var(--font-size-1), 1.2vw, var(--font-size-2));
  font-weight: var(--font-weight-5);
}

.footer-section p {
  margin-block-end: var(--size-2);
  color: var(--gray-2);
  line-height: var(--font-lineheight-3);
  font-size: var(--font-size-1);
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-block-end: var(--size-2);
}

.footer-section ul li a {
  color: var(--gray-2);
  text-decoration: none;
  transition: color var(--animation-fade-in) var(--ease-3);
  font-size: var(--font-size-1);
  display: inline-block;
  position: relative;
}

.footer-section ul li a:hover {
  color: var(--yellow-3);
  transform: translateX(var(--size-1));
}

.footer-section ul li a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--yellow-3);
  transition: width var(--animation-fade-in) var(--ease-3);
}

.footer-section ul li a:hover::after {
  width: 100%;
}

.footer-bottom {
  text-align: center;
  padding-block-start: var(--size-4);
  border-block-start: var(--border-size-1) solid var(--blue-5);
  color: var(--gray-2);
}

.footer-bottom p {
  font-size: var(--font-size-0);
  margin: 0;
}

/* Responsive Design */
@media (width <= 768px) {
  .footer-container {
    padding-inline: var(--size-3);
  }
  
  .footer-content {
    gap: var(--size-4);
    text-align: center;
  }
}

@media (width <= 480px) {
  .footer-container {
    padding-inline: var(--size-2);
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--size-3);
  }
  
  .footer-section {
    text-align: center;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .footer {
    background: var(--blue-8);
  }
  
  .footer-bottom {
    border-block-start-color: var(--blue-7);
  }
}

/* Animation for footer sections */
@media (prefers-reduced-motion: no-preference) {
  .footer-section {
    animation: footer-fade-in var(--animation-fade-in) var(--ease-3) both;
  }
  
  .footer-section:nth-child(2) { animation-delay: 0.1s; }
  .footer-section:nth-child(3) { animation-delay: 0.2s; }
}

@keyframes footer-fade-in {
  from {
    opacity: 0;
    transform: translateY(var(--size-2));
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 