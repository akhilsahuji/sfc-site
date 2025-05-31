---
title: Theme Guide - St. Francis Convent School
description: Complete guide to the custom VitePress theme and components for St. Francis Convent Inter College website
---

# Theme Guide

Welcome to the complete theme guide for **St. Francis Convent Inter College** VitePress website. This theme is built with modern web technologies and design principles to create a beautiful, accessible, and performant school website.

## Design System

Our theme is built on top of [Open Props](https://open-props.style/), a modern CSS design system that provides consistent design tokens and utilities.

### Color Palette

The theme uses the official school colors with semantic color tokens from Open Props:

<div class="color-showcase">
  <div class="color-item">
    <div class="color-swatch" style="background: var(--school-blue);"></div>
    <div class="color-info">
      <strong>School Blue</strong><br>
      Primary brand color
    </div>
  </div>
  <div class="color-item">
    <div class="color-swatch" style="background: var(--school-yellow);"></div>
    <div class="color-info">
      <strong>School Yellow</strong><br>
      Secondary accent color
    </div>
  </div>
  <div class="color-item">
    <div class="color-swatch" style="background: var(--school-accent);"></div>
    <div class="color-info">
      <strong>Accent Orange</strong><br>
      Highlight color
    </div>
  </div>
</div>

## Components

### 1. CarouselHero Component

A modern, responsive hero carousel for showcasing school highlights with smooth animations and navigation.

**Features:**
- Autoplay with customizable interval
- Navigation arrows and thumbnail indicators
- Smooth transitions using Open Props animations
- Responsive design with glass-morphism effects
- Support for multiple CTAs per slide

**Usage:**
```vue
<CarouselHero
  :slides="heroSlides"
  :autoplay="true"
  :autoplayInterval="5000"
  height="70vh"
/>
```

### 2. AnnouncementBanner Component

Flexible announcement system with both banner and popup modes for important school updates.

**Features:**
- Multiple types: info, success, warning, error
- Position options: top, bottom, fixed-top, fixed-bottom
- Auto-close functionality
- Persistent dismissal using localStorage
- Beautiful animations with Open Props

**Usage:**
```vue
<AnnouncementBanner
  type="info"
  title="Admissions Open"
  message="Applications for 2024-25 academic session are now open!"
  icon="fas fa-graduation-cap"
  :persistent="true"
/>
```

### 3. ContactInfo Component

Comprehensive contact information display with multiple layout variants and social media integration.

**Features:**
- Three background variants: white, light, blue
- Glass-morphism effects for modern aesthetics
- Social media links with FontAwesome icons
- Responsive grid layout using Open Props
- Support for multiple phone numbers and emails

**Usage:**
```vue
<ContactInfo
  :phones="schoolPhones"
  :emails="schoolEmails"
  :address="schoolAddress"
  :socialLinks="socialMedia"
  variant="blue"
/>
```

### 4. QuickLinks Component

Transform traditional navigation into an engaging card-based interface with visual hierarchy.

**Features:**
- Card grid layout with hover effects
- Link types with color coding
- Badge support for new/important links
- Featured links section
- Responsive columns with Open Props breakpoints

**Usage:**
```vue
<QuickLinks
  :links="navigationLinks"
  :featuredLinks="importantLinks"
  :columns="3"
  :showArrows="true"
/>
```

## Design Tokens

Our theme leverages Open Props design tokens for consistency:

### Spacing Scale
- `--space-xs` (4px) - Minimal spacing
- `--space-sm` (8px) - Small spacing
- `--space-md` (12px) - Medium spacing
- `--space-lg` (20px) - Large spacing
- `--space-xl` (28px) - Extra large spacing
- `--space-2xl` (36px) - Maximum spacing

### Typography Scale
- `--font-size-0` (12px) - Captions
- `--font-size-1` (14px) - Body text
- `--font-size-2` (16px) - Large body
- `--font-size-3` (18px) - Small headings
- `--font-size-4` (20px) - Medium headings
- `--font-size-5` (24px) - Large headings
- `--font-size-6` (32px) - Hero text

### Border Radius
- `--radius-sm` (2px) - Subtle rounding
- `--radius-md` (6px) - Standard rounding
- `--radius-lg` (8px) - Large rounding
- `--radius-xl` (12px) - Extra large rounding

## Animations

The theme uses Open Props animation tokens for consistent motion:

- **Fade In**: Smooth opacity transitions
- **Slide In Up**: Bottom-to-top slide animations
- **Scale Up**: Growing scale effects
- **Bounce**: Playful bounce animations

All animations respect user preferences for reduced motion.

## Responsive Design

The theme is fully responsive with mobile-first design:

### Breakpoints
- **Mobile**: ≤ 480px
- **Tablet**: ≤ 768px
- **Desktop**: > 768px

### Mobile Optimizations
- Compressed navigation menus
- Stacked layouts for better readability
- Touch-friendly interactive elements
- Optimized image loading

## Accessibility Features

The theme prioritizes accessibility:

- **High Contrast**: WCAG AA compliant color ratios
- **Focus Management**: Clear focus indicators
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **Motion Preferences**: Respects `prefers-reduced-motion`

## Customization

### CSS Custom Properties

The theme exposes numerous CSS custom properties for easy customization:

```css
:root {
  /* School Brand Colors */
  --school-blue: hsl(218 75% 40%);
  --school-yellow: var(--yellow-5);
  --school-accent: var(--orange-5);
  
  /* Typography */
  --font-family-primary: var(--font-sans);
  --font-family-heading: var(--font-sans);
  
  /* Component Overrides */
  --carousel-height: 70vh;
  --banner-border-radius: var(--radius-md);
}
```

### Component Props

Each component accepts props for customization:

```vue
<!-- Carousel with custom settings -->
<CarouselHero
  :slides="slides"
  :autoplay="false"
  :showNavigation="true"
  :showIndicators="false"
  height="60vh"
/>

<!-- Contact info with blue variant -->
<ContactInfo
  variant="blue"
  :phones="phones"
  :emails="emails"
/>
```

## Performance

The theme is optimized for performance:

- **Open Props CDN**: Fast loading design tokens
- **Minimal JavaScript**: Pure Vue.js components
- **CSS Grid/Flexbox**: Modern layout without heavy frameworks
- **Image Optimization**: Responsive images with proper sizing
- **Code Splitting**: VitePress automatic code splitting

## Browser Support

The theme supports all modern browsers:

- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- Mobile browsers with equivalent versions

## Getting Started

To use these components in your VitePress site:

1. **Install Dependencies** (if using npm):
   ```bash
   npm install open-props
   ```

2. **Import Components** in your markdown:
   ```vue
   <script setup>
   import CarouselHero from './.vitepress/theme/components/CarouselHero.vue'
   import AnnouncementBanner from './.vitepress/theme/components/AnnouncementBanner.vue'
   // ... other components
   </script>
   ```

3. **Use Components** in your content:
   ```vue
   <CarouselHero :slides="yourSlides" />
   ```

## Support

For technical support or questions about the theme:

- **GitHub Issues**: Report bugs or request features
- **Documentation**: Refer to this guide
- **VitePress Docs**: [VitePress Official Documentation](https://vitepress.dev/)

---

*This theme was crafted specifically for St. Francis Convent Inter College to provide a modern, accessible, and maintainable web presence.*

<style scoped>
.color-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-lg);
  margin: var(--space-xl) 0;
}

.color-item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md);
  border: var(--border-size-1) solid var(--surface-3);
  border-radius: var(--radius-md);
  background: var(--surface-1);
}

.color-swatch {
  width: var(--size-8);
  height: var(--size-8);
  border-radius: var(--radius-md);
  border: var(--border-size-1) solid var(--surface-3);
  flex-shrink: 0;
}

.color-info {
  font-size: var(--font-size-0);
  line-height: var(--font-lineheight-2);
}

.color-info strong {
  color: var(--text-1);
  font-weight: var(--font-weight-7);
}
</style> 