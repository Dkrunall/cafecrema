'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Highlights() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const items = gsap.utils.toArray('.reveal')
    items.forEach((item: any) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: 'expo.out'
      })
    })

    gsap.to('.parallax-img', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      },
      y: -50,
      ease: 'none'
    })
  }, { scope: container })

  return (
    <section ref={container} className="bg-cream py-24 md:py-48 overflow-hidden">
      <div className="page-wrapper">

        {/* Top Bento Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

          {/* Left Block: Narrative */}
          <div className="md:col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-forest/10 pb-12">
            <div className="reveal md:pr-8">
              <span className="text-meta mb-12 block text-forest/50">01 / OUR CUISINE</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] md:leading-[0.95] mb-12 tracking-tight">
                Global Flavours. <br className="hidden md:block" />
                <span className="font-heading italic font-light text-forest/80 block mt-2">Local Warmth.</span>
              </h2>
              <p className="text-lg text-forest/60 font-light leading-relaxed max-w-sm italic">
                From the streets of Mumbai to the kitchens of the world — Café Crema brings you North Indian, Chinese, Continental, and Asian cuisine all under one roof. Crafted daily, served with warmth, right in the heart of Andheri East.
              </p>
            </div>
            <div className="reveal relative aspect-square overflow-hidden mt-12 md:mt-16">
              <Image
                src="/food&drinks/LAH02520.jpg"
                alt="Culinary Detail"
                fill
                className="object-cover transition-luxury hover:scale-110"
              />
            </div>
          </div>

          {/* Right Block: Live Music (Vertical Style) */}
          <div className="md:col-span-12 lg:col-span-4 bg-sand p-12 reveal flex flex-col justify-between">
            <div className="flex flex-col items-center text-center">
              <span className="text-meta mb-8">02 / LIVE MUSIC</span>
              <div className="w-[1px] h-20 bg-forest/20 mb-8" />
              <h3 className="text-3xl font-medium leading-tight mb-8">Every Sunday, Music Fills the Air.</h3>
              <p className="text-sm text-forest/60 font-light leading-relaxed max-w-[200px] mb-12">
                Every Sunday, our resident musicians bring the dining room to life during our Sunday Brunch (12 PM – 3:30 PM). Great food, great company, great music — every single week at Café Crema, Andheri East.
              </p>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/interior/live-music.png"
                alt="Live Music at Cafe Crema"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>

        {/* Bottom Large Image Block */}
        <div className="reveal relative w-full h-[70vh] overflow-hidden">
          <Image
            src="/interior/DSC03177.jpg"
            alt="Atelier Interior"
            fill
            className="object-cover parallax-img"
          />

          {/* 24/7 Green Overlay Box */}
          <div className="absolute top-12 left-12 bg-forest p-10 text-cream max-w-[320px] transition-luxury hover:-translate-y-2">
            <span className="text-meta text-cream/80 mb-6 block">03 / ALWAYS OPEN</span>
            <div className="text-5xl md:text-6xl font-medium leading-none mb-6">
              <span className="font-heading italic font-light text-4xl block mb-2">OPEN</span>
              24/7
            </div>
            <p className="text-sm text-cream/90 font-light leading-relaxed">
              Café Crema never closes. Whether you're arriving late from a flight, hosting an early breakfast meeting, or craving a midnight meal — we're always here. Open 24 hours, 7 days a week at Hotel Peninsula Grand, Sakinaka Junction, Andheri East.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
