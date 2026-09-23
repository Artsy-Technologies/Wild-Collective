import React, { useState } from 'react';
import { X, Download, Check, Sparkles, Eye, ShieldCheck, Palette, FileText } from 'lucide-react';
import { WildCollectiveLogo } from './WildCollectiveLogo';

interface BrandAssetsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandAssetsModal: React.FC<BrandAssetsModalProps> = ({ isOpen, onClose }) => {
  const [bgPreview, setBgPreview] = useState<'white' | 'dark' | 'grid'>('white');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = (filename: string, path: string) => {
    const link = document.createElement('a');
    link.href = path;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(filename);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  const assetFiles = [
    {
      title: 'Original Exact Brand Image',
      filename: 'THE WIDL COLLECTIVE_Logo_JPEG.jpg',
      path: '/brand/THE WIDL COLLECTIVE_Logo_JPEG.jpg',
      badge: 'Exact Original',
      desc: 'High-resolution JPEG with pure white backdrop matching original master brand submission.',
      type: 'JPG'
    },
    {
      title: 'Ultra-HD Transparent PNG',
      filename: 'wild-collective-logo.png',
      path: '/brand/logo.png',
      badge: 'HD Transparent',
      desc: 'Crisp transparent background PNG for apparel mockups, stationery, and digital presentations.',
      type: 'PNG'
    },
    {
      title: 'Inverted White Transparent PNG',
      filename: 'wild-collective-logo-white.png',
      path: '/brand/logo-white.png',
      badge: 'HD Transparent',
      desc: 'Transparent white graphic for dark textile printing, hoodies, and jackets.',
      type: 'PNG'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#fffaf2] rounded-3xl shadow-2xl border border-[#d9d1e2] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#ece7f2] bg-[#f8f4ed]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1f1b64] text-white flex items-center justify-center shadow-sm">
              <Sparkles size={20} className="text-[#ffd84d]" />
            </div>
            <div>
              <h3 className="font-display text-xl font-black text-[#191633] flex items-center gap-2">
                The Wild Collective · Official Brand Assets
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#e7e2ff] text-[#1f1b64] border border-[#d9d1e2]">
                  Exact Identity
                </span>
              </h3>
              <p className="text-xs text-[#575268]">
                Authentic elephant and roaring Bengal tiger emblem with geometric COLLECTIVE wordmark.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white border border-[#d9d1e2] flex items-center justify-center text-[#575268] hover:text-[#191633] hover:bg-[#f2ede6] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Main Interactive Stage */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#575268] flex items-center gap-1.5">
                <Eye size={14} className="text-[#ff6948]" />
                Live Logo Preview Stage
              </span>
              <div className="flex items-center gap-1.5 p-1 bg-[#ece7f2] rounded-xl text-xs font-semibold">
                <button
                  onClick={() => setBgPreview('white')}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    bgPreview === 'white' ? 'bg-white text-[#191633] shadow-xs' : 'text-[#575268] hover:text-[#191633]'
                  }`}
                >
                  Pure White
                </button>
                <button
                  onClick={() => setBgPreview('dark')}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    bgPreview === 'dark' ? 'bg-[#191633] text-white shadow-xs' : 'text-[#575268] hover:text-[#191633]'
                  }`}
                >
                  Deep Navy
                </button>
                <button
                  onClick={() => setBgPreview('grid')}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    bgPreview === 'grid' ? 'bg-white text-[#191633] shadow-xs' : 'text-[#575268] hover:text-[#191633]'
                  }`}
                >
                  Transparency Grid
                </button>
              </div>
            </div>

            <div 
              className={`w-full rounded-2xl border border-[#d9d1e2] p-8 sm:p-12 flex flex-col items-center justify-center min-h-[220px] transition-colors relative overflow-hidden ${
                bgPreview === 'white' 
                  ? 'bg-white' 
                  : bgPreview === 'dark' 
                    ? 'bg-[#120f2b]' 
                    : 'bg-[radial-gradient(#d9d1e2_1px,transparent_1px)] [background-size:16px_16px] bg-slate-50'
              }`}
            >
              <div className="max-w-md w-full flex items-center justify-center">
                <img
                  src={bgPreview === 'dark' ? '/brand/logo-white.png' : '/brand/logo.png'}
                  alt="The Wild Collective Official Logo"
                  className="max-h-24 sm:max-h-28 w-auto object-contain filter drop-shadow-sm select-none"
                />
              </div>
              <div className="mt-4 text-center">
                <span className={`text-[11px] font-bold tracking-widest uppercase ${
                  bgPreview === 'dark' ? 'text-white/60' : 'text-[#8d889b]'
                }`}>
                  Mysuru Apparel & Gifting House · Direct Manufacturer Rates
                </span>
              </div>
            </div>
          </div>

          {/* Download Notification */}
          {downloadSuccess && (
            <div className="p-3 bg-[#e7f7ed] border border-[#a3e6be] rounded-xl flex items-center gap-2.5 text-xs font-bold text-[#0d5930] animate-in fade-in">
              <Check size={16} />
              Downloaded &quot;{downloadSuccess}&quot; to your device!
            </div>
          )}

          {/* Download Grid */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#191633] flex items-center gap-2">
              <Download size={16} className="text-[#1f1b64]" />
              Official Downloadable Files
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {assetFiles.map((file) => (
                <div
                  key={file.filename}
                  className="p-4 rounded-2xl bg-white border border-[#d9d1e2] hover:border-[#1f1b64] hover:shadow-md transition-all flex flex-col justify-between space-y-3 group"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black px-2 py-0.5 rounded-md bg-[#e7e2ff] text-[#1f1b64]">
                        {file.type}
                      </span>
                      <span className="text-[10px] font-bold text-[#ff6948] bg-[#ff6948]/10 px-2 py-0.5 rounded-full">
                        {file.badge}
                      </span>
                    </div>
                    <div className="font-bold text-sm text-[#191633] group-hover:text-[#1f1b64] transition-colors">
                      {file.title}
                    </div>
                    <div className="text-xs text-[#575268] leading-relaxed">
                      {file.desc}
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownload(file.filename, file.path)}
                    className="w-full py-2 px-3 rounded-xl bg-[#fffaf2] hover:bg-[#1f1b64] text-[#1f1b64] hover:text-white border border-[#d9d1e2] hover:border-[#1f1b64] text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
                  >
                    <Download size={14} />
                    Download {file.filename}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Design Anatomy & Specs */}
          <div className="bg-[#f2ede6] rounded-2xl p-5 border border-[#d9d1e2] space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#191633] flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#0d5930]" />
              Logo Anatomy & Brand Integrity
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#575268]">
              <div className="bg-white p-3 rounded-xl border border-[#d9d1e2]/60">
                <span className="font-bold text-[#191633] block mb-1">1. Majestic Elephant W</span>
                The left diagonal of the W embodies an African elephant with contoured trunk rings, ivory tusk, and ear lobes.
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#d9d1e2]/60">
                <span className="font-bold text-[#191633] block mb-1">2. Roaring Bengal Tiger D</span>
                The outer arch of the D sculpts a roaring Bengal tiger with predatory stripes, canines, and whiskers.
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#d9d1e2]/60">
                <span className="font-bold text-[#191633] block mb-1">3. Tracked COLLECTIVE</span>
                Centered uppercase geometric sans typography anchoring the bold WILD mark.
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#f8f4ed] border-t border-[#ece7f2] flex items-center justify-between text-xs text-[#575268]">
          <span>Direct manufacturing by Wild Collective, Mysuru</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#1f1b64] text-white font-bold hover:bg-[#2c2685] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
