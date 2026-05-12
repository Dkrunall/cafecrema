import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import SchemaOrg from '@/components/seo/SchemaOrg'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/layout/FloatingActions'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Café Crema – Restaurant Andheri East Mumbai',
    template: '%s | Café Crema Mumbai',
  },
  description: 'All-day dining at Hotel Peninsula Grand, Andheri East. Refined multi-cuisine artifacts served with localized warmth.',
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  metadataBase: new URL('https://cafecrema.in'),
  alternates: { canonical: 'https://cafecrema.in' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} bg-cream text-forest font-body antialiased selection:bg-forest selection:text-cream`}>
        {/* Tactile Noise Texture overlay */}
        <div className="noise-overlay" />

        <SchemaOrg />
        <Navbar />

        <main className="relative">
          {children}
        </main>

        <Footer />
        <FloatingActions />

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'} />
      </body>
    </html>
  )
}
