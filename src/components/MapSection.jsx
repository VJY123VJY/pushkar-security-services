import React, { useEffect, useRef } from 'react';
import { MapPin, Navigation, Phone, Clock, ExternalLink, Shield } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function MapSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .stagger-children');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="location"
      ref={sectionRef}
      className="py-20 md:py-28 bg-slate-950 relative map-section-wrapper border-t border-slate-900"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold mb-5">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Our Office</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Our <span className="gold-gradient-text">Location</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-4">
            Located in Hinjawadi, Pune — the heart of Maharashtra's IT corridor. Visit our office for a direct consultation.
          </p>
        </div>

        {/* Map + Info Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Info Cards */}
          <div className="lg:col-span-4 space-y-5 stagger-children scroll-reveal-left">

            {/* Address Card */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl hover:border-amber-500/30 transition-all duration-300 text-left">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 animate-float">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Registered Office</h4>
                  <p className="text-xs text-slate-400">Pushkar Security Services</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {siteConfig.address}
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl hover:border-amber-500/30 transition-all duration-300 text-left">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0 animate-float-delay">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Quick Contact</h4>
                  <p className="text-xs text-slate-400">Available for inquiries</p>
                </div>
              </div>
              <a href={siteConfig.telUrl} className="flex items-center gap-2 text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                {siteConfig.phone}
              </a>
            </div>

            {/* Hours Card */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl hover:border-amber-500/30 transition-all duration-300 text-left">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-600/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 animate-float-slow">
                  <Clock className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Operating Hours</h4>
                  <p className="text-xs text-slate-400">Guard deployment 24/7</p>
                </div>
              </div>
              <div className="space-y-1.5 text-sm text-slate-300">
                <div className="flex justify-between">
                  <span>Office Hours</span>
                  <span className="text-white font-medium">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Security Coverage</span>
                  <span className="text-emerald-400 font-semibold">24/7</span>
                </div>
              </div>
            </div>

            {/* Directions CTA */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sakhare+Wasti+Hinjawadi+Mulshi+Pune+411057"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 transition-all shadow-xl shadow-amber-500/20 hover:scale-[1.02] w-full"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right: Map Embed */}
          <div className="lg:col-span-8 scroll-reveal-right">
            <div className="map-embed-container h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[580px] bg-slate-900 border border-slate-800 relative">
              
              {/* Map header bar */}
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-amber-400 animate-radar absolute" />
                    <div className="w-3 h-3 rounded-full bg-amber-400 relative z-10" />
                  </div>
                  <span className="text-xs font-semibold text-white">LIVE LOCATION • Hinjawadi, Pune</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-700">
                  <Shield className="w-3 h-3 text-amber-400" />
                  <span className="text-[10px] font-semibold text-slate-300">PUSHKAR HQ</span>
                </div>
              </div>

              {/* Google Maps iframe */}
              <iframe
                title="Pushkar Security Services Office Location — Hinjawadi, Mulshi, Pune"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.3996088967516!2d73.71399877503756!3d18.5882749820066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb15b2e28d7d%3A0x85e4929d5ea57b97!2sHinjawadi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1723616400000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'invert(90%) hue-rotate(180deg) saturate(0.85) contrast(1.1)',
                  display: 'block',
                  position: 'absolute',
                  inset: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none z-10" />

              {/* Floating location badge */}
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-700/60 shadow-2xl">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center animate-pin-bounce">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Pushkar Security Services</p>
                  <p className="text-[10px] text-slate-400">Sakhare Wasti, Hinjawadi, Pune 411057</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Service Area Banner */}
        <div className="mt-12 scroll-reveal">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-amber-400" />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-bold text-white">Service Coverage Area</h4>
                <p className="text-sm text-slate-400">We deploy security personnel across Pune, Pimpri-Chinchwad, PCMC, and surrounding Maharashtra regions.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Pune', 'Hinjawadi', 'PCMC', 'Mulshi', 'Wakad', 'Baner'].map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
