import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  PhoneCall, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Palette, 
  Ruler, 
  ArrowRight,
  Info,
  Clock,
  Printer
} from 'lucide-react';
import { Product, COMPANY_INFO } from '../data/products';
import { ProductVisual } from './ProductVisual';
import { MockupProduct, PRODUCT_MOCKUP_KIND, SHADE_HEX } from './MockupProduct';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenStudio?: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, ...rest }) => {
  if (!product) return null;
  // Keyed by product so every product opens with its own fresh selections
  return <ProductDetailContent key={product.id} product={product} {...rest} />;
};

const ProductDetailContent: React.FC<ProductDetailModalProps & { product: Product }> = ({
  product,
  onClose,
  onOpenStudio
}) => {
  const [quantity, setQuantity] = useState(50);
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || 'Navy Blue');
  const [selectedFabric, setSelectedFabric] = useState(product.fabrics[0] || 'Standard');
  const [selectedPrint, setSelectedPrint] = useState(product.printTypes[0] || 'DTF Print');
  const [notes, setNotes] = useState('');
  const [selectedAngleIndex, setSelectedAngleIndex] = useState(0);
  // Photos come in a single shade, so picking a colour switches to a recoloured mockup
  const [showShadePreview, setShowShadePreview] = useState(false);
  const mockupKind = PRODUCT_MOCKUP_KIND[product.id];
  const selectedHex = SHADE_HEX[selectedColor];

  // Available photo angles for products with multiple views
  const VIEW_ANGLES: Record<string, { label: string; image: string }[]> = {
    'collar-tshirt': [
      { label: 'Front View', image: '/products/collar-tshirt-front.webp' },
      { label: 'Side Angle', image: '/products/collar-tshirt-side.webp' },
      { label: 'Back View', image: '/products/collar-tshirt-back.webp' },
    ],
    'diary': [
      { label: 'Front Cover', image: '/products/diary.webp' },
      { label: 'Executive Black', image: '/products/diary-black.png' },
    ],
    'metal-pen': [
      { label: 'Executive Pen', image: '/products/metal-pen.webp' },
      { label: 'Laser Engraved', image: '/products/metal-pen-customisation.png' },
    ]
  };

  const productAngles = VIEW_ANGLES[product.id] || [];
  const activeImage = productAngles[selectedAngleIndex]?.image || product.image;

  // Extract individual prices if separated by dots
  const priceParts = product.price.split('·').map(p => p.trim());
  const numericPrices = product.price.match(/\d+(\.\d+)?/g)?.map(Number) || [200];
  const basePriceNum = numericPrices[0] || 200;

  // Volume discount slab
  let discountPercent = 0;
  if (quantity >= 250) discountPercent = 15;
  else if (quantity >= 100) discountPercent = 10;
  else if (quantity >= 50) discountPercent = 5;

  const estimatedUnitPrice = Math.round(basePriceNum * (1 - discountPercent / 100));
  const estimatedOrderTotal = estimatedUnitPrice * quantity;

  // WhatsApp Pre-fill message
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    `Hi Wild Collective,\n\nI'm interested in getting a quotation for:\n*Product:* ${product.title}\n*Category:* ${product.category}\n*Listed Pricing Options:* ${product.price}\n*Quantity:* ${quantity} units\n*Volume Tier Discount:* ${discountPercent}% off (~₹${estimatedUnitPrice}/unit)\n*Estimated Order Total:* ~₹${estimatedOrderTotal.toLocaleString('en-IN')}\n*Preferred Shade:* ${selectedColor}\n*Fabric/Material:* ${selectedFabric}\n*Customization / Print Type:* ${selectedPrint}\n*Notes / Requirements:* ${notes || 'Standard custom branding with logo'}\n\nPlease share the formal quotation and delivery timeline.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-[#ffffff] w-full max-w-4xl rounded-3xl shadow-2xl border border-[#dddddd] overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#f5f3ef] px-6 py-4 border-b border-[#dddddd] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#2f2f2f] text-white">
              {product.category}
            </span>
            <span className="text-xs text-[#666666] font-medium hidden sm:inline">
              Mysuru Custom Production
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-[#f1ebe3] flex items-center justify-center text-[#666666] hover:text-[#2f2f2f] transition-colors border border-[#dddddd]"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left: Product Image & Badges */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative bg-white rounded-2xl p-4 border border-[#dddddd] flex items-center justify-center h-72 sm:h-80 overflow-hidden shadow-sm">
                {showShadePreview && mockupKind && selectedHex ? (
                  <MockupProduct kind={mockupKind} color={selectedHex} className="w-full h-full max-h-72 drop-shadow-lg" />
                ) : (
                  <ProductVisual
                    productId={product.id}
                    category={product.category}
                    title={product.title}
                    image={activeImage}
                    className="w-full h-full max-h-72"
                  />
                )}

                {selectedHex && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/95 text-[11px] font-bold text-[#2f2f2f] px-2.5 py-1 rounded-lg border border-[#dddddd] shadow-xs">
                    <span className="w-3 h-3 rounded-full border border-black/15" style={{ backgroundColor: selectedHex }} />
                    <span>{selectedColor}</span>
                  </div>
                )}

                {mockupKind && selectedHex && (
                  <div className="absolute bottom-3 right-3 flex bg-[#f5f3ef] p-0.5 rounded-lg text-[10px] font-bold border border-[#dddddd]">
                    <button
                      type="button"
                      onClick={() => setShowShadePreview(false)}
                      className={`px-2 py-1 rounded-md ${!showShadePreview ? 'bg-[#2f2f2f] text-white' : 'text-[#666666]'}`}
                    >
                      Photo
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowShadePreview(true)}
                      className={`px-2 py-1 rounded-md ${showShadePreview ? 'bg-[#2f2f2f] text-white' : 'text-[#666666]'}`}
                    >
                      Shade Preview
                    </button>
                  </div>
                )}
                
                {product.priceNote && (
                  <div className="absolute top-3 left-3 bg-[#f1ebe3] text-[#2f2f2f] text-[11px] font-extrabold px-2.5 py-1 rounded-lg">
                    {product.priceNote}
                  </div>
                )}
              </div>

              {/* View Angles Selector for products with multiple authentic views */}
              {productAngles.length > 1 && (
                <div className="flex items-center gap-2 justify-center">
                  {productAngles.map((angle, idx) => (
                    <button
                      key={angle.label}
                      onClick={() => { setSelectedAngleIndex(idx); setShowShadePreview(false); }}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-bold transition-all flex items-center gap-1.5 ${
                        selectedAngleIndex === idx
                          ? 'bg-[#2f2f2f] text-white border-[#2f2f2f] shadow-xs'
                          : 'bg-white text-[#666666] border-[#dddddd] hover:bg-[#f5f3ef]'
                      }`}
                    >
                      <img
                        src={angle.image}
                        alt=""
                        aria-hidden="true"
                        className="w-4 h-4 object-contain rounded"
                      />
                      <span>{angle.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Quality & Production Guarantees */}
              <div className="bg-white rounded-2xl p-4 border border-[#dddddd] space-y-2.5 text-xs text-[#666666]">
                <div className="flex items-center gap-2 font-semibold text-[#2f2f2f]">
                  <CheckCircle2 size={15} className="text-[#26d07c]" />
                  <span>KNITTING STORY INDIA Quality Assured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#26d07c]" />
                  <span>Precision DTF, Screen Print & Computerized Embroidery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-[#a58c6d]" />
                  <span>Standard production: 3 - 6 business days</span>
                </div>
              </div>

              {onOpenStudio && (
                <button
                  onClick={() => { onClose(); onOpenStudio(); }}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#2f2f2f] to-[#4a4a4a] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm hover:opacity-95 transition-opacity"
                >
                  <Sparkles size={14} className="text-[#d9bf94]" />
                  <span>Test Logo in Live Merch Studio</span>
                </button>
              )}
            </div>

            {/* Right: Specifications & Quote Configuration */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-black text-[#2f2f2f]">
                  {product.title}
                </h2>
                <div className="mt-2 flex flex-wrap items-baseline gap-2">
                  <span className="text-xs uppercase font-extrabold text-[#666666]">
                    Available Price Options:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {priceParts.map((pr, idx) => (
                      <span 
                        key={idx} 
                        className="font-display font-extrabold text-base sm:text-lg text-[#2f2f2f] bg-[#f1ebe3]/60 px-2 py-0.5 rounded-md"
                      >
                        {pr}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] font-bold text-[#4d6438] bg-[#e4ead9] px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                    <span>✓</span> Verified Direct Factory Prices
                  </span>
                </div>
                <p className="text-xs text-[#8f8f8f] mt-1">
                  *Exact price option confirmed based on chosen GSM, quantity slab, and branding complexity.
                </p>
              </div>

              {/* Material / Fabric Selector */}
              {product.fabrics && product.fabrics.length > 0 && (
                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-[#666666] flex items-center gap-1.5">
                    <Layers size={14} className="text-[#a58c6d]" />
                    <span>Fabric / Base Material</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.fabrics.map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setSelectedFabric(f)}
                        className={`text-left text-xs p-2.5 rounded-xl border transition-all ${
                          selectedFabric === f
                            ? 'border-[#2f2f2f] bg-[#f1ebe3]/40 text-[#2f2f2f] font-bold shadow-xs'
                            : 'border-[#dddddd] bg-white text-[#666666] hover:border-[#8f8f8f]'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Print / Customization Technique */}
              {product.printTypes && product.printTypes.length > 0 && (
                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-[#666666] flex items-center gap-1.5">
                    <Printer size={14} className="text-[#a58c6d]" />
                    <span>Customization Technique</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.printTypes.map((pt) => (
                      <button
                        key={pt}
                        type="button"
                        onClick={() => setSelectedPrint(pt)}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                          selectedPrint === pt
                            ? 'border-[#2f2f2f] bg-[#2f2f2f] text-white font-bold'
                            : 'border-[#dddddd] bg-white text-[#666666] hover:border-[#2f2f2f]'
                        }`}
                      >
                        {pt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Swatch Selection */}
              {product.colors && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-extrabold uppercase tracking-wider text-[#666666] flex items-center gap-1.5">
                      <Palette size={14} className="text-[#a58c6d]" />
                      <span>Preferred Shade</span>
                    </span>
                    <span className="font-bold text-[#2f2f2f]">{selectedColor}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.colors.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => { setSelectedColor(c); setShowShadePreview(true); }}
                        className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border transition-all ${
                          selectedColor === c
                            ? 'border-[#a58c6d] bg-[#a58c6d] text-white font-bold'
                            : 'border-[#dddddd] bg-white text-[#666666] hover:bg-[#f5f3ef]'
                        }`}
                      >
                        {SHADE_HEX[c] && (
                          <span className="w-3 h-3 rounded-full border border-black/15" style={{ backgroundColor: SHADE_HEX[c] }} />
                        )}
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Slab Selector & Custom Stepper */}
              <div className="space-y-3 pt-2 border-t border-[#dddddd]">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-[#666666]">
                    Estimated Order Quantity
                  </label>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(10, quantity - 10))}
                      className="w-7 h-7 rounded-lg bg-white border border-[#dddddd] text-[#2f2f2f] font-black text-sm flex items-center justify-center hover:bg-[#f1ebe3]"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="10"
                      max="10000"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
                      className="w-16 text-center font-display font-black text-base text-[#2f2f2f] py-1 border border-[#dddddd] rounded-lg bg-white focus:outline-none focus:border-[#2f2f2f]"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 10)}
                      className="w-7 h-7 rounded-lg bg-white border border-[#dddddd] text-[#2f2f2f] font-black text-sm flex items-center justify-center hover:bg-[#f1ebe3]"
                    >
                      +
                    </button>
                    <span className="text-xs font-bold text-[#666666] ml-1">units</span>
                  </div>
                </div>

                {/* Preset Slabs */}
                <div className="flex items-center gap-2">
                  {[25, 50, 100, 250, 500].map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setQuantity(qty)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                        quantity === qty
                          ? 'bg-[#2f2f2f] text-white border-[#2f2f2f]'
                          : 'bg-white text-[#666666] border-[#dddddd] hover:bg-[#f5f3ef]'
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                </div>

                {/* Dynamic Price Estimate Card */}
                <div className="bg-[#ffffff] p-3 rounded-2xl border border-[#dddddd] space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#666666]">Estimated Rate per Piece:</span>
                    <div className="flex items-center gap-1.5">
                      {discountPercent > 0 && (
                        <span className="text-[11px] text-[#8f8f8f] line-through">₹{basePriceNum}</span>
                      )}
                      <span className="font-display font-black text-sm text-[#2f2f2f]">₹{estimatedUnitPrice}</span>
                      {discountPercent > 0 && (
                        <span className="text-[9px] font-bold text-[#4d6438] bg-[#e4ead9] px-1.5 py-0.2 rounded">
                          {discountPercent}% OFF
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1.5 border-t border-[#ececec]">
                    <span className="font-bold text-[#2f2f2f]">Estimated Order Total ({quantity} pcs):</span>
                    <span className="font-display font-black text-base text-[#26d07c]">
                      ₹{estimatedOrderTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Notes Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#666666]">
                  Additional requirement / logo placement notes (optional):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Need company logo on front chest, deliver in Mysuru by next Friday..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-[#dddddd] bg-white text-[#2f2f2f] placeholder-[#8f8f8f] focus:outline-none focus:border-[#2f2f2f]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 space-y-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#26d07c] hover:bg-[#20b86c] text-[#0d3f23] font-black text-sm flex items-center justify-center gap-2 shadow-sm transition-all transform active:scale-98"
                >
                  <MessageCircle size={18} className="fill-[#0d3f23]" />
                  <span>Send Quotation Request on WhatsApp</span>
                </a>

                <div className="flex items-center justify-between text-xs text-[#666666] pt-1">
                  <span>No payment required now. Quote confirmed on WhatsApp.</span>
                  <a 
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="font-bold text-[#2f2f2f] hover:underline flex items-center gap-1"
                  >
                    <PhoneCall size={12} />
                    <span>Call Support</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
