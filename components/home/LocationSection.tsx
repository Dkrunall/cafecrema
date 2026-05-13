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
            Find Us in <br />
            <span className="font-heading italic">Andheri East, Mumbai.</span>
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
                  Sakinaka Junction, Andheri East, <br />
                  Mumbai, Maharashtra 400072
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
                <p className="text-lg text-forest/80 font-light italic">Open 24 Hours, 7 Days a Week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Side (Editorial Style) */}
        <div className="lg:col-span-6 relative aspect-square md:aspect-auto min-h-[500px] overflow-hidden transition-luxury border border-forest/10 shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792.5711129920717!2d72.88856816333653!3d19.102179056786525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c908a0a494fb%3A0x2158c696d1deeed4!2sCafe%20Crema!5e0!3m2!1sen!2sin!4v1778660476521!5m2!1sen!2sin" 
            title="Cafe Crema Location Map"
            className="w-full h-full border-none opacity-100 transition-opacity duration-1000"
            loading="lazy"
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[1px] border-forest/5" />
        </div>

      </div>
    </section>
  )
}
