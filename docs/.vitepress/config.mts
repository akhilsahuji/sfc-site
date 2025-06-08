import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " ",
  description:
    "Excellence in education since our establishment - St. Francis Convent Inter College, Jhansi",

  head: [
    ["link", { rel: "stylesheet", href: "/styles/custom.css" }],
    [
      "script",
      {
        src: "https://kit.fontawesome.com/your-kit-id.js",
        crossorigin: "anonymous",
      },
    ],
    [
      "script",
      {
        src: "/scripts/enhanced-nav.js",
        defer: "true",
      },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // Logo configuration
    // logo: "/images/logo.png",


    // Streamlined navigation with main items + More dropdown
    nav: [
      { text: "Home", link: "/" },
      {
        text: "About Us",
        items: [
          { text: "Our Patron", link: "/about/patron" },
          { text: "Our Foundress", link: "/about/foundress" },
          { text: "History", link: "/about/history" },
          { text: "Our Mission & Vision", link: "/about/mission" },
          { text: "School Anthem", link: "/about/anthem" },
          { text: "Prayers/Hymns", link: "/about/prayers" },
          { text: "The Pledge", link: "/about/pledge" },
        ],
      },
      {
        text: "Admissions",
        items: [
          { text: "Admission Information", link: "/prospectus/admission" },
          { text: "Courses Offered", link: "/prospectus/courses" },
          { text: "School Hours", link: "/prospectus/school-hours" },
          { text: "Office Hours", link: "/prospectus/office-hours" },
          { text: "Fee Rules", link: "/rules/fee-rules" },
          { text: "School Magazine", link: "/prospectus/magazine" },
        ],
      },

      {
        text: "Leadership",
        items: [
          { text: "Principal's Message", link: "/messages/principal" },
          { text: "Manager's Message", link: "/messages/manager" },
          { text: "Head Girl Message", link: "/messages/head-girl" },
        ],
      },
      {
        text: "Achievements",
        items: [
          { text: "School Achievements", link: "/achievements" },
          { text: "ISC Toppers", link: "/achievements/isc-toppers" },
          { text: "ICSE Toppers", link: "/achievements/icse-toppers" },
        ],
      },
      {
        text: "School Life",
        items: [
          { text: "Photo Gallery", link: "/gallery/photos" },
          { text: "Video Gallery", link: "/gallery/videos" },
          { text: "Media Gallery", link: "/gallery/media" },
          { text: "School Clubs", link: "/clubs" },
        ],
      },
      {
        text: "Resources",
        items: [
          { text: "Notice Board", link: "resources/notices" },
          { text: "Circulars", link: "resources/circulars" },
          { text: "Syllabus", link: "resources/syllabus" },
          { text: "Bulletin Board", link: "resources/bulletin" },
        ],
      },
      {
        text: "Policies & Rules",
        items: [
          { text: "Discipline Policy", link: "/rules/discipline" },
          { text: "Rules of Conduct", link: "/rules/conduct" },
          { text: "Attendance Rules", link: "/rules/absence" },
          { text: "School Uniform", link: "/rules/uniform" },
          { text: "Parent Guidelines", link: "/rules/recommendations" },
        ],
      },
      {
        text: "Staff & Administration",
        items: [
          { text: "Principals", link: "/office-bearers/principals" },
          { text: "Managers", link: "/office-bearers/managers" },
          { text: "Staff Photos", link: "/office-bearers/staff" },
          { text: "Student Cabinet", link: "/office-bearers/cabinet" },
          { text: "Investiture Ceremony", link: "/office-bearers/investiture" },
        ],
      },
      { text: "Contact Us", link: "/contact" },
    ],

    // Sidebar for documentation pages
    sidebar: [
      {
        text: "About St. Francis",
        items: [
          { text: "Our Patron", link: "/about/patron" },
          { text: "Our Foundress", link: "/about/foundress" },
          { text: "History", link: "/about/history" },
          { text: "Mission & Vision", link: "/about/mission" },
          { text: "School Anthem", link: "/about/anthem" },
        ],
      },
      {
        text: "Leadership Messages",
        items: [
          { text: "Principal's Message", link: "/messages/principal" },
          { text: "Manager's Message", link: "/messages/manager" },
          { text: "Head Girl Message", link: "/messages/head-girl" },
        ],
      },
      {
        text: "Academic Excellence",
        items: [
          { text: "ICSE/ISC Board", link: "/prospectus/courses" },
          { text: "School Hours", link: "/prospectus/school-hours" },
          { text: "Achievements", link: "/achievements" },
          { text: "ISC Toppers", link: "/achievements/isc-toppers" },
          { text: "ICSE Toppers", link: "/achievements/icse-toppers" },
        ],
      },
      {
        text: "School Resources",
        items: [
          { text: "Notice Board", link: "/notices" },
          { text: "Circulars", link: "/circulars" },
          { text: "Photo Gallery", link: "/gallery/photos" },
          { text: "Video Gallery", link: "/gallery/videos" },
          { text: "School Clubs", link: "/clubs" },
        ],
      },
    ],

    // Social links (matching your existing social media)
    socialLinks: [
      {
        icon: "youtube",
        link: "https://youtube.com/@sfcicjhs?si=9OjvOCxwKZ-vN3pB",
      },
      { icon: "facebook", link: "https://facebook.com/sfcjhansi" },
      { icon: "instagram", link: "https://instagram.com/sfcjhs" },
    ],

    // Footer configuration
    footer: {
      message:
        "St. Francis Convent Inter College - Excellence in Education Since 1898",
      copyright: "Copyright © 2024 St. Francis Convent Inter College, Jhansi",
    },

    // Edit link
    editLink: {
      pattern: "https://github.com/your-repo/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
  },
});
