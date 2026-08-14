import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import Process from './components/Process';
import Sectors from './components/Sectors';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import QuoteCTA from './components/QuoteCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import QuoteModal from './components/QuoteModal';
import LightboxModal from './components/LightboxModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState(null);
  const [lightboxItem, setLightboxItem] = useState(null);

  const handleOpenQuoteModal = (service = null) => {
    setSelectedServiceForQuote(service);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedServiceForQuote(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans">
      
      {/* Sticky Navigation Bar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1 & 2: Hero */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Section 3: Services */}
        <Services onSelectService={(service) => handleOpenQuoteModal(service)} />

        {/* Section 4: Why Choose Us */}
        <WhyChooseUs onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Section 5: About Us */}
        <AboutUs />

        {/* Section 6: How We Work (Process) */}
        <Process onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Section 7: Security Solutions For (Sectors) */}
        <Sectors onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Section 8: Gallery */}
        <Gallery onOpenLightbox={(item) => setLightboxItem(item)} />

        {/* Section 9: Testimonials */}
        <Testimonials />

        {/* Section 10: Pricing / Quote Banner */}
        <QuoteCTA onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Section 11 & 12: Contact & Google Maps */}
        <Contact preselectedService={selectedServiceForQuote?.title} />
      </main>

      {/* Section 13: Footer */}
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
