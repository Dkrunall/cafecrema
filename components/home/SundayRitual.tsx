'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SundayRitual() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.ritual-reveal', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.2
    })
  }, { scope: container })

  return (
    <section ref={container} className="bg-sand py-24 md:py-48 overflow-hidden">
      <div className="page-wrapper grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* Visual Side */}
        <div className="ritual-reveal relative aspect-square group overflow-hidden">
          <Image
            src="/interior/sunday-brunch.png"
            alt="Sunday Brunch Buffet"
            fill
            className="object-cover transition-luxury group-hover:scale-105"
          />
          <div className="absolute inset-0 border-[24px] border-cream/40 mix-blend-overlay pointer-events-none transition-luxury group-hover:border-[16px]" />
        </div>

        {/* Content Side */}
        <div className="ritual-reveal md:pl-12">
          <span className="text-meta mb-10 block tracking-[0.5em] text-forest/50">EVERY SUNDAY | 12:00 PM – 3:30 PM</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium leading-none md:leading-[0.95] mb-12 tracking-tight">
            The Sunday <br />
            <span className="font-heading italic font-light">Brunch.</span>
          </h2>
          <p className="text-lg md:text-xl text-forest/70 font-light leading-relaxed mb-16 max-w-lg italic">
            Every Sunday. Unlimited multi-cuisine buffet + live music. Starting at ₹1,409 + taxes per person. The most popular Sunday brunch in Andheri East — book your table before it fills up.
          </p>

          <div className="flex flex-wrap gap-8 items-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-forest text-cream text-[10px] font-bold uppercase tracking-widest transition-luxury hover:bg-forest-muted"
            >
              Reserve a Table
            </Link>
            <Link
              href="/sunday-brunch"
              className="text-[10px] font-bold uppercase tracking-[0.4em] border-b border-forest/20 pb-2 hover:border-forest transition-colors"
            >
              View Brunch Menu
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
