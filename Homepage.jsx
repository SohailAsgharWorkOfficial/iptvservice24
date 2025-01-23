// src/pages/Homepage.jsx
import React from 'react';
import HeroSection from './HeroSection';
import PricingPage from './PricingPage';
import FeatureCards from './FeatureCards';
import SubscriptionSection from './SubscriptionSection';
import PremiumFeaturesSection from './PremiumFeaturesSection';
import FAQSection from './FAQSection';
import PromoBanner from './PromoBanner';
import { Banner2 } from './Banner2';
import WhatsAppButton from './WhatsAppButton'; // Import here

export const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <PricingPage />
      <FeatureCards />
      <SubscriptionSection />
      <PremiumFeaturesSection />
      <FAQSection />
      <Banner2 />

      {/* WhatsApp Button */}
      <WhatsAppButton />  {/* This will add the button to the homepage */}
    </div>
  );
};
