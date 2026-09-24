import React, { useState } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  Instagram, 
  Check, 
  Copy,
  Building
} from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Apparel / T-Shirts');
  const [quantity, setQuantity] = useState('50');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const whatsappMessage = `Hi Wild Collective,\n\nI would like to request a quotation:\n\n*Name:* ${name || 'N/A'}\n*Company/Org:* ${organization || 'N/A'}\n*Phone:* ${phone || 'N/A'}\n*Product Category:* ${category}\n*Quantity:* ${quantity} units\n*Requirement Details:* ${notes || 'Standard custom branding'}\n\nPlease share the formal quotation and artwork proof.`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const link = document.createElement('a');
    link.href = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.click();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(whatsappMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-[#dddddd] pb-10 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f3ef] text-xs font-black uppercase tracking-wider text-[#a58c6d] mb-3">
            <Building size={13} />
            <span>Connect with Wild Collective</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-black text-[#2f2f2f] tracking-tight">
            Contact Wild Collective for <br />
            <span className="text-[#2f2f2f]">Custom Product Quotes.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#666666] mt-3 max-w-2xl leading-relaxed">
            Reach out directly for custom T-shirt printing, branded merchandise, corporate gifts and bulk product quotations. Honest, direct factory prices. We confirm details quickly on WhatsApp or over a call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Action Box */}
            <div className="bg-[#26d07c]/15 border-2 border-[#26d07c] rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#26d07c] text-[#0d3f23] flex items-center justify-center shadow-sm">
                <MessageCircle size={26} className="fill-[#0d3f23]" />
              </div>
              <h3 className="font-display font-black text-2xl text-[#0d3f23]">
                Instant WhatsApp Support
              </h3>
              <p className="text-xs text-[#4d6438] leading-relaxed">
                Fastest way to get catalog PDFs, shade cards, and instant volume pricing.
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                  "Hi Wild Collective, I would like to discuss custom apparel / merchandise quotation."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#26d07c] hover:bg-[#20b86c] text-[#0d3f23] font-black text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Chat on WhatsApp ({COMPANY_INFO.whatsapp})</span>
              </a>
            </div>

            {/* Direct Phone & Email */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#dddddd] space-y-5 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#f1ebe3] text-[#2f2f2f] flex items-center justify-center shrink-0">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#2f2f2f]">Call Our Team</h4>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-base font-extrabold text-[#2f2f2f] hover:underline block mt-0.5">
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-xs text-[#666666]">Mon - Sat: 9:30 AM - 7:30 PM IST</p>
                </div>
              </div>

              <div className="border-t border-[#ececec] pt-4 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#efe7dc]/40 text-[#a58c6d] flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-sm text-[#2f2f2f]">Email Communications</h4>
                  {COMPANY_INFO.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="text-xs font-semibold text-[#2f2f2f] hover:underline block"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#ececec] pt-4 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#f5f3ef] text-[#666666] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#2f2f2f]">Factory & Registered Office</h4>
                  <p className="text-xs text-[#2f2f2f] font-bold mt-0.5">{COMPANY_INFO.legalName}</p>
                  <p className="text-xs text-[#666666] leading-relaxed mt-0.5">
                    {COMPANY_INFO.address}
                  </p>
                  <div className="mt-2 text-[11px] font-bold text-[#2f2f2f] bg-[#faf9f7] px-2.5 py-1 rounded-md inline-block">
                    GSTIN: {COMPANY_INFO.gstin}
                  </div>
                </div>
              </div>

              <div className="border-t border-[#ececec] pt-4 flex items-center justify-between">
                <a
                  href={COMPANY_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#2f2f2f] hover:text-[#a58c6d] flex items-center gap-1.5"
                >
                  <Instagram size={16} />
                  <span>Follow @wildcollective.store</span>
                </a>
                <span className="text-[11px] text-[#8f8f8f]">Mysuru, Karnataka</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quotation Builder Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#dddddd] shadow-xl">
            <div className="border-b border-[#ececec] pb-6 mb-6">
              <h3 className="font-display font-black text-2xl text-[#2f2f2f]">
                Share Your Order Requirement
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] mt-1">
                Fill in your expected requirement. We will formulate a formal quote, prepare sample proofs, and continue with you directly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#2f2f2f]">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-[#dddddd] bg-[#ffffff] focus:outline-none focus:border-[#2f2f2f]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#2f2f2f]">Company / Institution *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Infosys Mysuru / Vidyavardhaka CE"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-[#dddddd] bg-[#ffffff] focus:outline-none focus:border-[#2f2f2f]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#2f2f2f]">Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-[#dddddd] bg-[#ffffff] focus:outline-none focus:border-[#2f2f2f]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#2f2f2f]">Product Interest</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-[#dddddd] bg-[#ffffff] font-semibold text-[#2f2f2f] focus:outline-none focus:border-[#2f2f2f]"
                  >
                    <option value="Apparel / T-Shirts">Apparel (Round Neck, Collar Polo, Hoodies)</option>
                    <option value="Swing Style Golf T-Shirts">Swing Style Golf T-Shirts (7 Performance Prints)</option>
                    <option value="Corporate Gift Box / Welcome Kit">Corporate Gift Set / Welcome Hamper</option>
                    <option value="Drinkware / UV Bottles & Mugs">Drinkware (UV Insulated Bottles, Mugs)</option>
                    <option value="Bags (Tote, Jute, Backpacks)">Bags (Canvas Tote, Jute, Backpacks)</option>
                    <option value="Caps & Headwear">Caps & Headwear</option>
                    <option value="Diaries, Metal Pens & Stationery">Diaries, Metal Pens & Badges</option>
                    <option value="Custom Flags, Umbrellas & Other">Custom Flags, Umbrellas & Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#2f2f2f]">Estimated Order Quantity</label>
                <div className="grid grid-cols-5 gap-2">
                  {['25', '50', '100', '250', '500+'].map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setQuantity(qty)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                        quantity === qty
                          ? 'bg-[#2f2f2f] text-white border-[#2f2f2f]'
                          : 'bg-[#ffffff] text-[#666666] border-[#dddddd] hover:bg-[#f5f3ef]'
                      }`}
                    >
                      {qty} pcs
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#2f2f2f]">
                  Brief Requirement & Delivery Target
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. We require 100 collar polo T-shirts with embroidered logo on chest for our tech symposium in Mysuru by next week..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-[#dddddd] bg-[#ffffff] focus:outline-none focus:border-[#2f2f2f]"
                />
              </div>

              <div className="pt-3 space-y-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#26d07c] hover:bg-[#20b86c] text-[#0d3f23] font-black text-sm flex items-center justify-center gap-2 shadow-md transition-transform transform active:scale-98"
                >
                  <MessageCircle size={18} className="fill-[#0d3f23]" />
                  <span>Send Requirement Directly to WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="w-full py-2.5 px-4 rounded-xl border border-[#dddddd] hover:bg-[#f5f3ef] text-[#666666] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  {copied ? <Check size={14} className="text-[#26d07c]" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied brief to clipboard!' : 'Copy brief text to clipboard'}</span>
                </button>
              </div>

              {submitted && (
                <div className="p-3 rounded-xl bg-[#e4ead9] text-[#4d6438] text-xs font-bold text-center">
                  WhatsApp opened in a new tab! If it didn&apos;t open, click &quot;Chat on WhatsApp&quot; or copy the brief above.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
