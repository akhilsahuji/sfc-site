---
layout: page
title: Home
---

<ModernHero />

<ModernFeatures />

<section class="section bg-secondary">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Latest News & Announcements</h2>
      <p class="section-subtitle">Stay updated with the latest happenings at St. Francis</p>
    </div>
    
    <div class="grid grid-3">
      <div class="card">
        <div class="card-body">
          <div class="news-date">December 15, 2024</div>
          <h3>Admissions Open for 2025-26</h3>
          <p>Applications are now being accepted for all classes. Limited seats available with merit-based selection.</p>
          <a href="/prospectus/admission" class="btn btn-primary">Apply Now</a>
        </div>
      </div>
      
      <div class="card">
        <div class="card-body">
          <div class="news-date">December 10, 2024</div>
          <h3>Outstanding Board Results 2024</h3>
          <p>We are proud to announce 100% pass rate in both ICSE and ISC examinations with exceptional distinctions.</p>
          <a href="/achievements" class="btn btn-secondary">View Results</a>
        </div>
      </div>
      
      <div class="card">
        <div class="card-body">
          <div class="news-date">December 5, 2024</div>
          <h3>Annual Sports Day 2024</h3>
          <p>Join us for our annual sports day celebration showcasing student talents in various athletic events.</p>
          <a href="/gallery/photos" class="btn btn-secondary">View Gallery</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Our Legacy</h2>
      <p class="section-subtitle">126 years of educational excellence and counting</p>
    </div>
    
    <div class="grid grid-2" style="align-items: center;">
      <div>
        <h3 style="color: var(--primary-blue); font-size: 2rem; margin-bottom: 1.5rem;">Established in 1894</h3>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem;">
          St. Francis Convent Inter College is one of the top-most English medium schools in Jhansi. 
          Our school was founded in 1894 and is affiliated to the ISC and ICSE Board with classes 
          ranging from I to XII, including a pre-primary section.
        </p>
        
        <div class="stats-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; margin-bottom: 2rem;">
          <div class="stat-item" style="text-align: center;">
            <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent-gold);">126+</div>
            <div style="color: var(--text-secondary);">Years of Excellence</div>
          </div>
          <div class="stat-item" style="text-align: center;">
            <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent-gold);">100%</div>
            <div style="color: var(--text-secondary);">Board Results</div>
          </div>
        </div>
        
        <a href="/about/history" class="btn btn-primary">Learn Our History</a>
      </div>
      
      <div>
        <img src="/images/history/Old-Convent-School.jpg" alt="Historical School Building" 
             style="width: 100%; border-radius: var(--radius-xl); box-shadow: var(--shadow-xl);" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-primary" style="color: white;">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title" style="color: white;">Ready to Join Our Family?</h2>
      <p class="section-subtitle" style="color: rgba(255, 255, 255, 0.9);">
        Take the first step towards your child's bright future
      </p>
    </div>
    
    <div style="text-align: center;">
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">
        <a href="/prospectus/admission" class="btn btn-accent">Apply for Admission</a>
        <a href="/contact" class="btn btn-secondary">Schedule a Visit</a>
        <a href="/gallery/videos" class="btn" style="background: rgba(255, 255, 255, 0.1); color: white; border: 1px solid rgba(255, 255, 255, 0.3);">Virtual Tour</a>
      </div>
      
      <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; font-size: 1.1rem;">
        <div>📞 +91 7376338453</div>
        <div>📧 sfcicjhansi@gmail.com</div>
        <div>🌐 www.sfcjhs.in</div>
      </div>
    </div>
  </div>
</section>

<style scoped>
.news-date {
  color: var(--accent-gold);
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
}

.card h3 {
  color: var(--primary-blue);
  margin-bottom: 16px;
  font-size: 1.25rem;
}

.card p {
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr !important;
    gap: 1rem !important;
  }
  
  .grid {
    grid-template-columns: 1fr !important;
  }
}
</style>