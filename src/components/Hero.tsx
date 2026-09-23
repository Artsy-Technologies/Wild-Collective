import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Palette, 
  Compass, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { BRAND_FAMILY, COMPANY_INFO } from '../data/products';
import { MockupProduct, isLightColor } from './MockupProduct';
import { WildCollectiveLogo } from './WildCollectiveLogo';
import { BrandAssetsModal } from './BrandAssetsModal';

interface HeroProps {
  onExploreProducts: () => void;
  onExploreGolf: () => void;
  onOpenStudio: () => void;
  onSelectCategory: (cat: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onExploreGolf,
  onOpenStudio,
  onSelectCategory
}) => {
  // Interactive Collar T-shirt showcase
  const [activeColor, setActiveColor] = useState('Navy Blue');
  const [activeView, setActiveView] = useState<'front' | 'angle' | 'back'>('front');
  const [brandModalOpen, setBrandModalOpen] = useState(false);

  const colorOptions = [
    { name: 'Navy Blue', hex: '#1e293b', bgClass: 'bg-slate-900', img: '/products/collar-tshirt-front.webp' },
    { name: 'Mustard Yellow', hex: '#d9a21b', bgClass: 'bg-amber-500', img: '/products/round-neck-tshirt-yellow-front.webp' },
    { name: 'Forest Olive', hex: '#3f4f34', bgClass: 'bg-stone-700', img: '/products/jacket-olive.png' },
    { name: 'Pure White', hex: '#ffffff', bgClass: 'bg-white', border: true, img: '/products/collar-tshirt-front.webp' },
  ];

  const currentColorObj = colorOptions.find(c => c.name === activeColor) || colorOptions[0];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative background glow accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-[#e7e2ff]/40 via-[#ffd1dc]/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Briefing */}
          <div className="lg:col-span-7 space-y-6">
            {/* Brand Logo & Stamp Badge */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <div 
                  className="cursor-pointer group flex items-center p-1 rounded-xl hover:bg-black/5 transition-colors"
                  onClick={() => setBrandModalOpen(true)}
                  title="Click to view & download exact logo assets"
                >
                  <WildCollectiveLogo variant="dark" height={54} className="max-w-[280px] h-auto drop-shadow-xs group-hover:scale-[1.02] transition-transform duration-200" />
                </div>
                <button
                  onClick={() => setBrandModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1f1b64] text-white text-xs font-bold hover:bg-[#2c2685] transition-colors shadow-xs"
                >
                  <Sparkles size={13} className="text-[#ffd84d]" />
                  <span>Exact Logo Files</span>
                </button>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2ede6] border border-[#d9d1e2] text-xs font-bold text-[#1f1b64] tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#ff6948]"></span>
                <span>Mysuru Apparel & Corporate Gifting House</span>
                <span className="text-[#8d889b]">·</span>
                <span className="text-[#575268]">Direct Factory Prices</span>
              </div>
            </div>

            {/* Display Title */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-[#191633] tracking-tight leading-[1.05]">
                Your Brand. <br />
                <span className="text-[#1f1b64] italic underline decoration-[#ff6948] decoration-4 underline-offset-8">
                  Made Wearable.
                </span>
              </h1>
              <p className="font-display text-xl sm:text-2xl font-bold text-[#575268] pt-2">
                Wild Collective · Custom Printing · Merchandise · Corporate Gifts
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#575268] max-w-xl leading-relaxed">
              Custom apparel, merchandise and corporate gifts designed to bring your brand into everyday use. From 100% bio-washed cotton T-shirts to UV insulated drinkware and Swing Style golf wear—crafted with honest, direct factory pricing.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreProducts}
                className="px-6 py-3.5 rounded-xl bg-[#1f1b64] hover:bg-[#17134f] text-white font-bold text-sm shadow-md shadow-[#1f1b64]/20 flex items-center gap-2 transition-all transform active:scale-95"
              >
                <span>Explore 40+ Products</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                  "Hi Wild Collective,\n\nI'd like to discuss a custom merchandise / apparel requirement for my organization.\n\nQuantity:\nItems required:\nTimeline:\n\nPlease share the catalogue and quotation."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#26d07c] hover:bg-[#20b86c] text-[#0d3f23] font-bold text-sm shadow-sm flex items-center gap-2 transition-all transform active:scale-95"
              >
                <MessageCircle size={18} className="fill-[#0d3f23] text-[#26d07c]" />
                <span>Get WhatsApp Quote</span>
              </a>

              <button
                onClick={onOpenStudio}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-[#f2ede6] text-[#1f1b64] border border-[#d9d1e2] font-bold text-sm flex items-center gap-2 transition-colors"
              >
                <Sparkles size={16} className="text-[#ff6948]" />
                <span>Live Merch Studio</span>
              </button>
            </div>

            {/* Quality Checklist Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#d9d1e2]/80">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#191633]">
                <CheckCircle2 size={16} className="text-[#26d07c] shrink-0" />
                <span>Direct Mysuru Factory</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#191633]">
                <CheckCircle2 size={16} className="text-[#26d07c] shrink-0" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#191633]">
                <CheckCircle2 size={16} className="text-[#26d07c] shrink-0" />
                <span>Instant WhatsApp Quotes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Product Showcase ("COLLAR T-SHIRT / 03 VIEWS") */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-[#d9d1e2] overflow-hidden">
              {/* Top Tag */}
              <div className="flex items-center justify-between pb-4 border-b border-[#ece7f2]">
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-black tracking-widest text-[#ff6948]">
                    Flagship Apparel
                  </span>
                  <h3 className="font-display font-extrabold text-lg text-[#1f1b64]">
                    Collar T-Shirt / 03 Views
                  </h3>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#c5efd4] text-[#0d5930]">
                  Available in Bulk
                </span>
              </div>

              {/* Showcase Image with interactive angle / color */}
              <div className="relative h-72 sm:h-80 my-4 flex items-center justify-center bg-gradient-to-b from-[#fffaf2] to-[#f8f4ee] rounded-2xl p-4 overflow-hidden group">
                <div className="relative h-full aspect-square max-h-72 group-hover:scale-105 transition-transform duration-300">
                  <MockupProduct kind="polo" color={currentColorObj.hex} className="w-full h-full drop-shadow-xl" />
                  <img
                    src={isLightColor(currentColorObj.hex) ? '/brand/logo.png' : '/brand/logo-white.png'}
                    alt=""
                    aria-hidden="true"
                    className="absolute w-[17%] -translate-x-1/2 -translate-y-1/2"
                    style={{ left: '60%', top: '38%' }}
                  />
                </div>

                {/* Floating Price Tag */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#d9d1e2] shadow-sm text-right">
                  <p className="text-[10px] uppercase tracking-wider font-bold text-[#8d889b]">Available Options</p>
                  <p className="font-display font-black text-sm text-[#1f1b64]">₹150 · ₹220 · ₹450</p>
                </div>

                {/* Badge watermark */}
                <div className="absolute bottom-3 left-3 bg-[#1f1b64]/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  Wear it · Carry it · Remember it
                </div>
              </div>

              {/* Interactive Swatches and Specification */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#575268]">Selected Shade:</span>
                  <span className="font-extrabold text-[#191633]">{activeColor}</span>
                </div>

                <div className="flex items-center gap-2">
                  {colorOptions.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setActiveColor(c.name)}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                        activeColor === c.name
                          ? 'ring-2 ring-[#1f1b64] ring-offset-2 scale-110'
                          : 'hover:scale-105 opacity-80 hover:opacity-100'
                      } ${c.border ? 'border border-[#d9d1e2]' : ''}`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {activeColor === c.name && (
                        <span className={`w-2 h-2 rounded-full ${c.name === 'Pure White' ? 'bg-[#1f1b64]' : 'bg-white'}`}></span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Quick actions for this showcase item */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={onExploreProducts}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#f2ede6] hover:bg-[#e7e2ff] text-[#1f1b64] font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Specifications</span>
                    <ChevronRight size={14} />
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                      `Hi Wild Collective, I'm interested in the Collar T-Shirt (${activeColor}).\nAvailable price options: ₹150 / ₹220 / ₹450.\nPlease share fabric samples and bulk quotation.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-[#26d07c] hover:bg-[#20b86c] text-[#0d3f23] font-bold text-xs flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Family Strip ("Meet our brand family") */}
        <div className="mt-16 pt-10 border-t border-[#d9d1e2]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#ff6948]">
                Distinct Identities
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-[#191633] mt-1">
                Meet our brand family.
              </h2>
            </div>
            <p className="text-sm text-[#575268] max-w-md">
              Distinct labels, each with its own character and a shared eye for memorable apparel and craft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRAND_FAMILY.map((brand) => (
              <div
                key={brand.name}
                className="wc-card rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#f2ede6] text-[#1f1b64]">
                      {brand.badge}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: brand.accent }}></span>
                  </div>
                  <h3 className="font-display font-black text-xl text-[#1f1b64] mb-1">
                    {brand.name}
                  </h3>
                  <p className="text-xs font-bold text-[#ff6948] mb-2.5">
                    {brand.tagline}
                  </p>
                  <p className="text-xs text-[#575268] leading-relaxed">
                    {brand.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#ece7f2]">
                  {brand.name === 'Swing Style' ? (
                    <button
                      onClick={onExploreGolf}
                      className="text-xs font-bold text-[#1f1b64] hover:text-[#ff6948] flex items-center gap-1 group transition-colors"
                    >
                      <span>Explore golf T-shirts</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button
                      onClick={onExploreProducts}
                      className="text-xs font-bold text-[#1f1b64] hover:text-[#ff6948] flex items-center gap-1 group transition-colors"
                    >
                      <span>View collection</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Official Brand Assets & Exact Logo Modal */}
      <BrandAssetsModal 
        isOpen={brandModalOpen} 
        onClose={() => setBrandModalOpen(false)} 
      />
    </section>
  );
};
