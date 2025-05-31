# St. Francis Convent Inter College - VitePress Website

A modern, responsive website for St. Francis Convent Inter College built with **VitePress** and the **default theme**, enhanced with custom components and **Open Props** design system.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## 🏗️ Architecture

### Default VitePress Theme
This site uses the **default VitePress theme** as the base, providing:
- ✅ Clean centered navigation without logo or search clutter
- ✅ Responsive design out of the box
- ✅ Dark mode support
- ✅ Accessibility features
- ✅ Professional documentation layout

### Custom Components
Enhanced with custom Vue.js components for school-specific features:

#### 📢 AnnouncementBanner
Flexible announcement system with multiple display modes.
```vue
<AnnouncementBanner 
  type="info"
  title="Important Notice"
  message="Your announcement message here"
  :persistent="true"
/>
```

#### 📧 ContactInfo
Comprehensive contact information display with social media integration.
```vue
<ContactInfo 
  :phones="['+91 7376338453', '+91 94500 71734']"
  email="sfcicjhansi@gmail.com"
  background="blue"
/>
```

#### 🔗 QuickLinks
Transform navigation into engaging card-based interface.
```vue
<QuickLinks 
  title="Important Links"
  :links="linkArray"
  :columns="3"
/>
```

#### 🖼️ Gallery
Responsive image gallery with lightbox functionality.
```vue
<Gallery 
  title="School Gallery"
  :images="imageArray"
  background="light"
/>
```

#### 📝 ContentSection
Flexible content sections with markdown support.
```vue
<ContentSection 
  title="About Us"
  background="white"
>
  Your **markdown** content here
</ContentSection>
```

## 🎨 Design System

### Open Props Integration
The theme leverages [Open Props](https://open-props.style/) for consistent design tokens:

- **Colors**: Semantic color system with school brand colors
- **Typography**: Fluid typography scale (`--font-size-0` to `--font-size-6`)
- **Spacing**: Consistent spacing scale (`--space-xs` to `--space-2xl`)
- **Animations**: Smooth, accessible animations
- **Responsive**: Mobile-first breakpoints

### School Brand Colors
```css
:root {
  --school-blue: hsl(218 75% 40%);
  --school-yellow: var(--yellow-5);
  --school-accent: var(--orange-5);
}
```

## 📁 Project Structure

```
docs/
├── .vitepress/
│   ├── config.mts          # VitePress configuration
│   └── theme/
│       ├── index.ts        # Theme setup (extends default)
│       ├── Layout.vue      # Custom layout wrapper
│       ├── style.css       # Global styles + Open Props
│       └── components/     # Custom Vue components
├── public/
│   └── images/            # Static assets
├── index.md               # Home page (VitePress home layout)
├── about.md               # About page
├── staff.md               # Staff page
└── theme-guide.md         # Component documentation
```

## ⚙️ Configuration

### Navigation Setup
Navigation is configured in `docs/.vitepress/config.mts` with centered layout:

```typescript
export default defineConfig({
  title: "St. Francis Convent Inter College",
  themeConfig: {
    // Clean centered navigation (no logo, no search)
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      // ... more navigation items
    ],
    // ... other configuration
  }
})
```

### Custom Footer
The custom school footer is added via layout slots:

```vue
<DefaultTheme.Layout>
  <template #layout-bottom>
    <Footer />
  </template>
</DefaultTheme.Layout>
```

### Centered Navigation CSS
Navigation is centered using custom CSS:
```css
.VPNav .VPNavBar .container {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
```

## 🏠 Home Page Features

The home page (`docs/index.md`) uses VitePress home layout with:

### Hero Section
```yaml
hero:
  name: "St. Francis Convent Inter College"
  text: "Excellence in Education Since 1894"
  tagline: "Nurturing Minds, Building Futures in Jhansi"
  image:
    src: /images/logo.png
  actions:
    - theme: brand
      text: About Our School
      link: /about
```

### Features Grid
```yaml
features:
  - icon: 🎓
    title: ICSE/ISC Curriculum
    details: Comprehensive curriculum for academic excellence
  # ... more features
```

### Custom Components
After the hero and features, custom components provide:
- 📢 Important announcements banner
- 📧 Contact information sections
- 🔗 Quick navigation links
- 📰 Recent news and achievements
- 🖼️ Photo gallery
- 📞 Admission contact section

## 🎯 Key Features

### ✅ Clean Navigation
- **Centered Layout**: Navigation items centered for better visual balance
- **No Clutter**: Removed logo and search from navbar for cleaner look
- **Professional**: Dropdown menus for organized navigation
- **Responsive**: Mobile-friendly hamburger menu

### ✅ Default Theme Benefits
- **Professional**: Clean, modern design
- **Accessible**: WCAG compliant
- **SEO Optimized**: Built-in meta tags and sitemap
- **Fast**: Optimized for performance
- **Maintainable**: No complex custom navigation code

### ✅ Custom Enhancements
- **School Branding**: Custom colors and styling in content
- **Enhanced Components**: Rich interactive components
- **Open Props**: Modern design system
- **Mobile Optimized**: Perfect mobile experience
- **Content Focused**: Easy content management

### ✅ Contact Information
- **Phone**: +91 7376338453, +91 94500 71734
- **Email**: sfcicjhansi@gmail.com
- **Social Media**: YouTube, Parent Portal, Google Play
- **Online Services**: Fee payment, parent portal access

## 🔧 Development

### Adding New Pages
Create `.md` files in the `docs/` directory:

```markdown
---
title: Your Page Title
---

# Your Page Content

<CustomComponent />
```

### Using Components
Components are globally registered and can be used in any markdown file:

```markdown
<ContactInfo 
  background="light"
  :phones="['your-phone']"
/>
```

### Styling
Global styles are in `docs/.vitepress/theme/style.css` with:
- Open Props imports
- School brand colors
- Component styles
- Responsive utilities
- Centered navigation CSS

## 🌐 Deployment

The site can be deployed to any static hosting service:

```bash
# Build the site
npm run docs:build

# The built files will be in docs/.vitepress/dist/
```

Popular deployment options:
- **Netlify**: Connect GitHub repo for automatic deployments
- **Vercel**: Zero-config deployment
- **GitHub Pages**: Free hosting for public repositories
- **Firebase Hosting**: Google's hosting platform

## 📚 Resources

- [VitePress Documentation](https://vitepress.dev/)
- [Open Props Documentation](https://open-props.style/)
- [Vue.js Documentation](https://vuejs.org/)
- [Theme Guide](./docs/theme-guide.md) - Component usage guide

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run docs:dev`
5. Submit a pull request

## 📞 Support

For technical support:
- **School Contact**: +91 7376338453
- **Email**: sfcicjhansi@gmail.com
- **Website**: https://www.sfcjhs.in/

---

**St. Francis Convent Inter College** - Excellence in Education Since 1894 