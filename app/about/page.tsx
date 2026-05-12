import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import PageHero from '@/components/layout/PageHero'

export const metadata: Metadata = {
  title: 'About Café Crema | Hotel Peninsula Grand, Andheri East',
  description: 'Discover the story behind Café Crema, the premier all-day dining destination at Hotel Peninsula Grand. Learn about our multi-cuisine philosophy and culinary values.',
  keywords: ['cafe crema about', 'hotel peninsula grand restaurant', 'fine dining andheri east story']
}

const values = [
  { num: '01', title: 'Open 24/7', desc: 'Dining without limits — whenever the craving strikes, we\'re open at Hotel Peninsula Grand, Andheri East.' },
  { num: '02', title: 'Live Music Every Sunday', desc: 'Our Sunday Brunch (12 PM–3:30 PM) features live musical performances — one of the most popular events in Andheri East.' },
  { num: '03', title: 'Fresh Ingredients Daily', desc: 'Everything on our buffet and à la carte menu is prepared fresh in our in-house kitchen, every day.' },
  { num: '04', title: 'Seven Cuisines', desc: 'North Indian, Chinese, Continental, Asian, Cafe, Bar, and Desserts — all under one roof in Andheri East, Mumbai.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream text-forest selection:bg-forest selection:text-cream">

      {/* ── Cinematic Hero ── */}
      <PageHero
        subtitle="OUR STORY"
        title={<>Where Every Hour <br /><span className="font-heading italic font-light !text-cream/40">Is the Right Time to Dine.</span></>}
        description="A premier all-day dining destination at Hotel Peninsula Grand, operating with the warmth of a neighbourhood café and the standards of a world-class hotel kitchen."
        image="/interior/DSC03153.jpg"
        imageAlt="Café Crema Interior"
      />

      {/* ── Brand Manifesto ── */}
      <section className="py-24 md:py-56 page-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
          <div className="md:col-span-5">
            <span className="text-meta text-forest/30 mb-12 block tracking-[0.6em]">OUR ORIGIN</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-none mb-16">
              Born from <br />
              <span className="font-heading italic font-light text-forest/30">a Simple Idea.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-24">
            <p className="text-2xl md:text-3xl text-forest/60 font-light leading-relaxed italic mb-12">
              Café Crema was built on one straightforward belief: that great dining should be available to everyone, at any hour, without compromise. Located at Hotel Peninsula Grand, Sakinaka Junction, Andheri East — we serve Mumbai with the warmth of a neighbourhood café and the standards of a world-class hotel kitchen.
            </p>
          </div>
        </div>
      </section>

      {/* ── Split Image + Values ── */}
      <section className="bg-sand border-y border-forest/10 py-24 md:py-56 overflow-hidden">
        <div className="page-wrapper grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

          <div className="relative aspect-[4/5] group overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.25)]">
            <Image
              src="/interior/DSC03160.jpg"
              alt="Culinary Excellence - Cafe Crema"
              fill
              className="object-cover transition-luxury group-hover:scale-105"
            />
            <div className="absolute inset-0 border-[24px] border-sand/40 mix-blend-overlay pointer-events-none" />
          </div>

          <div>
            <span className="text-meta text-forest/30 mb-16 block tracking-[0.6em]">OUR VALUES</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[0.9] tracking-tight mb-20">
              Culinary Excellence, <br />
              <span className="font-heading italic font-light text-forest/30">Every Hour.</span>
            </h2>
            <div className="space-y-4">
              {values.map((stat) => (
                <div key={stat.num} className="flex gap-10 items-start border-b border-forest/5 py-12 group hover:bg-sand/50 transition-all duration-700 px-6 -mx-6">
                  <span className="text-6xl font-medium text-forest/5 leading-none tabular-nums pt-1 group-hover:text-gold-muted/20 transition-colors duration-700">{stat.num}</span>
                  <div>
                    <h4 className="text-2xl font-medium text-forest mb-3 tracking-tight">{stat.title}</h4>
                    <p className="text-base font-light text-forest/60 leading-relaxed italic">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Interior Gallery Grid ── */}
      <section className="py-24 md:py-40 page-wrapper">
        <div className="flex items-end justify-between mb-8">
          <span className="text-meta text-forest/30 tracking-[0.6em]">THE SPACE | HOTEL PENINSULA GRAND</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-forest/20">Andheri East, Mumbai</span>
        </div>
        <p className="text-lg text-forest/60 font-light italic leading-relaxed max-w-2xl mb-16">
          Café Crema occupies the first floor of Hotel Peninsula Grand — one of Andheri East's most established hotel addresses. The dining room is warm, comfortable, and designed for the long lunch, the working breakfast, and the celebratory dinner.
        </p>
        <div className="grid grid-cols-12 gap-4 items-stretch">
          {/* Large featured image — height driven by the right 2×2 grid */}
          <div className="col-span-12 md:col-span-5 relative min-h-[400px] overflow-hidden group">
            <Image src="/interior/DSC03169.jpg" alt="Café Crema Space" fill className="object-cover transition-luxury group-hover:scale-105" />
          </div>
          {/* Right column: 2×2 grid */}
          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-4">
            {['/interior/DSC03106.jpg', '/interior/DSC03112.jpg', '/interior/DSC03132.jpg', '/interior/DSC03148.jpg'].map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group">
                <Image src={src} alt={`Café Crema Interior ${i + 1}`} fill className="object-cover transition-luxury group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-forest py-24 md:py-40 text-cream text-center">
        <div className="page-wrapper max-w-3xl mx-auto">
          <span className="text-meta text-cream/30 mb-16 block tracking-[0.6em]">EXPERIENCE IT FIRST HAND</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight mb-16 text-cream">
            Reserve Your Table at <br />
            <span className="font-heading italic font-light opacity-50">Café Crema Today.</span>
          </h2>
          <Link
            href="/contact"
            className="inline-block px-16 py-6 bg-cream text-forest text-[10px] font-bold uppercase tracking-[0.5em] transition-luxury hover:bg-gold-muted hover:text-cream hover:scale-105"
          >
            Make a Reservation
          </Link>
        </div>
      </section>

    </div>
  )
}
