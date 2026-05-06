import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog & Journal – Café Crema Mumbai',
  description: 'Read the latest updates, recipes, and event stories from Café Crema at Hotel Peninsula Grand. Discover our multi-cuisine insights and brunch highlights.',
  keywords: ['cafe crema blog', 'mumbai restaurant journal', 'food recipes andheri east', 'hotel peninsula grand news']
}

export default function BlogLanding() {
  return (
    <div className="min-h-screen bg-cream text-forest pt-32 lg:pt-40">
      
      {/* Header Section */}
      <section className="page-wrapper pb-32">
        <div className="max-w-5xl">
          <span className="section-label">Digital Journal</span>
          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-medium leading-[0.85] tracking-tight mb-24">
            The <br/> <span className="font-heading italic text-forest/30">Dispatch</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-forest/10 border border-forest/10">
          
          <div className="lg:col-span-8 bg-sand p-16 lg:p-24 flex flex-col justify-between group h-[600px] overflow-hidden relative">
             <div className="relative z-10">
                <span className="section-label">Featured Artifact</span>
                <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-12 leading-none group-hover:text-gold-muted transition-colors">
                  Redefining <br/> Culinary <br/> Narratives
                </h2>
                <p className="text-xl font-light text-forest/40 max-w-sm italic leading-relaxed">
                  A deep dive into the 2026 standard of luxury hospitality at Hotel Peninsula Grand.
                </p>
             </div>
             
             <Link 
               href="/blog/redefining-culinary-narratives" 
               className="px-10 py-4 bg-forest text-cream text-[10px] font-bold uppercase tracking-widest flex items-center justify-between w-full md:w-auto hover:bg-forest-muted transition-all group/btn"
             >
                <span>Access Journal</span>
                <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
             </Link>
          </div>

          <div className="lg:col-span-4 bg-cream p-12 lg:p-24 flex flex-col justify-center items-center text-center border-l border-forest/10">
             <div className="w-16 h-16 border border-forest/10 flex items-center justify-center text-gold-muted mb-12">
                <span className="font-heading text-xl font-medium italic">CC</span>
             </div>
             <h3 className="section-label !mb-4">Penning...</h3>
             <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-forest/20">Next Dispatch incoming 2026.</p>
          </div>

        </div>
      </section>
    </div>
  )
}
