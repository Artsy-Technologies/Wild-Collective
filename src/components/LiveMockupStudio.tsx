import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Upload, 
  Download, 
  MessageCircle, 
  RotateCw, 
  Palette, 
  Sliders, 
  RefreshCw,
  X,
  CheckCircle2,
  Copy,
  Type
} from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { MockupProduct, MockupKind, PLACEMENTS, isLightColor } from './MockupProduct';
import { WildCollectiveLogo } from './WildCollectiveLogo';

interface LiveMockupStudioProps {
  onClose?: () => void;
}

export const LiveMockupStudio: React.FC<LiveMockupStudioProps> = ({ onClose }) => {
  const [selectedProduct, setSelectedProduct] = useState<{
    id: string;
    name: string;
    kind: MockupKind;
    basePrice: string;
  }>({
    id: 'collar-polo',
    name: 'Collar Polo T-Shirt',
    kind: 'polo',
    basePrice: '₹220'
  });

  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string; filter?: string }>({
    name: 'Pure White',
    hex: '#ffffff'
  });

  const [brandingMode, setBrandingMode] = useState<'preset' | 'custom-text' | 'upload'>('preset');
  const [customText, setCustomText] = useState('ACME CORP');
  const [customSubtitle, setCustomSubtitle] = useState('EST. 2026');
  const [textStyle, setTextStyle] = useState<'crest' | 'modern' | 'badge' | 'minimal'>('crest');

  const [logoPosition, setLogoPosition] = useState<string>('left-chest');
  const [logoScale, setLogoScale] = useState<number>(70);
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);
  const [selectedPresetLogo, setSelectedPresetLogo] = useState<string>('wild-collective-official');
  const [copied, setCopied] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageWidth, setStageWidth] = useState(420);

  // Track the stage size so the artwork scales with the product on every screen
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setStageWidth(entry.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const productsList = [
    { id: 'collar-polo', name: 'Collar Polo T-Shirt', kind: 'polo' as const, basePrice: '₹220' },
    { id: 'round-neck', name: 'Round Neck T-Shirt', kind: 'tee' as const, basePrice: '₹150' },
    { id: 'hoodie', name: 'Fleece Warm Hoodie', kind: 'hoodie' as const, basePrice: '₹550' },
    { id: 'bottle', name: 'UV Insulated Bottle (750ml)', kind: 'bottle' as const, basePrice: '₹280' },
    { id: 'mug', name: 'Ceramic Desk Mug', kind: 'mug' as const, basePrice: '₹160' },
    { id: 'tote', name: 'Canvas Tote Bag', kind: 'tote' as const, basePrice: '₹75' },
  ];

  const placements = PLACEMENTS[selectedProduct.kind];
  const placement = placements.find((pl) => pl.id === logoPosition) || placements[0];
  const artworkWidth = (stageWidth * placement.maxWidth * logoScale) / 10000;
  const lightShade = isLightColor(selectedColor.hex);

  // Keep the same relative placement (small / medium / large) when switching products
  const selectProduct = (item: typeof productsList[number]) => {
    const index = Math.max(0, placements.findIndex((pl) => pl.id === placement.id));
    setSelectedProduct(item);
    setLogoPosition(PLACEMENTS[item.kind][index].id);
  };

  const colorPalettes = [
    { name: 'Pure White', hex: '#ffffff' },
    { name: 'Jet Black', hex: '#18181b' },
    { name: 'Navy Blue', hex: '#1e293b' },
    { name: 'Mustard Gold', hex: '#d97706' },
    { name: 'Forest Olive', hex: '#3f4f34' },
    { name: 'Crimson Red', hex: '#991b1b' },
    { name: 'Royal Indigo', hex: '#2f2f2f' },
  ];

  const presetLogos = [
    {
      id: 'wild-collective-official',
      name: 'Wild Collective (Official)',
      svg: (
        <div className="flex flex-col items-center justify-center p-1.5 text-center">
          <WildCollectiveLogo variant="dark" height={36} className="max-w-full" />
        </div>
      )
    },
    {
      id: 'tech-crest',
      name: 'Tech Ventures',
      svg: (
        <div className="flex flex-col items-center justify-center p-2 text-center text-[#2f2f2f]">
          <div className="w-8 h-8 rounded-lg bg-[#2f2f2f] text-white flex items-center justify-center font-black text-sm shadow-sm">
            TV
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest mt-1">TECH VENTURES</span>
        </div>
      )
    },
    {
      id: 'sports-club',
      name: 'Mysuru Club',
      svg: (
        <div className="flex flex-col items-center justify-center p-2 text-center text-[#2f2f2f]">
          <div className="w-9 h-9 rounded-full border-2 border-[#a58c6d] flex items-center justify-center font-bold text-xs">
            MC
          </div>
          <span className="text-[8px] font-black uppercase tracking-wider mt-0.5 text-[#a58c6d]">EST. 1994</span>
        </div>
      )
    },
    {
      id: 'campus-fest',
      name: 'University Fest',
      svg: (
        <div className="flex flex-col items-center justify-center p-2 text-center text-[#4d6438]">
          <span className="text-[12px] font-black tracking-tighter">INNOVA &apos;26</span>
          <span className="text-[7px] font-bold uppercase tracking-widest bg-[#e4ead9] px-1 rounded">ANNUAL SUMMIT</span>
        </div>
      )
    },
    {
      id: 'custom-text',
      name: 'Corporate Monogram',
      svg: (
        <div className="flex flex-col items-center justify-center p-2 text-center text-[#2f2f2f]">
          <div className="w-7 h-7 bg-[#d9bf94] rounded-md flex items-center justify-center font-black text-xs text-[#2f2f2f]">
            K
          </div>
          <span className="text-[9px] font-black tracking-widest mt-1">KNITTING STORY</span>
        </div>
      )
    }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomLogoUrl(event.target?.result as string);
        setBrandingMode('upload');
      };
      reader.readAsDataURL(file);
    }
    // Allow re-uploading the same file
    e.target.value = '';
  };

  const renderCustomTextEmblem = () => {
    const initials = customText.split(' ').map(w => w[0]).join('').slice(0, 3) || 'WC';
    
    if (textStyle === 'crest') {
      return (
        <div className="flex flex-col items-center justify-center p-2 text-center bg-white/95 backdrop-blur-xs rounded-xl border border-[#dddddd] shadow-md">
          <div className="w-8 h-8 rounded-full border-2 border-[#2f2f2f] flex items-center justify-center font-black text-xs text-[#2f2f2f]">
            {initials}
          </div>
          <span className="text-[9px] font-black tracking-wider uppercase text-[#2f2f2f] mt-1">{customText}</span>
          {customSubtitle && <span className="text-[7px] font-bold text-[#a58c6d] uppercase tracking-widest">{customSubtitle}</span>}
        </div>
      );
    }

    if (textStyle === 'modern') {
      return (
        <div className="flex items-center gap-2 p-2 bg-[#2f2f2f] text-white rounded-xl shadow-md border border-[#4a4a4a]">
          <div className="w-7 h-7 bg-[#d9bf94] rounded-lg text-[#2f2f2f] flex items-center justify-center font-black text-xs">
            {initials[0]}
          </div>
          <div className="text-left">
            <span className="text-[9px] font-black tracking-wide block uppercase leading-none">{customText}</span>
            {customSubtitle && <span className="text-[7px] text-[#d9bf94] tracking-widest uppercase">{customSubtitle}</span>}
          </div>
        </div>
      );
    }

    if (textStyle === 'badge') {
      return (
        <div className="flex flex-col items-center justify-center p-2.5 bg-gradient-to-r from-[#2f2f2f] to-[#a58c6d] text-white rounded-2xl shadow-md">
          <span className="text-[10px] font-black uppercase tracking-tight">{customText}</span>
          <span className="text-[7px] font-bold uppercase tracking-widest bg-white/20 px-1.5 py-0.2 rounded mt-0.5">{customSubtitle || 'AUTHENTIC'}</span>
        </div>
      );
    }

    // Minimal
    return (
      <div className="text-center p-1.5 bg-white/90 backdrop-blur-xs rounded-lg border border-[#dddddd] shadow-xs">
        <span className="text-[11px] font-black tracking-widest uppercase text-[#2f2f2f]">{customText}</span>
        {customSubtitle && <span className="block text-[7px] font-bold text-[#666666] tracking-widest">{customSubtitle}</span>}
      </div>
    );
  };

  const mockupSummary = `Product: ${selectedProduct.name}
Base Price: ${selectedProduct.basePrice}
Fabric Shade: ${selectedColor.name} (${selectedColor.hex})
Branding Position: ${placement.label}
Scale: ${logoScale}%
Emblem Type: ${brandingMode === 'custom-text' ? `Custom Text: "${customText}"` : brandingMode === 'upload' ? 'Uploaded Custom Logo' : `Preset: ${selectedPresetLogo}`}`;

  const copyMockupSpecs = () => {
    navigator.clipboard.writeText(mockupSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappStudioUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
    `Hi Wild Collective,\n\nI created a mockup in the Live Merch Studio:\n\n*Product:* ${selectedProduct.name}\n*Shade:* ${selectedColor.name}\n*Branding Position:* ${placement.label}\n*Artwork Scale:* ${logoScale}%\n*Design Type:* ${brandingMode === 'custom-text' ? `Custom Text: "${customText}" (${customSubtitle})` : brandingMode === 'upload' ? 'Custom Uploaded Artwork' : `Preset: ${selectedPresetLogo}`}\n*Base Estimate:* ${selectedProduct.basePrice}\n\nPlease share the production quote and digital artwork proof.`
  )}`;

  return (
    <section id="studio-section" className="py-12 sm:py-20 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Studio Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#dddddd]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2f2f2f] text-white text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles size={13} className="text-[#d9bf94]" />
              <span>Interactive Merch Studio · Direct factory rates</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#2f2f2f] tracking-tight">
              Test your emblem on real garments.
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] mt-1 max-w-xl">
              Preview logos, placement and shades on Wild Collective products. Dynamic real-time preview and direct quotation transmission to WhatsApp at direct factory rates.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={copyMockupSpecs}
              className="py-2 px-3.5 rounded-xl bg-white border border-[#dddddd] text-xs font-bold text-[#2f2f2f] hover:bg-[#f1ebe3] flex items-center gap-1.5 transition-colors shadow-xs"
            >
              {copied ? <CheckCircle2 size={14} className="text-[#26d07c]" /> : <Copy size={14} />}
              <span>{copied ? 'Specs Copied!' : 'Copy Specs'}</span>
            </button>

            {onClose && (
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white border border-[#dddddd] text-[#666666] hover:text-[#2f2f2f]"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Studio Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Canvas: Mockup Stage */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#dddddd] shadow-xl relative overflow-hidden flex flex-col items-center">
            
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-[#ececec] text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: selectedColor.hex }} />
                <span className="font-extrabold text-[#2f2f2f] uppercase tracking-wider">
                  {selectedProduct.name} · {selectedColor.name}
                </span>
              </div>
              <span className="bg-[#f1ebe3] text-[#2f2f2f] font-black px-2.5 py-0.5 rounded-lg">
                Base: {selectedProduct.basePrice}
              </span>
            </div>

            {/* Canvas Stage */}
            <div className="w-full my-6 flex items-center justify-center bg-gradient-to-b from-[#ffffff] to-[#f5f3ef] rounded-2xl p-4 sm:p-6 relative">
              <div ref={stageRef} className="relative w-full max-w-[440px] aspect-square">
                <MockupProduct
                  kind={selectedProduct.kind}
                  color={selectedColor.hex}
                  className="absolute inset-0 w-full h-full drop-shadow-xl select-none transition-colors duration-300"
                />

                {/* Logo Overlay, centred on the product's print area */}
                <div
                  className="absolute pointer-events-none flex items-center justify-center transition-all duration-200"
                  style={{
                    left: `${placement.x}%`,
                    top: `${placement.y}%`,
                    width: `${artworkWidth}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {brandingMode === 'upload' && customLogoUrl ? (
                    <img
                      src={customLogoUrl}
                      alt="Custom Uploaded Logo"
                      className="w-full h-auto object-contain drop-shadow-md"
                    />
                  ) : brandingMode === 'custom-text' ? (
                    <div className="shrink-0" style={{ transform: `scale(${artworkWidth / 110})` }}>
                      {renderCustomTextEmblem()}
                    </div>
                  ) : selectedPresetLogo === 'wild-collective-official' ? (
                    <img
                      src={lightShade ? '/brand/logo.png' : '/brand/logo-white.png'}
                      alt="Wild Collective Official"
                      className="w-full h-auto object-contain"
                    />
                  ) : (
                    <div className="shrink-0" style={{ transform: `scale(${artworkWidth / 110})` }}>
                      <div className="w-[110px] bg-white/90 rounded-xl shadow-md border border-[#dddddd] p-1">
                        {presetLogos.find(l => l.id === selectedPresetLogo)?.svg}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Scale / placement badge */}
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                {placement.label} · Scale: {logoScale}%
              </div>
            </div>

            {/* Canvas Actions */}
            <div className="w-full flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#ececec]">
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2 rounded-xl bg-[#f5f3ef] hover:bg-[#f1ebe3] text-[#2f2f2f] font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Upload size={14} />
                  <span>Upload Logo (PNG/SVG)</span>
                </button>

                {customLogoUrl && (
                  <button
                    onClick={() => { setCustomLogoUrl(null); setBrandingMode('preset'); }}
                    className="text-xs text-red-600 hover:underline font-bold"
                  >
                    Reset
                  </button>
                )}
              </div>

              <a
                href={whatsappStudioUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#26d07c] hover:bg-[#20b86c] text-[#0d3f23] font-black text-xs flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
              >
                <MessageCircle size={15} className="fill-[#0d3f23]" />
                <span>Order with this Mockup</span>
              </a>
            </div>

          </div>

          {/* Right Controls: Configurator */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Step 1: Select Garment / Merchandise Object */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#dddddd] shadow-xs space-y-3">
              <label className="text-xs font-black uppercase tracking-wider text-[#666666]">
                1. Select Product Model
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {productsList.map((item) => {
                  const isSelected = selectedProduct.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => selectProduct(item)}
                      className={`p-2 rounded-xl border text-left transition-all flex flex-col items-center ${
                        isSelected
                          ? 'border-[#2f2f2f] bg-[#f1ebe3]/50 ring-1 ring-[#2f2f2f]'
                          : 'border-[#dddddd] bg-[#ffffff] hover:bg-[#f5f3ef]'
                      }`}
                    >
                      <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                        <MockupProduct kind={item.kind} color={selectedColor.hex} className="w-full h-full" />
                      </div>
                      <span className="text-[11px] font-bold text-[#2f2f2f] text-center mt-1 line-clamp-1">
                        {item.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Product Color */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#dddddd] shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-black uppercase tracking-wider text-[#666666]">
                  2. Choose Base Fabric Shade
                </label>
                <span className="text-xs font-bold text-[#2f2f2f]">{selectedColor.name}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {colorPalettes.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c)}
                    className={`w-9 h-9 rounded-xl border transition-transform ${
                      selectedColor.name === c.name
                        ? 'ring-2 ring-[#2f2f2f] scale-110'
                        : 'hover:scale-105 border-[#dddddd]'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Step 3: Emblem / Logo Mode Selector */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#dddddd] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-black uppercase tracking-wider text-[#666666]">
                  3. Emblem & Artwork Style
                </label>
                <div className="flex items-center gap-1 bg-[#f5f3ef] p-0.5 rounded-lg text-[10px] font-bold">
                  <button
                    onClick={() => setBrandingMode('preset')}
                    className={`px-2 py-1 rounded-md transition-colors ${brandingMode === 'preset' ? 'bg-[#2f2f2f] text-white' : 'text-[#666666]'}`}
                  >
                    Presets
                  </button>
                  <button
                    onClick={() => setBrandingMode('custom-text')}
                    className={`px-2 py-1 rounded-md transition-colors ${brandingMode === 'custom-text' ? 'bg-[#2f2f2f] text-white' : 'text-[#666666]'}`}
                  >
                    Custom Text
                  </button>
                  {customLogoUrl && (
                    <button
                      onClick={() => setBrandingMode('upload')}
                      className={`px-2 py-1 rounded-md transition-colors ${brandingMode === 'upload' ? 'bg-[#2f2f2f] text-white' : 'text-[#666666]'}`}
                    >
                      Your Logo
                    </button>
                  )}
                </div>
              </div>

              {/* Custom Text Mode */}
              {brandingMode === 'custom-text' && (
                <div className="space-y-3 bg-[#ffffff] p-3.5 rounded-2xl border border-[#dddddd]">
                  <div>
                    <label className="text-[11px] font-bold text-[#666666] block mb-1">Company / Team Name:</label>
                    <input
                      type="text"
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      placeholder="e.g. INFOSYS TECH"
                      className="w-full text-xs p-2 rounded-lg border border-[#dddddd] bg-white font-bold text-[#2f2f2f] focus:outline-none focus:border-[#2f2f2f]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-[#666666] block mb-1">Tagline / Year (optional):</label>
                    <input
                      type="text"
                      value={customSubtitle}
                      onChange={(e) => setCustomSubtitle(e.target.value)}
                      placeholder="e.g. MYSURU · 2026"
                      className="w-full text-xs p-2 rounded-lg border border-[#dddddd] bg-white font-medium text-[#2f2f2f] focus:outline-none focus:border-[#2f2f2f]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-[#666666] block mb-1.5">Emblem Badge Layout:</label>
                    <div className="grid grid-cols-4 gap-1.5 text-[10px] font-bold">
                      {(['crest', 'modern', 'badge', 'minimal'] as const).map((style) => (
                        <button
                          key={style}
                          onClick={() => setTextStyle(style)}
                          className={`py-1.5 px-2 rounded-lg border capitalize ${
                            textStyle === style ? 'bg-[#2f2f2f] text-white border-[#2f2f2f]' : 'bg-white text-[#666666] border-[#dddddd]'
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Preset Logos Mode */}
              {brandingMode === 'preset' && (
                <div className="grid grid-cols-2 gap-2">
                  {presetLogos.map((pl) => (
                    <button
                      key={pl.id}
                      onClick={() => { setSelectedPresetLogo(pl.id); setBrandingMode('preset'); }}
                      className={`p-2 rounded-xl border text-xs font-medium text-left transition-colors ${
                        selectedPresetLogo === pl.id && brandingMode === 'preset'
                          ? 'border-[#2f2f2f] bg-[#f1ebe3]/50 text-[#2f2f2f] font-bold ring-1 ring-[#2f2f2f]'
                          : 'border-[#dddddd] bg-[#ffffff] text-[#666666] hover:bg-[#f5f3ef]'
                      }`}
                    >
                      {pl.name}
                    </button>
                  ))}
                </div>
              )}

              {/* Placement & Scale */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#666666] block mb-2">
                  Position & Size
                </label>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {placements.map((pos) => (
                    <button
                      key={pos.id}
                      onClick={() => setLogoPosition(pos.id)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border transition-colors ${
                        placement.id === pos.id
                          ? 'bg-[#2f2f2f] text-white border-[#2f2f2f]'
                          : 'bg-[#ffffff] text-[#666666] border-[#dddddd] hover:bg-[#f5f3ef]'
                      }`}
                    >
                      {pos.label}
                    </button>
                  ))}
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-[#666666]">
                    <span>Artwork Scale:</span>
                    <span>{logoScale}%</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="100"
                    value={logoScale}
                    onChange={(e) => setLogoScale(Number(e.target.value))}
                    className="w-full accent-[#2f2f2f] cursor-pointer"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

