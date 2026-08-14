import React, { useState, useEffect } from 'react';
import { Shield, Phone, MessageSquare, Menu, X, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3' 
        : 'bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/40 group-hover:border-amber-400 shadow-md shadow-amber-500/10 transition-all">
              <Shield className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></span>
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5 font-display">
                <span>PUSHKAR</span>
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">SECURITY</span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase -mt-0.5">Services & Protective Force</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Call & WhatsApp Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.telUrl}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Call Now</span>
            </a>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all hover:scale-105 shadow-md shadow-emerald-900/30"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-100" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all hover:scale-105 shadow-md shadow-amber-500/20"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={siteConfig.telUrl}
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600/90 text-white hover:bg-blue-500 transition-colors"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 mt-3 animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="flex flex-col gap-2">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-amber-400 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}

            <div className="h-px bg-slate-800 my-2"></div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={siteConfig.telUrl}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 border border-slate-700"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call Now</span>
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-600"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="mt-2 w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all text-center shadow-lg"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
