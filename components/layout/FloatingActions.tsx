'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MapPin, MessageCircle, CalendarDays } from 'lucide-react'

const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)

const actions = [
  {
    id: 'booking',
    label: 'Reserve a Table',
    href: '/contact',
    external: false,
    icon: <CalendarDays size={20} />,
    primary: true,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp Us',
    href: 'https://wa.me/919930271349',
    external: true,
    icon: <MessageCircle size={20} />,
    primary: false,
  },
  {
    id: 'maps',
    label: 'Get Directions',
    href: 'https://www.google.com/maps/search/?api=1&query=Hotel+Peninsula+Grand+Sakinaka+Junction+Andheri+East+Mumbai',
    external: true,
    icon: <MapPin size={20} />,
    primary: false,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/cafecrema__/',
    external: true,
    icon: <IconInstagram />,
    primary: false,
  },
]

export default function FloatingActions() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-3">
      {actions.map((action) => (
        <div
          key={action.id}
          className={`flex items-center gap-3 group transition-all duration-500 ${
            scrolled ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
          }`}
        >
          {/* Tooltip Label */}
          <span className="bg-forest text-cream text-[9px] font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-lg">
            {action.label}
          </span>

          {/* Icon Circle */}
          <Link
            href={action.href}
            target={action.external ? '_blank' : undefined}
            rel={action.external ? 'noopener noreferrer' : undefined}
            aria-label={action.label}
            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-luxury hover:scale-110 active:scale-95 ${
              action.primary
                ? 'bg-forest text-cream hover:bg-gold-muted'
                : 'bg-cream border border-forest/10 text-forest hover:bg-forest hover:text-cream'
            }`}
          >
            {action.icon}
          </Link>
        </div>
      ))}
    </div>
  )
}
