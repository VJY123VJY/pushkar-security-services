import React from 'react';
import { Phone, MessageSquare, MapPin, ArrowUp } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 relative pt-16 pb-24 md:pb-12 text-left">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col with Real Logo */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex items-center justify-center p-1 rounded-xl bg-slate-900 border border-amber-500/40 shadow-md">
                <img 
                  src={siteConfig.logoAsset} 
                  alt="Pushkar Security Services logo" 
                  className="w-10 h-10 object-contain rounded-lg"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white font-display tracking-tight">PUSHKAR</span>
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 ml-2">SECURITY</span>
              </div>
            </a>

            <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
              Pushkar Security Services — Professional Security Services & Protective Force
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Providing disciplined security personnel and customized protection solutions for residential societies, commercial offices, industrial sites, open plots, hotels, and events.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs font-medium">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
            
            <div className="space-y-2.5 text-xs">
              <a href={siteConfig.telUrl} className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Call Helpline: {siteConfig.phone}</span>
              </a>

              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>WhatsApp: {siteConfig.whatsapp}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{siteConfig.address}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Pushkar Security Services. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">Licensed Private Security Agency (MH)</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
