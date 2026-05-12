'use client'

import { MapPin, Phone, Clock } from 'lucide-react'

export default function LocationSection() {
  return (
    <section className="bg-cream py-32 border-t border-forest/10">
      <div className="page-wrapper pt-24 md:pt-48 pb-24 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Info Side */}
        <div className="lg:col-span-6">
          <span className="text-meta text-forest/40 mb-10 block tracking-[0.6em]">VISIT US</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-none md:leading-[0.95] mb-16">
            Visit The <br />
            <span className="font-heading italic">Sanctuary.</span>
          </h2>
          
          <div className="space-y-12">
            <div className="flex gap-8 group">
              <div className="w-10 h-10 border border-forest/10 flex items-center justify-center text-forest/40 group-hover:bg-forest group-hover:text-cream transition-luxury">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-meta mb-2 text-forest/30">LOCATION</p>
                <p className="text-lg text-forest/80 font-light leading-relaxed">
                  1st Floor, Hotel Peninsula Grand, <br />
                  Sakinaka Junction, Andheri East, Mumbai
                </p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="w-10 h-10 border border-forest/10 flex items-center justify-center text-forest/40 group-hover:bg-forest group-hover:text-cream transition-luxury">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-meta mb-2 text-forest/30">INQUIRIES</p>
                <p className="text-lg text-forest font-medium">+91 99302 71349</p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="w-10 h-10 border border-forest/10 flex items-center justify-center text-forest/40 group-hover:bg-forest group-hover:text-cream transition-luxury">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-meta mb-2 text-forest/30">AVAILABILITY</p>
                <p className="text-lg text-forest/80 font-light italic">Always Open / Atelier Service 24-7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Side (Editorial Style) */}
        <div className="relative aspect-square md:aspect-auto min-h-[400px] overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-luxury">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0035!2d72.88!3d19.10!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzA5LjAiTiA3MsKwNTMnMTEuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            title="Cafe Crema Location Map"
            className="w-full h-full border-none opacity-50 hover:opacity-100 transition-opacity duration-1000"
            loading="lazy"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[1px] border-forest/10" />
        </div>

      </div>
    </section>
  )
}
