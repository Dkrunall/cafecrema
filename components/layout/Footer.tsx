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

const IconFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const IconShare = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
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
            A digital-first culinary destination bridging the gap between tactile craftsmanship and structural symmetry.
          </p>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest/30">
            &copy; {new Date().getFullYear()} CAFÉ * CREMA. ALL RIGHTS RESERVED.
          </div>
        </div>

        {/* Links Columns */}
        <div className="md:col-span-4 lg:col-span-2">
           <span className="text-meta mb-8 block">EXPLORE</span>
           <ul className="space-y-4">
              {['Menu', 'Architecture', 'Our Story'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-xs text-forest/60 hover:text-forest transition-colors">
                    {link}
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
              <button className="text-forest hover:translate-x-1 transition-transform">
                &rarr;
              </button>
           </div>
           
           <div className="flex gap-8 items-center text-forest/40">
              <span className="hover:text-forest cursor-pointer transition-colors"><IconShare /></span>
              <MapPin size={16} className="hover:text-forest cursor-pointer transition-colors" />
              <span className="hover:text-forest cursor-pointer transition-colors"><IconInstagram /></span>
           </div>
        </div>

      </div>
    </footer>
  )
}
