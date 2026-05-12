'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function TypographyStrip() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to('.marquee-inner', {
      xPercent: -50,
      repeat: -1,
      duration: 30,
      ease: 'none'
    })
  }, { scope: container })

  const marqueeText = "CAFÉ CREMA, ANDHERI EAST // ALL-DAY DINING // SUNDAY BRUNCH WITH LIVE MUSIC // MULTI-CUISINE BUFFET // HOTEL PENINSULA GRAND // OPEN 24 HOURS // BUFFET RESTAURANT MUMBAI // SAKINAKA JUNCTION // "

  return (
    <section ref={container} className="bg-sand py-4 border-y border-forest/10 overflow-hidden whitespace-nowrap">
      <div className="marquee-inner flex">
        <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-forest/40 pr-12">
          {marqueeText.repeat(10)}
        </div>
        <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-forest/40 pr-12">
          {marqueeText.repeat(10)}
        </div>
      </div>
    </section>
  )
}
