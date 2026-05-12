import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Café Crema | Hotel Peninsula Grand, Andheri East',
  description: 'Discover the story behind Café Crema, the premier all-day dining destination at Hotel Peninsula Grand. Learn about our multi-cuisine philosophy and culinary values.',
  keywords: ['cafe crema about', 'hotel peninsula grand restaurant', 'fine dining andheri east story']
}

const values = [
  { num: '01', title: '24/7 Hours', desc: 'Dining without boundaries — whenever the craving strikes.' },
  { num: '02', title: 'Live Sound', desc: 'Curated acoustic sessions for a full sensorial experience.' },
  { num: '03', title: 'Pure Sourcing', desc: 'Locally grown ingredients, internationally prepared to standard.' },
  { num: '04', title: 'Global Canvas', desc: 'Seven distinct cuisines united under one roof.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream text-forest">

      {/* ── Cinematic Hero ── */}
      <section className="relative min-h-[100vh] flex items-end overflow-hidden">
        <Image
          src="/interior/DSC03153.jpg"
          alt="Café Crema Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-forest/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-forest/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/60 via-transparent to-transparent" />
        <div className="relative z-10 page-wrapper pb-24 md:pb-32 w-full">
          <span className="text-meta text-cream/40 mb-10 block tracking-[0.6em]">THE ARCHIVE</span>
          <h1 className="text-5xl md:text-7xl lg:text-[130px] font-medium leading-[0.85] tracking-tight !text-cream mb-10">
            The Heart <br />
            <span className="font-heading italic font-light !text-cream/40">of Andheri.</span>
          </h1>
          <p className="text-xl !text-cream/60 font-light italic max-w-2xl leading-relaxed">
            A premier all-day dining destination operating with the warmth of a neighbourhood café and the standards of a world-class hotel.
          </p>
        </div>
      </section>

      {/* ── Brand Manifesto ── */}
      <section className="py-24 md:py-56 page-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
          <div className="md:col-span-5">
            <span className="text-meta text-forest/30 mb-12 block tracking-[0.6em]">OUR ORIGIN</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-none mb-16">
              Born from <br />
              <span className="font-heading italic font-light text-forest/30">a vision.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-24">
            <p className="text-2xl md:text-3xl text-forest/60 font-light leading-relaxed italic mb-12">
              Café Crema was born out of a simple but powerful vision: to provide a premium, heart-warming dining experience that operates without boundaries.
            </p>
            <blockquote className="border-l-2 border-gold-muted pl-8 py-4">
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-gold-muted leading-loose">
                "Operating with the localized warmth of a neighbourhood café, paired with the sophisticated standards of a world-class hotel."
              </p>
            </blockquote>
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
              Culinary <br />
              <span className="font-heading italic font-light text-forest/30">Excellence.</span>
            </h2>
            <div className="space-y-0">
              {values.map((stat) => (
                <div key={stat.num} className="flex gap-10 items-start border-b border-forest/10 py-10 group hover:pl-4 transition-luxury">
                  <span className="text-5xl font-medium text-forest/10 leading-none tabular-nums pt-1">{stat.num}</span>
                  <div>
                    <h4 className="text-xl font-medium text-forest mb-2 tracking-tight">{stat.title}</h4>
                    <p className="text-sm font-light text-forest/40 leading-relaxed uppercase tracking-widest">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Interior Gallery Grid ── */}
      <section className="py-24 md:py-40 page-wrapper">
        <div className="flex items-end justify-between mb-16">
          <span className="text-meta text-forest/30 tracking-[0.6em]">THE SPACE</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-forest/20">Hotel Peninsula Grand</span>
        </div>
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
            Reserve your <br />
            <span className="font-heading italic font-light opacity-50">table today.</span>
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
