'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from('.hero-image-wrap', {
      scale: 1.05,
      opacity: 0,
      duration: 2.5,
      ease: 'expo.out'
    })
    tl.from('.hero-text-huge', {
      y: 60,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out'
    }, '-=1.5')
    tl.from('.hero-subtext', {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=1.0')
  }, { scope: container })

  return (
    <section ref={container} className="relative min-h-[100vh] w-full bg-cream overflow-hidden">
      {/* Background/Main Image Container */}
      <div className="absolute inset-0 z-0 hero-image-wrap">
        <div className="relative w-full h-full">
          <Image
            src="/interior/DSC03169.jpg"
            alt="Cafe Crema Interior"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlays to ensure text visibility */}
          <div className="absolute inset-0 bg-forest/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-forest/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/60 via-transparent to-transparent" />

          {/* Seamless gradient overlay blending into the cream background below */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent" />
        </div>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 page-wrapper h-full flex flex-col justify-end pb-24 md:pb-40 min-h-[100vh]">
        <div className="max-w-3xl">
          <span className="text-meta mb-10 block !text-cream/80 tracking-[0.5em] uppercase">
            Andheri's Favourite
          </span>

          <h1 className="hero-text-huge text-huge !text-cream mb-10">
            All-Day Dining <br />
            <span className="font-heading italic font-light !text-cream/90 block mt-2">Destination.</span>
          </h1>

          <div className="hero-subtext max-w-xl">
            <p className="text-lg md:text-xl !text-cream/80 font-light leading-relaxed italic mb-12">
              From a leisurely breakfast to a late-night dinner — Café Crema at Hotel Peninsula Grand brings you a world of flavour, every hour of every day.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <a href="/sunday-brunch" className="px-8 py-4 bg-cream text-forest text-[10px] font-bold uppercase tracking-[0.4em] transition-luxury hover:bg-gold-muted hover:text-cream shadow-xl">
                View Sunday Brunch
              </a>
              <a href="/buffet" className="px-8 py-4 border border-cream/30 text-cream text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-cream/10 transition-luxury">
                Explore Buffet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
