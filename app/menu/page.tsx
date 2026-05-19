import type { Metadata } from 'next'
import Image from 'next/image'
import LocationSection from '@/components/home/LocationSection'

import PageHero from '@/components/layout/PageHero'

export const metadata: Metadata = {
  title: 'Menu – Café Crema Restaurant | Andheri East Mumbai',
  description: "Explore Café Crema's full multi-cuisine menu: North Indian, Chinese, Continental, Asian, Beverages & Desserts. Dine-in & Takeaway. Andheri East.",
  keywords: ['cafe crema menu', 'multicuisine restaurant andheri menu']
}

type Dish = { name: string; description: string; price: number; isVeg: boolean; isBestSeller?: boolean }
type MenuData = Record<string, Dish[]>

const menuData: MenuData = {
  'Buffet Experiences': [
    {
      name: 'Breakfast Buffet',
      description: 'Live Counter · South Indian Dishes · English Breakfast · Bread Counter · Salad Counter · Assorted Sandwich · Desserts & Fruit Cuts · Fresh Juice · Canned Juice · Tea / Coffee.',
      price: 660,
      isVeg: false,
      isBestSeller: true
    },
    {
      name: 'Lunch Buffet',
      description: 'Veg/Non-Veg Soups · Live Counter · Salad Counter · Cheese Platter · Make Your Own Salad · Starters (2 Veg, 2 Non-Veg) · Main Course (5 Veg, 4 Non-Veg) · Indian Breads · Desserts · 3 Types Fresh Fruit Cuts.',
      price: 1079,
      isVeg: false,
      isBestSeller: true
    },
    {
      name: 'Dinner Buffet',
      description: 'Live Counter · Salad Counter · Cheese Platter · Make Your Own Salad · Starters (2 Veg, 2 Non-Veg) · Main Course (5 Veg, 4 Non-Veg) · Desserts Counter · 3 Types Fresh Fruit Cuts.',
      price: 1270,
      isVeg: false,
      isBestSeller: true
    },
    {
      name: 'Sunday Brunch',
      description: '1 Veg Live Counter · 1 Non-Veg Live Counter · Salad Counter · Cheese Platter · Make Your Own Salad · Starters (3 Veg, 3 Non-Veg Chicken/Fish) · Main Course (5 Veg, 4 Non-Veg) · Dessert Counter · 3 Types Fresh Fruit Cuts · Live Music. Sundays Only, 12 PM–3:30 PM.',
      price: 1409,
      isVeg: false,
      isBestSeller: true
    },
  ],
  'North Indian': [
    { name: 'Dal Makhani', description: 'Slow-cooked black lentils in a rich tomato and cream base', price: 320, isVeg: true, isBestSeller: true },
    { name: 'Paneer Tikka Masala', description: 'Chargrilled cottage cheese in a smoky masala gravy', price: 380, isVeg: true },
    { name: 'Butter Chicken', description: 'Tender chicken in a velvety tomato-butter sauce', price: 420, isVeg: false, isBestSeller: true },
    { name: 'Lamb Rogan Josh', description: 'Slow-braised Kashmiri lamb in aromatic whole spices', price: 480, isVeg: false },
    { name: 'Palak Paneer', description: 'Cottage cheese in a silken spinach and spice sauce', price: 340, isVeg: true },
    { name: 'Chicken Biryani', description: 'Dum-cooked basmati rice with spiced chicken and saffron', price: 450, isVeg: false, isBestSeller: true },
  ],
  'Chinese': [
    { name: 'Dim Sum Basket', description: 'Steamed dumplings with prawn, pork and vegetable fillings', price: 360, isVeg: false },
    { name: 'Vegetable Hakka Noodles', description: 'Wok-tossed noodles with crisp vegetables and soy', price: 280, isVeg: true },
    { name: 'Kung Pao Chicken', description: 'Stir-fried chicken with peanuts, chilli and Sichuan pepper', price: 400, isVeg: false },
    { name: 'Schezwan Fried Rice', description: 'Smoky wok fried rice with house schezwan sauce', price: 300, isVeg: true },
    { name: 'Honey Chilli Potato', description: 'Crispy potato fingers tossed in honey and chilli glaze', price: 260, isVeg: true, isBestSeller: true },
    { name: 'Hot & Sour Soup', description: 'Classic Indo-Chinese broth with mushrooms and tofu', price: 200, isVeg: true },
  ],
  'Continental': [
    { name: 'Grilled Salmon', description: 'Atlantic salmon with lemon beurre blanc and asparagus', price: 680, isVeg: false, isBestSeller: true },
    { name: 'Mushroom Risotto', description: 'Arborio rice with porcini, parmesan and truffle oil', price: 520, isVeg: true },
    { name: 'Chicken Schnitzel', description: 'Breaded chicken breast with potato gratin and greens', price: 580, isVeg: false },
    { name: 'Penne Arrabbiata', description: 'Bronze-cut pasta in spicy tomato and garlic sauce', price: 380, isVeg: true },
    { name: 'Caesar Salad', description: 'Romaine, parmesan crisps, anchovy dressing and croutons', price: 320, isVeg: false },
    { name: 'Margherita Pizza', description: 'Stone-baked dough with San Marzano tomato and fresh mozzarella', price: 480, isVeg: true },
  ],
  'Asian': [
    { name: 'Pad Thai', description: 'Stir-fried rice noodles with tamarind, peanuts and bean sprouts', price: 420, isVeg: false, isBestSeller: true },
    { name: 'Miso Ramen', description: 'Rich miso broth with chashu pork, soft egg and nori', price: 480, isVeg: false },
    { name: 'Green Curry', description: 'Thai green curry with coconut milk, bamboo shoots and basil', price: 440, isVeg: true },
    { name: 'Gyoza', description: 'Pan-fried Japanese dumplings with ponzu dipping sauce', price: 320, isVeg: false },
    { name: 'Banh Mi', description: 'Vietnamese baguette with pickled vegetables and sriracha mayo', price: 360, isVeg: false },
    { name: 'Edamame & Miso Soup', description: 'Lightly salted soybeans served with classic miso broth', price: 220, isVeg: true },
  ],
  'Beverages': [
    { name: 'Cold Brew Coffee', description: 'Slow-steeped single-origin coffee served over ice', price: 220, isVeg: true, isBestSeller: true },
    { name: 'Mango Lassi', description: 'Chilled Alphonso mango blended with hung curd', price: 180, isVeg: true },
    { name: 'Virgin Mojito', description: 'Fresh mint, lime, sugar and sparkling water', price: 200, isVeg: true },
    { name: 'Masala Chai', description: 'Spiced Indian tea with ginger, cardamom and milk', price: 120, isVeg: true, isBestSeller: true },
    { name: 'Fresh Lime Soda', description: 'Squeezed lime with sweet or salted sparkling water', price: 150, isVeg: true },
    { name: 'Watermelon Cooler', description: 'Fresh watermelon juice with a hint of mint and black salt', price: 180, isVeg: true },
  ],
  'Desserts': [
    { name: 'Gulab Jamun', description: 'Soft milk-solid dumplings soaked in rose-cardamom syrup', price: 180, isVeg: true, isBestSeller: true },
    { name: 'Chocolate Fondant', description: '72% Valrhona lava cake with salted caramel ice cream', price: 320, isVeg: true },
    { name: 'Mango Panna Cotta', description: 'Italian set cream with Alphonso mango coulis', price: 280, isVeg: true },
    { name: 'Kulfi Trio', description: 'Traditional Indian ice cream in pistachio, rose and saffron', price: 240, isVeg: true },
    { name: 'Tiramisu', description: 'Classic Italian mascarpone and espresso-soaked ladyfinger dessert', price: 300, isVeg: true },
    { name: 'Fruit Sorbet', description: 'House-made seasonal fruit sorbet, rotating daily', price: 200, isVeg: true },
  ],
}

const categoriesKeys = Object.keys(menuData)

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-cream text-forest selection:bg-forest selection:text-cream">

      {/* ── Cinematic Hero ── */}
      <PageHero
        subtitle="OUR MENU | MULTI-CUISINE DINING"
        title={<>Our <br /><span className="font-heading italic font-light !text-cream/40">Menu.</span></>}
        description="North Indian · Chinese · Continental · Asian · Beverages · Desserts — freshly prepared at Hotel Peninsula Grand, Andheri East, Mumbai."
        image="/interior/DSC03166.jpg"
        imageAlt="Café Crema Menu"
      />

      {/* Categories Navigation */}
      <div className="sticky top-20 md:top-24 bg-cream/95 backdrop-blur-xl border-b border-forest/10 z-40 overflow-hidden">
         <div className="page-wrapper h-16">
            <div className="flex items-center gap-10 md:gap-12 h-full overflow-x-auto scrollbar-hide w-full" style={{ maskImage: 'linear-gradient(to right, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)' }}>
               {categoriesKeys.map((cat) => (
                 <a 
                   key={cat} 
                   href={`#${cat.replace(/\s+/g, '-').toLowerCase()}`}
                   className="text-[10px] font-bold uppercase tracking-[0.3em] text-forest/40 hover:text-forest transition-all shrink-0"
                 >
                   {cat}
                 </a>
               ))}
            </div>
         </div>
      </div>

      {/* Menu Grid */}
      <section className="page-wrapper py-24 md:py-40">
        <div className="space-y-32 md:space-y-48">
           {categoriesKeys.map((cat, i) => (
             <div key={i} id={cat.replace(/\s+/g, '-').toLowerCase()} className="scroll-mt-48 group">
                <div className="flex items-end justify-between mb-16 md:mb-24 border-b border-forest/10 pb-12">
                   <div>
                      <span className="text-meta mb-4 block">Ref 0{i + 1}</span>
                      <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium text-forest tracking-tight leading-none flex flex-wrap items-center gap-4">
                        <span>{cat}</span>
                        {cat === 'Buffet Experiences' && (
                          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gold-muted border border-gold-muted/20 px-3 py-1 mt-2 md:mt-0">New Highlight</span>
                        )}
                      </h2>
                   </div>
                   <span className="text-[120px] font-medium text-forest/[0.04] leading-none select-none hidden lg:block font-heading italic">0{i+1}</span>
                </div>
                
                <div className={`grid grid-cols-1 ${cat === 'Buffet Experiences' ? 'lg:grid-cols-1' : 'lg:grid-cols-2'} gap-px bg-forest/10 border border-forest/10`}>
                   {menuData[cat].map((dish, j) => (
                     <article key={j} className={`${cat === 'Buffet Experiences' ? 'bg-sand/20' : 'bg-cream'} p-6 md:p-12 group/article hover:bg-sand transition-all duration-500`}>
                        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 mb-8">
                           <div className="flex-grow">
                              <div className="flex items-center gap-4 mb-4">
                                 <div className={`w-2 h-2 shrink-0 ${dish.isVeg ? 'bg-green-600' : 'bg-red-500'}`} />
                                 <h3 className="text-xl md:text-3xl font-medium text-forest leading-none tracking-tight">
                                   {dish.name}
                                 </h3>
                              </div>
                              <p className={`text-sm font-light text-forest/60 leading-relaxed italic ${cat === 'Buffet Experiences' ? 'max-w-4xl' : 'max-w-sm'}`}>
                                 {dish.description}
                              </p>
                           </div>
                           <div className="flex flex-col items-end shrink-0">
                              <div className="flex flex-col items-end">
                                <span className="text-3xl font-medium text-forest tracking-tight">₹{dish.price}</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-forest/30">
                                  {cat === 'Buffet Experiences' ? 'Plus Taxes' : 'All Inclusive'}
                                </span>
                              </div>
                              {dish.isBestSeller && (
                                <span className="mt-4 text-[8px] font-bold uppercase tracking-widest text-gold-muted border border-gold-muted/20 px-2 py-1">Featured Selection</span>
                              )}
                           </div>
                        </div>
                        <div className="h-[1px] w-0 bg-forest/20 group-hover/article:w-full transition-all duration-700" />
                     </article>
                   ))}
                </div>
             </div>
           ))}
        </div>
      </section>

      <LocationSection />
    </div>
  )
}

