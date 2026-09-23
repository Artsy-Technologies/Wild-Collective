import React from 'react';

export type MockupKind = 'polo' | 'tee' | 'hoodie' | 'bottle' | 'mug' | 'tote';

export interface Placement {
  id: string;
  label: string;
  // Centre of the print area, in % of the square stage
  x: number;
  y: number;
  // Max artwork width at 100% scale, in % of the stage
  maxWidth: number;
}

const APPAREL_PLACEMENTS = (chestY: number, largeY: number): Placement[] => [
  { id: 'left-chest', label: 'Left Chest', x: 60, y: chestY, maxWidth: 18 },
  { id: 'center-chest', label: 'Center Chest', x: 50, y: chestY + 2, maxWidth: 30 },
  { id: 'large-front', label: 'Large Front', x: 50, y: largeY, maxWidth: 44 },
];

export const PLACEMENTS: Record<MockupKind, Placement[]> = {
  polo: APPAREL_PLACEMENTS(38, 52),
  tee: APPAREL_PLACEMENTS(35, 50),
  hoodie: APPAREL_PLACEMENTS(40, 52),
  bottle: [
    { id: 'small', label: 'Small', x: 50, y: 52, maxWidth: 18 },
    { id: 'center', label: 'Center', x: 50, y: 58, maxWidth: 24 },
    { id: 'large', label: 'Large', x: 50, y: 60, maxWidth: 28 },
  ],
  mug: [
    { id: 'small', label: 'Small', x: 50, y: 52, maxWidth: 22 },
    { id: 'center', label: 'Center', x: 50, y: 52, maxWidth: 32 },
    { id: 'large', label: 'Full Wrap', x: 50, y: 52, maxWidth: 42 },
  ],
  tote: [
    { id: 'small', label: 'Small', x: 50, y: 58, maxWidth: 24 },
    { id: 'center', label: 'Center', x: 50, y: 64, maxWidth: 40 },
    { id: 'large', label: 'Large', x: 50, y: 66, maxWidth: 54 },
  ],
};

// Relative luminance, used to pick a dark or light logo for the chosen shade
export const isLightColor = (hex: string) => {
  const n = parseInt(hex.replace('#', ''), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.35;
};

const TEE_BODY =
  'M140 62 L96 76 L38 124 L70 180 L110 160 L110 352 Q200 364 290 352 L290 160 L330 180 L362 124 L304 76 L260 62 Q200 104 140 62 Z';

const HOODIE_BODY =
  'M138 74 L96 88 L58 150 L40 312 L82 318 L112 196 L112 356 Q200 366 288 356 L288 196 L318 318 L360 312 L342 150 L304 88 L262 74 Q200 116 138 74 Z';

interface MockupProductProps {
  kind: MockupKind;
  color: string;
  className?: string;
}

export const MockupProduct: React.FC<MockupProductProps> = ({ kind, color, className = '' }) => {
  const light = isLightColor(color);
  const line = light ? 'rgba(25,22,51,0.28)' : 'rgba(255,255,255,0.16)';
  const detail = light ? 'rgba(25,22,51,0.18)' : 'rgba(0,0,0,0.35)';
  const shadeId = `shade-${kind}`;

  const shaded = (d: string) => (
    <>
      <path d={d} fill={color} stroke={line} strokeWidth={2} strokeLinejoin="round" />
      <path d={d} fill={`url(#${shadeId})`} />
    </>
  );

  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label={`${kind} mockup`}>
      <defs>
        <linearGradient id={shadeId} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0.16" />
          <stop offset="0.35" stopColor="#fff" stopOpacity="0.08" />
          <stop offset="0.65" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <ellipse cx="200" cy="378" rx="130" ry="10" fill="rgba(25,22,51,0.08)" />

      {kind === 'tee' && (
        <>
          {shaded(TEE_BODY)}
          <path d="M140 62 Q200 104 260 62" fill="none" stroke={detail} strokeWidth={8} />
          <path d="M110 160 L110 200 M290 160 L290 200" stroke={detail} strokeWidth={2} />
        </>
      )}

      {kind === 'polo' && (
        <>
          {shaded(TEE_BODY)}
          <rect x="192" y="96" width="16" height="64" rx="2" fill={detail} />
          <circle cx="200" cy="114" r="3" fill={line} />
          <circle cx="200" cy="138" r="3" fill={line} />
          <path d="M140 62 L200 100 L176 118 L150 72 Z" fill={color} stroke={line} strokeWidth={2} strokeLinejoin="round" />
          <path d="M260 62 L200 100 L224 118 L250 72 Z" fill={color} stroke={line} strokeWidth={2} strokeLinejoin="round" />
          <path d="M50 118 L82 172 M350 118 L318 172" stroke={detail} strokeWidth={6} />
        </>
      )}

      {kind === 'hoodie' && (
        <>
          <path d="M138 74 Q128 20 200 16 Q272 20 262 74 Q200 118 138 74 Z" fill={color} stroke={line} strokeWidth={2} />
          <path d="M138 74 Q128 20 200 16 Q272 20 262 74 Q200 118 138 74 Z" fill="rgba(0,0,0,0.18)" />
          {shaded(HOODIE_BODY)}
          <path d="M150 86 Q200 128 250 86" fill="none" stroke={detail} strokeWidth={6} />
          <path d="M186 110 L182 170 M214 110 L218 170" stroke={line} strokeWidth={3} strokeLinecap="round" />
          <path d="M148 272 L252 272 L268 332 L132 332 Z" fill="none" stroke={detail} strokeWidth={3} />
          <path d="M40 312 L82 318 M318 318 L360 312" stroke={detail} strokeWidth={8} />
        </>
      )}

      {kind === 'bottle' && (
        <>
          <rect x="166" y="30" width="68" height="46" rx="10" fill="#26262e" />
          <rect x="176" y="76" width="48" height="18" fill="#3a3a44" />
          {shaded('M150 94 Q140 94 140 134 L140 346 Q140 370 164 370 L236 370 Q260 370 260 346 L260 134 Q260 94 250 94 Z')}
          <path d="M140 150 L260 150 M140 320 L260 320" stroke={detail} strokeWidth={2} />
        </>
      )}

      {kind === 'mug' && (
        <>
          <path d="M296 150 C368 150 368 272 296 272" fill="none" stroke={color} strokeWidth={26} />
          <path d="M296 150 C368 150 368 272 296 272" fill="none" stroke={line} strokeWidth={2} />
          {shaded('M104 112 L104 300 Q104 330 134 330 L266 330 Q296 330 296 300 L296 112 Z')}
          <ellipse cx="200" cy="112" rx="96" ry="14" fill={color} stroke={line} strokeWidth={2} />
          <ellipse cx="200" cy="114" rx="86" ry="9" fill="rgba(0,0,0,0.22)" />
        </>
      )}

      {kind === 'tote' && (
        <>
          <path d="M150 150 Q150 56 200 56 Q250 56 250 150" fill="none" stroke={color} strokeWidth={14} />
          <path d="M150 150 Q150 56 200 56 Q250 56 250 150" fill="none" stroke={line} strokeWidth={2} />
          {shaded('M86 138 L314 138 L330 372 L70 372 Z')}
          <path d="M86 154 L314 154" stroke={detail} strokeWidth={2} strokeDasharray="6 5" />
        </>
      )}
    </svg>
  );
};

// Swatch values for the shade names used in the product catalogue
export const SHADE_HEX: Record<string, string> = {
  'Aqua Blue': '#3fb8c9',
  'Azure Blue': '#2f7fd6',
  'Bottle Green': '#1f4d36',
  'Burgundy': '#6d1a2e',
  'Charcoal': '#36383d',
  'Cobalt Blue': '#1f4fb5',
  'Crimson Red': '#a3172b',
  'Crisp White': '#fbfbf8',
  'Cyan': '#27b5d8',
  'Deep Teal': '#0f5a5f',
  'Graphite': '#4a4d52',
  'Heather Grey': '#a4a5a8',
  'Ice White': '#f1f5f8',
  'Indigo': '#2f2a7a',
  'Ivory': '#f5efdc',
  'Jet Black': '#18181b',
  'Maroon Red': '#6e1423',
  'Midnight Slate': '#26303f',
  'Mint Sage': '#a9cbb4',
  'Mustard Yellow': '#d9a21b',
  'Navy Blue': '#1e2a44',
  'Pine Green': '#2e5b3c',
  'Pure White': '#ffffff',
  'Royal Blue': '#2446a8',
  'Silver Grey': '#bfc3c7',
  'Soft Cream': '#f2e7cf',
  'Solar Yellow': '#f4c430',
  'Steel Grey': '#71797e',
};

// Catalogue products that have a recolourable mockup
export const PRODUCT_MOCKUP_KIND: Record<string, MockupKind> = {
  'round-neck-tshirt': 'tee',
  'sweat-shirts': 'hoodie',
  'collar-tshirt': 'polo',
  'hoodies': 'hoodie',
  'mug': 'mug',
  'uv-bottle-500ml': 'bottle',
  'uv-bottle-750ml': 'bottle',
  'uv-bottle-1-litre': 'bottle',
  'tote-bag': 'tote',
  'jute-bag': 'tote',
};
