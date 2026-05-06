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
    <section ref={container} className="bg-cream py-32 overflow-hidden">
      <div className="page-wrapper">
        
        {/* Top Bento Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Left Block: Narrative */}
          <div className="md:col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-forest/10 pb-12">
            <div className="reveal md:pr-8">
              <span className="text-meta mb-12 block text-forest/50">01 / GENESIS</span>
              <h2 className="text-5xl md:text-7xl font-medium leading-[1.1] md:leading-[0.95] mb-12 tracking-tight">
                Global Soul, <br className="hidden md:block" />
                <span className="font-heading italic font-light text-forest/80 block mt-2">Local Precision.</span>
              </h2>
              <p className="text-lg text-forest/60 font-light leading-relaxed max-w-sm italic">
                Our inventory approach to Cafe Crema treats every culinary creation as a specific, registerable masterpiece.
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
              <span className="text-meta mb-8">02 / SETTING</span>
              <div className="w-[1px] h-20 bg-forest/20 mb-8" />
              <h3 className="text-3xl font-medium leading-tight mb-8">Live Music</h3>
              <p className="text-sm text-forest/60 font-light leading-relaxed max-w-[200px] mb-12">
                A nightly symphony of live neo-soul and traditional jazz levels defines our evening experience.
              </p>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image 
                src="/interior/DSC03132.jpg"
                alt="Live Jazz"
                fill
                className="object-cover grayscale"
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
            <span className="text-meta text-cream/60 mb-6 block">03 / ACCESS</span>
            <div className="text-6xl font-medium leading-none mb-6">
              <span className="font-heading italic font-light italic text-4xl block mb-2">ALWAYS OPEN</span>
              24/7
            </div>
            <p className="text-sm text-cream/70 font-light leading-relaxed">
              Culinary excellence never sleeps. Visit us any moon-phase or morning-departure.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
