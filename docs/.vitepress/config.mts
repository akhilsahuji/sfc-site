import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "St. Francis Convent Inter College",
  description: "Excellence in education since our establishment - St. Francis Convent Inter College, Jhansi",
  
  head: [
    ['link', { rel: 'stylesheet', href: '/styles/custom.css' }],
    ['script', { src: 'https://kit.fontawesome.com/your-kit-id.js', crossorigin: 'anonymous' }]
  ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    // Logo configuration
    logo: '/images/logo.png',
    
    // Navigation menu matching existing website structure
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'About Us',
        items: [
          { text: 'Our Patron', link: '/about/patron' },
          { text: 'Our Foundress', link: '/about/foundress' },
          { text: 'Prayers/Hymns', link: '/about/prayers' },
          { text: 'The Pledge', link: '/about/pledge' },
          { text: 'School Anthem', link: '/about/anthem' },
          { text: 'History', link: '/about/history' },
          { text: 'Our Mission & Vision', link: '/about/mission' }
        ]
      },
      { 
        text: 'Messages',
        items: [
          { text: "Principal's Message", link: '/messages/principal' },
          { text: "Manager's Message", link: '/messages/manager' },
          { text: 'Head Girl', link: '/messages/head-girl' }
        ]
      },
      { 
        text: 'Prospectus',
        items: [
          { text: 'Magazine', link: '/prospectus/magazine' },
          { text: 'School Hours', link: '/prospectus/school-hours' },
          { text: 'Office Hours', link: '/prospectus/office-hours' },
          { text: 'Courses', link: '/prospectus/courses' },
          { text: 'Promotions', link: '/prospectus/promotions' },
          { text: 'Admission', link: '/prospectus/admission' }
        ]
      },
      { 
        text: 'Rules',
        items: [
          { text: 'Fee Rules', link: '/rules/fee-rules' },
          { text: 'Discipline', link: '/rules/discipline' },
          { text: 'Rules of Conduct', link: '/rules/conduct' },
          { text: 'Rules Concerning Absence', link: '/rules/absence' },
          { text: 'Recommendations to Guardians', link: '/rules/recommendations' },
          { text: 'Uniform', link: '/rules/uniform' }
        ]
      },
      { 
        text: 'Achievements',
        items: [
          { text: 'Achievements', link: '/achievements' },
          { text: 'ISC Toppers', link: '/achievements/isc-toppers' },
          { text: 'ICSE Toppers', link: '/achievements/icse-toppers' }
        ]
      },
      { 
        text: 'Office Bearers',
        items: [
          { text: 'Investiture Ceremony', link: '/office-bearers/investiture' },
          { text: 'Principals', link: '/office-bearers/principals' },
          { text: 'Managers', link: '/office-bearers/managers' },
          { text: 'Staff Photos', link: '/office-bearers/staff' },
          { text: 'Cabinet Photos', link: '/office-bearers/cabinet' }
        ]
      },
      { 
        text: 'Gallery',
        items: [
          { text: 'Photo Gallery', link: '/gallery/photos' },
          { text: 'Video Gallery', link: '/gallery/videos' },
          { text: 'Media Gallery', link: '/gallery/media' },
          { text: 'Bulletin Board', link: '/gallery/bulletin' }
        ]
      },
      { 
        text: 'Notice Board',
        items: [
          { text: 'Notice Board', link: '/notices' },
          { text: 'Syllabus', link: '/notices/syllabus' }
        ]
      },
      { 
        text: 'Circulars',
        items: [
          { text: 'Circulars', link: '/circulars' }
        ]
      },
      { 
        text: 'School Clubs',
        items: [
          { text: 'Media Club', link: '/clubs/media' },
          { text: 'JPIC', link: '/clubs/jpic' },
          { text: 'USM', link: '/clubs/usm' },
          { text: 'LTS', link: '/clubs/lts' },
          { text: 'LGL', link: '/clubs/lgl' },
          { text: 'ECO', link: '/clubs/eco' },
          { text: 'All School Clubs', link: '/clubs' }
        ]
      },
      { text: 'Contact Us', link: '/contact' }
    ],

    // Sidebar for documentation pages
    sidebar: [
      {
        text: 'About St. Francis',
        items: [
          { text: 'Our Patron', link: '/about/patron' },
          { text: 'Our Foundress', link: '/about/foundress' },
          { text: 'History', link: '/about/history' },
          { text: 'Mission & Vision', link: '/about/mission' },
          { text: 'School Anthem', link: '/about/anthem' }
        ]
      },
      {
        text: 'Leadership Messages',
        items: [
          { text: "Principal's Message", link: '/messages/principal' },
          { text: "Manager's Message", link: '/messages/manager' },
          { text: 'Head Girl Message', link: '/messages/head-girl' }
        ]
      },
      {
        text: 'Academic Excellence',
        items: [
          { text: 'ICSE/ISC Board', link: '/prospectus/courses' },
          { text: 'School Hours', link: '/prospectus/school-hours' },
          { text: 'Achievements', link: '/achievements' },
          { text: 'ISC Toppers', link: '/achievements/isc-toppers' },
          { text: 'ICSE Toppers', link: '/achievements/icse-toppers' }
        ]
      },
      {
        text: 'School Resources',
        items: [
          { text: 'Notice Board', link: '/notices' },
          { text: 'Circulars', link: '/circulars' },
          { text: 'Photo Gallery', link: '/gallery/photos' },
          { text: 'Video Gallery', link: '/gallery/videos' },
          { text: 'School Clubs', link: '/clubs' }
        ]
      }
    ],

    // Social links (matching your existing social media)
    socialLinks: [
      { icon: 'youtube', link: 'https://youtube.com/@sfcicjhs?si=9OjvOCxwKZ-vN3pB' },
      { icon: 'facebook', link: 'https://facebook.com/sfcjhansi' },
      { icon: 'instagram', link: 'https://instagram.com/sfcjhs' }
    ],

    // Footer configuration
    footer: {
      message: 'St. Francis Convent Inter College - Excellence in Education Since 1898',
      copyright: 'Copyright © 2024 St. Francis Convent Inter College, Jhansi'
    },

    // Custom footer links for Parent Portal and SBI Payment
    customFooterLinks: [
      { text: 'Parent Portal', link: 'https://www.sfcjhs.in/', external: true },
      { text: 'SBI Online Payment', link: 'https://www.onlinesbi.sbi/sbicollect/icollecthome.htm', external: true }
    ],

    // Edit link
    editLink: {
      pattern: 'https://github.com/your-repo/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
