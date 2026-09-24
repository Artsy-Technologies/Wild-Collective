import React from 'react';
import { 
  Shirt, 
  Coffee, 
  ShoppingBag, 
  Key, 
  HardHat, 
  BookOpen, 
  Compass, 
  Flag, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface CategoryNavProps {
  onSelectCategory: (cat: string) => void;
  onExploreFullCatalogue: () => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  onSelectCategory,
  onExploreFullCatalogue
}) => {
  const categoriesConfig = [
    {
      name: 'Apparel',
      catQuery: 'Apparel',
      icon: Shirt,
      desc: 'T-Shirts, Collar Polos, Hoodies & Sweatshirts',
      bgGradient: 'from-[#efe7dc]/40 to-[#f1ebe3]/30',
      accentColor: '#2f2f2f'
    },
    {
      name: 'Golf T-Shirts',
      catQuery: 'Golf T-Shirts',
      icon: Sparkles,
      desc: 'Swing Style 93% Micro Poly + 7% Spandex',
      bgGradient: 'from-[#e4ead9]/40 to-[#b9a78e]/20',
      accentColor: '#4d6438',
      badge: 'Swing Style'
    },
    {
      name: 'Drinkware',
      catQuery: 'Drinkware',
      icon: Coffee,
      desc: 'UV Digital Bottles, Insulated Flasks & Ceramic Mugs',
      bgGradient: 'from-[#e9e6e1]/40 to-[#f1ebe3]/20',
      accentColor: '#2f2f2f'
    },
    {
      name: 'Bags & Accessories',
      catQuery: 'Bags & Accessories',
      icon: ShoppingBag,
      desc: 'Cotton Totes, Structured Jute, Backpacks & Trolleys',
      bgGradient: 'from-[#d9bf94]/30 to-[#ffffff]',
      accentColor: '#8f4f00'
    },
    {
      name: 'Keychains & Gifts',
      catQuery: 'Keychains & Gifts',
      icon: Key,
      desc: 'Laser Acrylic, Engraved Wood, Leather & Mementoes',
      bgGradient: 'from-[#e6dccf]/30 to-[#f5f3ef]',
      accentColor: '#3d1b64'
    },
    {
      name: 'Caps & Headwear',
      catQuery: 'Caps',
      icon: HardHat,
      desc: 'Smart 6-Panel Caps, Flexible Sports & Foldable Caps',
      bgGradient: 'from-[#a58c6d]/20 to-[#efe7dc]/30',
      accentColor: '#d14324'
    },
    {
      name: 'Stationery & Badges',
      catQuery: 'Stickers, Badges & Stationery',
      icon: BookOpen,
      desc: 'Executive Diaries, Metal Pens, Badges & Wristbands',
      bgGradient: 'from-[#e4ead9]/30 to-[#ffffff]',
      accentColor: '#1a5937'
    },
    {
      name: 'Fridge Magnets',
      catQuery: 'Fridge Magnets',
      icon: Compass,
      desc: 'Acrylic, Button & Embossed Leather Magnets',
      bgGradient: 'from-[#e9e6e1]/30 to-[#efe7dc]/20',
      accentColor: '#1f3e72'
    },
    {
      name: 'Flags & Other Products',
      catQuery: 'Other Products',
      icon: Flag,
      desc: 'Custom Flags, Umbrellas & Traditional Mysuru Shalya',
      bgGradient: 'from-[#d9bf94]/20 to-[#f1ebe3]/30',
      accentColor: '#784e03'
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#faf9f7] border-b border-[#dddddd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#a58c6d]">
              Product Spectrum
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#2f2f2f] mt-1 tracking-tight">
              Everything your brand can wear, carry & share.
            </h2>
            <p className="text-sm sm:text-base text-[#666666] mt-2 max-w-xl">
              Browse by primary category. Every product is produced and customized to order at our Mysuru facility.
            </p>
          </div>

          <button
            onClick={onExploreFullCatalogue}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#f1ebe3] text-[#2f2f2f] border border-[#dddddd] font-bold text-sm transition-all shadow-sm group shrink-0"
          >
            <span>Browse the full catalogue ({PRODUCTS.length} items)</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Categories Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categoriesConfig.map((cat) => {
            const Icon = cat.icon;
            const count = cat.catQuery === 'Golf T-Shirts' 
              ? 7 
              : PRODUCTS.filter(p => p.category === cat.catQuery).length;

            return (
              <div
                key={cat.name}
                onClick={() => onSelectCategory(cat.catQuery)}
                className="group relative bg-white rounded-2xl p-6 border border-[#dddddd] hover:border-[#2f2f2f] cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between overflow-hidden"
              >
                {/* Background decorative tint */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.bgGradient} rounded-bl-full opacity-60 transition-transform group-hover:scale-125 duration-300 pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ffffff] border border-[#dddddd] flex items-center justify-center text-[#2f2f2f] group-hover:bg-[#2f2f2f] group-hover:text-white transition-colors duration-200 shadow-sm">
                      <Icon size={22} />
                    </div>
                    {cat.badge ? (
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#e4ead9] text-[#4d6438] tracking-wider">
                        {cat.badge}
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-[#8f8f8f] group-hover:text-[#2f2f2f]">
                        {count} items
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-[#2f2f2f] group-hover:text-[#2f2f2f] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#666666] mt-1.5 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#ececec] flex items-center justify-between text-xs font-bold text-[#2f2f2f]">
                  <span>Explore category</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
