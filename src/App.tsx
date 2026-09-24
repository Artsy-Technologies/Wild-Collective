/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { CategoryNav } from './components/CategoryNav';
import { FeaturedProducts, GiftingTeaser, ProcessSteps } from './components/HomeSections';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetailModal } from './components/ProductDetailModal';
import { GolfTShirtsSection } from './components/GolfTShirtsSection';
import { CorporateGiftBuilder } from './components/CorporateGiftBuilder';
import { CustomPrintingGuide } from './components/CustomPrintingGuide';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { LegalPage } from './components/LegalPage';
import { CtaBand } from './components/CtaBand';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { COMPANY_INFO, PRODUCTS, Product } from './data/products';
import { PRIVACY_POLICY, TERMS } from './data/legal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Scroll to top whenever tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const goTo = (tab: string) => {
    setActiveProduct(null);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProductById = (productId: string) => {
    const prod = PRODUCTS.find((p) => p.id === productId);
    if (prod) {
      setActiveProduct(prod);
    }
  };

  const showCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
    goTo('products');
  };

  const showAllProducts = () => showCategory('All Products');
  const buildQuote = () => goTo('contact');

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#2f2f2f] selection:bg-[#a58c6d] selection:text-white">
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          if (tab === 'products') setSelectedCategory('All Products');
          goTo(tab);
        }}
        onSelectProduct={handleSelectProductById}
      />

      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero onExploreProducts={showAllProducts} onExploreGolf={() => goTo('golf')} />
            <MarqueeTicker />
            <CategoryNav onSelectCategory={showCategory} onExploreFullCatalogue={showAllProducts} />
            <FeaturedProducts onOpenProductDetail={setActiveProduct} />
            <ProcessSteps />
            <GiftingTeaser onPlan={() => goTo('corporate-gifts')} />
            <CtaBand
              title="Ready to make your brand tangible?"
              copy="Tell us what you need, how many, and how you want it customized. We’ll continue the quotation on WhatsApp."
              onBuildQuote={buildQuote}
            />
          </>
        )}

        {activeTab === 'products' && (
          <ProductCatalog
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onOpenProductDetail={setActiveProduct}
            onBuildQuote={buildQuote}
          />
        )}

        {activeTab === 'golf' && <GolfTShirtsSection onExploreApparel={() => showCategory('Apparel')} />}

        {activeTab === 'custom-printing' && (
          <CustomPrintingGuide onExploreCatalogue={showAllProducts} onBuildQuote={buildQuote} />
        )}

        {activeTab === 'corporate-gifts' && (
          <CorporateGiftBuilder onOpenProductDetail={setActiveProduct} onBuildQuote={buildQuote} />
        )}

        {activeTab === 'about' && (
          <AboutSection onExploreApparel={() => showCategory('Apparel')} onBuildQuote={buildQuote} />
        )}

        {activeTab === 'contact' && <ContactSection />}

        {activeTab === 'privacy-policy' && (
          <LegalPage doc={PRIVACY_POLICY} contactEmail={COMPANY_INFO.emails[0]} />
        )}

        {activeTab === 'terms' && <LegalPage doc={TERMS} contactEmail={COMPANY_INFO.emails[0]} />}
      </main>

      <ProductDetailModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onOpenProduct={setActiveProduct}
        onBuildQuote={buildQuote}
      />

      <FloatingWhatsApp />

      <Footer onNavigate={goTo} onSelectCategory={showCategory} />
    </div>
  );
}
