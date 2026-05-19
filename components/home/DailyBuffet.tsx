'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const buffets = [
  {
    id: 'sunday-brunch',
    type: 'Sunday Brunch',
    time: '12:00 PM – 03:30 PM',
    price: '₹1409 + taxes',
    desc: '1 Veg & 1 Non-Veg Live Counter · Starters (3 Veg, 3 Non-Veg) · Mains (5 Veg, 4 Non-Veg) · Dessert Counter · Cheese Platter · Live Music.',
    color: 'bg-gold-muted',
    textColor: 'text-cream',
  },
  {
    id: 'breakfast',
    type: 'Breakfast',
    time: '07:30 AM – 10:30 AM',
    price: '₹660 + taxes',
    desc: 'Live Counter · South Indian Dishes · English Breakfast · Bread Counter · Salad Counter · Assorted Sandwich · Fresh Juice · Tea / Coffee.',
    color: 'bg-sand/40',
    textColor: 'text-forest',
  },
  {
    id: 'lunch',
    type: 'Lunch',
    time: '12:30 PM – 03:30 PM',
    price: '₹1079 + taxes',
    desc: 'Soups · Live Counter · Salad Counter · Cheese Platter · Starters (2 Veg, 2 Non-Veg) · Mains (5 Veg, 4 Non-Veg) · Indian Breads · Desserts · Fruit Cuts.',
    color: 'bg-forest',
    textColor: 'text-cream',
  },
  {
    id: 'dinner',
    type: 'Dinner',
    time: '07:30 PM – 11:30 PM',
    price: '₹1270 + taxes',
    desc: 'Live Counter · Salad Counter · Cheese Platter · Starters (2 Veg, 2 Non-Veg) · Mains (5 Veg, 4 Non-Veg) · Desserts Counter · Fruit Cuts.',
    color: 'bg-sand/20',
    textColor: 'text-forest',
  },
]

export default function DailyBuffet() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const router = useRouter()
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)

  // ── Momentum drag ───────────────────────────────────────────────
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let isDragging = false
    let startX = 0
    let startScrollLeft = 0
    let lastX = 0
    let lastTime = 0
    let velocity = 0
    let momentumId: number

    const cancelMomentum = () => {
      if (momentumId) cancelAnimationFrame(momentumId)
    }

    const applyMomentum = () => {
      if (Math.abs(velocity) < 0.5) return
      velocity *= 0.93                          // friction
      el.scrollLeft += velocity
      momentumId = requestAnimationFrame(applyMomentum)
    }

    const onMouseDown = (e: MouseEvent) => {
      cancelMomentum()
      isDragging = true
      isDraggingRef.current = false
      velocity = 0
      startX = e.clientX
      startXRef.current = e.clientX
      startScrollLeft = el.scrollLeft
      lastX = e.clientX
      lastTime = performance.now()
      el.style.cursor = 'grabbing'
      el.style.userSelect = 'none'
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      const dx = e.clientX - startX
      if (Math.abs(dx) > 5) {
        isDraggingRef.current = true
      }
      el.scrollLeft = startScrollLeft - dx

      // track velocity
      const now = performance.now()
      const dt = now - lastTime
      if (dt > 0) velocity = ((lastX - e.clientX) / dt) * 16
      lastX = e.clientX
      lastTime = now
    }

    const onMouseUp = () => {
      if (!isDragging) return
      isDragging = false
      el.style.cursor = 'grab'
      el.style.removeProperty('user-select')
      applyMomentum()
      // Reset isDraggingRef after a tiny delay so click handlers can read it
      setTimeout(() => {
        isDraggingRef.current = false
      }, 50)
    }

    const onMouseLeave = () => {
      if (!isDragging) return
      isDragging = false
      el.style.cursor = 'grab'
      el.style.removeProperty('user-select')
      applyMomentum()
      isDraggingRef.current = false
    }

    el.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    el.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelMomentum()
      el.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      el.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  // ── Active dot from scroll position ────────────────────────────
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const update = () => {
      const cardWidth = el.scrollWidth / buffets.length
      const idx = Math.round(el.scrollLeft / cardWidth)
      setActiveIndex(Math.min(Math.max(idx, 0), buffets.length - 1))
    }
    el.addEventListener('scroll', update, { passive: true })
    return () => el.removeEventListener('scroll', update)
  }, [])

  // ── Arrow navigation ────────────────────────────────────────────
  const scrollTo = useCallback((dir: 'prev' | 'next') => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.scrollWidth / buffets.length
    el.scrollBy({ left: dir === 'next' ? cardWidth : -cardWidth, behavior: 'smooth' })
  }, [])

  // ── Intersection observer for entry animation ───────────────────
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('buffet-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    section.querySelectorAll('.buffet-animate').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-cream py-24 md:py-48 border-y border-forest/10">
      <style>{`
        .buffet-animate {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .buffet-animate.buffet-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .buffet-animate:nth-child(1) { transition-delay: 0s; }
        .buffet-animate:nth-child(2) { transition-delay: 0.12s; }
        .buffet-animate:nth-child(3) { transition-delay: 0.24s; }
        .buffet-animate:nth-child(4) { transition-delay: 0.36s; }

        /* hide native scrollbar */
        .buffet-scroll::-webkit-scrollbar { display: none; }
        .buffet-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="page-wrapper">

        {/* ── Header + arrows ───────────────────────────────── */}
        <div className="flex items-end justify-between mb-32">
          <div className="max-w-4xl">
            <span className="section-label text-gold-muted">OUR BUFFET</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.9] mb-12">
              Daily <br />
              <span className="font-heading italic text-forest/40">Multi-Cuisine Buffet.</span>
            </h2>
            <p className="text-xl text-forest/80 font-light italic max-w-2xl leading-relaxed">
              Freshly prepared North Indian, Chinese, Continental and Asian dishes — served every day at Hotel Peninsula Grand, Andheri East. Available 24 hours, 7 days a week.
            </p>
          </div>

          {/* Arrow controls */}
          <div className="hidden md:flex items-center gap-4 shrink-0 pb-2">
            <button
              onClick={() => scrollTo('prev')}
              aria-label="Previous buffet"
              className="w-12 h-12 border border-forest/20 flex items-center justify-center text-forest/40 hover:text-forest hover:border-forest transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollTo('next')}
              aria-label="Next buffet"
              className="w-12 h-12 border border-forest/20 flex items-center justify-center text-forest/40 hover:text-forest hover:border-forest transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ── Slider ─────────────────────────────────────────── */}
        <div
          ref={scrollRef}
          className="buffet-scroll flex overflow-x-auto gap-6 pb-4 cursor-grab select-none"
          style={{ scrollBehavior: 'auto' }}
        >
          {buffets.map((buffet, i) => (
            <div
              key={i}
              onClick={() => {
                if (!isDraggingRef.current) {
                  router.push(`/buffet/${buffet.id}`)
                }
              }}
              className={`buffet-animate shrink-0 w-[80vw] md:w-[420px] lg:w-[480px] p-12 flex flex-col justify-between min-h-[480px] border border-forest/5 ${buffet.color} ${buffet.textColor} transition-transform duration-500 ease-out hover:-translate-y-3 cursor-pointer group`}
            >
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">
                    {buffet.type}
                  </span>
                  <span className="text-xl font-medium tracking-tight">
                    {buffet.price}
                  </span>
                </div>
                <h3
                  className="text-4xl md:text-5xl font-medium mb-6 tracking-tight leading-none"
                  style={{ color: 'inherit' }}
                >
                  {buffet.type} <br />
                  <span className="font-heading italic opacity-40" style={{ color: 'inherit' }}>
                    Buffet
                  </span>
                </h3>
                <p className="text-base font-light leading-relaxed opacity-70 mb-8 max-w-[280px] italic">
                  {buffet.desc}
                </p>
              </div>
              <div className="pt-8 border-t border-current/20 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                  {buffet.time}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Detail →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Dot indicators ─────────────────────────────────── */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {buffets.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollRef.current
                if (!el) return
                const cardWidth = el.scrollWidth / buffets.length
                el.scrollTo({ left: i * cardWidth, behavior: 'smooth' })
              }}
              aria-label={`Go to card ${i + 1}`}
              className="transition-all duration-300"
              style={{
                width: activeIndex === i ? '32px' : '8px',
                height: '3px',
                background: activeIndex === i ? 'var(--color-forest)' : 'var(--color-forest)',
                opacity: activeIndex === i ? 1 : 0.2,
                borderRadius: 0,
              }}
            />
          ))}
        </div>

        {/* ── CTA ────────────────────────────────────────────── */}
        <div className="mt-16 flex justify-center">
          <Link href="/menu#buffet-experiences" className="group flex items-center gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-forest/60 group-hover:text-forest transition-colors">
              Explore Full Catalogue
            </span>
            <div className="w-12 h-[1px] bg-forest/20 group-hover:w-20 group-hover:bg-forest transition-all duration-700" />
          </Link>
        </div>

      </div>
    </section>
  )
}
