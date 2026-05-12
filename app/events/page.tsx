import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import PageHero from '@/components/layout/PageHero'

export const metadata: Metadata = {
  title: 'Events & Private Dining – Café Crema | Andheri East Mumbai',
  description: "Host your corporate lunch, birthday dinner, or private celebration at Café Crema. Live music Sundays. Private dining Andheri East. Call +91 99302 71349.",
  keywords: ['private dining andheri', 'corporate lunch mumbai']
}

const events = [
  {
    id: '01',
    title: 'Corporate Lunches & Client Dinners.',
    subtitle: '01 / CORPORATE DINING',
    desc: 'Café Crema is a preferred choice for business dining in Andheri East. Comfortable seating, professional service, a full multi-cuisine menu, and private billing arrangements — ideal for team lunches, client dinners, and leadership gatherings. Located at Hotel Peninsula Grand, MIDC Andheri.',
    features: ['Private Enclaves', 'Bulk Billing', 'A/V Support', 'Custom Menus'],
    image: '/interior/DSC03148.jpg',
    color: 'bg-forest',
    textColor: 'text-cream',
    borderColor: 'border-cream/20',
  },
  {
    id: '02',
    title: 'Birthdays, Anniversaries & Family Gatherings.',
    subtitle: '02 / CELEBRATIONS',
    desc: 'Celebrate your special moments at Café Crema. We help make birthdays, anniversaries, and family gatherings unforgettable — with personalised décor, a dedicated host, live music options, and the best multi-cuisine spread in Andheri East.',
    features: ['Personalized Décor', 'Dedicated Host', 'Live Music', 'Custom Cake'],
    image: '/interior/DSC03169.jpg',
    color: 'bg-gold-muted',
    textColor: 'text-cream',
    borderColor: 'border-cream/20',
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-cream text-forest selection:bg-forest selection:text-cream">

      {/* ── Cinematic Hero ── */}
      <PageHero
        subtitle="EVENTS & EXPERIENCES"
        title={<>More Than <br /><span className="font-heading italic font-light !text-cream/40">a Meal.</span></>}
        description="From our legendary Sunday Brunch to private corporate dinners — Café Crema at Hotel Peninsula Grand is Andheri East's go-to venue for celebrations, business lunches, and events worth remembering."
        image="/interior/DSC03177.jpg"
        imageAlt="Café Crema Events"
      />

      {/* ── Event Cards ── */}
      <section className="py-24 md:py-48 page-wrapper">
        <div className="space-y-24 md:space-y-32">
          {events.map((event, i) => (
            <div key={event.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

              {/* Image */}
              <div className={`relative aspect-[4/3] overflow-hidden group ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-luxury group-hover:scale-105"
                />
                <div className="absolute inset-0 border-[24px] border-cream/20 mix-blend-overlay pointer-events-none" />
              </div>

              {/* Content Card */}
              <div className={`${event.color} ${event.textColor} p-12 md:p-20 flex flex-col justify-between ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <div className="flex justify-between items-start mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-50">
                      {event.subtitle}
                    </span>
                    <span className="text-5xl font-heading italic font-light opacity-10 leading-none">{event.id}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-10 tracking-tight leading-[0.9]">
                    {event.title}
                  </h2>
                  <p className="text-xl font-light leading-relaxed opacity-70 mb-16 italic max-w-sm">
                    {event.desc}
                  </p>
                  <ul className="space-y-4 mb-16">
                    {event.features.map((f) => (
                      <li key={f} className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] opacity-60">
                        <div className={`w-1.5 h-1.5 bg-current rounded-full`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className={`px-12 py-5 border ${event.borderColor} text-[10px] font-bold uppercase tracking-[0.4em] transition-luxury hover:opacity-70 text-center`}
                >
                  Inquire Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-sand border-y border-forest/10 py-24">
        <div className="page-wrapper grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            { num: '500+', label: 'Events Hosted' },
            { num: '50+', label: 'Max Group Size' },
            { num: '7', label: 'Cuisine Types' },
            { num: '24/7', label: 'Service Hours' },
          ].map((stat) => (
            <div key={stat.label} className="text-center border-r border-forest/10 last:border-r-0 py-8">
              <div className="text-4xl md:text-6xl font-medium tracking-tight mb-4 text-forest">{stat.num}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-forest/30">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-40 page-wrapper text-center">
        <span className="text-meta text-forest/30 mb-16 block tracking-[0.6em]">PLAN YOUR EVENT</span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight mb-16">
          Plan Your Event at <br />
          <span className="font-heading italic font-light text-forest/30">Café Crema, Andheri East.</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Link
            href="/contact"
            className="px-16 py-6 bg-forest text-cream text-[10px] font-bold uppercase tracking-[0.5em] transition-luxury hover:bg-gold-muted hover:scale-105"
          >
            Start Planning
          </Link>
          <a href="tel:+919930271349" className="text-[10px] font-bold uppercase tracking-[0.5em] text-forest/40 hover:text-forest transition-luxury border-b border-forest/20 pb-2 hover:border-forest">
            +91 99302 71349
          </a>
        </div>
      </section>

    </div>
  )
}
