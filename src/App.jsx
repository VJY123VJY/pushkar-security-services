import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import LicenceSection from './components/LicenceSection';
import Process from './components/Process';
import Sectors from './components/Sectors';
import Gallery from './components/Gallery';
import QuoteCTA from './components/QuoteCTA';
import MapSection from './components/MapSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import QuoteModal from './components/QuoteModal';
import LightboxModal from './components/LightboxModal';
import AnimatedLogoBg from './components/AnimatedLogoBg';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState(null);
  const [lightboxItem, setLightboxItem] = useState(null);
  const mainRef = useRef(null);

  const handleOpenQuoteModal = (service = null) => {
    setSelectedServiceForQuote(service);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedServiceForQuote(null);
  };

  const handleOpenLicenceModal = () => {
    setLightboxItem({
      url: siteConfig.licenceAsset,
      title: "Government of Maharashtra Private Security Agency Licence",
      category: "Government Licence",
      licenceNo: siteConfig.licenceNo,
      desc: "Official Private Security Agency Licence issued by the Government of Maharashtra (Licence No. PSA/L/24/MH/2026/MAR/3/6002) granting authorization to run Private Security Agency 'PUSHKAR SECURITY SERVICES' in the entire state of Maharashtra.",
      isLicence: true
    });
  };

  // Global scroll-reveal observer for all sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const selectors = [
      '.scroll-reveal',
      '.scroll-reveal-left',
      '.scroll-reveal-right',
      '.scroll-reveal-scale',
      '.stagger-children',
    ];

    const elements = mainRef.current?.querySelectorAll(selectors.join(', '));
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans relative">
      {/* Animated Logo Watermark Background */}
      <AnimatedLogoBg />
      
      {/* Sticky Navigation Bar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections */}
      <main ref={mainRef}>
        {/* Section 1 & 2: Hero */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Section 3: Services */}
        <Services onSelectService={(service) => handleOpenQuoteModal(service)} />

        {/* Section 4: About Us */}
        <AboutUs />

        {/* Section 5: Why Choose Us */}
        <WhyChooseUs onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Section 6: Government Licence & Compliance */}
        <LicenceSection onOpenLicenceModal={handleOpenLicenceModal} />

        {/* Section 7: Process */}
        <Process onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Section 8: Sectors */}
        <Sectors onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Section 9: Gallery */}
        <Gallery onOpenLightbox={(item) => setLightboxItem(item)} />

        {/* Section 10: Pricing / Quote Banner */}
        <QuoteCTA onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Section 11: Location Map */}
        <MapSection />

        {/* Section 12 & 13: Contact */}
        <Contact 
          preselectedService={selectedServiceForQuote?.title} 
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />
      </main>

      {/* Section 14: Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingButtons onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        selectedService={selectedServiceForQuote}
      />

      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

    </div>
  );
}
