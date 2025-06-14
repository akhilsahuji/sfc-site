// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import './style.css'

// Import custom components
import ModernLayout from './components/ModernLayout.vue'
import ModernHero from './components/ModernHero.vue'
import ModernFeatures from './components/ModernFeatures.vue'
import CarouselHero from './components/CarouselHero.vue'
import Galleria from './components/Galleria.vue'
import DailyQuote from './components/DailyQuote.vue'
import AnnouncementBanner from './components/AnnouncementBanner.vue'
import ContactInfo from './components/ContactInfo.vue'
import QuickLinks from './components/QuickLinks.vue'
import Gallery from './components/Gallery.vue'
import StaffCard from './components/StaffCard.vue'
import CardGrid from './components/CardGrid.vue'
import ContentSection from './components/ContentSection.vue'
import HeroSection from './components/HeroSection.vue'
import Button from './components/Button.vue'
import Footer from './components/Footer.vue'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // Register custom components globally
    app.component('ModernLayout', ModernLayout)
    app.component('ModernHero', ModernHero)
    app.component('ModernFeatures', ModernFeatures)
    app.component('CarouselHero', CarouselHero)
    app.component('Galleria', Galleria)
    app.component('DailyQuote', DailyQuote)
    app.component('AnnouncementBanner', AnnouncementBanner)
    app.component('ContactInfo', ContactInfo)
    app.component('QuickLinks', QuickLinks)
    app.component('Gallery', Gallery)
    app.component('StaffCard', StaffCard)
    app.component('CardGrid', CardGrid)
    app.component('ContentSection', ContentSection)
    app.component('HeroSection', HeroSection)
    app.component('Button', Button)
    app.component('Footer', Footer)
  }
} satisfies Theme