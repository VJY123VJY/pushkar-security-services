import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function FloatingButtons({ onOpenQuoteModal }) {
  return (
    <>
      {/* Desktop & Mobile Floating WhatsApp Widget (Bottom-Right) */}
      <div className="fixed bottom-20 md:bottom-8 right-5 z-40 flex flex-col items-end gap-3">
        
        {/* Quick Quote Floating Trigger (Desktop) */}
        <button
          onClick={onOpenQuoteModal}
          className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-amber-500/40 text-amber-400 text-xs font-bold shadow-xl hover:scale-105 transition-all"
        >
          <span>Request Quote</span>
        </button>

        {/* Floating WhatsApp Action Circle */}
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-900/50 transition-transform duration-300 hover:scale-110 group"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none"></span>
          <MessageSquare className="w-7 h-7 fill-white" />
          
          {/* Tooltip Hover Label */}
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            Chat on WhatsApp (+91 88885 34926)
          </span>
        </a>
      </div>

      {/* Mobile Sticky Action Bar (Fixed Bottom Toolbar for Mobile Devices) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 grid grid-cols-2 gap-2 shadow-2xl">
        <a
          href={siteConfig.telUrl}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 active:bg-blue-700 shadow-md"
        >
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </a>

        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 active:bg-emerald-700 shadow-md"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </>
  );
}
