import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import LocationSection from '@/components/home/LocationSection'

import PageHero from '@/components/layout/PageHero'

export const metadata: Metadata = {
  title: 'Buffet Restaurant in Andheri East – Multi-Cuisine | Café Crema Mumbai',
  description: 'Enjoy our legendary multi-cuisine buffet at Café Crema, Andheri East. North Indian, Chinese, Continental, Asian, Desserts & more. Dine-in 24/7 at Hotel Peninsula Grand. Call +91 99302 71349.',
  keywords: ['buffet restaurant andheri east', 'buffet restaurant mumbai', 'multi-cuisine buffet andheri', 'hotel buffet andheri east'],
  alternates: { canonical: 'https://cafecrema.in/buffet' },
}

const cuisines = [
  { title: 'North Indian', body: 'Curries, biryanis, dals, tandoor breads — the classics, done with care. Dal Makhani, Butter Chicken, Paneer Tikka, Rogan Josh, and more.' },
  { title: 'Chinese', body: 'Indo-Chinese done right. Hakka noodles, Schezwan fried rice, Dim Sum, Kung Pao Chicken, Hot & Sour Soup.' },
  { title: 'Continental', body: 'European-inspired plates: risottos, pasta, grilled proteins, salads, and freshly baked breads.' },
  { title: 'Asian', body: 'Thai, Japanese, and pan-Asian favourites — Pad Thai, Miso Ramen, Green Curry, Gyoza, Banh Mi.' },
  { title: 'Dessert Station', body: 'Gulab Jamun, Chocolate Fondant, Kulfi Trio, Mango Panna Cotta, Tiramisu, and a rotating daily sorbet.' },
  { title: 'Live Stations', body: 'Chef-attended live counters during peak hours — watch your food being prepared fresh in front of you.' },
]

const whyUs = [
  { title: 'Freshly Replenished', body: 'Every dish is restocked throughout the meal — no waiting, no scraping the bottom of cold dishes.' },
  { title: 'Vegetarian & Non-Veg Options', body: 'Every cuisine category includes both — clearly labelled, always in good supply.' },
  { title: 'In-House Kitchen', body: 'Everything is made fresh in our kitchen at Hotel Peninsula Grand. No frozen shortcuts.' },
  { title: 'Available 24 Hours', body: "Our buffet operates across meal periods — breakfast, lunch, dinner, and everything in between. We're open 24/7." },
  { title: 'Easy to Reach', body: '2-minute walk from Sakinaka Metro Station. Free parking on-site. Serving guests from Andheri, Kurla, Powai, and Ghatkopar.' },
]

const pricing = [
  { label: 'Breakfast Buffet', time: '07:30 AM – 10:30 AM', price: '₹660', note: 'Plus Taxes' },
  { label: 'Lunch Buffet', time: '12:30 PM – 03:30 PM', price: '₹1,079', note: 'Plus Taxes' },
  { label: 'Dinner Buffet', time: '07:30 PM – 11:30 PM', price: '₹1,270', note: 'Plus Taxes' },
  { label: 'Sunday Brunch', time: 'Every Sunday | 12 PM – 3:30 PM', price: '₹1,409', note: 'Plus Taxes · Live Music' },
]

const faqs = [
  { q: 'Is the buffet available every day?', a: 'Yes, our multi-cuisine buffet is available daily, all day. Café Crema is open 24 hours at Hotel Peninsula Grand, Andheri East.' },
  { q: 'What cuisines are included in the buffet?', a: 'North Indian, Chinese, Continental, Asian, plus a dedicated dessert station — vegetarian and non-veg options across all cuisines.' },
  { q: 'Is the buffet good for large groups?', a: 'Absolutely. We can accommodate groups of up to 50 people. For large groups, call +91 99302 71349 to arrange in advance.' },
  { q: 'Is this buffet or à la carte?', a: 'We offer both — buffet and a full à la carte menu are available simultaneously. Choose what works for your group.' },
  { q: 'Do I need to book in advance for the buffet?', a: 'Walk-ins are welcome. For groups of 4 or more, we recommend calling ahead at +91 99302 71349 to ensure a good table.' },
]

export default function BuffetPage() {
  return (
    <div className="min-h-screen bg-cream text-forest selection:bg-forest selection:text-cream">

      {/* ── Cinematic Hero ── */}
      <PageHero
        subtitle="HOTEL PENINSULA GRAND, ANDHERI EAST"
        title={<>Mumbai's Most <br /><span className="font-heading italic font-light !text-cream/90">Satisfying Buffet.</span></>}
        description="At Café Crema, the buffet is not a backup plan — it's the main event. Freshly prepared spreads across North Indian, Chinese, Continental, and Asian cuisine, available every day. All-you-can-eat dining in the heart of Andheri East."
        image="/interior/DSC03132.jpg"
        imageAlt="Café Crema Multi-Cuisine Buffet, Andheri East"
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="px-8 py-4 bg-cream text-forest text-[10px] font-bold uppercase tracking-widest hover:bg-sand transition-luxury">Reserve a Table</Link>
          <Link href="/menu" className="px-8 py-4 border border-cream/40 text-cream text-[10px] font-bold uppercase tracking-widest hover:bg-cream/10 transition-luxury">View Full Menu</Link>
        </div>
      </PageHero>

      {/* ── Pricing Strip ── */}
      <section className="bg-forest border-b border-cream/10 overflow-hidden">
        <div className="page-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-cream/10">
          {pricing.map((item, i) => (
            <div key={i} className="py-12 md:py-16 px-8 hover:bg-cream/[0.03] transition-all duration-700 group cursor-default">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-cream/30 group-hover:text-gold-muted transition-colors duration-700 block mb-3">{item.time}</span>
              <div className="text-4xl font-medium text-cream tracking-tight mb-2 group-hover:scale-105 origin-left transition-transform duration-700">{item.price}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gold-muted/60 mb-4">{item.note}</div>
              <div className="text-sm text-cream/50 font-light italic group-hover:text-cream/80 transition-colors duration-700">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Every Cuisine. One Table. ── */}
      <section className="py-24 md:py-48 page-wrapper">
        <div className="mb-20 md:mb-32">
          <span className="text-meta text-forest/30 mb-6 block tracking-[0.6em]">WHAT'S INCLUDED</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-none mb-8">
            Every Cuisine. <br />
            <span className="font-heading italic font-light text-forest/30">One Table.</span>
          </h2>
          <p className="text-lg text-forest/60 font-light italic max-w-2xl leading-relaxed">
            Our buffet spans the full width of our kitchen — which means every trip to the counter is a different journey. Expect rotating daily specials alongside our permanent favourites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-forest/10 border border-forest/10">
          {cuisines.map((c, i) => (
            <div key={i} className="bg-cream p-10 md:p-12 hover:bg-sand transition-all duration-500 group">
              <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-forest/30 block mb-6">0{i + 1}</span>
              <h3 className="text-2xl font-medium tracking-tight mb-4 group-hover:text-gold-muted transition-colors duration-500">{c.title}</h3>
              <p className="text-sm font-light text-forest/60 leading-relaxed italic">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Café Crema ── */}
      <section className="bg-sand py-24 md:py-48 border-y border-forest/10">
        <div className="page-wrapper">
          <div className="mb-20 md:mb-32">
            <span className="text-meta text-forest/30 mb-6 block tracking-[0.6em]">WHY CAFÉ CREMA</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-none">
              Why Café Crema's <br />
              <span className="font-heading italic font-light text-forest/30">Buffet Stands Out.</span>
            </h2>
          </div>
          <div className="space-y-0">
            {whyUs.map((item, i) => (
              <div key={i} className="flex gap-10 md:gap-16 items-start border-b border-forest/10 py-10 md:py-12 group hover:pl-4 transition-luxury">
                <span className="text-4xl md:text-5xl font-medium text-forest/10 leading-none tabular-nums shrink-0 pt-1">0{i + 1}</span>
                <div>
                  <h4 className="text-xl md:text-2xl font-medium text-forest mb-3 tracking-tight">{item.title}</h4>
                  <p className="text-sm font-light text-forest/50 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sunday Brunch Callout ── */}
      <section className="bg-forest py-24 md:py-40">
        <div className="page-wrapper grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/interior/sunday-brunch.png"
              alt="Sunday Brunch with Live Music at Café Crema Andheri East"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border-[24px] border-forest/40 mix-blend-overlay pointer-events-none" />
          </div>
          <div>
            <span className="text-meta text-cream/60 mb-10 block tracking-[0.6em]">MAKE IT SPECIAL</span>
            <h2 className="text-huge !text-cream mb-10">
              Upgrade to Our <br />
              <span className="font-heading italic font-light !text-cream/90">Sunday Brunch.</span>
            </h2>
            <p className="text-lg text-cream/80 font-light italic leading-relaxed mb-12 max-w-lg">
              Our Sunday Brunch (every Sunday, 12 PM – 3:30 PM) takes the buffet and adds live music, a festive atmosphere, and an extended spread. Starting at ₹1,409 + taxes per person.
            </p>
            <Link
              href="/sunday-brunch"
              className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-cream border-b border-cream/30 pb-2 hover:border-cream transition-colors"
            >
              View Sunday Brunch Details →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-24 md:py-48 page-wrapper bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 md:mb-32">
            <span className="text-meta text-forest/30 mb-8 block tracking-[0.6em]">COMMON QUESTIONS</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-none">
              Buffet <span className="font-heading italic font-light text-forest/30">FAQs.</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-sand/30 border border-forest/5 p-8 md:p-12 hover:bg-sand/60 transition-all duration-700 group">
                <div className="flex gap-8 items-start">
                   <span className="text-meta text-gold-muted/40 pt-1 group-hover:text-gold-muted transition-colors duration-700">0{i + 1}</span>
                   <div>
                      <h4 className="text-xl md:text-2xl font-medium text-forest mb-4 tracking-tight">{faq.q}</h4>
                      <p className="text-base font-light text-forest/60 leading-relaxed italic max-w-2xl">{faq.a}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location CTA ── */}
      <section className="bg-sand py-24 md:py-32 border-t border-forest/10">
        <div className="page-wrapper text-center">
          <span className="text-meta text-forest/30 mb-10 block tracking-[0.6em]">FIND US</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-none mb-8">
            Find Our Buffet in <br />
            <span className="font-heading italic font-light text-forest/30">Andheri East.</span>
          </h2>
          <p className="text-base text-forest/60 font-light italic mb-4">
            1st Floor, Hotel Peninsula Grand, Sakinaka Junction, Andheri East, Mumbai – 400072
          </p>
          <p className="text-sm text-forest/40 font-light mb-12">
            2-minute walk from Sakinaka Metro Station (Line 2B) · Free parking on-site
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-12 py-5 bg-forest text-cream text-[10px] font-bold uppercase tracking-[0.5em] transition-luxury hover:bg-gold-muted">Reserve a Table</Link>
            <a href="tel:+919930271349" className="px-12 py-5 border border-forest/20 text-[10px] font-bold uppercase tracking-[0.5em] hover:border-forest transition-luxury">+91 99302 71349</a>
          </div>
        </div>
      </section>

    </div>
  )
}
