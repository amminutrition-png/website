import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProductSection from '../components/home/ProductSection';
import GoodnessScoopSection from '../components/home/GoodnessScoopSection';
import IngredientsSection from '../components/home/IngredientsSection';
import PreparationSection from '../components/home/PreparationSection';
import LabResultsSection from '../components/home/LabResultsSection';
import PromiseSection from '../components/home/PromiseSection';
import DeliveryJourneySection from '../components/home/DeliveryJourneySection';
import ReviewsSection from '../components/home/ReviewsSection';
import CtaBannerSection from '../components/home/CtaBannerSection';
import FaqSection from '../components/home/FaqSection';

export default function HomePage({ 
  quantity, 
  setQuantity, 
  onOpenOrder, 
  onOpenLightbox 
}) {
  const scrollToProduct = () => {
    const el = document.getElementById('product');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="home-page-main">
      {/* 1. Hero Section */}
      <HeroSection 
        onOpenOrder={onOpenOrder} 
        onDiscoverProduct={scrollToProduct} 
      />

      {/* 2. Product Detail Section */}
      <ProductSection 
        quantity={quantity} 
        setQuantity={setQuantity} 
        onBuyNow={onOpenOrder}
        onOpenLightbox={onOpenLightbox}
      />

      {/* 3. Goodness in Every Scoop Band */}
      <GoodnessScoopSection />

      {/* 4. Wholesome Ingredients */}
      <IngredientsSection />

      {/* 4B. Certified Lab Results & Nutritional Demonstration */}
      <LabResultsSection />

      {/* 5. How to Prepare */}
      <PreparationSection />

      {/* 6. Our Promise of Purity */}
      <PromiseSection />

      {/* 7. From Our Factory to Your Family */}
      <DeliveryJourneySection />

      {/* 8. Customer Reviews Carousel */}
      <ReviewsSection />

      {/* 9. Final Homepage CTA Banner */}
      <CtaBannerSection onOpenOrder={onOpenOrder} />

      {/* 10. Frequently Asked Questions */}
      <FaqSection onOpenOrder={onOpenOrder} />
    </main>
  );
}
