/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { CategoryNav } from './components/CategoryNav';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetailModal } from './components/ProductDetailModal';
import { GolfTShirtsSection } from './components/GolfTShirtsSection';
import { CorporateGiftBuilder } from './components/CorporateGiftBuilder';
import { CustomPrintingGuide } from './components/CustomPrintingGuide';
import { LiveMockupStudio } from './components/LiveMockupStudio';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PRODUCTS, Product } from './data/products';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [studioOpen, setStudioOpen] = useState<boolean>(false);

  // Scroll to top whenever tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleSelectProductById = (productId: string) => {
    const prod = PRODUCTS.find((p) => p.id === productId);
    if (prod) {
      setActiveProduct(prod);
    }
  };

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setActiveTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreGolf = () => {
    setActiveTab('golf');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenStudio = () => {
    setActiveTab('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#2f2f2f] selection:bg-[#a58c6d] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSelectProduct={handleSelectProductById}
        onOpenStudio={handleOpenStudio}
      />

      {/* Main Content Area based on Tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero
              onExploreProducts={() => {
                setActiveTab('products');
                setSelectedCategory('All Products');
              }}
              onExploreGolf={handleExploreGolf}
              onOpenStudio={handleOpenStudio}
              onSelectCategory={handleCategoryClick}
            />

            <MarqueeTicker />

            <CategoryNav
              onSelectCategory={handleCategoryClick}
              onExploreFullCatalogue={() => {
                setActiveTab('products');
                setSelectedCategory('All Products');
              }}
            />

            {/* Featured Catalog Preview */}
            <ProductCatalog
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              onOpenProductDetail={(prod) => setActiveProduct(prod)}
              onExploreGolf={handleExploreGolf}
            />

            {/* Interactive Corporate Gifting Section */}
            <CorporateGiftBuilder />

            {/* Golf T-Shirts Showcase Band */}
            <GolfTShirtsSection />

            {/* Printing Guide Briefing */}
            <CustomPrintingGuide
              onExploreCatalogue={() => {
                setActiveTab('products');
                setSelectedCategory('All Products');
              }}
            />

            {/* Contact & Quote Request */}
            <ContactSection />
          </>
        )}

        {activeTab === 'products' && (
          <div className="pt-6">
            <ProductCatalog
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              onOpenProductDetail={(prod) => setActiveProduct(prod)}
              onExploreGolf={handleExploreGolf}
            />
          </div>
        )}

        {activeTab === 'golf' && (
          <div className="pt-6">
            <GolfTShirtsSection />
          </div>
        )}

        {activeTab === 'custom-printing' && (
          <div className="pt-6">
            <CustomPrintingGuide
              onExploreCatalogue={() => {
                setActiveTab('products');
                setSelectedCategory('All Products');
              }}
            />
          </div>
        )}

        {activeTab === 'corporate-gifts' && (
          <div className="pt-6">
            <CorporateGiftBuilder />
          </div>
        )}

        {activeTab === 'studio' && (
          <div className="pt-6">
            <LiveMockupStudio onClose={() => setActiveTab('home')} />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="pt-6">
            <AboutSection onContactClick={() => setActiveTab('contact')} />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-6">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Global Product Detail Modal */}
      <ProductDetailModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onOpenStudio={() => {
          setActiveProduct(null);
          handleOpenStudio();
        }}
      />

      {/* Floating Action WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer
        onNavigate={(tab) => setActiveTab(tab)}
        onSelectCategory={handleCategoryClick}
      />
    </div>
  );
}
