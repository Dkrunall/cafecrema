'use client'

import Link from 'next/link'
import { MapPin } from 'lucide-react'

const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)


export default function Footer() {
  return (
    <footer className="bg-cream pt-32 pb-12 border-t border-forest/10">
      <div className="page-wrapper grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 mb-32">
        
        {/* Brand Column */}
        <div className="md:col-span-12 lg:col-span-4">
          <Link href="/" className="font-heading text-2xl font-bold tracking-tight block mb-10 flex items-center gap-1">
            café <span className="text-sm align-top opacity-80">*</span> crema
          </Link>
          <p className="text-sm text-forest/50 font-light max-w-xs leading-relaxed mb-12">
            Café Crema — Andheri East's all-day dining destination. Multi-cuisine buffet, Sunday brunch with live music, and 24-hour hospitality at Hotel Peninsula Grand, Sakinaka Junction.
          </p>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest/30">
            &copy; {new Date().getFullYear()} CAFÉ * CREMA. ALL RIGHTS RESERVED.
          </div>
        </div>

        {/* Links Columns */}
        <div className="md:col-span-4 lg:col-span-2">
           <span className="text-meta mb-8 block">EXPLORE</span>
           <ul className="space-y-4">
              {[
                { label: 'Menu', href: '/menu' },
                { label: 'Buffet', href: '/buffet' },
                { label: 'Events', href: '/events' },
                { label: 'About', href: '/about' },
                { label: 'Reserve a Table', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs text-forest/60 hover:text-forest transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
           </ul>
        </div>

        <div className="md:col-span-4 lg:col-span-2">
           <span className="text-meta mb-8 block">LEGAL</span>
           <ul className="space-y-4">
              {['Privacy', 'Accessibility', 'Archive'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-xs text-forest/60 hover:text-forest transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
           </ul>
        </div>

        {/* Newsletter Column */}
        <div className="md:col-span-4 lg:col-span-4">
           <span className="text-meta mb-8 block">NEWSLETTER</span>
           <div className="relative border-b border-forest/20 pb-4 mb-12 flex items-center">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-none outline-none text-xs w-full text-forest placeholder:text-forest/30"
              />
              <button className="text-forest hover:translate-x-2 transition-transform duration-500">
                &rarr;
              </button>
           </div>
           
           <div className="flex gap-8 items-center text-forest/40">
              <a href="https://www.google.com/maps/search/?api=1&query=Hotel+Peninsula+Grand+Sakinaka+Junction+Andheri+East+Mumbai" target="_blank" rel="noopener noreferrer" className="hover:text-forest cursor-pointer transition-all duration-500 hover:scale-125"><MapPin size={18} /></a>
              <a href="https://www.instagram.com/cafecrema__/" target="_blank" rel="noopener noreferrer" className="hover:text-forest cursor-pointer transition-all duration-500 hover:scale-125"><IconInstagram /></a>
           </div>
        </div>

      </div>
    </footer>
  )
}
