import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Buffet Experiences',
  description: 'Explore our daily buffet offerings at Café Crema. From the grand Sunday Brunch to our 24/7 global spreads.',
}

const buffets = [
  {
    id: 'sunday-brunch',
    type: 'Sunday Brunch',
    time: '12:00 PM – 03:30 PM',
    price: '₹1409 + taxes',
    desc: 'A grand celebration of global flavours featuring unlimited multi-cuisine spreads, premium pours, and live music. The ultimate weekend ritual for the discerning palate.',
    highlights: ['Live Music', 'Premium Pours', 'Dessert Atelier', 'International Counters'],
    image: '/interior/sunday-brunch.png',
    color: 'bg-gold-muted',
    textColor: 'text-cream',
  },
  {
    id: 'breakfast',
    type: 'Morning Breakfast',
    time: '07:30 AM – 10:30 AM',
    price: '₹660 + taxes',
    desc: 'Begin your day with an artisanal selection of global classics. From live egg stations to traditional Indian delicacies, our breakfast is designed for a refined start.',
    highlights: ['Live Egg Station', 'Fresh Artisanal Breads', 'Regional Specialties', 'Fresh Juices'],
    image: '/interior/DSC03166.jpg',
    color: 'bg-sand/40',
    textColor: 'text-forest',
  },
  {
    id: 'lunch',
    type: 'Global Lunch',
    time: '12:30 PM – 03:30 PM',
    price: '₹1079 + taxes',
    desc: 'A meticulously curated lunch experience featuring a rotation of international favorites. Perfect for business gatherings or a sophisticated mid-day break.',
    highlights: ['Multi-cuisine Spread', 'Live Counters', 'Cheese Platter', 'Decadent Desserts'],
    image: '/interior/DSC03177.jpg',
    color: 'bg-forest',
    textColor: 'text-cream',
  },
  {
    id: 'dinner',
    type: 'Grand Dinner',
    time: '07:30 PM – 11:30 PM',
    price: '₹1270 + taxes',
    desc: 'As the evening settles, enjoy our grand international dinner buffet. A symphony of spices and flavors from across the globe, served in an elegant atmosphere.',
    highlights: ['Grand International Buffet', '3 Live Chef Stations', 'Gourmet Selection', 'Atelier Desserts'],
    image: '/interior/DSC03168.jpg',
    color: 'bg-sand/20',
    textColor: 'text-forest',
  },
]

export default function BuffetPage() {
  return (
    <div className="pt-24 bg-cream min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/interior/DSC03177.jpg"
          alt="Café Crema Interior"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-cream px-6">
          <span className="text-meta text-cream/60 mb-6 block tracking-[0.4em]">CULLINARY JOURNEYS</span>
          <h1 className="text-7xl md:text-9xl font-medium tracking-tight leading-none mb-8">
            The Buffet <br />
            <span className="font-heading italic font-light opacity-80">Narrative.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light italic max-w-2xl mx-auto opacity-70">
            A daily ritual of global flavours, served with localized warmth in the heart of the city.
          </p>
        </div>
      </section>

      {/* Buffet Grid */}
      <section className="py-32 page-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {buffets.map((buffet) => (
            <div key={buffet.id} className="group">
              <Link href={`/buffet/${buffet.id}`} className="block relative aspect-[16/10] overflow-hidden mb-12">
                <Image 
                  src={buffet.image}
                  alt={buffet.type}
                  fill
                  className="object-cover transition-luxury group-hover:scale-105"
                />
                <div className="absolute top-8 left-8">
                   <div className={`${buffet.color} ${buffet.textColor} px-6 py-2 text-[10px] font-bold uppercase tracking-widest`}>
                    {buffet.type}
                   </div>
                </div>
              </Link>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8">
                  <Link href={`/buffet/${buffet.id}`} className="block hover:text-gold-muted transition-colors">
                    <h2 className="text-4xl font-medium tracking-tight mb-6">{buffet.type}</h2>
                  </Link>
                  <p className="text-forest/60 font-light leading-relaxed italic mb-8">
                    {buffet.desc}
                  </p>
                  <ul className="grid grid-cols-2 gap-4 mb-8">
                    {buffet.highlights.map((h) => (
                      <li key={h} className="text-[10px] font-bold uppercase tracking-widest text-forest/40 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-gold-muted rounded-full" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-4 md:border-l border-forest/10 md:pl-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-forest/30 block mb-2">TIME</span>
                    <span className="text-sm font-medium">{buffet.time}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-forest/30 block mb-2">PRICE</span>
                    <span className="text-2xl font-medium text-gold-muted">{buffet.price}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-forest/5 flex justify-between items-center">
                <div className="flex gap-4">
                  <Link 
                    href="/contact"
                    className="px-8 py-3 bg-forest text-cream text-[10px] font-bold uppercase tracking-widest transition-luxury hover:bg-gold-muted"
                  >
                    Reserve Now
                  </Link>
                  <Link 
                    href={`/buffet/${buffet.id}`}
                    className="px-8 py-3 border border-forest/20 text-forest text-[10px] font-bold uppercase tracking-widest transition-luxury hover:border-forest"
                  >
                    Details
                  </Link>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-forest/20 hidden sm:block">
                  EST. 24/7 SERVICE
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="bg-sand py-32 border-y border-forest/10">
        <div className="page-wrapper text-center">
           <span className="text-meta text-forest/40 mb-12 block tracking-[0.5em]">OUR PHILOSOPHY</span>
           <h2 className="text-5xl md:text-7xl font-medium tracking-tight max-w-4xl mx-auto leading-tight mb-16">
            “Quality is not an act, it is <br />
            <span className="font-heading italic font-light">a daily habit.”</span>
           </h2>
           <Link href="/menu" className="text-[10px] font-bold uppercase tracking-[0.5em] border-b border-forest/20 pb-4 hover:border-forest transition-all">
            Explore Ala Carte Menu
           </Link>
        </div>
      </section>

    </div>
  )
}
