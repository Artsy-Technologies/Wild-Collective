import React, { useState } from 'react';
import { 
  Sparkles, 
  Shield, 
  Wind, 
  Zap, 
  Sun, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';
import { GOLF_PATTERNS, COMPANY_INFO, GolfPattern } from '../data/products';

export const GolfTShirtsSection: React.FC = () => {
  const [selectedPattern, setSelectedPattern] = useState<GolfPattern>(GOLF_PATTERNS[0]);
  const [quantity, setQuantity] = useState(30);
  const [tournamentName, setTournamentName] = useState('');
  const [logoPosition, setLogoPosition] = useState('Left Chest Embroidery');
  const [imgError, setImgError] = useState(false);

  // Reset img error on pattern switch
  const handleSelectPattern = (pattern: GolfPattern) => {
    setSelectedPattern(pattern);
    setImgError(false);
  };

  const performanceFeatures = [
    {
      title: 'UV50+ Sun Protection',
      desc: 'Built-in ultraviolet blocking weave protects skin across 18 holes of harsh direct sunlight.',
      icon: Sun
    },
    {
      title: 'Quick-Dry Moisture Wicking',
      desc: 'Micro-capillary poly fibers pull perspiration away from the skin for rapid evaporation.',
      icon: Wind
    },
    {
      title: '4-Way Ergonomic Stretch',
      desc: '7% high-grade elastane allows full, unrestricted rotational shoulder swing velocity.',
      icon: Zap
    },
    {
      title: 'Anti-Odor Microbial Treatment',
      desc: 'Prevents bacterial growth to keep players fresh throughout prolonged club tournaments.',
      icon: Shield
    }
  ];

  const whatsappGolfUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    `Hi Wild Collective,\n\nI would like to request a quotation for Swing Style Golf T-Shirts:\n\n*Selected Print:* ${selectedPattern.name}\n*Quantity:* ${quantity} pieces\n*Branding Requirement:* ${logoPosition}\n*Tournament / Organization:* ${tournamentName || 'Corporate Event'}\n*Fabric:* 93% Micro Polyester / 7% Spandex (190 GSM)\n*Pricing:* Direct manufacturer rates\n\nPlease share the formal quotation and size chart.`
  )}`;

  return (
    <section id="golf-section" className="py-16 sm:py-24 bg-[#fffaf2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Header */}
        <div className="border-b border-[#d9d1e2] pb-10 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1f1b64] text-white text-xs font-black uppercase tracking-wider mb-3">
                <Sparkles size={13} className="text-[#65d9ca]" />
                <span>Swing Style Golf Label</span>
              </div>
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#191633] tracking-tight">
                Printed golf T-shirts, <br />
                <span className="text-[#1f1b64] italic underline decoration-[#65d9ca] decoration-4">
                  built to move.
                </span>
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-base text-[#575268] leading-relaxed">
                Seven expressive prints on a performance-led fabric base: <strong className="text-[#191633]">93% micro polyester and 7% spandex</strong>. Engineered in Mysuru for corporate invitationals, country clubs, and active teams.
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs font-bold text-[#1f1b64]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-[#26d07c]" /> UV50+ Protection
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-[#26d07c]" /> 190 GSM High Stretch
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Pattern Studio Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Main Visual Display */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-[#d9d1e2] shadow-xl overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-[#ece7f2]">
                <div>
                  <span className="text-[10px] uppercase font-black tracking-widest text-[#ff6948]">
                    Selected Swing Style Pattern
                  </span>
                  <h3 className="font-display font-black text-2xl text-[#1f1b64]">
                    {selectedPattern.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5">
                  {selectedPattern.colors.map((col) => (
                    <span
                      key={col}
                      className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#f2ede6] text-[#575268]"
                    >
                      {col}
                    </span>
                  ))}
                </div>
              </div>

              {/* High-res Image Preview */}
              <div className="relative h-80 sm:h-96 my-6 flex items-center justify-center bg-gradient-to-b from-[#f8f4ee] to-[#fffaf2] rounded-2xl p-4 overflow-hidden group">
                {!imgError ? (
                  <img
                    src={selectedPattern.image}
                    alt={selectedPattern.name}
                    onError={() => setImgError(true)}
                    className="max-h-full max-w-full object-contain filter drop-shadow-xl transition-all duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-24 h-24 rounded-2xl bg-[#1f1b64] text-white flex items-center justify-center font-display font-black text-2xl shadow-lg mb-3">
                      SS
                    </div>
                    <p className="font-display font-black text-lg text-[#191633]">{selectedPattern.name}</p>
                    <p className="text-xs text-[#575268] max-w-xs mt-1">93% Micro Poly / 7% Spandex · UV50+ Tournament Polo</p>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 bg-[#1f1b64]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl">
                  {selectedPattern.fabric} · {selectedPattern.weight}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#575268] leading-relaxed">
                {selectedPattern.description}
              </p>

              {/* Features list */}
              <div className="grid grid-cols-2 gap-2 pt-4 mt-4 border-t border-[#ece7f2]">
                {selectedPattern.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-[#191633]">
                    <CheckCircle2 size={14} className="text-[#26d07c] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pattern Thumbnail Strip */}
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#575268] mb-3">
                Switch between the 7 Swing Style prints:
              </p>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2.5">
                {GOLF_PATTERNS.map((pattern) => {
                  const isCur = selectedPattern.id === pattern.id;
                  return (
                    <button
                      key={pattern.id}
                      onClick={() => handleSelectPattern(pattern)}
                      className={`relative rounded-xl p-1.5 border text-center transition-all flex flex-col items-center ${
                        isCur
                          ? 'border-[#1f1b64] bg-[#e7e2ff]/50 ring-2 ring-[#1f1b64]'
                          : 'border-[#d9d1e2] bg-white hover:border-[#8d889b]'
                      }`}
                    >
                      <div className="w-full h-14 rounded-lg overflow-hidden bg-[#f2ede6] flex items-center justify-center">
                        <img
                          src={pattern.image}
                          alt={pattern.name}
                          onError={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.3'; }}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <span className="text-[10px] font-bold text-[#191633] mt-1.5 line-clamp-1">
                        {pattern.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Tournament / Club Quote Calculator */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#d9d1e2] shadow-lg space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#26d07c] bg-[#c5efd4] px-2.5 py-0.5 rounded-full mb-1">
                Direct WhatsApp Quote
              </div>
              <h3 className="font-display font-black text-2xl text-[#1f1b64]">
                Build the Golf-Day Brief
              </h3>
              <p className="text-xs text-[#575268] mt-1">
                Customize your selected Swing Style print with team embroidery or print. Priced at direct manufacturer rates.
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="font-bold text-[#191633]">Tournament / Company Name:</label>
                <input
                  type="text"
                  placeholder="e.g. Mysuru Club Invitational / TechCorp Sports Day"
                  value={tournamentName}
                  onChange={(e) => setTournamentName(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[#d9d1e2] bg-[#fffaf2] text-sm focus:outline-none focus:border-[#1f1b64]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-[#191633]">Select Branding / Logo Placement:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Left Chest Embroidery',
                    'Right Sleeve Logo',
                    'Back Collar Monogram',
                    'Chest + Sleeve Bundle'
                  ].map((pos) => (
                    <button
                      key={pos}
                      type="button"
                      onClick={() => setLogoPosition(pos)}
                      className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                        logoPosition === pos
                          ? 'border-[#1f1b64] bg-[#e7e2ff]/50 text-[#1f1b64] font-bold'
                          : 'border-[#d9d1e2] bg-[#fffaf2] text-[#575268] hover:border-[#8d889b]'
                      }`}
                    >
                      {pos}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="font-bold text-[#191633]">Order Quantity:</label>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(10, quantity - 5))}
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
                      className="w-16 text-center font-display font-black text-sm text-[#1f1b64] py-1 border border-[#d9d1e2] rounded-lg bg-[#fffaf2] focus:outline-none focus:border-[#1f1b64]"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 5)}
                      className="w-7 h-7 rounded-lg bg-white border border-[#d9d1e2] text-[#191633] font-black text-sm flex items-center justify-center hover:bg-[#e7e2ff]"
                    >
                      +
                    </button>
                    <span className="text-xs font-bold text-[#575268] ml-1">pcs</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {[15, 30, 50, 100, 200].map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setQuantity(qty)}
                      className={`flex-1 py-1.5 rounded-lg font-bold border transition-colors ${
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

              {/* Summary Box */}
              <div className="p-4 rounded-xl bg-[#f2ede6] space-y-2 border border-[#d9d1e2]">
                <div className="flex justify-between text-xs text-[#575268]">
                  <span>Pattern:</span>
                  <span className="font-bold text-[#191633]">{selectedPattern.name}</span>
                </div>
                <div className="flex justify-between text-xs text-[#575268]">
                  <span>Fabric Spec:</span>
                  <span className="font-bold text-[#191633]">93% Micro Poly + 7% Spandex</span>
                </div>
                <div className="flex justify-between text-xs text-[#575268]">
                  <span>Pricing Source:</span>
                  <span className="font-bold text-[#0d5930]">Factory direct</span>
                </div>
                <div className="flex justify-between text-xs text-[#575268]">
                  <span>Estimated Lead Time:</span>
                  <span className="font-bold text-[#191633]">4 - 7 Days</span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={whatsappGolfUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 px-4 rounded-2xl bg-[#26d07c] hover:bg-[#20b86c] text-[#0d3f23] font-black text-sm flex items-center justify-center gap-2 shadow-md transition-transform transform active:scale-98"
              >
                <MessageCircle size={18} className="fill-[#0d3f23]" />
                <span>Send Golf Brief to Wild Collective WhatsApp</span>
              </a>

              <p className="text-[11px] text-center text-[#8d889b]">
                Wild Collective will confirm available sizes (S to 3XL), sample proof, and volume discount.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Performance Grid */}
        <div className="pt-10 border-t border-[#d9d1e2]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#ff6948]">
              Fabric Science
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-[#191633] mt-1">
              The fabric story, at a glance.
            </h3>
            <p className="text-sm text-[#575268] mt-2">
              Every Swing Style garment is milled with custom-engineered yarns to ensure durability through tournament play and commercial laundering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="bg-white rounded-2xl p-6 border border-[#d9d1e2] shadow-xs hover:border-[#1f1b64] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#c5efd4] text-[#0d5930] flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h4 className="font-display font-extrabold text-base text-[#191633] mb-1.5">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-[#575268] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
