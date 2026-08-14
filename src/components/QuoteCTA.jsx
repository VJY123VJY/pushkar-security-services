import React from 'react';
import { Shield, MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function QuoteCTA({ onOpenQuoteModal }) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative border-t border-slate-800 overflow-hidden">
      
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-glass-card rounded-3xl p-8 sm:p-12 border border-slate-700/80 shadow-2xl relative overflow-hidden text-center md:text-left grid md:grid-cols-12 gap-8 items-center">
          
          {/* Text Content */}
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              <span>Transparent & Fair Assessment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Get a Customized <span className="gold-gradient-text">Security Quote</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Security requirements vary depending on location, shift hours, number of guards, and type of property. Contact us today for a customized quotation tailored to your exact budget and safety needs.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
            <button
              onClick={onOpenQuoteModal}
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-xl shadow-amber-500/20 hover:scale-[1.02]"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4 text-emerald-100" />
              <span>Instant WhatsApp Quote</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
