import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ReservationForm from '@/components/forms/ReservationForm'
import LocationSection from '@/components/home/LocationSection'

import PageHero from '@/components/layout/PageHero'

export const metadata: Metadata = {
  title: 'Sunday Brunch in Mumbai – Live Music + Unlimited Buffet | Café Crema Andheri',
  description: 'Every Sunday 12 PM–3:30 PM at Café Crema, Andheri East. Unlimited multi-cuisine buffet + live music. ₹1,409 + taxes. Book: +91 99302 71349.',
  keywords: ['sunday brunch mumbai', 'sunday brunch andheri east', 'brunch buffet andheri', 'live music sunday brunch mumbai'],
  alternates: { canonical: 'https://cafecrema.in/sunday-brunch' },
  openGraph: {
    title: 'Sunday Brunch in Mumbai – Live Music + Unlimited Buffet | Café Crema Andheri',
    description: 'Every Sunday 12 PM–3:30 PM at Café Crema, Andheri East. Unlimited multi-cuisine buffet + live music. ₹1,409 + taxes.',
    images: [{ url: '/og-sunday-brunch.jpg', width: 1200, height: 630 }],
  },
}

const included = [
  { title: 'Unlimited Multi-Cuisine Buffet', body: 'North Indian, Chinese, Continental, Asian — refill as many times as you like. Live replenishment throughout.' },
  { title: 'Live Music Performance', body: 'Every Sunday our resident musicians perform live. The perfect soundtrack to a long, unhurried afternoon.' },
  { title: 'Dessert Station', body: 'Gulab Jamun, Chocolate Fondant, Mango Panna Cotta, Kulfi Trio — plus a rotating daily sorbet.' },
  { title: 'Beverages Included', body: 'Soft drinks, fresh juices, masala chai and coffee included. Bar beverages available at additional cost.' },
  { title: 'Free Parking', body: 'Ample parking at Hotel Peninsula Grand — arrive stress-free.' },
  { title: '2 Mins from Metro', body: 'Sakinaka Metro Station (Line 2B) is a 2-minute walk away. Accessible from Andheri, Kurla, Powai, and Ghatkopar.' },
]

const faqs = [
  { q: 'Is Sunday Brunch available every week?', a: 'Yes, every Sunday 12:00 PM–3:30 PM without exception.' },
  { q: 'Do I need to book in advance?', a: 'Reservations strongly recommended — especially for groups of 4+. Call +91 99302 71349 or WhatsApp us.' },
  { q: 'Is parking available?', a: 'Yes, free parking at Hotel Peninsula Grand, Sakinaka Junction.' },
  { q: 'Are children welcome?', a: "Absolutely. Sunday Brunch is great for families. Children's pricing available — ask when booking." },
  { q: 'What cuisines are in the Sunday Brunch buffet?', a: 'North Indian, Chinese, Continental, Asian — veg and non-veg across all categories. Dessert station included.' },
  { q: 'Is alcohol served at Sunday Brunch?', a: 'Bar beverages (cocktails, beer, wine, spirits) available at additional cost. Full bar open.' },
  { q: 'How do I get there from Sakinaka Metro?', a: '2-minute walk from Sakinaka Metro Station (Line 2B). Look for Hotel Peninsula Grand at Sakinaka Junction.' },
  { q: 'Can I book for a birthday or special occasion?', a: "Yes! We love celebrating with you. Tell us the occasion when reserving and we'll make it special." },
]

export default function SundayBrunchPage() {
  return (
    <div className="min-h-screen bg-cream text-forest selection:bg-forest selection:text-cream">

      {/* ── Cinematic Hero ── */}
      <PageHero
        subtitle="EVERY SUNDAY | 12:00 PM – 3:30 PM"
        title={<>Sunday Brunch. <br />Live Music. <br /><span className="font-heading italic font-light !text-cream/40">Unlimited Food.</span></>}
        description="Mumbai's most loved Sunday ritual — at Café Crema, Andheri East. An unlimited multi-cuisine buffet, live music, and the warmth of a long Sunday afternoon. Every week, without exception."
        image="/interior/sunday-brunch.png"
        imageAlt="Sunday Brunch with Live Music at Café Crema, Andheri East"
      >
        <p className="text-sm !text-cream/80 font-medium mb-12 tracking-wide">Starting at ₹1,409 + taxes per person</p>
        <div className="flex flex-wrap gap-4">
          <Link href="#reserve" className="px-8 py-4 bg-cream text-forest text-[10px] font-bold uppercase tracking-widest hover:bg-sand transition-luxury">Reserve Your Table</Link>
          <a href="tel:+919930271349" className="px-8 py-4 border border-cream/40 text-cream text-[10px] font-bold uppercase tracking-widest hover:bg-cream/10 transition-luxury">Call +91 99302 71349</a>
        </div>
      </PageHero>

      {/* ── What's Included ── */}
      <section className="py-24 md:py-48 page-wrapper">
        <div className="mb-20 md:mb-32">
          <span className="text-meta text-forest/30 mb-6 block tracking-[0.6em]">WHAT YOU GET</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-none">
            Everything in <br />
            <span className="font-heading italic font-light text-forest/30">One Afternoon.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-forest/10 border border-forest/10">
          {included.map((item, i) => (
            <div key={i} className="bg-cream p-10 md:p-12 hover:bg-sand transition-all duration-500 group">
              <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-forest/30 block mb-6">0{i + 1}</span>
              <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4 group-hover:text-gold-muted transition-colors duration-500">{item.title}</h3>
              <p className="text-sm font-light text-forest/60 leading-relaxed italic">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing + Reservation ── */}
      <section id="reserve" className="bg-sand py-24 md:py-48 border-y border-forest/10">
        <div className="page-wrapper grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Pricing column */}
          <div className="lg:col-span-5">
            <span className="text-meta text-forest/30 mb-10 block tracking-[0.6em]">TRANSPARENT PRICING</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-none mb-12">
              What You'll <br />
              <span className="font-heading italic font-light text-forest/30">Pay.</span>
            </h2>

            <div className="bg-forest p-10 md:p-12 text-cream mb-10">
              <div className="text-5xl md:text-6xl font-medium leading-none mb-3">₹1,409</div>
              <div className="text-sm text-cream/50 font-light mb-8">+ taxes per person</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-muted">Every Sunday | 12:00 PM – 3:30 PM</div>
            </div>

            <p className="text-sm text-forest/50 font-light italic leading-relaxed mb-12">
              Children pricing and group rates on request. Call +91 99302 71349.
            </p>

            <div className="space-y-4">
              {[
                'Unlimited multi-cuisine buffet',
                'Live music performance included',
                'Dessert station included',
                'Soft drinks, chai & coffee included',
                'Free parking at Hotel Peninsula Grand',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-sm text-forest/70">
                  <div className="w-1.5 h-1.5 bg-gold-muted shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Reservation form */}
          <div className="lg:col-span-7">
            <div className="bg-cream border border-forest/5 p-10 md:p-16">
              <div className="mb-12 pb-12 border-b border-forest/10">
                <h3 className="text-3xl font-medium tracking-tight mb-3">Reserve for Sunday Brunch</h3>
                <p className="text-sm text-forest/40 font-light italic">
                  We confirm all reservations within 60 minutes. For immediate bookings, call +91 99302 71349.
                </p>
              </div>
              <ReservationForm />
            </div>
          </div>

        </div>
      </section>

      {/* ── Photo Strip ── */}
      <section className="py-24 md:py-40 page-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { src: '/interior/DSC03132.jpg', alt: 'Café Crema dining room' },
            { src: '/interior/live-music.png', alt: 'Live music at Sunday Brunch Café Crema' },
            { src: '/interior/DSC03177.jpg', alt: 'Sunday Brunch buffet spread Andheri East' },
          ].map((img, i) => (
            <div key={i} className="relative aspect-[4/5] overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-luxury group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="bg-sand py-24 md:py-48 border-t border-forest/10">
        <div className="page-wrapper">
          <div className="max-w-3xl">
            <span className="text-meta text-forest/30 mb-10 block tracking-[0.6em]">COMMON QUESTIONS</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-none mb-20">
              Sunday Brunch <br />
              <span className="font-heading italic font-light text-forest/30">FAQs.</span>
            </h2>
            <div className="border-t border-forest/10">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-forest/10 py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6">
                  <span className="text-meta text-forest/20 md:col-span-1">0{i + 1}</span>
                  <div className="md:col-span-11">
                    <h4 className="text-xl font-medium text-forest mb-4 tracking-tight">{faq.q}</h4>
                    <p className="text-base font-light text-forest/60 leading-relaxed italic">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LocationSection />
    </div>
  )
}
