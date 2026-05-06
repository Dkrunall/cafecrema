import type { Metadata } from 'next'
import { getMenuItems } from '@/lib/sanity'
import LocationSection from '@/components/home/LocationSection'

export const metadata: Metadata = {
  title: 'Menu – Café Crema Restaurant | Andheri East Mumbai',
  description: "Explore Café Crema's full multi-cuisine menu: North Indian, Chinese, Continental, Asian, Beverages & Desserts. Dine-in & Takeaway. Andheri East.",
  keywords: ['cafe crema menu', 'multicuisine restaurant andheri menu']
}

export const revalidate = 3600

export default async function MenuPage() {
  let items = [];
  try {
    items = await getMenuItems() || [];
  } catch(e) {
    console.error("Sanity client fetch failed: ", e);
  }
  
  const groupedMenu = items.reduce((acc: any, item: any) => {
    const cat = item.category || 'Other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  const categoriesKeys = Object.keys(groupedMenu).sort();

  return (
    <div className="min-h-screen bg-cream text-forest pt-32">
      
      {/* Header Section */}
      <section className="page-wrapper pt-32 pb-40 border-b border-forest/10">
        <div className="max-w-5xl">
           <span className="section-label">Culinary Archive 2026</span>
           <h1 className="text-6xl md:text-8xl lg:text-[120px] font-medium leading-[0.85] tracking-tight mb-16">
              The <br/>
              <span className="font-heading italic text-forest/30">Gourmet</span> <br/>
              Catalogue
           </h1>
           <p className="text-xl text-forest/50 leading-relaxed font-light italic max-w-2xl">
              A meticulously curated multi-cuisine narrative spanning the continents, served in the heart of Andheri East.
           </p>
        </div>
      </section>

      {/* Categories Navigation */}
      <div className="sticky top-20 md:top-24 bg-cream/95 backdrop-blur-xl border-b border-forest/10 z-40 overflow-x-auto whitespace-nowrap">
         <div className="page-wrapper h-16 flex items-center gap-12">
            {categoriesKeys.map((cat) => (
              <a 
                key={cat} 
                href={`#${cat.replace(/\s+/g, '-').toLowerCase()}`}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-forest/40 hover:text-forest transition-all"
              >
                {cat}
              </a>
            ))}
         </div>
      </div>

      {/* Menu Grid */}
      <section className="page-wrapper py-40">
        <div className="space-y-48">
           {categoriesKeys.length === 0 ? (
             <div className="text-center py-40 bg-sand border border-forest/10">
                <p className="text-2xl italic text-forest/40">The Chef is currently refining today's catalogue selections.</p>
             </div>
           ) : (
             categoriesKeys.map((cat, i) => (
               <div key={i} id={cat.replace(/\s+/g, '-').toLowerCase()} className="scroll-mt-48 group">
                  <div className="flex items-end justify-between mb-24 border-b border-forest/10 pb-12">
                     <div>
                        <span className="text-meta mb-4 block">Ref 0{i + 1}</span>
                        <h2 className="text-6xl md:text-8xl font-medium text-forest tracking-tight leading-none">{cat}</h2>
                     </div>
                     <span className="text-[120px] font-medium text-forest/[0.04] leading-none select-none hidden lg:block font-heading italic">0{i+1}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-forest/10 border border-forest/10">
                     {groupedMenu[cat].map((dish: any, j: number) => (
                       <article key={j} className="bg-cream p-12 group/article hover:bg-sand transition-all duration-500">
                          <div className="flex justify-between items-start gap-12 mb-8">
                             <div className="flex-grow">
                                <div className="flex items-center gap-4 mb-4">
                                   <div className={`w-2 h-2 shrink-0 ${dish.isVeg ? 'bg-green-600' : 'bg-red-500'}`} />
                                   <h3 className="text-xl md:text-2xl font-medium text-forest leading-none tracking-tight">
                                     {dish.name}
                                   </h3>
                                </div>
                                <p className="text-sm font-light text-forest/40 leading-relaxed max-w-sm italic">
                                   {dish.description}
                                </p>
                             </div>
                             <div className="flex flex-col items-end shrink-0">
                                <span className="text-2xl font-medium text-forest tracking-tight">₹{dish.price}</span>
                                {dish.isBestSeller && (
                                  <span className="mt-4 text-[8px] font-bold uppercase tracking-widest text-gold-muted">Best Seller</span>
                                )}
                             </div>
                          </div>
                          <div className="h-[1px] w-0 bg-forest/20 group-hover/article:w-full transition-all duration-700" />
                       </article>
                     ))}
                  </div>
               </div>
             ))
           )}
        </div>
      </section>

      <LocationSection />
    </div>
  )
}
