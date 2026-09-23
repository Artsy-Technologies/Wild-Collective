import React, { useState } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Instagram, 
  Heart, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, CATEGORIES } from '../data/products';
import { WildCollectiveLogo } from './WildCollectiveLogo';
import { BrandAssetsModal } from './BrandAssetsModal';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onSelectCategory: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  const [brandModalOpen, setBrandModalOpen] = useState(false);
  return (
    <footer className="bg-[#1f1b64] text-[#fffaf2] pt-16 pb-12 border-t border-[#17134f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <WildCollectiveLogo variant="light" height={48} className="max-h-12 w-auto" />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Custom apparel, merchandise and corporate gifts made to put your brand into the real world. Honest, direct factory pricing on every order.
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-1">
              <p><strong className="text-white">GSTIN:</strong> {COMPANY_INFO.gstin}</p>
              <p><strong className="text-white">Registered Address:</strong></p>
              <p className="text-slate-400 leading-normal">{COMPANY_INFO.address}</p>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-[#ffd84d]">
              Product Spectrum
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {['Apparel', 'Golf T-Shirts', 'Drinkware', 'Bags & Accessories', 'Keychains & Gifts', 'Caps', 'Stickers, Badges & Stationery'].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      onNavigate('products');
                      onSelectCategory(cat);
                    }}
                    className="hover:text-white hover:underline transition-colors text-left"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-[#ffd84d]">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white hover:underline">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white hover:underline">
                  Full Catalogue
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('golf')} className="hover:text-white hover:underline">
                  Golf T-Shirts (Swing Style)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('custom-printing')} className="hover:text-white hover:underline">
                  Custom Printing Guide
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('corporate-gifts')} className="hover:text-white hover:underline">
                  Corporate Gifting Sets
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white hover:underline">
                  About Wild Collective
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white hover:underline">
                  Contact & Support
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setBrandModalOpen(true)} 
                  className="hover:text-[#ffd84d] hover:underline flex items-center gap-1 font-semibold text-[#ffd84d]"
                >
                  <Sparkles size={12} />
                  <span>Exact Brand Logo & Files</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contacts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-[#ffd84d]">
              Direct Contact
            </h4>
            
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent("Hi Wild Collective, I would like to enquire about a quotation.")}`}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-[#26d07c] text-[#0d3f23] font-bold text-xs flex items-center gap-2 hover:bg-[#20b86c] transition-colors"
            >
              <MessageCircle size={18} className="fill-[#0d3f23]" />
              <span>WhatsApp: {COMPANY_INFO.whatsapp}</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center gap-2 transition-colors border border-white/10"
            >
              <PhoneCall size={16} className="text-[#ffd84d]" />
              <span>Phone: {COMPANY_INFO.phone}</span>
            </a>

            <div className="space-y-1.5 text-xs text-slate-300">
              {COMPANY_INFO.emails.map((email) => (
                <div key={email} className="flex items-center gap-2">
                  <Mail size={14} className="text-slate-400 shrink-0" />
                  <a href={`mailto:${email}`} className="hover:underline">
                    {email}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-2 pt-1">
                <Instagram size={14} className="text-slate-400 shrink-0" />
                <a href={COMPANY_INFO.instagram} target="_blank" rel="noreferrer" className="hover:underline">
                  @wildcollective.store
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Large Decorative Wordmark */}
        <div className="py-10 text-center select-none overflow-hidden">
          <p className="font-display font-black text-3xl sm:text-5xl lg:text-7xl tracking-tighter text-white/15 uppercase">
            WILD COLLECTIVE
          </p>
        </div>

        {/* Copyright & Legal Sub-footer */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Wild Collective. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">
              Store: <span className="text-white font-bold">Wild Collective</span>
            </span>
            <span className="text-slate-500">|</span>
            <span>contact@wildcollective.store</span>
          </div>
        </div>

      </div>

      {/* Official Brand Assets & Exact Logo Modal */}
      <BrandAssetsModal 
        isOpen={brandModalOpen} 
        onClose={() => setBrandModalOpen(false)} 
      />
    </footer>
  );
};
