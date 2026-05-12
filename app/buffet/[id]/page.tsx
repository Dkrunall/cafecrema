'use client'

import { use, useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const buffetData: Record<string, any> = {
  'sunday-brunch': {
    title: 'Sunday Brunch',
    subtitle: 'Brunch Experience',
    time: '12:00 PM – 03:30 PM',
    price: '₹1409 + taxes',
    desc: 'Unlimited multi-cuisine buffet + live music. (Sundays Only)',
    longDesc: 'Experience the pinnacle of Sunday dining. From the moment you enter, the soothing notes of live jazz set the stage for an afternoon of indulgence. Our chefs present a rotating menu of atelier-exclusive creations, featuring seafood platters to robust global roasts.',
    highlights: [
      'Live Jazz Performance',
      'Unlimited Premium Vintage Pours',
      'Artisanal Dessert Studio',
      'Interactive Chef Counters',
    ],
    image: '/interior/sunday-brunch.png',
    color: 'bg-gold-muted',
    textColor: 'text-cream',
    borderColor: 'border-cream/20',
  },
  'breakfast': {
    title: 'Morning Breakfast',
    subtitle: 'Breakfast Selection',
    time: '07:30 AM – 10:30 AM',
    price: '₹660 + taxes',
    desc: 'Live Egg Station, Fresh Dosas, Artisanal Breads & Continental Selection.',
    longDesc: 'Our breakfast buffet is designed for those who appreciate the finer details of a morning meal. Enjoy perfectly brewed artisanal coffee alongside fresh, house-made breads, and live stations serving eggs and traditional dosas.',
    highlights: [
      'Live Egg & Dosa Stations',
      'House-made Artisanal Breads',
      'Freshly Squeezed Fruit Nectars',
      'Barista-crafted Coffee',
    ],
    image: '/interior/DSC03166.jpg',
    color: 'bg-sand/40',
    textColor: 'text-forest',
    borderColor: 'border-forest/10',
  },
  'lunch': {
    title: 'Global Lunch',
    subtitle: 'Mid-Day Buffet',
    time: '12:30 PM – 03:30 PM',
    price: '₹1079 + taxes',
    desc: 'Multi-cuisine Spread, 2 Live Counters, Cheese Platter & Decadent Desserts.',
    longDesc: 'Escape the bustle of the city and immerse yourself in a world of flavor. Our lunch buffet features a symphony of spices and textures, with live counters, and a dedicated cheese and charcuterie platter.',
    highlights: [
      'Multi-cuisine Spread',
      'Live Specialty Counters',
      'Imported Cheese Selection',
      'Signature Dessert Gallery',
    ],
    image: '/interior/DSC03177.jpg',
    color: 'bg-forest',
    textColor: 'text-cream',
    borderColor: 'border-cream/20',
  },
  'dinner': {
    title: 'Grand Dinner',
    subtitle: 'Evening Banquet',
    time: '07:30 PM – 11:30 PM',
    price: '₹1270 + taxes',
    desc: 'Grand International Buffet, 3 Live Chef Stations & Gourmet Selection.',
    longDesc: 'The Grand Dinner is a testament to our commitment to culinary diversity. With three live chef stations and a vast selection of gourmet preparations, every visit offers a new narrative of taste.',
    highlights: [
      'Grand International Spread',
      '3 Live Interactive Chef Stations',
      'Clay-Oven Tandoor Specialties',
      'Curated Global Mains',
    ],
    image: '/interior/DSC03168.jpg',
    color: 'bg-sand/20',
    textColor: 'text-forest',
    borderColor: 'border-forest/10',
  },
}

export default function BuffetDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const buffet = buffetData[id]
  const container = useRef<HTMLDivElement>(null)


  useGSAP(() => {
    // ── Hero Split Reveal ──
    const tl = gsap.timeline()

    tl.from('.hero-bg-accent', {
      xPercent: 100,
      duration: 1.5,
      ease: 'expo.inOut'
    })
      .from('.hero-image-container', {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
      }, '-=0.5')
      .from('.hero-content > *', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      }, '-=1')

    // ── Image Frame Reveal ──
    gsap.from('.image-frame', {
      borderWidth: 0,
      opacity: 0,
      duration: 2,
      ease: 'expo.out',
      delay: 1
    })

    // ── Promise Section Parallax ──
    gsap.from('.promise-text', {
      scrollTrigger: {
        trigger: '.promise-section',
        start: 'top 80%',
      },
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out'
    })

    gsap.to('.promise-bg', {
      scrollTrigger: {
        trigger: '.promise-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      },
      yPercent: 20,
      ease: 'none'
    })



  }, { scope: container })

  if (!buffet) {
    notFound()
  }

  return (
    <div ref={container} className="bg-cream min-h-screen selection:bg-forest selection:text-cream relative">



      {/* ── Polished Hero Section ── */}
      <section className="relative min-h-[100vh] flex items-stretch overflow-hidden pt-0 bg-cream">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Content */}
          <div className="flex items-center px-8 md:px-20 py-24 md:py-32 bg-forest relative">
            <div className="hero-content max-w-2xl relative z-10">
              <Link href="/buffet" className="text-meta mb-12 flex items-center gap-6 !text-cream/80 hover:!text-cream transition-luxury group">
                <span className="w-12 h-[1px] bg-current group-hover:w-20 transition-all duration-700" />
                THE CATALOGUE
              </Link>

              <h1 className="text-huge !text-cream mb-10">
                <span>{buffet.title.split(' ')[0]}</span> <br />
                <span className="font-heading italic font-light !text-cream/60">
                  {buffet.title.split(' ').slice(1).join(' ') || 'Buffet.'}
                </span>
              </h1>

              <p className="text-lg md:text-xl !text-cream/80 font-light leading-relaxed mb-16 max-w-lg italic">
                {buffet.longDesc}
              </p>

              <div className="flex flex-wrap gap-10 items-center">
                <Link
                  href="/contact"
                  className="px-12 py-5 bg-cream text-forest text-[11px] font-bold uppercase tracking-[0.4em] transition-luxury hover:bg-gold-muted hover:text-cream hover:translate-y-[-4px] shadow-xl hover:shadow-2xl"
                >
                  Secure Table Now
                </Link>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] !text-cream/30 mb-2">STARTING FROM</span>
                  <span className="text-3xl font-medium tracking-tight !text-cream">{buffet.price}</span>
                </div>
              </div>
            </div>

            {/* Subtle gradient to blend into the image */}
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-forest/50 to-transparent hidden lg:block" />
          </div>

          {/* Right: Full Height Image */}
          <div className="relative hidden lg:block overflow-hidden">
            <Image
              src={buffet.image}
              alt={buffet.title}
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlays to match global style */}
            <div className="absolute inset-0 bg-forest/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest/60 via-transparent to-transparent" />

            {/* Seamless bottom transition */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Refined Info Block ── */}
      <section className="py-32 md:py-48 page-wrapper grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5">
          <div className={`info-card ${buffet.color} ${buffet.textColor} p-12 md:p-16 flex flex-col justify-between min-h-[500px] shadow-2xl relative overflow-hidden group`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-current opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full transition-transform duration-1000 group-hover:scale-150" />

            <div>
              <div className="flex justify-between items-start mb-20">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-50">
                  DAILY CULINARY SERIES
                </span>
                <div className="w-10 h-[1px] bg-current opacity-20" />
              </div>
              <h3 className="text-5xl md:text-7xl font-medium mb-12 tracking-tighter leading-[0.85]">
                {buffet.title} <br />
                <span className="font-heading italic opacity-30">Selection.</span>
              </h3>
              <p className="text-2xl font-light leading-relaxed opacity-80 mb-16 italic max-w-sm">
                {buffet.desc}
              </p>
            </div>

            <div className={`pt-12 border-t ${buffet.borderColor} flex justify-between items-end`}>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-40 block mb-4">RESERVATION WINDOW</span>
                <span className="text-4xl font-medium tracking-tighter">{buffet.time}</span>
              </div>
              <Link href="/contact" className="w-14 h-14 rounded-full border border-current/20 flex items-center justify-center hover:bg-current hover:text-inherit transition-luxury">
                <span className="text-2xl">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="section-label text-forest/20">THE CURATED MENU</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {buffet.highlights.map((h: string, i: number) => (
              <div key={h} className="group cursor-default">
                <div className="flex items-center gap-6 mb-6">
                  <span className="text-4xl font-heading italic font-light text-gold-muted/30 group-hover:text-gold-muted transition-luxury">0{i + 1}</span>
                  <div className="h-[1px] flex-grow bg-forest/5" />
                </div>
                <p className="text-2xl font-medium tracking-tight text-forest/80 leading-tight group-hover:translate-x-2 transition-luxury">
                  {h}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 flex items-center justify-between p-10 bg-sand/20 border border-forest/5">
            <p className="text-xs font-light italic text-forest/40 uppercase tracking-widest">
              Live interactive counters and chef-led explorations.
            </p>
            <Link href="/menu" className="text-[10px] font-bold uppercase tracking-[0.4em] border-b border-forest/20 pb-2 hover:border-forest transition-all">
              Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── Refined "OUR CULINARY PROMISE" ── */}
      <section className="promise-section bg-sand py-24 md:py-48 border-t border-forest/5 relative overflow-hidden">
        <div className="page-wrapper text-center relative z-10">
          <div className="promise-text max-w-4xl mx-auto">
            <span className="text-meta text-forest/40 mb-12 block tracking-[0.6em] uppercase font-bold">OUR CULINARY PROMISE</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight mb-16 text-forest">
              “Quality is not an act, <br />
              <span className="font-heading italic font-light opacity-60">it is a daily habit.”</span>
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <Link
                href="/contact"
                className="px-12 py-5 bg-forest text-cream text-[10px] font-bold uppercase tracking-[0.4em] transition-luxury hover:bg-gold-muted hover:scale-105"
              >
                Reserve Your Table
              </Link>
              <Link href="/about" className="group flex items-center gap-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-forest/40 group-hover:text-forest transition-luxury">
                  OUR STORY
                </span>
                <div className="w-10 h-[1px] bg-forest/20 group-hover:w-16 group-hover:bg-forest transition-all duration-700" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
