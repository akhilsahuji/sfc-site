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
/* Footer */
.footer {
  background: #2c5aa0;
  color: white;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer-section h3 {
  color: #ffd700;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.footer-section h4 {
  color: #ffd700;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.footer-section p {
  margin-bottom: 8px;
  color: #ddd;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.footer-section ul li a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #ffd700;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #4a6bb3;
  color: #ddd;
}

/* Responsive Design */
@media (max-width: 480px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style> 