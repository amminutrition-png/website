import React from 'react';
import AboutHeroSection from '../components/about/AboutHeroSection';
import MissionVisionSection from '../components/about/MissionVisionSection';
import TraditionalProcessSection from '../components/about/TraditionalProcessSection';
import OurGoalSection from '../components/about/OurGoalSection';
import OurValuesSection from '../components/about/OurValuesSection';
import JourneyCtaSection from '../components/about/JourneyCtaSection';

export default function AboutPage({ onNavigate }) {
  const handleExploreProduct = () => {
    onNavigate('/');
    setTimeout(() => {
      const el = document.getElementById('product');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <main className="about-page-main">
      {/* 1. About Hero: Facility Panoramic & Brand Story */}
      <AboutHeroSection />

      {/* 2. Mission & Vision */}
      <MissionVisionSection />

      {/* 3. The Traditional Process & 3 Information Cards */}
      <TraditionalProcessSection />

      {/* 4. Our Goal Is Simple (Family Lifestyle Hero) */}
      <OurGoalSection />

      {/* 5. Our Values (5 Brand Pillars) */}
      <OurValuesSection />

      {/* 6. Be a Part of Our Journey CTA Banner */}
      <JourneyCtaSection onExploreProduct={handleExploreProduct} />
    </main>
  );
}
