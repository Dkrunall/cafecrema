import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Café Crema | Hotel Peninsula Grand, Andheri East',
  description: 'Discover the story behind Café Crema, the premier all-day dining destination at Hotel Peninsula Grand. Learn about our multi-cuisine philosophy and culinary values.',
  keywords: ['cafe crema about', 'hotel peninsula grand restaurant', 'fine dining andheri east story']
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream text-forest pt-32">
      
      {/* Header Section */}
      <section className="page-wrapper pt-32 pb-40">
        <div className="max-w-5xl">
           <span className="section-label">The Archive</span>
           <h1 className="text-6xl md:text-8xl lg:text-[120px] font-medium leading-[0.85] tracking-tight mb-16">
              The Heart <br/>
              <span className="font-heading italic text-forest/30">of</span> <br/>
              Andheri
           </h1>
           <div className="flex flex-col md:flex-row gap-24 mt-20">
              <div className="flex-1">
                 <p className="text-xl text-forest/60 leading-relaxed font-light mb-12 italic">
                    Café Crema was born out of a simple vision: to provide a premium, heart-warming dining experience that operates without boundaries. Managed by Hotel Peninsula Grand, we cater to early risers and late-night connoisseurs alike.
                 </p>
              </div>
              <div className="flex-1 text-gold-muted text-sm font-bold uppercase tracking-[0.4em] border-l border-forest/10 pl-16 py-8 leading-loose">
                 "Operating with the localized warmth of a neighborhood cafe, paired with the sophisticated standards of a world-class hotel."
              </div>
           </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-sand py-40 border-y border-forest/10">
         <div className="page-wrapper grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-12 mb-16">
               <span className="section-label">Values</span>
               <h2 className="text-5xl md:text-7xl font-medium leading-[0.9] tracking-tight">
                 Culinary <br/> <span className="font-heading italic text-forest/30">Excellence</span>
               </h2>
            </div>
            
            <div className="lg:col-span-6 relative aspect-square md:aspect-video lg:aspect-square border border-forest/10 overflow-hidden grayscale">
               <Image src="/interior/DSC03153.jpg" alt="Culinary Excellence - Cafe Crema" fill className="object-cover" />
            </div>

            <div className="lg:col-span-6">
               <p className="text-xl text-forest/60 font-light leading-relaxed mb-20 italic">
                  Our multi-cuisine philosophy means that whether you are craving authentic North Indian flavors, exploring Asian spices, or looking for Continental classics, our expert chefs ensure every plate reflects our dedication to excellence.
               </p>
               
               <div className="flex flex-col gap-12">
                  {[
                    { num: '01', title: '24/7 Hours', desc: 'Dining should be accessible whenever the craving strikes.' },
                    { num: '02', title: 'Live Sound', desc: 'Curated acoustic sessions for a sensorial experience.' },
                    { num: '03', title: 'Pure Sourcing', desc: 'Locally grown, internationally prepared standards.' }
                  ].map((stat, s) => (
                    <div key={s} className="flex gap-12 items-start border-b border-forest/10 pb-12">
                       <span className="text-5xl font-medium text-forest/10 leading-none">{stat.num}</span>
                       <div>
                          <h4 className="text-xl font-medium text-forest mb-3 tracking-tight">{stat.title}</h4>
                          <p className="text-sm font-light text-forest/40 leading-relaxed uppercase tracking-widest">{stat.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

    </div>
  )
}
