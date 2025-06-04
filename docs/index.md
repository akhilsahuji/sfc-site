---
layout: home
title: Home

# hero:
#   name: "St. Francis Convent Inter College"
#   text: "Excellence in Education Since 1894"
#   tagline: "Nurturing Minds, Building Futures in Jhansi"
#   image:
#     src: /images/logo.png
#     alt: St. Francis Convent Inter College Logo
#   actions:
#     - theme: brand
#       text: About Our School
#       link: /about

carouselHero:
  slides:
    - image: '/images/logo.png'
      title: 'St. Francis Convent Inter College'
      description: 'Excellence in Education Since 1894 - Nurturing Minds, Building Futures in Jhansi'
      buttons:
        - text: 'About Our School'
          href: '/about'
          variant: 'primary'
        - text: 'Admissions'
          href: '/admissions'
          variant: 'secondary'
    - image: '/images/students-studying.jpg'
      title: 'Outstanding Academic Results'
      description: '100% pass rate in ICSE and ISC examinations with exceptional distinctions'
      buttons:
        - text: 'View Results'
          href: '/academics'
          variant: 'primary'
    - image: '/images/campus-life.jpg'
      title: 'Admissions Open 2024-25'
      description: 'Applications now being accepted for all classes. Limited seats available with merit-based selection.'
      buttons:
        - text: 'Apply Now'
          href: '/admissions'
          variant: 'primary'
        - text: 'Contact Us'
          href: '/contact'
          variant: 'secondary'
  autoplay: true
  autoplayInterval: 5000
  showNavigation: true
  showIndicators: true
  height: '70vh'

# features:
#   - icon: 🎓
#     title: ICSE/ISC Curriculum
#     details: Comprehensive curriculum designed to develop critical thinking and analytical skills for academic excellence.
#   - icon: 👨‍🏫
#     title: Experienced Faculty
#     details: Qualified and dedicated teachers with years of experience in nurturing young minds.
#   - icon: 🏢
#     title: Modern Infrastructure
#     details: Well-equipped classrooms, laboratories, library, and sports facilities for holistic development.
#   - icon: 🏆
#     title: Outstanding Results
#     details: 100% pass rate with exceptional performance in ICSE and ISC board examinations consistently.
#   - icon: 👥
#     title: Small Class Sizes
#     details: Individual attention and personalized learning approach for every student's success.
#   - icon: ❤️
#     title: Values-Based Education
#     details: Character building and moral development alongside academic excellence.
#   - icon: 📚
#     title: Admissions Open 2024-25
#     details: Applications are now being accepted for all classes. Limited seats available with merit-based selection.
#   - icon: 📞
#     title: Contact Information
#     details: Phone - +91 7376338453, +91 94500 71734 | Email - sfcicjhansi@gmail.com
#   - icon: 🌐
#     title: Online Resources
#     details: Parent Portal - www.sfcjhs.in | Download our mobile app from Google Play Store
---

<CarouselHero 
  :slides="$frontmatter.carouselHero.slides"
  :autoplay="$frontmatter.carouselHero.autoplay"
  :autoplayInterval="$frontmatter.carouselHero.autoplayInterval"
  :showNavigation="$frontmatter.carouselHero.showNavigation"
  :showIndicators="$frontmatter.carouselHero.showIndicators"
  :height="$frontmatter.carouselHero.height"
/>

## 🏆 Outstanding Board Results 2024
We are proud to announce that our students have achieved **100% pass rate** in both ICSE and ISC examinations with exceptional distinctions.

## 🎓 Admissions Open for 2024-25
Applications are now being accepted for Class XI and other classes for the academic year 2024-25. Limited seats available.

## 📚 Academic Excellence
Our school follows the **ICSE curriculum** which focuses on comprehensive education, critical thinking, and holistic development of students.

## 🏫 School Information
- **Address:** St. Francis Convent Inter College, Jhansi, Uttar Pradesh, India
- **Phone:** +91 7376338453, +91 94500 71734
- **Email:** sfcicjhansi@gmail.com
- **School Hours:** Monday - Friday: 8:00 AM - 4:00 PM, Saturday: 8:00 AM - 1:00 PM
- **Admission Office:** Monday - Saturday: 9:00 AM - 3:00 PM

## 🔗 Important Links
- **Parent Portal:** [www.sfcjhs.in](https://www.sfcjhs.in/)
- **Mobile App:** [Download from Google Play](https://play.google.com/store/search?q=st%20francis%20jhansi&c=apps)
- **YouTube Channel:** [St. Francis Convent Jhansi](https://youtube.com/@sfcicjhs?si=9OjvOCxwKZ-vN3pB)

## 📸 Campus Life
Our beautiful campus provides an ideal learning environment with modern facilities including:
- Well-equipped classrooms and laboratories
- Library with extensive collection of books
- Sports facilities for physical development
- Cultural programs and extracurricular activities

## 📝 Quick Access
- [About Our School](/about) - Learn about our history, mission, and values
- [Admissions Process](/admissions) - Information about admission requirements
- [Academic Programs](/academics) - Details about our curriculum and programs
- [Faculty & Staff](/staff) - Meet our dedicated teaching team
- [Photo Gallery](/gallery) - Visual glimpses of school life and events
- [Contact Us](/contact) - Get in touch with our admissions office
