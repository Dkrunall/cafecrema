'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MenuPreview() {
  const container = useRef(null)
  
  const featuredItems = [
    { 
      name: "Saffron Silk Ravioli", 
      desc: "HAND-FORGED DURUM SEMOLINA | BRAISED SAFFRON", 
      price: "₹420", 
      img: "/food&drinks/LAH02420.jpg" 
    },
    { 
      name: "Liquid Gold Elixir", 
      desc: "SMALL BATCH BOURBON | TRUFFLE-INFUSED HONEY | SMOKE", 
      price: "₹380", 
      img: "/food&drinks/LAH02719.jpg" 
    },
    { 
      name: "The Decadent Void", 
      desc: "72% VALRHONA | SALTED PRALINE | SMOKE CARAMEL", 
      price: "₹350", 
      img: "/food&drinks/LAH02590.jpg" 
    }
  ];

  useGSAP(() => {
    gsap.from('.edit-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%'
      },
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: 'power3.out'
    })
  }, { scope: container })

  return (
    <section ref={container} className="bg-cream py-32 md:py-48">
      <div className="page-wrapper">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 reveal">
          <h2 className="text-6xl md:text-7xl font-medium leading-none mb-4 md:mb-0">
            The Current <span className="font-heading italic">Edit.</span>
          </h2>
          <span className="text-meta text-forest/30 tracking-[0.2em]">COLLECTION NO. 04 / 2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {featuredItems.map((item, i) => (
            <div key={i} className="edit-card group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-10 border border-forest/5">
                <Image 
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover transition-luxury group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-forest/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="flex justify-between items-end mb-4 border-b border-forest/10 pb-4 group-hover:border-forest/30 transition-colors duration-500">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-gold-muted transition-colors duration-500">{item.name}</h3>
                <span className="text-sm font-medium opacity-60 relative top-[-2px]">{item.price}</span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-forest/40 leading-relaxed max-w-[220px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
