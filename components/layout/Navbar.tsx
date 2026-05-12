'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Menu', href: '/menu' },
    { name: 'Buffet', href: '/buffet' },
    { name: 'Events', href: '/events' },
    { name: 'About', href: '/about' },
  ]

  return (
    <>
      <nav className="fixed top-8 left-0 w-full z-50 px-6 md:px-12 flex justify-center">
        <div
          className={`nav-pill w-full max-w-5xl flex items-center justify-between transition-all duration-700 ease-out
            ${scrolled ? 'bg-forest/95 backdrop-blur-md shadow-2xl' : 'bg-forest'}
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}
          `}
        >
          {/* Logo */}
          <Link href="/" className="font-heading text-xl font-bold tracking-tight text-cream flex items-center gap-1">
            café <span className="text-sm align-top opacity-80">*</span> crema
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-cream/70 hover:text-cream transition-colors relative group/link"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cream transition-all duration-500 group-hover/link:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex px-6 py-2 bg-cream text-forest rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-luxury active:scale-95"
            >
              Reserve a Table
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-cream p-1"
              aria-label="Toggle menu"
            >
              <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <div className={`w-5 h-0.5 bg-current mt-1 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-forest text-cream flex flex-col items-center justify-center p-12 transition-all duration-500 ease-out
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-12 right-12 text-cream text-3xl hover:text-gold-muted transition-colors"
          aria-label="Close menu"
        >
          &times;
        </button>
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-heading font-black italic hover:text-sand transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 text-[12px] font-bold uppercase tracking-[0.4em] px-12 py-4 bg-cream text-forest rounded-full hover:bg-sand transition-colors"
          >
            Reserve a Table
          </Link>
        </div>
      </div>
    </>
  )
}
