import type { Metadata } from 'next'
import ReservationForm from '@/components/forms/ReservationForm'
import LocationSection from '@/components/home/LocationSection'
import { Music, Utensils, GlassWater, Sparkles } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sunday Brunch Mumbai – Live Music + Unlimited Buffet | Café Crema Andheri',
  description: 'Every Sunday 12–3:30 PM at Café Crema, Andheri East. Unlimited multi-cuisine buffet + live music. ₹1,409 + taxes. Book: +91 99302 71349.',
  keywords: ['sunday brunch mumbai', 'sunday brunch andheri east'],
  alternates: { canonical: 'https://cafecrema.in/sunday-brunch' },
  openGraph: {
    title: 'Sunday Brunch Mumbai – Live Music + Unlimited Buffet | Café Crema Andheri',
    description: 'Every Sunday 12–3:30 PM at Café Crema, Andheri East. Unlimited multi-cuisine buffet + live music. ₹1,409 + taxes. Book: +91 99302 71349.',
    images: [{ url: '/og-sunday-brunch.jpg', width: 1200, height: 630 }],
  },
}

export default function SundayBrunchPage() {
  return (
    <div className="min-h-screen bg-cream text-forest pt-20">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-sand">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/ritual_oysters_v3_1775843790562.png" 
            alt="Sunday Brunch - Cafe Crema" 
            fill 
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-transparent to-cream/90"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <span className="text-meta mb-8 block">
             Weekly Ritual • Hotel Peninsula Grand
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-medium leading-[0.85] tracking-tight mb-10">
            Sunday <br/> <span className="font-heading italic text-forest/40">Brunch</span>
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16">
            <a href="#reserve" className="px-16 py-4 bg-forest text-cream text-[10px] font-bold uppercase tracking-widest hover:bg-forest-muted transition-all">Reserve Table</a>
            <a href="tel:+919930271349" className="px-12 py-4 border border-forest/20 text-[10px] font-bold uppercase tracking-widest hover:bg-sand transition-all">
              Direct: +91 99302 71349
            </a>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-sand py-40 border-y border-forest/10">
        <div className="page-wrapper">
           <div className="mb-32">
              <span className="section-label">Archive 01</span>
              <h2 className="text-5xl md:text-7xl font-medium leading-[0.9] tracking-tight font-heading italic">The Complete Ritual</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-forest/10 border border-forest/10">
              {[
                { icon: Utensils, title: 'Unlimited Buffet', desc: 'A vast multi-cuisine narrative spanning continents.' },
                { icon: Music, title: 'Live Acoustic', desc: 'Soothing rhythms to complement your afternoon.' },
                { icon: GlassWater, title: 'Welcome Sips', desc: 'Artisanal cocktails and refreshed infusions.' },
                { icon: Sparkles, title: 'Desserts', desc: 'Handcrafted desserts and live pastry stations.' }
              ].map((item, i) => (
                <div key={i} className="bg-cream p-12 group hover:bg-forest transition-all duration-700">
                   <div className="w-10 h-10 border border-forest/10 flex items-center justify-center text-forest/40 group-hover:border-cream/20 group-hover:text-cream/60 transition-all mb-12">
                      <item.icon size={18} />
                   </div>
                   <h3 className="text-xl font-medium text-forest group-hover:text-cream transition-colors mb-4 tracking-tight">{item.title}</h3>
                   <p className="text-sm font-light text-forest/40 group-hover:text-cream/50 leading-relaxed tracking-widest uppercase">
                      {item.desc}
                   </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reserve" className="py-40 border-b border-forest/10">
        <div className="page-wrapper grid grid-cols-1 lg:grid-cols-12 bg-sand border border-forest/10">
           <div className="lg:col-span-12 p-12 lg:p-24 border-b border-forest/10">
              <div className="max-w-4xl">
                 <span className="section-label">Inventory &amp; Pricing</span>
                 <h2 className="text-5xl md:text-8xl font-medium leading-[0.85] tracking-tight">
                   Securing <br/> <span className="font-heading italic text-forest/30">Your Space</span>
                 </h2>
              </div>
           </div>

           <div className="lg:col-span-5 p-12 lg:px-24 flex flex-col justify-center">
              <div className="mb-16">
                 <p className="text-8xl md:text-[110px] font-medium text-forest italic leading-none tracking-tight">₹1,409 + taxes</p>
                 <p className="text-sm font-bold uppercase tracking-[0.6em] text-gold-muted mt-4">Per person</p>
              </div>
              
              <ul className="space-y-6">
                 {[
                   'Every Sunday, 12:00 PM – 3:30 PM',
                   'Full Multi-Cuisine Buffet At Café Crema',
                   'Live Performance Seating Included'
                 ].map((li, k) => (
                   <li key={k} className="flex items-center gap-6 text-forest/50 text-[10px] font-bold uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 bg-gold-muted" />
                      {li}
                   </li>
                 ))}
              </ul>
           </div>

           <div className="lg:col-span-7 bg-cream p-12 lg:p-24 border-l border-forest/10">
              <ReservationForm />
           </div>
        </div>
      </section>

      {/* FAQ Narrative */}
      <section className="bg-sand py-40">
        <div className="page-wrapper px-0 lg:px-16">
           <div className="max-w-4xl mx-auto px-12 md:px-0">
              <span className="section-label">Clarifications</span>
              <h2 className="text-5xl md:text-7xl font-medium italic font-heading tracking-tight leading-none mb-24">Frequent Questions</h2>
              <div className="border-t border-forest/10">
                {[
                  { q: 'Family accessibility?', a: 'Under 5 eat free, ages 5-10 enjoy 50% discount. We are fully family-friendly with dedicated seating.' },
                  { q: 'Musical genre?', a: 'Soothing live acoustic bands playing retro English and Bollywood reimagined—ideal for conversation.' }
                ].map((faq, idx) => (
                  <div key={idx} className="border-b border-forest/10 py-16 flex flex-col md:flex-row gap-8 items-start">
                     <span className="text-meta pt-2 whitespace-nowrap">0{idx + 1}</span>
                     <div>
                        <h4 className="text-2xl font-medium text-forest mb-6 tracking-tight">{faq.q}</h4>
                        <p className="text-lg text-forest/50 leading-relaxed font-light italic">
                          {faq.a}
                        </p>
                     </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      <LocationSection />
    </div>
  )
}
