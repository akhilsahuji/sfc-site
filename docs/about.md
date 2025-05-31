---
title: About Us
---

<HeroSection 
  title="About St. Francis Convent Inter College"
  subtitle="Excellence in education since 1894"
  image="/images/logo.png"
>
  <template #buttons>
    <Button href="/admissions">Apply Now</Button>
    <Button variant="outline" href="/contact">Contact Us</Button>
  </template>
</HeroSection>

<ContentSection 
  title="Our Mission"
  background="light"
>
  At St. Francis Convent Inter College, we are committed to providing quality education that nurtures the intellectual, spiritual, and personal growth of our students. Our mission is to create an environment where every student can discover their potential and develop into responsible global citizens.
  
  We believe in fostering critical thinking, creativity, and character development through innovative teaching methods and a supportive learning community.
</ContentSection>

<ContentSection 
  title="Our History"
  image="/images/logo.png"
  reverse
>
  Established in 1894, St. Francis Convent Inter College has been a beacon of educational excellence in Jhansi for over a century. Founded with the vision of providing quality education to all, our institution has grown from a small school to one of the most respected educational institutions in the region.
  
  Throughout our history, we have maintained our commitment to academic excellence while adapting to modern educational needs and technologies.
</ContentSection>

<CardGrid 
  title="Our Values"
  subtitle="The principles that guide our educational philosophy"
  background="blue"
  :columns="3"
  :cards="[
    {
      icon: 'fas fa-book',
      title: 'Excellence',
      description: 'We strive for the highest standards in academics and character development.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Compassion',
      description: 'We foster empathy, kindness, and understanding in our community.'
    },
    {
      icon: 'fas fa-users',
      title: 'Community',
      description: 'We build strong relationships and work together towards common goals.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'We embrace new ideas and modern teaching methodologies.'
    },
    {
      icon: 'fas fa-globe',
      title: 'Global Perspective',
      description: 'We prepare students to be responsible global citizens.'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Achievement',
      description: 'We celebrate success and encourage students to reach their potential.'
    }
  ]"
/>

<ContentSection 
  title="Why Choose Us?"
  background="light"
>
  <ul style="font-size: 1.1rem; line-height: 2;">
    <li><strong>Experienced Faculty:</strong> Our dedicated teachers bring years of experience and passion to the classroom.</li>
    <li><strong>Modern Facilities:</strong> State-of-the-art classrooms, laboratories, and libraries support effective learning.</li>
    <li><strong>Holistic Development:</strong> We focus on academic, physical, and emotional growth of our students.</li>
    <li><strong>Individual Attention:</strong> Small class sizes ensure personalized attention for each student.</li>
    <li><strong>Strong Alumni Network:</strong> Our graduates excel in various fields and maintain strong connections with the school.</li>
  </ul>
  
  <template #buttons>
    <Button href="/admissions" size="large">Start Your Journey</Button>
  </template>
</ContentSection> 