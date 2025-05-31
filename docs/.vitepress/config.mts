import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "St. Francis Convent Inter College",
  description: "Excellence in education since our establishment - St. Francis Convent Inter College, Jhansi",
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    // Navigation menu (centered)
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { 
        text: 'Academics',
        items: [
          { text: 'ICSE Curriculum', link: '/academics/icse' },
          { text: 'ISC Curriculum', link: '/academics/isc' },
          { text: 'Achievements', link: '/academics/achievements' }
        ]
      },
      { 
        text: 'Admissions',
        items: [
          { text: 'Admission Process', link: '/admissions/process' },
          { text: 'Fee Structure', link: '/admissions/fees' },
          { text: 'Apply Online', link: '/admissions/apply' }
        ]
      },
      { 
        text: 'School Life',
        items: [
          { text: 'Facilities', link: '/facilities' },
          { text: 'Gallery', link: '/gallery' },
          { text: 'Events', link: '/events' },
          { text: 'Clubs & Activities', link: '/clubs' }
        ]
      },
      { text: 'Staff', link: '/staff' },
      { text: 'Contact', link: '/contact' }
    ],

    // Sidebar for documentation pages
    sidebar: [
      {
        text: 'School Information',
        items: [
          { text: 'About Us', link: '/about' },
          { text: 'Principal\'s Message', link: '/principal-message' },
          { text: 'Manager\'s Message', link: '/manager-message' },
          { text: 'Our Patron', link: '/patron' }
        ]
      },
      {
        text: 'Academics',
        items: [
          { text: 'ICSE/ISC Board', link: '/academics/icse-isc' },
          { text: 'School Hours', link: '/academics/hours' },
          { text: 'Achievements', link: '/academics/achievements' },
          { text: 'Toppers', link: '/academics/toppers' }
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Notice Board', link: '/notices' },
          { text: 'Circulars', link: '/circulars' },
          { text: 'Photo Gallery', link: '/gallery' },
          { text: 'Video Gallery', link: '/videos' }
        ]
      }
    ],

    // Social links
    socialLinks: [
      { icon: 'youtube', link: 'https://youtube.com/@stfrancisconventjhansi' },
      { icon: 'facebook', link: 'https://facebook.com/sfcjhansi' },
      { icon: 'instagram', link: 'https://instagram.com/sfcjhansi' }
    ],

    // Footer configuration
    footer: {
      message: 'St. Francis Convent Inter College - Excellence in Education',
      copyright: 'Copyright © 2024 St. Francis Convent Inter College, Jhansi'
    },

    // Edit link
    editLink: {
      pattern: 'https://github.com/your-repo/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
