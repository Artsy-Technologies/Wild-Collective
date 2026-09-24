import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  MessageCircle, 
  ArrowUpRight, 
  Sparkles, 
  Filter, 
  Check,
  ChevronDown
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, Product, COMPANY_INFO } from '../data/products';
import { ProductVisual } from './ProductVisual';

interface ProductCatalogProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenProductDetail: (product: Product) => void;
  onExploreGolf: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenProductDetail,
  onExploreGolf,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high'>('default');

  // Helper to extract lowest numeric price for sorting
  const getMinPrice = (priceStr: string) => {
    const nums = priceStr.match(/\d+(\.\d+)?/g);
    if (!nums || nums.length === 0) return 999999;
    return Math.min(...nums.map(Number));
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'All Products' ||
        p.category.toLowerCase() === selectedCategory.toLowerCase() ||
        (selectedCategory === 'Golf T-Shirts' && p.category === 'Apparel');

      // Search query
      const matchesSearch =
        searchQuery.trim() === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.price.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') {
        return getMinPrice(a.price) - getMinPrice(b.price);
      }
      if (sortBy === 'price-high') {
        return getMinPrice(b.price) - getMinPrice(a.price);
      }
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="catalogue" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f3ef] text-xs font-black uppercase tracking-wider text-[#a58c6d] mb-2">
              <Sparkles size={13} />
              <span>Wild Collective Catalogue · Direct Factory Prices</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#2f2f2f] tracking-tight">
              Start with an everyday favourite.
            </h2>
            <p className="text-sm sm:text-base text-[#666666] mt-1 max-w-xl">
              Useful pieces, transparent factory prices, and a direct route to the right quotation. Select any item to view specifications or request an instant WhatsApp quote.
            </p>
          </div>

          <div className="text-xs font-bold text-[#666666] bg-white px-3.5 py-2 rounded-xl border border-[#dddddd] shrink-0">
            Showing <span className="text-[#2f2f2f] font-black">{filteredProducts.length}</span> of {PRODUCTS.length} products
          </div>
        </div>

        {/* Controls: Search, Category Pills, and Sort */}
        <div className="space-y-4 mb-8">
          {/* Search bar & Sort selector */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:flex-1">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666666]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by name, fabric, or keyword (e.g. T-Shirt, Bottle, Bag, Cap)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#dddddd] bg-white text-sm text-[#2f2f2f] placeholder-[#8f8f8f] focus:outline-none focus:border-[#2f2f2f] shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8f8f8f] hover:text-[#2f2f2f]"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label htmlFor="sort-select" className="text-xs font-bold text-[#666666] shrink-0">Sort:</label>
              <select
                id="sort-select"
                aria-label="Sort products by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full sm:w-44 py-2.5 px-3 rounded-xl border border-[#dddddd] bg-white text-xs font-bold text-[#2f2f2f] focus:outline-none focus:border-[#2f2f2f] shadow-xs cursor-pointer"
              >
                <option value="default">Default Order</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills (Horizontal scrollable) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`text-xs font-extrabold px-3.5 py-2 rounded-xl whitespace-nowrap transition-all duration-150 shrink-0 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#2f2f2f] text-white shadow-sm'
                      : 'bg-white border border-[#dddddd] text-[#666666] hover:text-[#2f2f2f] hover:bg-[#f5f3ef]'
                  }`}
                >
                  {cat === 'Golf T-Shirts' && <span className="text-[#d9bf94]">✦</span>}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Special Banner if Golf T-Shirts category is selected */}
        {selectedCategory === 'Golf T-Shirts' && (
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-[#2f2f2f] via-[#3a3a3a] to-[#0a0a0a] text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg border border-[#f1ebe3]/20">
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest text-[#b9a78e]">
                Dedicated Showcase
              </span>
              <h3 className="font-display text-2xl font-black mt-1">
                Swing Style Printed Golf T-Shirts
              </h3>
              <p className="text-xs text-slate-300 max-w-xl mt-1">
                Engineered with 93% micro polyester and 7% spandex. Explore all seven geometric, botanical, and chevron performance prints with high-definition mockups.
              </p>
            </div>
            <button
              onClick={onExploreGolf}
              className="px-5 py-2.5 rounded-xl bg-[#b9a78e] hover:bg-[#52c8b8] text-[#053831] font-black text-xs shrink-0 flex items-center gap-1.5 transition-colors"
            >
              <span>View 7 Swing Style Prints</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((p) => {
              // WhatsApp direct link for this specific product
              const quoteUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                `Hi Wild Collective,\n\nI'm interested in the ${p.title}.\n\nCategory: ${p.category}\nAvailable price options: ${p.price}\nQuantity:\nPreferred variant:\nCustomization requirement:\n\nPlease share the quotation and order details.`
              )}`;

              return (
                <article
                  key={p.id}
                  className="product-card wc-card rounded-2xl flex flex-col justify-between overflow-hidden group bg-white"
                >
                  {/* Top Image Box */}
                  <div
                    onClick={() => onOpenProductDetail(p)}
                    className="relative h-56 bg-gradient-to-b from-[#ffffff] to-[#faf9f7] flex items-center justify-center p-3 cursor-pointer overflow-hidden"
                  >
                    <ProductVisual
                      productId={p.id}
                      category={p.category}
                      title={p.title}
                      image={p.image}
                      className="w-full h-full max-h-48 group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Price Note / MOQ pill */}
                    {p.priceNote && (
                      <span className="absolute top-2.5 left-2.5 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-[#f1ebe3] text-[#2f2f2f] tracking-wide">
                        {p.priceNote.includes('MOQ') ? p.priceNote : 'Custom Option'}
                      </span>
                    )}

                    <span className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#666666] group-hover:text-[#2f2f2f] opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#a58c6d]">
                        {p.category}
                      </span>
                      <h3
                        onClick={() => onOpenProductDetail(p)}
                        className="font-display font-black text-lg text-[#2f2f2f] group-hover:text-[#2f2f2f] transition-colors cursor-pointer mt-0.5 line-clamp-1"
                        title={p.title}
                      >
                        {p.title}
                      </h3>

                      {/* Pricing */}
                      <div className="mt-3">
                        <div className="flex items-center justify-between">
                          <p className="text-[10px] uppercase font-bold text-[#8f8f8f]">Price Options</p>
                          <span className="text-[9px] font-bold text-[#4d6438] bg-[#e4ead9] px-1.5 py-0.2 rounded">
                            Factory rates
                          </span>
                        </div>
                        <p className="font-display font-extrabold text-base text-[#2f2f2f] mt-0.5">
                          {p.price || 'Pricing on request'}
                        </p>
                        <p className="text-[11px] text-[#666666] mt-0.5">
                          Exact option confirmed with your requirement.
                        </p>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-5 pt-4 border-t border-[#ececec] flex items-center justify-between gap-2">
                      <button
                        onClick={() => onOpenProductDetail(p)}
                        className="text-xs font-bold text-[#2f2f2f] hover:text-[#a58c6d] flex items-center gap-1 transition-colors"
                      >
                        <span>View product</span>
                        <ArrowUpRight size={14} />
                      </button>

                      <a
                        href={quoteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-xl bg-[#26d07c]/15 hover:bg-[#26d07c] text-[#4d6438] hover:text-[#0d3f23] flex items-center justify-center transition-colors shadow-xs"
                        title={`Request WhatsApp Quote for ${p.title}`}
                        aria-label={`Request WhatsApp quote for ${p.title}`}
                      >
                        <MessageCircle size={17} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#dddddd] p-8">
            <p className="font-display text-lg font-bold text-[#2f2f2f]">
              No products found matching &quot;{searchQuery}&quot; in {selectedCategory}
            </p>
            <p className="text-xs text-[#666666] mt-1">
              Try searching with another keyword or resetting the category filter.
            </p>
            <button
              onClick={() => { setSearchQuery(''); onSelectCategory('All Products'); }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#2f2f2f] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
