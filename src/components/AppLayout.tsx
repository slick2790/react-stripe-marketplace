import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturedProducts from './FeaturedProducts';
import StatsSection from './StatsSection';
import CTASection from './CTASection';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {isHomePage ? (
        <>
          <HeroSection />
          <FeaturedProducts />
          <StatsSection />
          <CTASection />
        </>
      ) : (
        <main className="pt-16">
          <Outlet />
        </main>
      )}
      <Footer />
    </div>
  );
};

export default AppLayout;
