'use client'

import Image from 'next/image'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

interface PageHeroProps {
  title: React.ReactNode
  subtitle: string
  description?: string
  image: string
  imageAlt: string
  children?: React.ReactNode
}

export default function PageHero({ 
  title, 
  subtitle, 
  description, 
  image, 
  imageAlt,
  children 
}: PageHeroProps) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from('.hero-image-wrap', { 
      scale: 1.05,
      opacity: 0,
      duration: 2.5, 
      ease: 'expo.out' 
    })
    tl.from('.hero-text-content', { 
      y: 40, 
      opacity: 0, 
      duration: 1.5, 
      ease: 'power3.out' 
    }, '-=1.8')
  }, { scope: container })

  return (
    <section ref={container} className="relative min-h-[100vh] flex items-end overflow-hidden bg-forest">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 hero-image-wrap">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlays to ensure text visibility and match Home Hero style */}
        <div className="absolute inset-0 bg-forest/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-forest/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/60 via-transparent to-transparent" />
        
        {/* Transition to background */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 page-wrapper pb-24 md:pb-40 w-full hero-text-content">
        <div className="max-w-5xl">
          <span className="text-meta !text-cream/80 mb-10 block tracking-[0.5em] uppercase">
            {subtitle}
          </span>
          <h1 className="text-huge !text-cream mb-10">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl !text-cream/80 font-light italic max-w-2xl leading-relaxed mb-12">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
