import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const words = [
    'WILD COLLECTIVE',
    'DIRECT FACTORY PRICING',
    'CUSTOM APPAREL',
    'CORPORATE GIFTS',
    'MERCHANDISE',
    'CUSTOM PRINTING',
    'BULK ORDERS',
    'DIRECT WHATSAPP QUOTE',
    'PREMIUM EMBROIDERY',
    'HIGH-DEF DTF PRINTS'
  ];

  return (
    <div className="bg-[#2f2f2f] text-white py-3.5 overflow-hidden border-y border-[#0a0a0a] select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: 4 }).flatMap(() => words).map((word, idx) => (
          <div key={idx} className="flex items-center mx-4">
            <span className="font-display font-extrabold text-sm tracking-widest text-[#ffffff]">
              {word}
            </span>
            <span className="mx-4 text-[#a58c6d] text-xs font-black">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
