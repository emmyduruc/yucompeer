'use client';
import AllFeaturesSection from '@/components/AllFeaturesSection';
import FaQSection from '@/components/FaQSection';
import FeaturesIntroSection from '@/components/FeaturesIntroSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ImageBackground from '@/components/ImageBackground';
import LandingPageHeader from '@/components/LandingPageHeader';

const HomePage = () => {
  return (
    <ImageBackground>
      <LandingPageHeader />
      <HeroSection />
      <div className="blur-[10px] -mt-12 bg-white p-12" />
      <FeaturesIntroSection id="features" />
      <div className="bg-white py-5 font-roboto px-4">
        <AllFeaturesSection />
        <FaQSection id="faqs" />
      </div>
      <Footer />
    </ImageBackground>
  );
};

export default HomePage;
