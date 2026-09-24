import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { BRAND_FAMILY, whatsappDiscuss } from '../data/products';

interface HeroProps {
  onExploreProducts: () => void;
  onExploreGolf: () => void;
}

const HERO_VIEWS = [
  { src: '/images/products/collar-tshirt-back.webp', alt: '', className: 'left-0 top-10 w-[42%] rotate-[-6deg] opacity-90' },
  { src: '/images/products/collar-tshirt-side.webp', alt: '', className: 'right-0 top-4 w-[44%] rotate-[5deg] opacity-95' },
  {
    src: '/images/products/collar-tshirt-front.webp',
    alt: 'Model wearing a green custom collar T-shirt',
    className: 'left-1/2 -translate-x-1/2 bottom-0 w-[58%] z-10 shadow-xl',
  },
];

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onExploreGolf }) => {
  return (
    <>
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-[#2f2f2f] tracking-tight leading-[1.02]">
                Your Brand. <br />
                <span className="italic text-[#a58c6d]">Made Wearable.</span>
              </h1>
              <p className="font-display text-lg sm:text-xl font-bold text-[#2f2f2f]">
                Custom Printing · Merchandise · Corporate Gifts
              </p>
              <p className="text-base sm:text-lg text-[#666666] max-w-xl leading-relaxed">
                Custom apparel, merchandise and corporate gifts designed to bring your brand into everyday use.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onExploreProducts}
                  className="px-6 py-3.5 rounded-sm bg-[#2f2f2f] hover:bg-[#0a0a0a] text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors"
                >
                  <span>Explore products</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href={whatsappDiscuss()}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-sm border-2 border-[#2f2f2f] text-[#2f2f2f] hover:bg-[#2f2f2f] hover:text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors"
                >
                  <span>Get a WhatsApp quote</span>
                  <MessageCircle size={16} />
                </a>
              </div>

              <div className="flex items-center gap-2 pt-4 text-xs font-bold uppercase tracking-widest text-[#666666]">
                <Sparkles size={16} className="text-[#a58c6d]" />
                <span>Wear it · Carry it · Remember it</span>
              </div>
            </div>

            {/* Right Column: Collar T-shirt / 03 views */}
            <div className="lg:col-span-6">
              <div
                className="relative bg-[#f5f3ef] rounded-lg p-6 h-[420px] sm:h-[500px] overflow-hidden"
                role="img"
                aria-label="Three views of a custom green collar T-shirt"
              >
                <span className="absolute top-5 left-6 z-20 text-[11px] font-bold uppercase tracking-widest text-[#666666]" aria-hidden="true">
                  Collar T-Shirt / 03 Views
                </span>
                {HERO_VIEWS.map((v) => (
                  <img
                    key={v.src}
                    src={v.src}
                    alt={v.alt}
                    aria-hidden={v.alt ? undefined : true}
                    className={`absolute aspect-[4/5] object-cover rounded-md bg-white ${v.className}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet our brand family */}
      <section className="py-14 sm:py-20 bg-white border-t border-[#ececec]" aria-labelledby="brand-family-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <h2 id="brand-family-title" className="font-display text-3xl sm:text-4xl font-black text-[#2f2f2f]">
              Meet our brand family.
            </h2>
            <p className="text-base text-[#666666] max-w-md">
              Distinct labels, each with its own character and a shared eye for memorable apparel.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRAND_FAMILY.map((brand) => (
              <li key={brand.name} className="wc-card rounded-lg p-6 flex flex-col">
                <div className="h-28 flex items-center justify-center mb-6 bg-[#faf9f7] rounded-md p-4" aria-hidden="true">
                  <img src={brand.logo} alt="" className="max-h-full max-w-[70%] object-contain" />
                </div>
                <h3 className="font-display font-black text-xl text-[#2f2f2f] mb-1">{brand.name}</h3>
                <p className="text-sm text-[#666666]">{brand.tagline}</p>
                {brand.link && (
                  <button
                    onClick={onExploreGolf}
                    className="mt-5 self-start text-sm font-bold text-[#2f2f2f] hover:text-[#a58c6d] flex items-center gap-1 group transition-colors"
                  >
                    <span>{brand.linkLabel}</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
