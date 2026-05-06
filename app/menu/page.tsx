import type { Metadata } from 'next'
import LocationSection from '@/components/home/LocationSection'

export const metadata: Metadata = {
  title: 'Menu – Café Crema Restaurant | Andheri East Mumbai',
  description: "Explore Café Crema's full multi-cuisine menu: North Indian, Chinese, Continental, Asian, Beverages & Desserts. Dine-in & Takeaway. Andheri East.",
  keywords: ['cafe crema menu', 'multicuisine restaurant andheri menu']
}

type Dish = { name: string; description: string; price: number; isVeg: boolean; isBestSeller?: boolean }
type MenuData = Record<string, Dish[]>

const menuData: MenuData = {
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
           {categoriesKeys.map((cat, i) => (
             <div key={i} id={cat.replace(/\s+/g, '-').toLowerCase()} className="scroll-mt-48 group">
                <div className="flex items-end justify-between mb-24 border-b border-forest/10 pb-12">
                   <div>
                      <span className="text-meta mb-4 block">Ref 0{i + 1}</span>
                      <h2 className="text-6xl md:text-8xl font-medium text-forest tracking-tight leading-none">{cat}</h2>
                   </div>
                   <span className="text-[120px] font-medium text-forest/[0.04] leading-none select-none hidden lg:block font-heading italic">0{i+1}</span>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-forest/10 border border-forest/10">
                   {menuData[cat].map((dish, j) => (
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
           ))}
        </div>
      </section>

      <LocationSection />
    </div>
  )
}
