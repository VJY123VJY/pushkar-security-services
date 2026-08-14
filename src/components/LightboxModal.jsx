import React from 'react';
import { X, Shield, Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function LightboxModal({ item, onClose, onOpenQuoteModal }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full overflow-hidden relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-700 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Lightbox Image */}
        <div className="relative h-72 sm:h-96 bg-slate-950 overflow-hidden">
          <img
            src={item.url}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        {/* Info Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400">
              {item.category} Security
            </span>
            <span className="text-xs text-slate-400">Pushkar Security Services</span>
          </div>

          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
          <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.telUrl}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call {siteConfig.phone}</span>
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal();
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md"
            >
              Request Quote For This Service
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
