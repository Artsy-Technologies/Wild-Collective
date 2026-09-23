import React, { useState } from 'react';
import { 
  Printer, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle,
  HelpCircle,
  FileCheck2,
  PackageCheck
} from 'lucide-react';
import { PRINTING_TECHNIQUES, COMPANY_INFO } from '../data/products';

export const CustomPrintingGuide: React.FC<{ onExploreCatalogue: () => void }> = ({
  onExploreCatalogue,
}) => {
  const [activeTechnique, setActiveTechnique] = useState(PRINTING_TECHNIQUES[0]);

  const placementGuides = [
    { name: 'Left Chest (Pocket)', dim: '3.5 x 3.5 inches', desc: 'The corporate standard for polo shirts and uniforms. Subtle, dignified, and professional.' },
    { name: 'Center Chest Graphic', dim: '10 x 12 inches', desc: 'Bold, high-impact branding for event merchandise, college festivals, and sports jerseys.' },
    { name: 'Full Back Impact', dim: '12 x 14 inches', desc: 'Maximum visibility for marathon crews, volunteer staff, and touring teams.' },
    { name: 'Sleeve Badge', dim: '3 x 2.5 inches', desc: 'Sleek sponsor placement or company motto detail on upper right/left sleeve.' },
  ];

  const steps = [
    {
      num: '01',
      title: 'Choose your product',
      desc: 'Browse our extensive range of apparel, gifts, drinkware, bags and branded merchandise.'
    },
    {
      num: '02',
      title: 'Share your requirement',
      desc: 'Tell us the quantity, preferred colour, branding requirement and customization details.'
    },
    {
      num: '03',
      title: 'Get your quote',
      desc: 'Wild Collective confirms honest bulk pricing and a digital artwork proof directly through WhatsApp.'
    },
    {
      num: '04',
      title: 'Confirm your order',
      desc: 'Finalize production with our team. Garments are stitched, printed, quality-tested and dispatched.'
    }
  ];

  return (
    <section id="custom-printing" className="py-16 sm:py-24 bg-[#f8f4ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e7e2ff] text-xs font-black uppercase tracking-wider text-[#1f1b64] mb-3">
            <Printer size={14} className="text-[#ff6948]" />
            <span>Wild Collective Custom Production</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#191633] tracking-tight">
            Your idea. Your identity. <br />
            <span className="text-[#1f1b64]">Your merchandise.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#575268] mt-3 leading-relaxed">
            Start with the object, then shape how your identity should live on it. Wild Collective helps you move from a product choice to a clear customization and quotation conversation at honest factory prices.
          </p>
        </div>

        {/* The 4-Step Human Process ("From idea to order discussion") */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#d9d1e2] shadow-sm mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#ece7f2]">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#ff6948]">
                A Simple Human Process
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#191633] mt-1">
                From idea to order discussion.
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#575268] max-w-md">
              No cart. No confusing checkout. Just the right product information and a direct conversation with our Mysuru specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div key={st.num} className="relative space-y-2">
                <span className="font-display text-4xl sm:text-5xl font-black text-[#e7e2ff]">
                  {st.num}
                </span>
                <h4 className="font-display font-black text-lg text-[#1f1b64]">
                  {st.title}
                </h4>
                <p className="text-xs text-[#575268] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-[#ece7f2] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-bold text-[#575268]">
              Ready to start your order discussion?
            </span>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                "Hi Wild Collective, I would like to discuss custom printing and apparel branding requirements for my business."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#26d07c] text-[#0d3f23] font-black text-xs shadow-sm hover:bg-[#20b86c] transition-all"
            >
              <MessageCircle size={16} />
              <span>Discuss Requirements on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Custom Printing Techniques Explorer */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#ff6948]">
              Printing Methods
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#191633] mt-1">
              Select the right technique for your artwork.
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Technique Tabs */}
            <div className="lg:col-span-4 space-y-2">
              {PRINTING_TECHNIQUES.map((tech) => (
                <button
                  key={tech.name}
                  onClick={() => setActiveTechnique(tech)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    activeTechnique.name === tech.name
                      ? 'border-[#1f1b64] bg-[#1f1b64] text-white shadow-md'
                      : 'border-[#d9d1e2] bg-white text-[#575268] hover:bg-[#f2ede6]'
                  }`}
                >
                  <span className={`text-[10px] font-black uppercase tracking-wider block ${
                    activeTechnique.name === tech.name ? 'text-[#ffd84d]' : 'text-[#ff6948]'
                  }`}>
                    {tech.tag}
                  </span>
                  <h4 className={`font-display font-bold text-sm mt-0.5 ${
                    activeTechnique.name === tech.name ? 'text-white' : 'text-[#191633]'
                  }`}>
                    {tech.name}
                  </h4>
                </button>
              ))}
            </div>

            {/* Active Technique Showcase */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-8 border border-[#d9d1e2] shadow-sm space-y-6">
              <div>
                <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-[#e7e2ff] text-[#1f1b64]">
                  {activeTechnique.tag}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#1f1b64] mt-2">
                  {activeTechnique.name}
                </h3>
                <p className="text-sm text-[#575268] mt-3 leading-relaxed">
                  {activeTechnique.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#ece7f2]">
                <div className="bg-[#fffaf2] p-4 rounded-xl border border-[#d9d1e2]">
                  <p className="text-[10px] uppercase font-bold text-[#8d889b]">Best Suited For:</p>
                  <p className="text-xs font-semibold text-[#191633] mt-1">
                    {activeTechnique.bestFor}
                  </p>
                </div>
                <div className="bg-[#fffaf2] p-4 rounded-xl border border-[#d9d1e2]">
                  <p className="text-[10px] uppercase font-bold text-[#8d889b]">Durability & Longevity:</p>
                  <p className="text-xs font-semibold text-[#191633] mt-1">
                    {activeTechnique.durability}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#575268]">
                  Not sure which method fits your artwork? We recommend the best method for your budget.
                </span>
                <button
                  onClick={onExploreCatalogue}
                  className="px-4 py-2 rounded-xl bg-[#1f1b64] hover:bg-[#17134f] text-white text-xs font-bold shrink-0"
                >
                  Browse Products
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Placement Guide */}
        <div className="bg-white rounded-3xl p-8 border border-[#d9d1e2]">
          <h3 className="font-display font-black text-xl text-[#191633] mb-6">
            Recommended Branding Placements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {placementGuides.map((guide) => (
              <div key={guide.name} className="p-4 rounded-xl bg-[#fffaf2] border border-[#d9d1e2]">
                <span className="text-[10px] font-black uppercase text-[#ff6948] bg-[#ffd1dc]/40 px-2 py-0.5 rounded">
                  {guide.dim}
                </span>
                <h4 className="font-display font-bold text-sm text-[#1f1b64] mt-2">
                  {guide.name}
                </h4>
                <p className="text-xs text-[#575268] mt-1 leading-relaxed">
                  {guide.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
