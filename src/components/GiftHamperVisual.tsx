import React from 'react';

interface GiftHamperVisualProps {
  className?: string;
  badge?: string;
}

export const GiftHamperVisual: React.FC<GiftHamperVisualProps> = ({
  className = "w-full h-full",
  badge = "Wild Collective Executive Kit"
}) => {
  return (
    <div className={`relative flex items-center justify-center p-3 select-none ${className}`}>
      <svg viewBox="0 0 600 480" className="w-full h-full drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="boxOuter" x1="0" y1="0" x2="600" y2="480" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1e222a" />
            <stop offset="0.5" stopColor="#14161b" />
            <stop offset="1" stopColor="#0c0e11" />
          </linearGradient>
          <linearGradient id="foamTray" x1="300" y1="30" x2="300" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0e1014" />
            <stop offset="1" stopColor="#050608" />
          </linearGradient>
          <linearGradient id="flaskGrad" x1="160" y1="60" x2="210" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1e3a8a" />
            <stop offset="0.3" stopColor="#2563eb" />
            <stop offset="0.7" stopColor="#1e3a8a" />
            <stop offset="1" stopColor="#172554" />
          </linearGradient>
          <linearGradient id="goldCard" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#fef08a" />
            <stop offset="0.5" stopColor="#eab308" />
            <stop offset="1" stopColor="#ca8a04" />
          </linearGradient>
          <filter id="boxDrop" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#000000" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Outer Presentation Box Rim & Drop Shadow */}
        <g filter="url(#boxDrop)">
          <rect x="25" y="20" width="550" height="430" rx="16" fill="url(#boxOuter)" stroke="#384152" strokeWidth="4" />
        </g>

        {/* Recessed Custom Foam Organizer Insert */}
        <rect x="40" y="35" width="520" height="400" rx="12" fill="url(#foamTray)" stroke="#1a1e27" strokeWidth="2" />

        {/* 1. Folded Navy Blue Cotton T-Shirt (Top Left Slot) */}
        <g>
          <rect x="58" y="55" width="165" height="150" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
          {/* Folded Collar View */}
          <path d="M100 65 C 120 85, 160 85, 180 65" stroke="#475569" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M110 65 C 125 78, 155 78, 170 65" stroke="#0f172a" strokeWidth="3" fill="none" />
          {/* Ribbon Wrap */}
          <rect x="58" y="125" width="165" height="14" fill="url(#goldCard)" opacity="0.85" />
          <circle cx="140" cy="132" r="6" fill="#ca8a04" />
          <text x="140" y="135" textAnchor="middle" fill="#000000" fontSize="8" fontWeight="800">
            ★
          </text>
        </g>

        {/* 2. Insulated Stainless Steel Flask (Center Vertical Slot) */}
        <g>
          <rect x="242" y="55" width="60" height="230" rx="20" fill="url(#flaskGrad)" stroke="#172554" strokeWidth="2" />
          {/* Steel Cap */}
          <rect x="252" y="45" width="40" height="18" rx="4" fill="#cbd5e1" stroke="#64748b" strokeWidth="1" />
          <rect x="255" y="40" width="34" height="6" rx="2" fill="#94a3b8" />
          {/* Specular shine */}
          <line x1="254" y1="70" x2="254" y2="270" stroke="white" strokeWidth="3" opacity="0.4" strokeLinecap="round" />
          {/* Wild Collective Logo on Flask */}
          <circle cx="272" cy="160" r="10" fill="white" fillOpacity="0.15" />
          <text x="272" y="163" textAnchor="middle" fill="white" fontSize="8" fontWeight="800">
            W
          </text>
        </g>

        {/* 3. Ceramic Mug (Top Right Slot) */}
        <g>
          {/* Handle */}
          <path d="M480 85 C 515 85, 515 145, 480 145" stroke="#e2e8f0" strokeWidth="12" strokeLinecap="round" fill="none" />
          {/* Mug Body */}
          <rect x="380" y="65" width="105" height="110" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <ellipse cx="432" cy="65" rx="52" ry="12" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
          <ellipse cx="432" cy="68" rx="44" ry="9" fill="#1e293b" />
          {/* Mug Emblem */}
          <circle cx="432" cy="120" r="15" fill="#22c55e" fillOpacity="0.15" />
          <path d="M432 110 C 438 116, 436 124, 432 128 C 428 124, 426 116, 432 110 Z" fill="#16a34a" />
          <text x="432" y="140" textAnchor="middle" fill="#1e293b" fontSize="7" fontWeight="700">
            BRIGHTER DAYS
          </text>
        </g>

        {/* 4. Executive Metal Pen (Vertical Slot next to Mug) */}
        <g>
          <rect x="325" y="55" width="22" height="230" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          {/* Chrome Accents */}
          <rect x="324" y="80" width="24" height="6" fill="#cbd5e1" />
          <rect x="324" y="90" width="24" height="6" fill="#cbd5e1" />
          <path d="M336 80 L 336 160" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="325,275 347,275 336,295" fill="#94a3b8" />
        </g>

        {/* 5. Hardcover Executive Diary (Bottom Left Slot) */}
        <g>
          <rect x="58" y="225" width="165" height="190" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
          {/* Elastic Band */}
          <rect x="195" y="225" width="14" height="190" fill="#0f172a" stroke="#475569" strokeWidth="0.8" />
          {/* Gold Debossed Logo */}
          <circle cx="130" cy="310" r="18" fill="none" stroke="url(#goldCard)" strokeWidth="1.5" />
          <text x="130" y="314" textAnchor="middle" fill="url(#goldCard)" fontSize="10" fontWeight="800">
            WC
          </text>
          <text x="130" y="338" textAnchor="middle" fill="url(#goldCard)" fontSize="8" fontWeight="600" letterSpacing="1">
            2026 PLANNER
          </text>
        </g>

        {/* 6. Tan Leather Keychain (Center Bottom Slot) */}
        <g>
          <rect x="250" y="305" width="44" height="110" rx="6" fill="#b45309" stroke="#78350f" strokeWidth="1.2" />
          <line x1="254" y1="310" x2="254" y2="405" stroke="#fef3c7" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="290" y1="310" x2="290" y2="405" stroke="#fef3c7" strokeWidth="1" strokeDasharray="3 2" />
          <circle cx="272" cy="385" r="7" fill="url(#goldCard)" stroke="#78350f" strokeWidth="1" />
          <circle cx="272" cy="385" r="3" fill="#78350f" />
          <circle cx="272" cy="425" r="14" fill="none" stroke="url(#goldCard)" strokeWidth="4" />
        </g>

        {/* 7. Gold Foil Welcome Greeting Card in Envelope (Bottom Right Slot) */}
        <g>
          <rect x="365" y="205" width="175" height="130" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />
          <path d="M365 205 L 452 265 L 540 205 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
          {/* Gold Wax Seal / Stamp */}
          <circle cx="452" cy="265" r="12" fill="url(#goldCard)" stroke="#ca8a04" strokeWidth="1.5" />
          <text x="452" y="269" textAnchor="middle" fill="#78350f" fontSize="9" fontWeight="900">
            W
          </text>
          <text x="452" y="315" textAnchor="middle" fill="#1e293b" fontSize="8" fontWeight="800" letterSpacing="0.8">
            WELCOME TO THE TEAM
          </text>
        </g>
      </svg>

      {/* Floating Badge */}
      <span className="absolute bottom-4 left-6 text-xs font-black text-[#d9bf94] bg-[#0c0e11]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#384152] shadow-lg flex items-center gap-1.5">
        <span>✦</span> {badge}
      </span>
    </div>
  );
};
