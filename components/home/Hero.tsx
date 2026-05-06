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
      <div className="relative z-10 page-wrapper h-full flex flex-col justify-end pb-24 md:pb-32 min-h-[100vh]">
        <div className="max-w-5xl">
          <span className="text-meta mb-8 md:mb-12 block !text-cream/80">ESTABLISHED 2024</span>
          
          <h1 className="hero-text-huge text-huge !text-cream mb-12">
            The <span className="font-heading italic font-light !text-cream/90">Digital</span> <br />
            Atelier of Taste.
          </h1>

          <div className="hero-subtext grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end">
            <p className="text-base md:text-xl !text-cream/80 font-light leading-relaxed max-w-md italic">
              Cafe Crema is where neo-Brutalist architecture meets the precision of high-fashion details. Every plate is a curated artifact in our culinary inventory.
            </p>
            <div className="flex justify-start md:justify-end">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cream/60 animate-bounce">
                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
