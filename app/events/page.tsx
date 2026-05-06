import type { Metadata } from 'next'
import Link from 'next/link'
import { Briefcase, PartyPopper } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Events & Private Dining – Café Crema | Andheri East Mumbai',
  description: "Host your corporate lunch, birthday dinner, or private celebration at Café Crema. Mumbai's top venue for events in Andheri East. Enquire now.",
  keywords: ['private dining andheri', 'corporate lunch mumbai']
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-cream text-forest pt-32 lg:pt-40">
      <section className="page-wrapper pb-32">
        <div className="max-w-5xl">
          <span className="section-label">Inventory &amp; Occasions</span>
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-medium leading-[0.85] tracking-tight mb-10">
            Private <br/> <span className="font-heading italic text-forest/30">Gala</span> &amp; Corporate
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-forest/10 border border-forest/10 mt-32">
           
           <div className="p-12 lg:p-24 bg-cream flex flex-col justify-between group hover:bg-sand transition-all duration-700">
              <div>
                 <Briefcase className="text-gold-muted mb-12 transition-colors" size={40} />
                 <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight text-forest leading-none">
                   Corporate <br/> Excellence
                 </h2>
                 <p className="text-lg text-forest/50 font-light leading-relaxed mb-16 italic">
                    Located in Andheri's business heart within Hotel Peninsula Grand, we offer bulk billing, private sections, and curated set menus for professional gatherings.
                 </p>
              </div>
              <ul className="space-y-4">
                 {['Private Enclaves', 'Bulk Billing', 'A/V Support'].map((f) => (
                   <li key={f} className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-gold-muted">
                      <div className="w-1.5 h-1.5 bg-gold-muted" /> {f}
                   </li>
                 ))}
              </ul>
           </div>

           <div className="p-12 lg:p-24 bg-sand flex flex-col justify-between group hover:bg-cream transition-all duration-700">
              <div>
                 <PartyPopper className="text-gold-muted mb-12 transition-colors" size={40} />
                 <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight text-forest leading-none">
                   Legendary <br/> Celebrations
                 </h2>
                 <p className="text-lg text-forest/50 font-light leading-relaxed mb-16 italic">
                    Birthdays, anniversaries, and family reunions curated with localized warmth and gourmet artistry in our premier all-day dining space.
                 </p>
              </div>
              <Link 
                href="/contact" 
                className="px-10 py-4 bg-forest text-cream text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-forest-muted text-center"
              >
                Inquire Now
              </Link>
           </div>

        </div>
      </section>
    </div>
  )
}
