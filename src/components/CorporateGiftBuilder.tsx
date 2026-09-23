import React, { useState } from 'react';
import { 
  Gift, 
  Package, 
  Check, 
  Plus, 
  Trash2, 
  MessageCircle, 
  Sparkles, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { GIFT_SETS, COMPANY_INFO } from '../data/products';
import { GiftHamperVisual } from './GiftHamperVisual';
import { ProductVisual } from './ProductVisual';

export const CorporateGiftBuilder: React.FC = () => {
  // Available items for the custom set builder
  const availableItems = [
    { id: 'uv-bottle', name: 'UV Insulated Bottle (750ml)', price: 280, category: 'Drinkware', img: '/products/corporate-gift-black-bottle.png' },
    { id: 'diary', name: 'Executive Hardbound A5 Diary', price: 150, category: 'Stationery', img: '/products/diary.webp' },
    { id: 'metal-pen', name: 'Laser Engraved Metal Pen', price: 65, category: 'Stationery', img: '/products/metal-pen.webp' },
    { id: 'mug', name: 'Custom Ceramic Coffee Mug', price: 160, category: 'Drinkware', img: '/products/mug.webp' },
    { id: 'tote', name: 'Canvas Cotton Tote Bag', price: 75, category: 'Bags', img: '/products/tote-bag.webp' },
    { id: 'keychain', name: 'Laser Cut Acrylic Keychain', price: 45, category: 'Keychains', img: '/products/acrylic-keychain.png' },
    { id: 'smart-cap', name: 'Smart 6-Panel Embroidered Cap', price: 65, category: 'Caps', img: '/products/smart-cap-black-front.webp' },
    { id: 'backpack', name: 'Corporate Commuter Backpack', price: 430, category: 'Bags', img: '/products/backpack.webp' },
  ];

  // Default selected items in custom builder
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([
    'uv-bottle',
    'diary',
    'metal-pen'
  ]);

  const [boxType, setBoxType] = useState<{ name: string; price: number }>({
    name: 'Luxury Rigid Magnetic Box',
    price: 120
  });

  const [quantity, setQuantity] = useState<number>(50);
  const [companyName, setCompanyName] = useState<string>('');

  const toggleItem = (id: string) => {
    if (selectedItemIds.includes(id)) {
      if (selectedItemIds.length <= 1) return; // keep at least 1
      setSelectedItemIds(selectedItemIds.filter(i => i !== id));
    } else {
      setSelectedItemIds([...selectedItemIds, id]);
    }
  };

  const selectedItems = availableItems.filter(i => selectedItemIds.includes(i.id));
  const itemsSubtotal = selectedItems.reduce((acc, curr) => acc + curr.price, 0);
  const costPerBox = itemsSubtotal + boxType.price;
  const estimatedTotal = costPerBox * quantity;

  // WhatsApp link for custom gift set
  const whatsappCustomSetUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    `Hi Wild Collective,\n\nI want to request a formal quote for a Custom Corporate Gift Set:\n\n*Company/Event:* ${companyName || 'Corporate Event'}\n*Quantity:* ${quantity} gift boxes\n*Selected Items:*\n${selectedItems.map((item, idx) => `  ${idx + 1}. ${item.name} (~₹${item.price})`).join('\n')}\n*Packaging Box:* ${boxType.name} (~₹${boxType.price})\n*Estimated Unit Cost:* ~₹${costPerBox} per box\n*Estimated Total:* ~₹${estimatedTotal.toLocaleString('en-IN')}\n\nPlease verify final volume discounts, branding placements, and sample box preparation.`
  )}`;

  return (
    <section id="corporate-gifts" className="py-16 sm:py-24 bg-[#fffaf2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2ede6] text-xs font-black uppercase tracking-wider text-[#ff6948] mb-3">
            <Gift size={14} />
            <span>Corporate Gifting Solutions · Factory rates</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#191633] tracking-tight">
            Corporate gifts that keep your brand around.
          </h2>
          <p className="text-base sm:text-lg text-[#575268] mt-3 leading-relaxed">
            Curate useful, custom branded pieces for teams, events and business relationships—then send the combination directly to Wild Collective for quotation at direct factory pricing.
          </p>
        </div>

        {/* Curated Gift Combinations */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-extrabold text-2xl text-[#191633]">
              Curated starting combinations
            </h3>
            <span className="text-xs text-[#575268] font-bold">
              Ready to brand & dispatch
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GIFT_SETS.map((kit) => (
              <div
                key={kit.id}
                className="wc-card rounded-2xl flex flex-col justify-between overflow-hidden bg-white group"
              >
                <div>
                  <div className="relative h-52 bg-gradient-to-b from-[#f8f4ee] to-[#fffaf2] p-2 flex items-center justify-center overflow-hidden">
                    {kit.id === 'executive-welcome-kit' ? (
                      <GiftHamperVisual className="w-full h-full max-h-48 group-hover:scale-105 transition-transform duration-300" badge={kit.title} />
                    ) : kit.image && kit.image.startsWith('http') ? (
                      <img
                        src={kit.image}
                        alt={kit.title}
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <GiftHamperVisual className="w-full h-full max-h-48 group-hover:scale-105 transition-transform duration-300" badge={kit.title} />
                    )}
                    <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg text-xs font-black text-[#1f1b64] border border-[#d9d1e2]">
                      From {kit.basePrice}
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#ff6948]">
                      MOQ: {kit.moq}
                    </span>
                    <h4 className="font-display font-black text-lg text-[#1f1b64] mt-0.5">
                      {kit.title}
                    </h4>
                    <p className="text-xs text-[#575268] mt-1.5 leading-relaxed">
                      {kit.subtitle}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#ece7f2] space-y-1.5">
                      <p className="text-[10px] uppercase font-extrabold text-[#8d889b]">Included In Set:</p>
                      {kit.items.map((item) => (
                        <div key={item} className="flex items-start gap-1.5 text-xs text-[#191633]">
                          <Check size={13} className="text-[#26d07c] shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                      `Hi Wild Collective,\n\nI'm interested in the ${kit.title}.\nIncludes: ${kit.items.join(', ')}\nBase Price: ${kit.basePrice}\n\nPlease share the formal quotation and customization options.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#f2ede6] hover:bg-[#26d07c] hover:text-[#0d3f23] text-[#1f1b64] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle size={15} />
                    <span>Inquire this Set on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Custom Corporate Gift Set Builder */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#d9d1e2] shadow-xl">
          <div className="border-b border-[#ece7f2] pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#1f1b64] bg-[#e7e2ff] px-3 py-1 rounded-full mb-2">
                <Sparkles size={13} className="text-[#ff6948]" />
                <span>Interactive Builder</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#191633]">
                Build Your Custom Corporate Gift Set
              </h3>
              <p className="text-xs sm:text-sm text-[#575268] mt-1 max-w-xl">
                This is a considered selection tool. Pick which pieces belong in the gift box and instantly transmit your custom combination to Wild Collective via WhatsApp.
              </p>
            </div>
            <div className="text-xs text-[#575268] bg-[#f8f4ee] p-3 rounded-xl border border-[#d9d1e2]">
              <span className="font-bold text-[#191633]">Direct Service:</span> Wild Collective packages, logos, and delivers all pieces together in branded presentation boxes at factory rates.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Item Selection Grid */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-[#575268]">
                    Step 1: Pick Products to Include in the Box
                  </label>
                  <div className="flex items-center gap-2 text-[11px] font-bold">
                    <button
                      type="button"
                      onClick={() => setSelectedItemIds(availableItems.map(i => i.id))}
                      className="text-[#1f1b64] hover:underline"
                    >
                      Select All
                    </button>
                    <span className="text-[#d9d1e2]">·</span>
                    <button
                      type="button"
                      onClick={() => setSelectedItemIds(['uv-bottle', 'diary', 'metal-pen'])}
                      className="text-[#ff6948] hover:underline"
                    >
                      Reset to Starter Set
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {availableItems.map((item) => {
                    const isSelected = selectedItemIds.includes(item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'border-[#1f1b64] bg-[#e7e2ff]/30 ring-1 ring-[#1f1b64]'
                            : 'border-[#d9d1e2] bg-[#fffaf2] hover:border-[#8d889b]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-white p-1 border border-[#d9d1e2] flex items-center justify-center overflow-hidden shrink-0 shadow-xs">
                            <ProductVisual productId={item.id} className="w-full h-full" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase text-[#ff6948]">
                              {item.category}
                            </span>
                            <p className="font-display font-bold text-xs text-[#191633] line-clamp-1">
                              {item.name}
                            </p>
                            <p className="font-extrabold text-xs text-[#1f1b64]">₹{item.price}</p>
                          </div>
                        </div>

                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-[#1f1b64] text-white' : 'border border-[#d9d1e2] text-transparent'
                        }`}>
                          <Check size={14} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Packaging Style */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-[#575268] block mb-3">
                  Step 2: Choose Presentation Packaging Box
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'Luxury Rigid Magnetic Box', price: 120, desc: 'Velvet foam insert with magnetic snap' },
                    { name: 'Eco Kraft Hard Gift Box', price: 45, desc: 'Recycled structured kraft with ribbon' },
                    { name: 'Slide-Out Custom Sleeve Box', price: 30, desc: 'Full-colour printed slider wrapper' },
                  ].map((box) => (
                    <button
                      key={box.name}
                      type="button"
                      onClick={() => setBoxType(box)}
                      className={`text-left p-3.5 rounded-2xl border transition-all ${
                        boxType.name === box.name
                          ? 'border-[#1f1b64] bg-[#1f1b64] text-white font-bold'
                          : 'border-[#d9d1e2] bg-[#fffaf2] text-[#575268] hover:border-[#8d889b]'
                      }`}
                    >
                      <Package size={18} className={boxType.name === box.name ? 'text-[#ffd84d]' : 'text-[#575268]'} />
                      <p className={`font-display font-bold text-xs mt-2 ${boxType.name === box.name ? 'text-white' : 'text-[#191633]'}`}>
                        {box.name}
                      </p>
                      <p className="text-[11px] opacity-80 mt-0.5">{box.desc}</p>
                      <p className={`text-xs font-black mt-2 ${boxType.name === box.name ? 'text-[#ffd84d]' : 'text-[#1f1b64]'}`}>
                        +₹{box.price} / box
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Quantity */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-[#575268]">
                    Step 3: Number of Gift Sets Required
                  </label>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(10, quantity - 10))}
                      className="w-7 h-7 rounded-lg bg-white border border-[#d9d1e2] text-[#191633] font-black text-sm flex items-center justify-center hover:bg-[#e7e2ff]"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="10"
                      max="10000"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
                      className="w-16 text-center font-display font-black text-sm text-[#1f1b64] py-1 border border-[#d9d1e2] rounded-lg bg-white focus:outline-none focus:border-[#1f1b64]"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 10)}
                      className="w-7 h-7 rounded-lg bg-white border border-[#d9d1e2] text-[#191633] font-black text-sm flex items-center justify-center hover:bg-[#e7e2ff]"
                    >
                      +
                    </button>
                    <span className="text-xs font-bold text-[#575268] ml-1">boxes</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {[25, 50, 100, 250, 500].map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setQuantity(qty)}
                      className={`flex-1 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
                        quantity === qty
                          ? 'bg-[#1f1b64] text-white border-[#1f1b64]'
                          : 'bg-[#fffaf2] text-[#575268] border-[#d9d1e2] hover:bg-[#f2ede6]'
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Live Bill & Summary Manifest */}
            <div className="lg:col-span-5 bg-[#fffaf2] rounded-2xl p-6 border border-[#d9d1e2] flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#ece7f2]">
                  <span className="text-xs font-black uppercase text-[#ff6948]">
                    Gift Set Estimate
                  </span>
                  <span className="text-xs font-bold text-[#575268]">
                    {selectedItems.length} items + box
                  </span>
                </div>

                {/* Company Name */}
                <div className="mt-4 space-y-1">
                  <label className="text-xs font-bold text-[#191633]">Company / Occasion:</label>
                  <input
                    type="text"
                    placeholder="e.g. Annual Summit 2026 / Client Diwali Gift"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-[#d9d1e2] bg-white focus:outline-none focus:border-[#1f1b64]"
                  />
                </div>

                {/* Manifest list */}
                <div className="mt-4 space-y-2 max-h-56 overflow-y-auto">
                  <p className="text-[10px] uppercase font-bold text-[#8d889b]">Included In Each Box:</p>
                  {selectedItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-xs py-1 border-b border-[#ece7f2]">
                      <span className="font-medium text-[#191633]">{item.name}</span>
                      <span className="font-bold text-[#575268]">₹{item.price}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between text-xs py-1 border-b border-[#ece7f2] text-[#1f1b64] font-semibold">
                    <span>{boxType.name}</span>
                    <span>₹{boxType.price}</span>
                  </div>
                </div>

                {/* Totals */}
                <div className="mt-6 pt-4 border-t border-[#d9d1e2] space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#575268]">Estimated cost per gift box:</span>
                    <span className="font-display font-black text-lg text-[#1f1b64]">₹{costPerBox}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#575268]">Order quantity:</span>
                    <span className="font-bold text-[#191633]">{quantity} sets</span>
                  </div>
                  <div className="flex items-center justify-between text-base pt-2 border-t border-[#d9d1e2]">
                    <span className="font-extrabold text-[#191633]">Estimated Order Total:</span>
                    <span className="font-display font-black text-2xl text-[#26d07c]">
                      ₹{estimatedTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-[10px] text-[#8d889b] text-right">
                    *Final price confirmed with exact logo branding and GST.
                  </p>
                </div>
              </div>

              {/* WhatsApp Quote Trigger */}
              <div className="space-y-2">
                <a
                  href={whatsappCustomSetUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 px-4 rounded-xl bg-[#26d07c] hover:bg-[#20b86c] text-[#0d3f23] font-black text-sm flex items-center justify-center gap-2 shadow-md transition-transform transform active:scale-98"
                >
                  <MessageCircle size={18} className="fill-[#0d3f23]" />
                  <span>Send Gift Set Brief on WhatsApp</span>
                </a>
                <p className="text-[11px] text-center text-[#575268]">
                  Wild Collective will confirm mockups, sample box proofs and dispatch timeline.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
