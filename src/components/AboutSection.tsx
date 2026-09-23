import React from 'react';
import { 
  Building2, 
  Scissors, 
  Printer, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  HeartHandshake, 
  Users2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { BRAND_FAMILY, COMPANY_INFO } from '../data/products';

export const AboutSection: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  const productionSteps = [
    {
      num: '01',
      title: 'Milled Fabric Selection',
      desc: 'We inspect yarn density, shrinkage, colorfastness, and bio-wash softness across cotton, micro-poly, and blended knits.'
    },
    {
      num: '02',
      title: 'Patterning & Precision Cutting',
      desc: 'Ergonomic sizing tailored for modern Indian fits with consistent chest, sleeve, and shoulder proportions.'
    },
    {
      num: '03',
      title: 'Decoration & Print Unit',
      desc: 'Direct-to-Film (DTF), high-density screen printing, and Tajima computerized embroidery run under strict color matching.'
    },
    {
      num: '04',
      title: 'Assembly & Reinforcement',
      desc: 'Double-needle hem stitching, shoulder-to-shoulder neck taping, and bar-tacked stress points ensure long garment life.'
    },
    {
      num: '05',
      title: '100% Quality Inspection',
      desc: 'Every single piece is steam pressed, individually examined for stitch tension and print registration, and cleanly boxed.'
    },
    {
      num: '06',
      title: 'Direct Mysuru Dispatch',
      desc: 'Swift delivery across Mysuru, Bengaluru, throughout Karnataka and nationwide with reliable courier partners.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#fffaf2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-[#d9d1e2] pb-10 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2ede6] text-xs font-black uppercase tracking-wider text-[#ff6948] mb-3">
            <Building2 size={13} />
            <span>Mysuru Roots & Manufacturing</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-black text-[#191633] tracking-tight">
            Built for Identity. <br />
            <span className="text-[#1f1b64] italic underline decoration-[#ff6948] decoration-4">
              Made to represent you.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#575268] mt-4 max-w-3xl leading-relaxed">
            <strong>Wild Collective</strong> is a modern custom apparel and merchandise brand creating thoughtful, dependable clothing and corporate gifts for businesses, institutions, schools, events, teams, brands and individuals. All products come with honest, direct factory pricing.
          </p>
        </div>

        {/* Narrative & Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#1f1b64]">
              Custom apparel for work, teams, events and identity.
            </h3>
            <p className="text-sm sm:text-base text-[#575268] leading-relaxed">
              With a strong focus on quality, comfort, design and dependable service, Wild Collective provides customized apparel solutions that bring ideas to life. From selecting the right fabric and fit to printing, embroidery and finishing, we pay attention to the details that help every garment represent your brand with pride.
            </p>
            <p className="text-sm sm:text-base text-[#575268] leading-relaxed">
              Whether you need 25 customized T-shirts for a milestone event or a multi-thousand bulk order for an enterprise rollout, we work closely with you to understand the requirement and prepare apparel strictly around your specifications at honest factory rates.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#ece7f2]">
              <div className="flex items-start gap-2.5">
                <ShieldCheck size={20} className="text-[#26d07c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#191633]">GST Registered Entity</h4>
                  <p className="text-xs text-[#575268]">GSTIN: 29AAJCK3522F1ZK</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={20} className="text-[#ff6948] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#191633]">Fort Mohalla, Mysuru</h4>
                  <p className="text-xs text-[#575268]">Local unit, national delivery</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#1f1b64] to-[#17134f] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#ffd84d] text-[#1f1b64] flex items-center justify-center font-black text-xl">
                T
              </div>
              <h4 className="font-display font-black text-2xl text-[#fffaf2]">
                &quot;No cart. No confusing checkout. Just direct conversation and real craft.&quot;
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We believe that bulk merchandise and custom corporate gifts require human attention to fabric GSM, pantone shades, logo fidelity, and size distribution. That’s why we partner directly with our clients from proof to packing.
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span>KNITTING STORY INDIA Pvt Ltd</span>
                <span className="text-[#ffd84d] font-bold">Mysuru, Karnataka</span>
              </div>
            </div>
          </div>
        </div>

        {/* The Production Workflow */}
        <div className="bg-[#f8f4ee] rounded-3xl p-8 sm:p-12 border border-[#d9d1e2] mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#ff6948]">
              Quality Assurance
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#191633] mt-1">
              Inside our production unit.
            </h3>
            <p className="text-xs sm:text-sm text-[#575268] mt-2">
              Where apparel moves seamlessly from raw knits to printing, embroidery, finishing and packing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionSteps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-6 border border-[#d9d1e2] shadow-xs hover:border-[#1f1b64] transition-colors"
              >
                <span className="font-display font-black text-2xl text-[#ff6948]">
                  {step.num}
                </span>
                <h4 className="font-display font-black text-base text-[#191633] mt-2 mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-[#575268] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Family Portfolio Showcase */}
        <div>
          <h3 className="font-display font-black text-2xl text-[#191633] mb-6">
            Our Brand Family Labels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRAND_FAMILY.map((brand) => (
              <div key={brand.name} className="bg-white rounded-2xl p-6 border border-[#d9d1e2]">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#f2ede6] text-[#1f1b64]">
                  {brand.badge}
                </span>
                <h4 className="font-display font-black text-xl text-[#1f1b64] mt-2">
                  {brand.name}
                </h4>
                <p className="text-xs font-bold text-[#ff6948] mt-1 mb-2">
                  {brand.tagline}
                </p>
                <p className="text-xs text-[#575268] leading-relaxed">
                  {brand.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
