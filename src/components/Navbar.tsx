import React, { useState } from 'react';
import { 
  MessageCircle, 
  Search, 
  Menu, 
  X, 
  PhoneCall, 
  Sparkles,
  ArrowRight,
  Shirt,
  Gift,
  Printer,
  Compass
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/products';
import { ProductVisual } from './ProductVisual';
import { WildCollectiveLogo } from './WildCollectiveLogo';
import { BrandAssetsModal } from './BrandAssetsModal';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSelectProduct: (productId: string) => void;
  onOpenStudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onSelectProduct,
  onOpenStudio,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [brandModalOpen, setBrandModalOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products', count: PRODUCTS.length },
    { id: 'golf', label: 'Golf T-Shirts', badge: 'Swing Style' },
    { id: 'custom-printing', label: 'Custom Printing' },
    { id: 'corporate-gifts', label: 'Corporate Gifts' },
    { id: 'studio', label: 'Live Studio', highlight: true },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6)
    : [];

  const handleNavClick = (tabId: string) => {
    if (tabId === 'studio') {
      onOpenStudio();
    } else {
      setActiveTab(tabId);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductSelect = (id: string) => {
    onSelectProduct(id);
    setSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-[#1f1b64] text-white py-1.5 px-4 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-block shrink-0 w-2 h-2 rounded-full bg-[#26d07c] animate-pulse"></span>
            <span className="truncate">Wild Collective — Custom apparel, merchandise & corporate gifting</span>
          </div>
          <div className="hidden md:flex items-center gap-5 text-slate-200">
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneCall size={13} className="text-[#ffd84d]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-400">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.emails[0]}`} 
              className="hover:text-white transition-colors underline"
            >
              {COMPANY_INFO.emails[0]}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#fffaf2]/90 backdrop-blur-md border-b border-[#d9d1e2]/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Official Logo & Exact Asset Pill */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center py-1 cursor-pointer group" onClick={() => handleNavClick('home')}>
                <WildCollectiveLogo variant="dark" height={48} className="max-h-12 w-auto group-hover:scale-[1.02] transition-transform duration-200" />
              </div>
              <button
                onClick={() => setBrandModalOpen(true)}
                className="hidden md:inline-flex xl:hidden 2xl:inline-flex whitespace-nowrap items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#e7e2ff] hover:bg-[#1f1b64] text-[#1f1b64] hover:text-white border border-[#d9d1e2] text-[11px] font-bold transition-all shadow-2xs"
                title="View & Download Exact Official Logo Assets"
              >
                <Sparkles size={12} className="text-[#ff6948]" />
                <span>Exact Logo</span>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3 py-2 text-sm font-semibold whitespace-nowrap rounded-lg transition-all duration-150 flex items-center gap-1.5 ${
                      item.highlight 
                        ? 'bg-gradient-to-r from-[#1f1b64] to-[#2b2588] text-white shadow-sm hover:opacity-95' 
                        : isActive
                          ? 'text-[#1f1b64] bg-[#e7e2ff]/60 font-bold'
                          : 'text-[#575268] hover:text-[#1f1b64] hover:bg-[#f2ede6]/80'
                    }`}
                  >
                    {item.highlight && <Sparkles size={14} className="text-[#ffd84d] animate-pulse" />}
                    <span>{item.label}</span>
                    {item.count && (
                      <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-[#1f1b64] text-white' : 'bg-[#e7e2ff] text-[#1f1b64]'
                      }`}>
                        {item.count}
                      </span>
                    )}
                    {item.badge && (
                      <span className="text-[9px] uppercase font-extrabold px-1.5 py-0.5 rounded bg-[#c5efd4] text-[#0d5930] tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 shrink-0">
              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="w-10 h-10 flex items-center justify-center rounded-xl text-[#575268] hover:text-[#1f1b64] hover:bg-[#f2ede6] transition-colors"
                title="Search products"
                aria-label="Search products"
              >
                <Search size={18} />
              </button>

              {/* WhatsApp Quote Button */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                  "Hi Wild Collective, I would like to enquire about custom apparel / corporate merchandise quote."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex whitespace-nowrap items-center gap-2 px-4 py-2.5 rounded-xl bg-[#26d07c] hover:bg-[#20b86c] text-[#0d3f23] text-sm font-bold shadow-sm transition-all transform active:scale-95"
              >
                <MessageCircle size={18} className="fill-[#0d3f23] text-[#26d07c]" />
                <span className="xl:hidden 2xl:inline">WhatsApp Quote</span>
              </a>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden w-10 h-10 flex items-center justify-center rounded-xl text-[#1f1b64] hover:bg-[#f2ede6]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-b border-[#d9d1e2] bg-[#fffaf2] px-4 pt-2 pb-6 space-y-1 shadow-lg animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#1f1b64] text-white'
                    : 'text-[#191633] hover:bg-[#f2ede6]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {item.highlight && <Sparkles size={16} className="text-[#ffd84d]" />}
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#c5efd4] text-[#0d5930]">
                    {item.badge}
                  </span>
                )}
                {item.count && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#e7e2ff] text-[#1f1b64]">
                    {item.count} items
                  </span>
                )}
              </button>
            ))}

            <div className="pt-4 border-t border-[#d9d1e2] mt-4 space-y-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                  "Hi Wild Collective, I would like to enquire about custom apparel / corporate merchandise quote."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#26d07c] text-[#0d3f23] font-bold text-center"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp ({COMPANY_INFO.whatsapp})</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#d9d1e2] text-[#1f1b64] font-bold text-center"
              >
                <PhoneCall size={18} />
                <span>Call Us ({COMPANY_INFO.phone})</span>
              </a>

              <div className="text-center pt-2 text-xs text-[#575268] space-y-0.5">
                <p>Email: {COMPANY_INFO.emails.join(' · ')}</p>
                <p className="text-[11px] text-[#8d889b]">Direct factory pricing · Mysuru</p>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-16 px-4">
          <div className="bg-[#fffaf2] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#d9d1e2] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="p-4 border-b border-[#d9d1e2] flex items-center gap-3">
              <Search size={20} className="text-[#575268]" />
              <input
                type="text"
                autoFocus
                placeholder="Search products (e.g. round neck, collar polo, hoodie, bottle, mug, tote bag)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-lg font-medium text-[#191633] placeholder-[#8d889b] focus:outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-lg hover:bg-[#f2ede6] text-[#575268]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-4">
              {searchQuery.trim() === '' ? (
                <div className="py-8 text-center text-sm text-[#575268]">
                  <p className="font-semibold text-base text-[#191633] mb-1">Explore our full Mysuru catalogue</p>
                  <p>Type any product name, apparel category, drinkware, bag, or gift item.</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {['Round Neck T-Shirt', 'Collar T-Shirt', 'UV Bottle', 'Hoodie', 'Tote Bag', 'Diary', 'Smart Caps'].map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="text-xs px-3 py-1.5 rounded-full bg-[#f2ede6] hover:bg-[#e7e2ff] text-[#1f1b64] font-medium transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="divide-y divide-[#ece7f2]">
                  {searchResults.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => handleProductSelect(p.id)}
                      className="py-3 px-3 rounded-xl hover:bg-[#f2ede6] flex items-center justify-between cursor-pointer transition-colors group"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-14 h-14 rounded-lg bg-white border border-[#d9d1e2] p-1 flex items-center justify-center shrink-0 overflow-hidden">
                          <ProductVisual
                            productId={p.id}
                            category={p.category}
                            title={p.title}
                            image={p.image}
                            className="w-full h-full"
                          />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff6948]">
                            {p.category}
                          </span>
                          <h4 className="font-display font-bold text-base text-[#191633] group-hover:text-[#1f1b64]">
                            {p.title}
                          </h4>
                          <p className="text-xs text-[#575268]">{p.price}</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center text-xs font-bold text-[#1f1b64] group-hover:translate-x-1 transition-transform">
                        View details <ArrowRight size={14} className="ml-1" />
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-sm text-[#575268]">
                  No products matched &quot;{searchQuery}&quot;. Try searching for &quot;T-Shirt&quot;, &quot;Cap&quot;, or &quot;Bottle&quot;.
                </div>
              )}
            </div>

            <div className="bg-[#f2ede6] px-4 py-2.5 border-t border-[#d9d1e2] text-xs text-[#575268] flex items-center justify-between">
              <span>Showing results from 40+ Wild Collective products</span>
              <button 
                onClick={() => { setSearchOpen(false); handleNavClick('products'); }}
                className="font-bold text-[#1f1b64] hover:underline"
              >
                Browse All Products
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Official Brand Assets & Exact Logo Modal */}
      <BrandAssetsModal 
        isOpen={brandModalOpen} 
        onClose={() => setBrandModalOpen(false)} 
      />
    </>
  );
};
