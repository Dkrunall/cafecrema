import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ReservationForm from '@/components/forms/ReservationForm'
import LocationSection from '@/components/home/LocationSection'

import PageHero from '@/components/layout/PageHero'

export const metadata: Metadata = {
  title: 'Contact & Reservations – Café Crema Mumbai',
  description: 'Book your table, find our location at Hotel Peninsula Grand on the map, or contact Café Crema Andheri East via Phone and WhatsApp for bulk bookings.',
  keywords: ['cafe crema contact', 'cafe crema phone number', 'restaurant reservation andheri east', 'hotel peninsula grand directions']
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream text-forest selection:bg-forest selection:text-cream">

      {/* ── Cinematic Hero ── */}
      <PageHero
        subtitle="RESERVATIONS"
        title={<>Book a Table at <br /><span className="font-heading italic font-light !text-cream/40">Café Crema, Andheri East.</span></>}
        description="Call us, WhatsApp us, or fill in the form below. We confirm all reservations within 60 minutes. Walk-ins also welcome — we're open 24 hours."
        image="/interior/DSC03132.jpg"
        imageAlt="Café Crema Dining"
      />

      {/* ── Quick Contact Strip ── */}
      <section className="bg-sand border-b border-forest/10 overflow-hidden">
        <div className="page-wrapper grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-forest/10">
          <a href="tel:+919930271349" className="py-12 md:py-16 px-8 flex items-center gap-6 group hover:bg-forest transition-all duration-700">
            <div className="w-12 h-12 rounded-full border border-forest/10 flex items-center justify-center text-forest group-hover:border-cream/20 group-hover:text-cream transition-all duration-700 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-forest/30 group-hover:text-cream/40 block mb-1">CALL US</span>
              <span className="text-xl font-medium tracking-tight group-hover:text-cream transition-colors">+91 99302 71349</span>
            </div>
          </a>
          <a href="https://wa.me/919930271349" target="_blank" rel="noopener noreferrer" className="py-12 md:py-16 px-8 flex items-center gap-6 group hover:bg-forest transition-all duration-700">
            <div className="w-12 h-12 rounded-full border border-forest/10 flex items-center justify-center text-forest group-hover:border-cream/20 group-hover:text-cream transition-all duration-700 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-forest/30 group-hover:text-cream/40 block mb-1">WHATSAPP</span>
              <span className="text-xl font-medium tracking-tight group-hover:text-cream transition-colors">Chat Instantly</span>
            </div>
          </a>
          <div className="py-12 md:py-16 px-8 flex items-center gap-6 group">
            <div className="w-12 h-12 rounded-full border border-forest/10 flex items-center justify-center text-forest/40 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-forest/30 block mb-1">HOURS</span>
              <span className="text-xl font-medium tracking-tight">Open 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reservation Form Section ── */}
      <section className="py-24 md:py-48 page-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">

          {/* Left: Intro */}
          <div className="lg:col-span-4">
            <span className="text-meta text-forest/30 mb-12 block tracking-[0.6em]">TABLE BOOKING</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-none mb-12">
              Secure <br />
              <span className="font-heading italic font-light text-forest/30">your seat.</span>
            </h2>
            <p className="text-lg text-forest/60 font-light italic leading-relaxed mb-16">
              Fill in your details and we'll confirm your reservation within the hour. For groups of 50+, please call us directly.
            </p>
            <div className="relative aspect-[3/4] overflow-hidden shadow-xl">
              <Image
                src="/interior/DSC03112.jpg"
                alt="Café Crema Dining Table"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-8">
            <div className="bg-sand border border-forest/5 p-12 md:p-20">
              <div className="mb-16 pb-16 border-b border-forest/10">
                <h3 className="text-3xl font-medium tracking-tight mb-4">Reservation Inquiry</h3>
                <p className="text-sm text-forest/40 font-light italic">
                  Available daily — confirmed within 60 minutes by our team at Hotel Peninsula Grand.
                </p>
              </div>
              <ReservationForm />
            </div>
          </div>

        </div>
      </section>

      <LocationSection />
    </div>
  )
}
