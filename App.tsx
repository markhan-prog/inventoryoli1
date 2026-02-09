import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import WaitlistSection from './components/WaitlistSection';
import ValueProps from './components/ValueProps';
import AiAssistant from './components/AiAssistant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow">
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        {/* Problemi ve çözüm değerimizi anlatan bölüm */}
        <section id="why" className="bg-slate-50 py-24 scroll-mt-24">
          <ValueProps />
        </section>

        {/* Kurulum süreci adımları */}
        <section id="features" className="bg-white py-24 scroll-mt-24">
          <Features />
        </section>

        {/* AI Asistan entegrasyonu */}
        <section id="ai-assistant" className="bg-blue-900 py-24 scroll-mt-24">
          <AiAssistant />
        </section>

        {/* Fiyatlandırma tablosu */}
        <section id="pricing" className="bg-slate-50 py-24 scroll-mt-24">
          <Pricing />
        </section>

        {/* Final CTA / Bekleme Listesi Formu */}
        <section id="waitlist" className="bg-white py-24 scroll-mt-24">
          <WaitlistSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;