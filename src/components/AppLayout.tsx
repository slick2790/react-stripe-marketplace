import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturedProducts from './FeaturedProducts';
import StatsSection from './StatsSection';
import CTASection from './CTASection';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default AppLayout;
