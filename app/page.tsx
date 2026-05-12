import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import TypographyStrip from '@/components/home/TypographyStrip'
import Highlights from '@/components/home/Highlights'
import DailyBuffet from '@/components/home/DailyBuffet'
import SundayRitual from '@/components/home/SundayRitual'
import LocationSection from '@/components/home/LocationSection'

export const metadata: Metadata = {
  title: 'Café Crema – Multi-Cuisine Restaurant | Andheri East, Mumbai | Open 24 Hours',
  description: 'All-day dining at Hotel Peninsula Grand, Andheri East. Multi-cuisine buffet, Sunday brunch with live music, full bar. Open 24/7. Call +91 99302 71349.',
  keywords: ['restaurant andheri east mumbai']
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cream overflow-hidden">
      <Hero />
      <TypographyStrip />
      <Highlights />
      <DailyBuffet />
      <SundayRitual />
      <LocationSection />
    </div>
  )
}
