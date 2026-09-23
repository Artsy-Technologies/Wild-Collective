import React, { useState } from 'react';

interface ProductVisualProps {
  productId: string;
  category?: string;
  title?: string;
  className?: string;
  badge?: string;
  colorHex?: string;
  image?: string;
  forceSvg?: boolean;
}

const ORIGINAL_PRODUCT_IMAGES: Record<string, string> = {
  'round-neck-tshirt': '/products/round-neck-tshirt-yellow-front.webp',
  'collar-tshirt': '/products/collar-tshirt-front.webp',
  'sweat-shirts': '/products/sweat-shirts-front.png',
  'hoodies': '/products/hoodie-front.webp',
  'pants': '/products/pants-navy-lifestyle.webp',
  'jacket': '/products/jacket-olive.png',
  'smart-caps': '/products/smart-cap-black-front.webp',
  'flexible-caps': '/products/flexible-cap-red-front.webp',
  'foldable-caps': '/products/foldable-cap-navy-angle.webp',
  'button-fridge-magnet': '/products/button-fridge-magnet.webp',
  'leather-magnet': '/products/leather-magnet.png',
  'acrylic-fridge-magnet': '/products/acrylic-fridge-magnet.webp',
  'satin-keychain': '/products/satin-keychain-lanyards.webp',
  'wooden-keychain': '/products/wooden-keychain.png',
  'leather-keychain': '/products/leather-keychain.png',
  'button-keychain': '/products/button-keychain.png',
  'acrylic-keychain': '/products/acrylic-keychain.png',
  'mementoes': '/products/mementoes-elephant-display.webp',
  'mug': '/products/mug.webp',
  'uv-bottle-500ml': '/products/uv-bottle-white-pair.png',
  'uv-bottle-750ml': '/products/corporate-gift-black-bottle.png',
  'uv-bottle-1-litre': '/products/bottle.png',
  'diary': '/products/diary.webp',
  'metal-pen': '/products/metal-pen.webp',
  'uv-stickers': '/products/uv-stickers-custom-colour.webp',
  'bookmark': '/products/bookmark-collection.png',
  'leather-wrist-band': '/products/leather-wrist-band.png',
  'paper-wrist-band': '/products/paper-wrist-band.png',
  'fabric-wrist-band': '/products/fabric-wrist-band.png',
  'button-badge': '/products/button-badge.webp',
  'sticker-a5-custom-cut': '/products/custom-cut-stickers.png',
  'lanyard-tag': '/products/lanyard-tag.png',
  'miss-india-sachet': '/products/miss-india-sachet.webp',
  'tote-bag': '/products/tote-bag.webp',
  'jute-bag': '/products/jute-bag-structured.png',
  'jute-pouch': '/products/jute-pouches-colours.png',
  'backpack': '/products/backpack.webp',
  'laptop-bag': '/products/laptop-bag-black.png',
  'trolley': '/products/trolley.png',
  'custom-flags': '/products/custom-flags-new.png',
  'umbrella': '/products/umbrella-black.png',
  'mysuru-shalya': '/products/mysuru-shalya.png',
  'executive-welcome-kit': '/products/corporate-gift-black-bottle.png'
};

export const ProductVisual: React.FC<ProductVisualProps> = ({
  productId,
  category,
  title,
  className = "w-full h-full",
  badge,
  colorHex,
  image,
  forceSvg = false
}) => {
  // Interactive color picker for multi-variant products
  const [activeColor, setActiveColor] = useState<string>('default');
  const [imageError, setImageError] = useState<boolean>(false);

  // Use authentic original photograph when available
  const resolvedImage = !forceSvg && !imageError ? (image || ORIGINAL_PRODUCT_IMAGES[productId]) : null;

  if (resolvedImage) {
    return (
      <div className={`relative flex items-center justify-center p-2 select-none ${className}`}>
        <img
          src={resolvedImage}
          alt={title || productId}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <span className="absolute bottom-1 right-2 text-[9px] font-bold text-[#8d889b] bg-white/80 px-1.5 py-0.5 rounded backdrop-blur-xs">
            {badge}
          </span>
        )}
      </div>
    );
  }

  // Canvas Tote Bag (bags.png)
  if (productId.includes('tote-bag') || productId === 'tote') {
    return (
      <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
        <svg viewBox="0 0 400 480" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="toteBg" x1="200" y1="0" x2="200" y2="480" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f5f0e6" />
              <stop offset="1" stopColor="#e3d8c8" />
            </linearGradient>
            <linearGradient id="strapGrad" x1="120" y1="30" x2="280" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#eae3d3" />
              <stop offset="0.5" stopColor="#f7f3eb" />
              <stop offset="1" stopColor="#ded3c0" />
            </linearGradient>
            <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#191633" floodOpacity="0.12" />
            </filter>
            <pattern id="canvasWeave" width="4" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#f7f3ea" />
              <path d="M0 2h4M2 0v4" stroke="#e8dfce" strokeWidth="0.6" strokeOpacity="0.7" />
            </pattern>
          </defs>

          {/* Long shoulder strap loop */}
          <path
            d="M135 180 C 135 60, 160 25, 200 25 C 240 25, 265 60, 265 180"
            stroke="url(#strapGrad)"
            strokeWidth="28"
            strokeLinecap="round"
            fill="none"
            filter="url(#softShadow)"
          />
          {/* Inner strap crease */}
          <path
            d="M142 175 C 142 65, 165 32, 200 32 C 235 32, 258 65, 258 175"
            stroke="#cfc3af"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            fill="none"
          />

          {/* Main Tote Body */}
          <g filter="url(#softShadow)">
            <path
              d="M100 170 C 120 190, 150 200, 200 200 C 250 200, 280 190, 300 170 L 308 395 C 308 435, 280 445, 200 445 C 120 445, 92 435, 92 395 Z"
              fill="url(#canvasWeave)"
            />
            <path
              d="M100 170 C 120 190, 150 200, 200 200 C 250 200, 280 190, 300 170 L 308 395 C 308 435, 280 445, 200 445 C 120 445, 92 435, 92 395 Z"
              fill="url(#toteBg)"
              opacity="0.4"
            />
          </g>

          {/* Stitching details & side drapes */}
          <path
            d="M104 180 L 96 395 C 96 428, 122 438, 200 438 C 278 438, 304 428, 304 395 L 296 180"
            stroke="#b8aa94"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            fill="none"
          />
          {/* Soft fabric drape shadows */}
          <path d="M140 210 Q 155 320 160 425" stroke="#ded3be" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
          <path d="M260 210 Q 245 320 240 425" stroke="#c4b69f" strokeWidth="3" opacity="0.5" strokeLinecap="round" />
          <path d="M190 205 Q 195 300 190 435" stroke="#dfd4c2" strokeWidth="2" opacity="0.4" strokeLinecap="round" />

          {/* Minimal Wild Collective branding imprint preview */}
          <circle cx="200" cy="290" r="14" fill="#1f1b64" fillOpacity="0.08" />
          <text x="200" y="294" textAnchor="middle" fill="#1f1b64" fillOpacity="0.4" fontSize="10" fontFamily="sans-serif" fontWeight="800">
            W
          </text>
        </svg>
        <span className="absolute bottom-1 right-2 text-[9px] font-bold text-[#8d889b] bg-white/80 px-1.5 py-0.5 rounded backdrop-blur-xs">
          100% Cotton Canvas
        </span>
      </div>
    );
  }

  // Structured Jute Bag (jute bags.png)
  if (productId.includes('jute-bag') || productId.includes('jute-pouch')) {
    return (
      <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
        <svg viewBox="0 0 400 450" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="juteBody" x1="100" y1="130" x2="300" y2="410" gradientUnits="userSpaceOnUse">
              <stop stopColor="#dfbd8a" />
              <stop offset="0.5" stopColor="#d1a96e" />
              <stop offset="1" stopColor="#b88c4d" />
            </linearGradient>
            <pattern id="juteMesh" width="6" height="6" patternUnits="userSpaceOnUse">
              <rect width="6" height="6" fill="#cca364" />
              <rect x="0" y="0" width="3" height="3" fill="#e0bf87" />
              <rect x="3" y="3" width="3" height="3" fill="#ba8d4c" />
              <path d="M0 3h6M3 0v6" stroke="#a37637" strokeWidth="0.8" opacity="0.5" />
            </pattern>
            <filter id="juteShadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#3b2408" floodOpacity="0.18" />
            </filter>
          </defs>

          {/* Left Padded Tubular Jute Handle */}
          <path
            d="M140 180 C 140 70, 260 70, 260 180"
            stroke="#b88b48"
            strokeWidth="20"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M140 180 C 140 70, 260 70, 260 180"
            stroke="#ecd09e"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />

          {/* Bag Gusset depth (3D angle) */}
          <path
            d="M75 160 L 95 140 L 95 380 L 75 400 Z"
            fill="#a67936"
            stroke="#875f24"
            strokeWidth="1.5"
          />

          {/* Main Jute Bag Front */}
          <g filter="url(#juteShadow)">
            <rect x="95" y="140" width="230" height="240" rx="6" fill="url(#juteMesh)" stroke="#875f24" strokeWidth="3" />
            <rect x="95" y="140" width="230" height="240" rx="6" fill="url(#juteBody)" opacity="0.4" />
          </g>

          {/* Handle Root Patches */}
          <rect x="130" y="140" width="20" height="35" rx="3" fill="#a47533" stroke="#e0bf87" strokeWidth="1" strokeDasharray="3 2" />
          <rect x="250" y="140" width="20" height="35" rx="3" fill="#a47533" stroke="#e0bf87" strokeWidth="1" strokeDasharray="3 2" />

          {/* Edge Piping trim */}
          <rect x="98" y="143" width="224" height="234" rx="4" fill="none" stroke="#e6ca98" strokeWidth="3" strokeDasharray="5 3" />
        </svg>
        <span className="absolute bottom-1 right-2 text-[9px] font-bold text-[#734c16] bg-[#f8ede0] px-1.5 py-0.5 rounded border border-[#dfbd8a]">
          Eco Hessian Jute
        </span>
      </div>
    );
  }

  // Insulated Stainless Steel Bottles (bottles.png)
  if (productId.includes('uv-bottle') || productId === 'bottles') {
    const bottleColors = [
      { name: 'white', fill: '#f8fafc', cap: '#cbd5e1', accent: '#e2e8f0', label: 'White' },
      { name: 'steel', fill: '#cbd5e1', cap: '#94a3b8', accent: '#f1f5f9', label: 'Silver Steel' },
      { name: 'sage', fill: '#86a896', cap: '#577866', accent: '#b4cfc1', label: 'Sage Green' },
      { name: 'red', fill: '#dc2626', cap: '#991b1b', accent: '#ef4444', label: 'Ruby Red' },
      { name: 'black', fill: '#1e293b', cap: '#0f172a', accent: '#334155', label: 'Matte Black' },
      { name: 'navy', fill: '#1e3a8a', cap: '#172554', accent: '#2563eb', label: 'Deep Navy' },
      { name: 'yellow', fill: '#eab308', cap: '#ca8a04', accent: '#fde047', label: 'Canary Yellow' }
    ];

    const current = bottleColors.find(c => c.name === activeColor) || bottleColors[4]; // Default matte black or colored

    return (
      <div className={`relative flex flex-col items-center justify-center p-2 select-none ${className}`}>
        <svg viewBox="0 0 320 460" className="w-full h-full max-h-52 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bodyShine" x1="120" y1="120" x2="200" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="0.3" stopColor="white" stopOpacity="0" />
              <stop offset="0.8" stopColor="black" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="capGrad" x1="130" y1="30" x2="190" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e2e8f0" />
              <stop offset="0.3" stopColor="#ffffff" />
              <stop offset="0.7" stopColor="#94a3b8" />
              <stop offset="1" stopColor="#64748b" />
            </linearGradient>
          </defs>

          {/* Stainless Steel Cap */}
          <rect x="135" y="45" width="50" height="35" rx="5" fill="url(#capGrad)" stroke="#64748b" strokeWidth="1" />
          <rect x="133" y="76" width="54" height="6" rx="2" fill="#0f172a" />

          {/* Bottle Neck / Collar */}
          <path d="M142 82 L 140 120 Q 140 145 125 155 L 125 410 Q 125 425 140 425 L 180 425 Q 195 425 195 410 L 195 155 Q 180 145 180 120 L 178 82 Z" fill={current.fill} />
          {/* 3D Cylindrical Shader */}
          <path d="M142 82 L 140 120 Q 140 145 125 155 L 125 410 Q 125 425 140 425 L 180 425 Q 195 425 195 410 L 195 155 Q 180 145 180 120 L 178 82 Z" fill="url(#bodyShine)" />

          {/* Specular vertical reflection stripe */}
          <line x1="145" y1="130" x2="145" y2="400" stroke="white" strokeWidth="6" strokeLinecap="round" opacity="0.35" />
          <line x1="140" y1="50" x2="140" y2="75" stroke="white" strokeWidth="3" opacity="0.6" />

          {/* Subtle Wild Collective logo laser imprint */}
          <circle cx="160" cy="270" r="12" fill={current.accent} fillOpacity="0.4" />
          <text x="160" y="274" textAnchor="middle" fill={current.fill === '#f8fafc' ? '#1f1b64' : '#ffffff'} fontSize="9" fontWeight="800">
            W
          </text>
        </svg>

        {/* Color Switcher Pills */}
        <div className="flex items-center gap-1.5 mt-2 bg-white/90 backdrop-blur-xs px-2 py-1 rounded-full border border-[#d9d1e2] shadow-xs">
          {bottleColors.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveColor(c.name);
              }}
              title={c.label}
              className={`w-3.5 h-3.5 rounded-full border transition-transform ${
                activeColor === c.name || (activeColor === 'default' && c.name === 'black')
                  ? 'scale-125 border-[#1f1b64] ring-1 ring-[#1f1b64]'
                  : 'border-black/20 hover:scale-110'
              }`}
              style={{ backgroundColor: c.fill }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Tipped Collar Polo T-Shirt (tshirt collar.png)
  if (productId.includes('collar')) {
    const poloBodyFill = colorHex || "url(#poloBeige)";
    return (
      <div className={`relative flex items-center justify-center p-2 select-none ${className}`}>
        <svg viewBox="0 0 400 480" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="poloBeige" x1="200" y1="50" x2="200" y2="460" gradientUnits="userSpaceOnUse">
              <stop stopColor="#dfcfb6" />
              <stop offset="0.5" stopColor="#d3be9e" />
              <stop offset="1" stopColor="#c2ab87" />
            </linearGradient>
            <filter id="poloShadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#3a270f" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* Polo Torso & Sleeves */}
          <g filter="url(#poloShadow)">
            <path
              d="M130 90 L 45 170 L 85 210 L 115 175 L 115 440 L 285 440 L 285 175 L 315 210 L 355 170 L 270 90 Z"
              fill={poloBodyFill}
            />
          </g>

          {/* Sleeve Cuffs with Brown Tipping */}
          {/* Left Cuff */}
          <path d="M47 168 L 83 208" stroke="#4a3014" strokeWidth="5" />
          <path d="M51 164 L 87 204" stroke="#dfcfb6" strokeWidth="2" />
          <path d="M54 161 L 90 201" stroke="#4a3014" strokeWidth="4" />

          {/* Right Cuff */}
          <path d="M353 168 L 317 208" stroke="#4a3014" strokeWidth="5" />
          <path d="M349 164 L 313 204" stroke="#dfcfb6" strokeWidth="2" />
          <path d="M346 161 L 310 201" stroke="#4a3014" strokeWidth="4" />

          {/* 3-Button Center Placket */}
          <rect x="186" y="105" width="28" height="110" fill="#ccb694" stroke="#4a3014" strokeWidth="0.8" rx="2" />
          <circle cx="200" cy="125" r="3.5" fill="#f5eee3" stroke="#4a3014" strokeWidth="1" />
          <circle cx="200" cy="155" r="3.5" fill="#f5eee3" stroke="#4a3014" strokeWidth="1" />
          <circle cx="200" cy="185" r="3.5" fill="#f5eee3" stroke="#4a3014" strokeWidth="1" />

          {/* Ribbed Collar with Dual Tipping Stripes (Brown) */}
          <path
            d="M140 85 C 160 120, 185 130, 200 130 C 215 130, 240 120, 260 85 L 235 150 L 165 150 Z"
            fill="#d3be9e"
          />
          {/* Left Collar Leaf */}
          <path
            d="M140 85 L 180 155 L 200 150 L 180 95 Z"
            fill="#e1d1b8"
            stroke="#4a3014"
            strokeWidth="1.2"
          />
          <path d="M143 89 L 181 152" stroke="#4a3014" strokeWidth="3.5" />
          <path d="M147 94 L 183 148" stroke="#4a3014" strokeWidth="2" />

          {/* Right Collar Leaf */}
          <path
            d="M260 85 L 220 155 L 200 150 L 220 95 Z"
            fill="#cfb998"
            stroke="#4a3014"
            strokeWidth="1.2"
          />
          <path d="M257 89 L 219 152" stroke="#4a3014" strokeWidth="3.5" />
          <path d="M253 94 L 217 148" stroke="#4a3014" strokeWidth="2" />

          {/* Bottom Hem */}
          <line x1="115" y1="428" x2="285" y2="428" stroke="#b0966f" strokeWidth="1.5" strokeDasharray="4 2" />
        </svg>
        <span className="absolute bottom-1 right-2 text-[9px] font-bold text-[#4a3014] bg-[#ebdcc7] px-1.5 py-0.5 rounded border border-[#c2ab87]">
          Tipped Ribbed Polo
        </span>
      </div>
    );
  }

  // Camouflage Sports Cap (caps.png)
  if (productId.includes('cap')) {
    return (
      <div className={`relative flex items-center justify-center p-2 select-none ${className}`}>
        <svg viewBox="0 0 400 360" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="camoPattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="#758252" />
              {/* Dark Green blotches */}
              <path d="M10 20 Q 35 5 50 30 T 90 20 Q 80 60 55 50 T 20 70 Z" fill="#3b482b" />
              {/* Tan Khaki blotches */}
              <path d="M50 60 Q 80 45 95 70 T 70 95 Q 40 85 30 100 T 50 60 Z" fill="#9d926b" />
              {/* Dark Brown blotches */}
              <path d="M0 0 Q 20 30 10 50 T 0 80 Z" fill="#443224" />
              <path d="M70 0 Q 85 20 100 10 Z" fill="#443224" />
            </pattern>
            <filter id="capShadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#1a1c14" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* 6-Panel Crown */}
          <g filter="url(#capShadow)">
            <path
              d="M75 220 C 75 110, 160 55, 200 55 C 240 55, 325 110, 325 220 Z"
              fill="url(#camoPattern)"
              stroke="#2e3820"
              strokeWidth="2"
            />
          </g>

          {/* Panel Seams */}
          <path d="M200 55 Q 165 140 145 220" stroke="#2a331c" strokeWidth="2" strokeDasharray="3 2" />
          <path d="M200 55 Q 235 140 255 220" stroke="#2a331c" strokeWidth="2" strokeDasharray="3 2" />

          {/* Stitched Eyelets */}
          <circle cx="160" cy="130" r="4" fill="#3a452a" stroke="#252d19" strokeWidth="1.5" />
          <circle cx="240" cy="130" r="4" fill="#3a452a" stroke="#252d19" strokeWidth="1.5" />

          {/* Curved Visor / Brim */}
          <path
            d="M70 215 C 80 255, 140 290, 200 290 C 260 290, 320 255, 330 215 C 275 235, 125 235, 70 215 Z"
            fill="url(#camoPattern)"
            stroke="#2e3820"
            strokeWidth="2"
          />
          {/* Visor Stitching Rows */}
          <path d="M85 230 C 130 255, 270 255, 315 230" stroke="#2a331c" strokeWidth="1.5" strokeDasharray="4 2" />
          <path d="M100 245 C 140 270, 260 270, 300 245" stroke="#2a331c" strokeWidth="1.5" strokeDasharray="4 2" />

          {/* Top Button */}
          <circle cx="200" cy="55" r="9" fill="#443224" stroke="#2a331c" strokeWidth="1.5" />
        </svg>
        <span className="absolute bottom-1 right-2 text-[9px] font-bold text-[#354323] bg-[#e4e9d5] px-1.5 py-0.5 rounded border border-[#9d926b]">
          6-Panel Camo Cap
        </span>
      </div>
    );
  }

  // Two-Tone Ceramic Mug (mugs.png)
  if (productId === 'mug' || productId.includes('mug')) {
    const mugColors = [
      { name: 'yellow', inner: '#facc15', label: 'Yellow Inner' },
      { name: 'blue', inner: '#0284c7', label: 'Sky Blue Inner' },
      { name: 'green', inner: '#22c55e', label: 'Lime Green Inner' },
      { name: 'red', inner: '#e11d48', label: 'Ruby Red Inner' },
      { name: 'black', inner: '#1e293b', label: 'Matte Black Inner' },
      { name: 'navy', inner: '#1e3a8a', label: 'Navy Inner' }
    ];

    const current = mugColors.find(c => c.name === activeColor) || mugColors[0];

    return (
      <div className={`relative flex flex-col items-center justify-center p-2 select-none ${className}`}>
        <svg viewBox="0 0 400 360" className="w-full h-full max-h-52 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mugGlaze" x1="100" y1="120" x2="280" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="0.2" stopColor="#f8fafc" />
              <stop offset="0.8" stopColor="#e2e8f0" />
              <stop offset="1" stopColor="#cbd5e1" />
            </linearGradient>
            <filter id="mugShadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#1e293b" floodOpacity="0.14" />
            </filter>
          </defs>

          {/* Big Colored C-Handle */}
          <path
            d="M260 120 C 350 120, 360 260, 260 260"
            stroke={current.inner}
            strokeWidth="32"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M260 120 C 350 120, 360 260, 260 260"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.4"
            fill="none"
          />

          {/* Mug Body */}
          <g filter="url(#mugShadow)">
            <path
              d="M110 90 L 110 280 C 110 305, 140 315, 195 315 C 250 315, 280 305, 280 280 L 280 90 Z"
              fill="url(#mugGlaze)"
              stroke="#cbd5e1"
              strokeWidth="2"
            />
          </g>

          {/* Colorful Glazed Interior Rim */}
          <ellipse cx="195" cy="90" rx="85" ry="24" fill={current.inner} stroke="#0f172a" strokeWidth="0.5" strokeOpacity="0.2" />
          {/* Inner liquid depth reflection */}
          <ellipse cx="195" cy="95" rx="72" ry="18" fill="#ffffff" fillOpacity="0.18" />

          {/* Glossy specular highlight reflection */}
          <path d="M128 115 L 128 275" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
          <path d="M142 120 L 142 270" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />

          {/* Wild Collective Brand Badge on Mug */}
          <circle cx="200" cy="200" r="20" fill="#1f1b64" fillOpacity="0.06" />
          <text x="200" y="205" textAnchor="middle" fill="#1f1b64" fontSize="12" fontWeight="900">
            WC
          </text>
        </svg>

        {/* Color Switcher */}
        <div className="flex items-center gap-1.5 mt-2 bg-white/90 backdrop-blur-xs px-2 py-1 rounded-full border border-[#d9d1e2] shadow-xs">
          {mugColors.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveColor(c.name);
              }}
              title={c.label}
              className={`w-3.5 h-3.5 rounded-full border transition-transform ${
                activeColor === c.name || (activeColor === 'default' && c.name === 'yellow')
                  ? 'scale-125 border-[#1f1b64] ring-1 ring-[#1f1b64]'
                  : 'border-black/20 hover:scale-110'
              }`}
              style={{ backgroundColor: c.inner }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Executive Hardcover Diary (dairy.png)
  if (productId.includes('diary')) {
    return (
      <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
        <svg viewBox="0 0 360 460" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="leatherCover" x1="60" y1="50" x2="300" y2="420" gradientUnits="userSpaceOnUse">
              <stop stopColor="#282a30" />
              <stop offset="0.6" stopColor="#181a1f" />
              <stop offset="1" stopColor="#0f1114" />
            </linearGradient>
            <filter id="diaryShadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#000000" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Hardbound Cover */}
          <g filter="url(#diaryShadow)">
            <rect x="70" y="50" width="220" height="340" rx="14" fill="url(#leatherCover)" stroke="#383c45" strokeWidth="1.5" />
          </g>

          {/* Spine Groove indentation */}
          <line x1="90" y1="50" x2="90" y2="390" stroke="#0a0b0d" strokeWidth="3" />
          <line x1="92" y1="50" x2="92" y2="390" stroke="#40444d" strokeWidth="1" opacity="0.4" />

          {/* Black Elastic Band Closure */}
          <rect x="250" y="50" width="16" height="340" fill="#141518" stroke="#333740" strokeWidth="0.8" />
          <line x1="254" y1="50" x2="254" y2="390" stroke="#252830" strokeWidth="1" />
          <line x1="262" y1="50" x2="262" y2="390" stroke="#252830" strokeWidth="1" />

          {/* Subtle Debossed Frame Border */}
          <rect x="105" y="70" width="130" height="300" rx="6" fill="none" stroke="#22242a" strokeWidth="1.5" />

          {/* Subtle gold foil brand emblem */}
          <circle cx="170" cy="180" r="16" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeOpacity="0.7" />
          <text x="170" y="184" textAnchor="middle" fill="#d4af37" fillOpacity="0.8" fontSize="10" fontWeight="700">
            WC
          </text>
          <text x="170" y="210" textAnchor="middle" fill="#d4af37" fillOpacity="0.6" fontSize="8" fontWeight="600" letterSpacing="1.5">
            2026 JOURNAL
          </text>
        </svg>
        <span className="absolute bottom-1 right-2 text-[9px] font-bold text-slate-300 bg-black/70 px-1.5 py-0.5 rounded backdrop-blur-xs">
          Executive Hardbound
        </span>
      </div>
    );
  }

  // Executive Metal Pen (ChatGPT Image Sep 9, 2026, 01_17_24 PM.png)
  if (productId.includes('pen')) {
    return (
      <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
        <svg viewBox="0 0 460 220" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="chromeShine" x1="0" y1="80" x2="0" y2="130" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="0.3" stopColor="#e2e8f0" />
              <stop offset="0.6" stopColor="#94a3b8" />
              <stop offset="1" stopColor="#475569" />
            </linearGradient>
            <linearGradient id="blackLacquer" x1="0" y1="80" x2="0" y2="130" gradientUnits="userSpaceOnUse">
              <stop stopColor="#334155" />
              <stop offset="0.2" stopColor="#0f172a" />
              <stop offset="0.8" stopColor="#020617" />
              <stop offset="1" stopColor="#1e293b" />
            </linearGradient>
          </defs>

          {/* Pen Silhouette */}
          {/* Conical Chrome Tip */}
          <path d="M40 105 L 85 92 L 85 118 Z" fill="url(#chromeShine)" stroke="#475569" strokeWidth="0.8" />
          <circle cx="38" cy="105" r="2.5" fill="#1e293b" />

          {/* Lower Barrel (Black Lacquer) */}
          <rect x="85" y="93" width="125" height="24" fill="url(#blackLacquer)" stroke="#334155" strokeWidth="0.6" />
          <line x1="88" y1="97" x2="208" y2="97" stroke="white" strokeWidth="1.5" opacity="0.4" />

          {/* Double Chrome Center Rings */}
          <rect x="210" y="92" width="6" height="26" rx="1" fill="url(#chromeShine)" />
          <rect x="218" y="92" width="6" height="26" rx="1" fill="url(#chromeShine)" />

          {/* Upper Barrel (Black Lacquer) */}
          <rect x="224" y="93" width="135" height="24" rx="1" fill="url(#blackLacquer)" stroke="#334155" strokeWidth="0.6" />
          <line x1="226" y1="97" x2="355" y2="97" stroke="white" strokeWidth="1.5" opacity="0.4" />

          {/* Polished Chrome Arched Pocket Clip */}
          <path
            d="M345 88 L 260 88 C 248 88, 248 95, 255 96 L 345 94 Z"
            fill="url(#chromeShine)"
            stroke="#475569"
            strokeWidth="0.8"
          />
          <circle cx="255" cy="94" r="3.5" fill="url(#chromeShine)" />

          {/* Chrome Finial / End Cap */}
          <path d="M359 93 L 375 94 C 378 94, 380 97, 380 105 C 380 113, 378 116, 375 116 L 359 117 Z" fill="url(#chromeShine)" />
        </svg>
        <span className="absolute bottom-1 right-2 text-[9px] font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-300">
          Heavy Metal · Laser Engraved
        </span>
      </div>
    );
  }

  // Pin Button Badge (ChatGPT Image Sep 9, 2026, 01_29_52 PM.png)
  if (productId.includes('badge')) {
    return (
      <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
        <svg viewBox="0 0 400 360" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="badgeShadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0f172a" floodOpacity="0.2" />
            </filter>
            <linearGradient id="domeGleam" x1="180" y1="70" x2="300" y2="250" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.8" />
              <stop offset="0.4" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Back Pin Base View (Left) */}
          <circle cx="160" cy="180" r="95" fill="#181a1f" stroke="#333742" strokeWidth="3" filter="url(#badgeShadow)" />
          <circle cx="160" cy="180" r="82" fill="#121317" />
          {/* Metal Safety Pin mechanism */}
          <path d="M120 180 L 200 180" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
          <circle cx="120" cy="180" r="7" fill="none" stroke="#94a3b8" strokeWidth="3" />
          <rect x="195" y="174" width="10" height="12" rx="2" fill="#64748b" />

          {/* Front Glossy Printable View (Right, overlapping) */}
          <g filter="url(#badgeShadow)">
            <circle cx="245" cy="180" r="95" fill="#ffffff" stroke="#e2e8f0" strokeWidth="3" />
            <circle cx="245" cy="180" r="95" fill="url(#domeGleam)" />
          </g>

          {/* High-def badge branding */}
          <circle cx="245" cy="180" r="45" fill="#1f1b64" />
          <text x="245" y="176" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800">
            WILD
          </text>
          <text x="245" y="192" textAnchor="middle" fill="#ffd84d" fontSize="9" fontWeight="800">
            COLLECTIVE
          </text>
        </svg>
        <span className="absolute bottom-1 right-2 text-[9px] font-bold text-[#1f1b64] bg-[#e7e2ff] px-1.5 py-0.5 rounded">
          Glossy Button Badge
        </span>
      </div>
    );
  }

  // Sleeveless Utility Vest / Jacket (jacket.png)
  if (productId.includes('jacket')) {
    return (
      <div className={`relative flex items-center justify-center p-2 select-none ${className}`}>
        <svg viewBox="0 0 400 480" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="vestOlive" x1="120" y1="50" x2="280" y2="440" gradientUnits="userSpaceOnUse">
              <stop stopColor="#626b4d" />
              <stop offset="0.5" stopColor="#535c3e" />
              <stop offset="1" stopColor="#434b32" />
            </linearGradient>
            <filter id="vestShadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#1e2414" floodOpacity="0.22" />
            </filter>
          </defs>

          {/* Vest Silhouette (Sleeveless Armholes) */}
          <g filter="url(#vestShadow)">
            <path
              d="M145 80 L 105 130 C 120 180, 115 220, 95 240 L 95 440 L 305 440 L 305 240 C 285 220, 280 180, 295 130 L 255 80 Z"
              fill="url(#vestOlive)"
              stroke="#343b26"
              strokeWidth="2"
            />
          </g>

          {/* Stand-up Mandarin Collar */}
          <path d="M145 80 C 170 95, 230 95, 255 80 L 260 55 C 230 68, 170 68, 140 55 Z" fill="#4d5539" stroke="#343b26" strokeWidth="1.5" />

          {/* Center Full-Length Zipper */}
          <line x1="200" y1="65" x2="200" y2="440" stroke="#252b1b" strokeWidth="4" />
          <line x1="200" y1="65" x2="200" y2="440" stroke="#838d6b" strokeWidth="1.5" strokeDasharray="3 2" />
          {/* Zipper Puller */}
          <rect x="196" y="80" width="8" height="14" rx="2" fill="#1b1f13" />

          {/* Right Chest Flap Pocket */}
          <rect x="115" y="150" width="65" height="70" rx="3" fill="#596344" stroke="#363d27" strokeWidth="1.2" />
          <path d="M113 150 L 147 165 L 182 150 Z" fill="#474f34" stroke="#363d27" strokeWidth="1.2" />

          {/* Left Chest Vertical Zip Pocket */}
          <line x1="240" y1="150" x2="240" y2="215" stroke="#252b1b" strokeWidth="3" />
          <circle cx="240" cy="155" r="3" fill="#1b1f13" />

          {/* Two Lower Cargo Bellows Flap Pockets */}
          <rect x="110" y="275" width="80" height="95" rx="4" fill="#586243" stroke="#363d27" strokeWidth="1.5" />
          <path d="M108 275 L 150 295 L 192 275 Z" fill="#474f34" stroke="#363d27" strokeWidth="1.5" />
          <line x1="115" y1="260" x2="185" y2="260" stroke="#252b1b" strokeWidth="2.5" />

          <rect x="210" y="275" width="80" height="95" rx="4" fill="#586243" stroke="#363d27" strokeWidth="1.5" />
          <path d="M208 275 L 250 295 L 292 275 Z" fill="#474f34" stroke="#363d27" strokeWidth="1.5" />
        </svg>
        <span className="absolute bottom-1 right-2 text-[9px] font-bold text-[#353d24] bg-[#dfe5cd] px-1.5 py-0.5 rounded border border-[#78845e]">
          Multi-Pocket Utility Vest
        </span>
      </div>
    );
  }

  // Genuine Leather Keychains (leather keycahin.png & keychain.png)
  if (productId.includes('keychain') || productId.includes('leather-keychain')) {
    return (
      <div className={`relative flex items-center justify-center p-2 select-none ${className}`}>
        <svg viewBox="0 0 400 360" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="richBrown" x1="120" y1="50" x2="180" y2="250" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6e3519" />
              <stop offset="0.6" stopColor="#52240e" />
              <stop offset="1" stopColor="#3d1808" />
            </linearGradient>
            <linearGradient id="saddleTan" x1="220" y1="50" x2="280" y2="250" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c87f34" />
              <stop offset="0.6" stopColor="#a86321" />
              <stop offset="1" stopColor="#7a4210" />
            </linearGradient>
            <linearGradient id="antiqueBrass" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#d4af37" />
              <stop offset="0.5" stopColor="#aa8323" />
              <stop offset="1" stopColor="#6e5110" />
            </linearGradient>
          </defs>

          {/* Left Keychain: Rich Brown with Ring */}
          <g>
            {/* Split Key Ring */}
            <circle cx="150" cy="285" r="30" fill="none" stroke="url(#antiqueBrass)" strokeWidth="7" />
            {/* Leather Loop Strap */}
            <rect x="125" y="60" width="50" height="180" rx="10" fill="url(#richBrown)" stroke="#301306" strokeWidth="1.5" />
            <path d="M130 65 L 130 235 M 170 65 L 170 235" stroke="#a06038" strokeWidth="1" strokeDasharray="3 2" />
            {/* Antique Brass Rivet */}
            <circle cx="150" cy="205" r="9" fill="url(#antiqueBrass)" stroke="#4a3508" strokeWidth="1" />
            <circle cx="150" cy="205" r="5" fill="#6e5110" />
          </g>

          {/* Right Keychain: Tan Leather with Brass Snap Hook */}
          <g>
            {/* Leather Strap */}
            <rect x="235" y="60" width="50" height="180" rx="10" fill="url(#saddleTan)" stroke="#522b07" strokeWidth="1.5" />
            <path d="M240 65 L 240 235 M 280 65 L 280 235" stroke="#f0b675" strokeWidth="1" strokeDasharray="3 2" />
            {/* Brass Rivet */}
            <circle cx="260" cy="205" r="9" fill="url(#antiqueBrass)" stroke="#4a3508" strokeWidth="1" />
            {/* Heavy-duty Brass Carabiner Snap Hook */}
            <path
              d="M260 235 C 245 250, 240 270, 250 295 C 255 310, 275 320, 280 300 L 280 265 Z"
              fill="url(#antiqueBrass)"
              stroke="#4a3508"
              strokeWidth="2"
            />
            <circle cx="245" cy="295" r="22" fill="none" stroke="url(#antiqueBrass)" strokeWidth="6" />
          </g>
        </svg>
        <span className="absolute bottom-1 right-2 text-[9px] font-bold text-[#5c310b] bg-[#faecd9] px-1.5 py-0.5 rounded border border-[#c87f34]">
          Full-Grain Leather & Brass
        </span>
      </div>
    );
  }

  // Laptop Backpack (laptop bags.png)
  if (productId.includes('backpack') || productId.includes('laptop-bag')) {
    return (
      <div className={`relative flex items-center justify-center p-2 select-none ${className}`}>
        <svg viewBox="0 0 380 460" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="packBlack" x1="190" y1="50" x2="190" y2="430" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2c3038" />
              <stop offset="0.4" stopColor="#1a1c21" />
              <stop offset="1" stopColor="#111215" />
            </linearGradient>
            <filter id="packShadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#000000" floodOpacity="0.28" />
            </filter>
          </defs>

          {/* Padded Top Handle */}
          <path d="M150 90 C 150 50, 230 50, 230 90" stroke="#2a2e37" strokeWidth="18" strokeLinecap="round" fill="none" />
          <path d="M150 90 C 150 50, 230 50, 230 90" stroke="#121317" strokeWidth="12" strokeLinecap="round" fill="none" />

          {/* Ergonomic Shoulder Straps in background */}
          <path d="M115 110 C 80 150, 70 280, 95 360" stroke="#1c1e24" strokeWidth="22" strokeLinecap="round" fill="none" />
          <path d="M265 110 C 300 150, 310 280, 285 360" stroke="#1c1e24" strokeWidth="22" strokeLinecap="round" fill="none" />

          {/* Main Body Shell */}
          <g filter="url(#packShadow)">
            <path
              d="M125 110 C 135 85, 245 85, 255 110 L 275 390 C 275 425, 105 425, 105 390 Z"
              fill="url(#packBlack)"
              stroke="#383e4a"
              strokeWidth="2"
            />
          </g>

          {/* Upper Smooth Leatherette Accent Panel */}
          <path d="M135 135 C 145 125, 235 125, 245 135 L 248 190 L 132 190 Z" fill="#20242b" rx="4" />

          {/* Dual Reflective Safety Stripes */}
          <rect x="118" y="270" width="144" height="4" rx="2" fill="#e2e8f0" opacity="0.9" />
          <rect x="118" y="280" width="144" height="4" rx="2" fill="#e2e8f0" opacity="0.9" />

          {/* Front Zipper Compartment with Orange Pull Accents */}
          <line x1="118" y1="230" x2="262" y2="230" stroke="#0a0a0d" strokeWidth="3" />
          <line x1="118" y1="288" x2="262" y2="288" stroke="#0a0a0d" strokeWidth="3" />
          {/* Orange Pullers */}
          <rect x="145" y="228" width="4" height="15" rx="1.5" fill="#f97316" />
          <rect x="150" y="286" width="4" height="15" rx="1.5" fill="#f97316" />
        </svg>
        <span className="absolute bottom-1 right-2 text-[9px] font-bold text-slate-200 bg-slate-900/80 px-1.5 py-0.5 rounded backdrop-blur-xs">
          Reflective Safety Commuter
        </span>
      </div>
    );
  }

  // Traditional Mysuru Shalya / Stole (mysroe shalya.png)
  if (productId.includes('shalya') || productId.includes('mysuru-shalya')) {
    return (
      <div className={`relative flex items-center justify-center p-2 select-none ${className}`}>
        <svg viewBox="0 0 380 460" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="zariGold" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#fef08a" />
              <stop offset="0.4" stopColor="#eab308" />
              <stop offset="0.8" stopColor="#ca8a04" />
              <stop offset="1" stopColor="#854d0e" />
            </linearGradient>
            <pattern id="brocadePattern" width="16" height="24" patternUnits="userSpaceOnUse">
              <rect width="16" height="24" fill="#ca8a04" />
              <path d="M8 0 L16 12 L8 24 L0 12 Z" fill="#fef08a" />
              <circle cx="8" cy="12" r="3" fill="#854d0e" />
            </pattern>
          </defs>

          {/* Dark Navy Bandhgala Jacket Base on Mannequin */}
          <path d="M120 40 L 40 180 L 110 440 L 270 440 L 340 180 L 260 40 Z" fill="#131c31" stroke="#0b1120" strokeWidth="2" />
          {/* Mandarin Collar */}
          <path d="M150 40 C 170 50, 210 50, 230 40 L 235 25 C 210 32, 170 32, 145 25 Z" fill="#0f172a" stroke="#1e293b" />
          {/* Front Buttons */}
          <circle cx="190" cy="110" r="4" fill="#334155" />
          <circle cx="190" cy="160" r="4" fill="#334155" />
          <circle cx="190" cy="210" r="4" fill="#334155" />

          {/* Draped Mysuru Shalya Stole (Gold Zari Woven) */}
          {/* Left Hanging Stole Sash */}
          <g>
            <path
              d="M145 35 C 135 120, 80 180, 80 380 L 105 405 L 130 380 L 130 140 C 135 70, 160 35, 170 35 Z"
              fill="url(#brocadePattern)"
              stroke="#a16207"
              strokeWidth="1.5"
            />
            {/* Rich Golden Border */}
            <path d="M82 40 L 82 380 M 128 40 L 128 380" stroke="#fef08a" strokeWidth="3" />
            {/* Hanging Golden Tassels */}
            <line x1="105" y1="405" x2="105" y2="435" stroke="url(#zariGold)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="105" cy="410" r="4" fill="#fef08a" />
          </g>

          {/* Right Hanging Stole Sash */}
          <g>
            <path
              d="M235 35 C 245 120, 300 180, 300 380 L 275 405 L 250 380 L 250 140 C 245 70, 220 35, 210 35 Z"
              fill="url(#brocadePattern)"
              stroke="#a16207"
              strokeWidth="1.5"
            />
            {/* Rich Golden Border */}
            <path d="M298 40 L 298 380 M 252 40 L 252 380" stroke="#fef08a" strokeWidth="3" />
            {/* Hanging Golden Tassels */}
            <line x1="275" y1="405" x2="275" y2="435" stroke="url(#zariGold)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="275" cy="410" r="4" fill="#fef08a" />
          </g>
        </svg>
        <span className="absolute bottom-1 right-2 text-[9px] font-bold text-[#854d0e] bg-[#fef9c3] px-1.5 py-0.5 rounded border border-[#facc15]">
          Mysuru Golden Zari Brocade
        </span>
      </div>
    );
  }

  // Ceremonial Satin Sashes (sachet.png)
  if (productId.includes('sachet') || productId.includes('sash')) {
    return (
      <div className={`relative flex items-center justify-center p-2 select-none ${className}`}>
        <svg viewBox="0 0 380 440" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sashWhite" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#ffffff" />
              <stop offset="0.5" stopColor="#f1f5f9" />
              <stop offset="1" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="sashRed" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#f43f5e" />
              <stop offset="0.5" stopColor="#be123c" />
              <stop offset="1" stopColor="#881337" />
            </linearGradient>
            <linearGradient id="sashGold" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#fde047" />
              <stop offset="0.5" stopColor="#eab308" />
              <stop offset="1" stopColor="#a16207" />
            </linearGradient>
          </defs>

          {/* Three Mannequins with Sashes */}
          {/* Left Mannequin (White Satin) */}
          <g transform="translate(10, 30) scale(0.8)">
            <path d="M70 60 C 50 120, 45 200, 70 320 L 130 320 C 155 200, 150 120, 130 60 Z" fill="#334155" />
            <path d="M60 90 L 155 260 L 125 285 L 35 110 Z" fill="url(#sashWhite)" stroke="#94a3b8" strokeWidth="1" />
            <line x1="75" y1="120" x2="140" y2="240" stroke="#f8fafc" strokeWidth="2" opacity="0.8" />
          </g>

          {/* Center Mannequin (Red Satin) */}
          <g transform="translate(115, 10) scale(0.95)">
            <path d="M70 60 C 50 120, 45 200, 70 320 L 130 320 C 155 200, 150 120, 130 60 Z" fill="#1e293b" />
            <path d="M60 90 L 155 260 L 125 285 L 35 110 Z" fill="url(#sashRed)" stroke="#881337" strokeWidth="1" />
            <line x1="75" y1="120" x2="140" y2="240" stroke="#fda4af" strokeWidth="2.5" opacity="0.7" />
          </g>

          {/* Right Mannequin (Gold Satin) */}
          <g transform="translate(230, 30) scale(0.8)">
            <path d="M70 60 C 50 120, 45 200, 70 320 L 130 320 C 155 200, 150 120, 130 60 Z" fill="#334155" />
            <path d="M60 90 L 155 260 L 125 285 L 35 110 Z" fill="url(#sashGold)" stroke="#a16207" strokeWidth="1" />
            <line x1="75" y1="120" x2="140" y2="240" stroke="#fef08a" strokeWidth="2" opacity="0.8" />
          </g>
        </svg>
        <span className="absolute bottom-1 right-2 text-[9px] font-bold text-[#be123c] bg-[#ffe4e6] px-1.5 py-0.5 rounded border border-[#f43f5e]">
          Ceremonial Silk Satin
        </span>
      </div>
    );
  }

  // Large Promotional Golf Umbrella (umbrella.png)
  if (productId.includes('umbrella')) {
    return (
      <div className={`relative flex items-center justify-center p-2 select-none ${className}`}>
        <svg viewBox="0 0 400 420" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="umbrellaBlack" x1="100" y1="100" x2="300" y2="280" gradientUnits="userSpaceOnUse">
              <stop stopColor="#374151" />
              <stop offset="0.5" stopColor="#1f2937" />
              <stop offset="1" stopColor="#111827" />
            </linearGradient>
          </defs>

          {/* Ferrule / Tip at top */}
          <line x1="120" y1="70" x2="135" y2="95" stroke="#111827" strokeWidth="8" strokeLinecap="round" />

          {/* Umbrella Canopy (Angled Side Profile) */}
          <path
            d="M135 95 C 220 80, 320 120, 345 180 C 270 280, 180 340, 70 330 C 55 230, 85 140, 135 95 Z"
            fill="url(#umbrellaBlack)"
            stroke="#111827"
            strokeWidth="3"
          />
          {/* Canopy Rib Arc Shadows */}
          <path d="M135 95 Q 210 200 70 330" stroke="#4b5563" strokeWidth="2" opacity="0.5" />
          <path d="M135 95 Q 260 170 345 180" stroke="#4b5563" strokeWidth="2" opacity="0.5" />

          {/* Sturdy Center Shaft */}
          <line x1="135" y1="95" x2="290" y2="310" stroke="#111827" strokeWidth="7" strokeLinecap="round" />

          {/* Ergonomic EVA Foam Handle */}
          <rect x="280" y="295" width="30" height="65" rx="10" transform="rotate(35 280 295)" fill="#1f2937" stroke="#111827" strokeWidth="2" />
          <line x1="290" y1="310" x2="330" y2="370" stroke="#4b5563" strokeWidth="2" opacity="0.4" />
        </svg>
        <span className="absolute bottom-1 right-2 text-[9px] font-bold text-slate-200 bg-slate-900/80 px-1.5 py-0.5 rounded backdrop-blur-xs">
          30-Inch Windproof Canopy
        </span>
      </div>
    );
  }

  // Fabric Festival Wristbands (wrist band.png)
  if (productId.includes('wrist-band') || productId.includes('wristband')) {
    return (
      <div className={`relative flex items-center justify-center p-2 select-none ${className}`}>
        <svg viewBox="0 0 380 420" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bandRed" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#ef4444" />
              <stop offset="1" stopColor="#b91c1c" />
            </linearGradient>
            <linearGradient id="bandYellow" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#fde047" />
              <stop offset="1" stopColor="#eab308" />
            </linearGradient>
            <linearGradient id="bandPurple" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#a855f7" />
              <stop offset="1" stopColor="#7e22ce" />
            </linearGradient>
          </defs>

          {/* Three Flowing Fabric Wristbands with Black Slide Beads */}
          {/* Red Band */}
          <g>
            <path d="M80 150 C 130 180, 180 260, 160 320 L 140 330 C 150 280, 110 200, 65 170 Z" fill="url(#bandRed)" />
            <text x="120" y="240" fill="white" fontSize="9" fontWeight="800" transform="rotate(45 120 240)">
              WILD COLLECTIVE
            </text>
            {/* Plastic One-Way Security Toggle */}
            <rect x="145" y="270" width="16" height="22" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          </g>

          {/* Yellow Band */}
          <g>
            <path d="M110 140 C 160 170, 210 250, 190 330 L 170 340 C 180 270, 140 190, 95 160 Z" fill="url(#bandYellow)" />
            <text x="150" y="230" fill="#713f12" fontSize="9" fontWeight="800" transform="rotate(45 150 230)">
              VIP ACCESS · 2026
            </text>
            <rect x="175" y="280" width="16" height="22" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          </g>

          {/* Purple Band */}
          <g>
            <path d="M140 130 C 190 160, 240 240, 220 340 L 200 350 C 210 260, 170 180, 125 150 Z" fill="url(#bandPurple)" />
            <text x="180" y="220" fill="white" fontSize="9" fontWeight="800" transform="rotate(45 180 220)">
              OFFICIAL CREW
            </text>
            <rect x="205" y="290" width="16" height="22" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          </g>
        </svg>
        <span className="absolute bottom-1 right-2 text-[9px] font-bold text-[#7e22ce] bg-[#f3e8ff] px-1.5 py-0.5 rounded border border-[#c084fc]">
          Woven Satin Lock
        </span>
      </div>
    );
  }

  // Classic Round Neck T-Shirt (round-neck-tshirt)
  if (productId.includes('round-neck') || productId.includes('tshirt') || productId.includes('sweat') || productId.includes('hoodie')) {
    const shirtFill = colorHex || "url(#teeNavy)";
    return (
      <div className={`relative flex items-center justify-center p-2 select-none ${className}`}>
        <svg viewBox="0 0 400 440" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="teeNavy" x1="200" y1="50" x2="200" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2a3352" />
              <stop offset="0.5" stopColor="#1e253d" />
              <stop offset="1" stopColor="#14192b" />
            </linearGradient>
            <filter id="teeShadow" x="-10%" y="-10%" width="120%" height="130%">
              <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#0f172a" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* T-Shirt Silhouette */}
          <g filter="url(#teeShadow)">
            <path
              d="M135 80 L 50 150 L 85 195 L 115 165 L 115 410 L 285 410 L 285 165 L 315 195 L 350 150 L 265 80 C 235 110, 165 110, 135 80 Z"
              fill={shirtFill}
              stroke="#0f172a"
              strokeWidth="1.5"
            />
          </g>

          {/* Round Neck Ribbed Collar */}
          <path d="M135 80 C 165 110, 235 110, 265 80 C 235 125, 165 125, 135 80 Z" fill={colorHex ? `${colorHex}dd` : "#374366"} stroke="#1e253d" strokeWidth="1.2" />

          {/* Soft chest drape & fold lines */}
          <path d="M140 180 Q 155 280 150 400" stroke="#3b486e" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
          <path d="M260 180 Q 245 280 250 400" stroke="#0e1321" strokeWidth="3" opacity="0.5" strokeLinecap="round" />

          {/* Minimalist Wild Collective leaf imprint on chest */}
          <path d="M225 155 C 215 145, 230 135, 240 145 C 240 155, 230 160, 225 155 Z" fill="#ffffff" opacity="0.8" />
          <text x="232" y="172" textAnchor="middle" fill="#ffffff" opacity="0.7" fontSize="8" fontWeight="700">
            WILD
          </text>
        </svg>
        <span className="absolute bottom-1 right-2 text-[9px] font-bold text-slate-300 bg-slate-900/80 px-1.5 py-0.5 rounded backdrop-blur-xs">
          Combed Bio-Wash Cotton
        </span>
      </div>
    );
  }

  // Default Luxury Fallback with Category Icon & Spec
  return (
    <div className={`relative flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#fbf8f3] to-[#f4ede4] rounded-2xl select-none ${className}`}>
      <div className="w-16 h-16 rounded-2xl bg-[#1f1b64]/5 border border-[#1f1b64]/10 flex items-center justify-center text-[#1f1b64] font-display font-black text-2xl shadow-inner">
        W
      </div>
      <p className="font-display font-black text-sm text-[#191633] mt-3 text-center line-clamp-1">
        {title || 'Wild Collective'}
      </p>
      <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff6948] mt-0.5">
        {category || 'Custom Merchandise'}
      </span>
      <span className="mt-2 text-[9px] font-extrabold text-[#0d5930] bg-[#c5efd4] px-2 py-0.5 rounded">
        Factory direct
      </span>
    </div>
  );
};
