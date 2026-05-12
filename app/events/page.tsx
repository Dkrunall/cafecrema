import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Events & Private Dining – Café Crema | Andheri East Mumbai',
  description: "Host your corporate lunch, birthday dinner, or private celebration at Café Crema. Mumbai's top venue for events in Andheri East. Enquire now.",
  keywords: ['private dining andheri', 'corporate lunch mumbai']
}

const events = [
  {
    id: '01',
    title: 'Corporate Excellence',
    subtitle: 'Business Gatherings',
    desc: 'Located in Andheri\'s business heart within Hotel Peninsula Grand, we offer bulk billing, private sections, and curated set menus for professional gatherings of any scale.',
    features: ['Private Enclaves', 'Bulk Billing', 'A/V Support', 'Custom Menus'],
    image: '/interior/DSC03148.jpg',
    color: 'bg-forest',
    textColor: 'text-cream',
    borderColor: 'border-cream/20',
  },
  {
    id: '02',
    title: 'Legendary Celebrations',
    subtitle: 'Social Events',
    desc: 'Birthdays, anniversaries, and family reunions curated with localized warmth and gourmet artistry in our premier all-day dining space. Every detail, perfected.',
    features: ['Personalized Décor', 'Dedicated Host', 'Live Music', 'Custom Cake'],
    image: '/interior/DSC03169.jpg',
    color: 'bg-gold-muted',
    textColor: 'text-cream',
    borderColor: 'border-cream/20',
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-cream text-forest">

      {/* ── Cinematic Hero ── */}
      <section className="relative min-h-[100vh] flex items-end overflow-hidden">
        <Image
          src="/interior/DSC03177.jpg"
          alt="Café Crema Events"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-forest/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-forest/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/60 via-transparent to-transparent" />
        <div className="relative z-10 page-wrapper pb-24 md:pb-32 w-full">
          <span className="text-meta text-cream/40 mb-10 block tracking-[0.6em]">INVENTORY & OCCASIONS</span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-medium leading-[0.85] tracking-tight !text-cream mb-8">
            Private <br />
            <span className="font-heading italic font-light !text-cream/40">Gala &amp; Corporate.</span>
          </h1>
          <p className="text-xl !text-cream/60 font-light italic max-w-xl leading-relaxed">
            Craft extraordinary moments with a team dedicated to flawless execution.
          </p>
        </div>
      </section>

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
          Let's create something <br />
          <span className="font-heading italic font-light text-forest/30">unforgettable.</span>
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
