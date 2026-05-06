import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Gallery – Café Crema',
  description: 'View the visual archive of our multi-cuisine dishes, cinematic ambience, and Sunday brunch events at Hotel Peninsula Grand.',
  keywords: ['cafe crema photos', 'best ambience restaurant andheri east', 'food gallery']
}

const galleryImages = [
  '/interior/DSC03169.jpg',
  '/food&drinks/LAH02317.jpg',
  '/interior/DSC03112.jpg',
  '/food&drinks/LAH02433.jpg',
  '/interior/DSC03148.jpg',
  '/food&drinks/LAH02471.jpg',
  '/interior/DSC03160.jpg',
  '/food&drinks/LAH02576.jpg',
  '/interior/DSC03166.jpg',
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-cream text-forest pt-32">
      <section className="page-wrapper pt-32 pb-40">
        <div className="max-w-5xl mb-32">
           <span className="section-label">Documentation</span>
           <h1 className="text-6xl md:text-8xl lg:text-[110px] font-medium leading-[0.85] tracking-tight mb-16">
              The Ambient <br/> <span className="font-heading italic text-forest/30">Archive</span>
           </h1>
           <p className="text-xl text-forest/50 leading-relaxed font-light italic max-w-2xl">
              A cinematic documentation of the culinary and atmospheric ritual at Café Crema, Andheri East.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-forest/10 border border-forest/10">
          {galleryImages.map((src, i) => (
             <div key={i} className="aspect-[4/5] relative group overflow-hidden bg-sand">
                <Image 
                  src={src}
                  alt={`Atmosphere Documentation ${i + 1} - Cafe Crema`}
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-forest/10 group-hover:bg-transparent transition-colors" />
                
                <div className="absolute top-8 left-8 bg-cream/90 backdrop-blur-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                   <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-forest">Ref: AX-2026-0{i + 1}</p>
                </div>
             </div>
          ))}
        </div>
      </section>
    </div>
  )
}
