'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Freshness', href: '/menu' },
    { name: 'Pricing', href: '/events' },
    { name: 'Our Story', href: '/about' },
  ]

  return (
    <>
      <nav className="fixed top-8 left-0 w-full z-50 px-6 md:px-12 flex justify-center">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`nav-pill w-full max-w-5xl flex items-center justify-between transition-luxury ${
            scrolled ? 'bg-forest/95 backdrop-blur-md shadow-2xl' : 'bg-forest'
          }`}
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
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-cream/70 hover:text-cream transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link 
              href="/contact" 
              className="px-6 py-2 bg-cream text-forest rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-luxury active:scale-95"
            >
              Book A Table
            </Link>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-cream p-1"
            >
              <div className="w-5 h-0.5 bg-current mb-1" />
              <div className="w-5 h-0.5 bg-current" />
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-forest text-cream flex flex-col items-center justify-center p-12"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-12 right-12 text-cream text-3xl"
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
                className="mt-8 text-[12px] font-bold uppercase tracking-[0.4em] px-12 py-4 bg-cream text-forest rounded-full"
              >
                Book A Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
