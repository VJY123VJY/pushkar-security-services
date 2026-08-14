import React from 'react';
import { Building, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Sectors({ onOpenQuoteModal }) {
  return (
    <section className="py-20 md:py-28 bg-slate-950 relative border-t border-slate-900">
      
      {/* Glow background accent */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Building className="w-3.5 h-3.5" />
            <span>Versatile Protection Coverage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Security Solutions <span className="gold-gradient-text">For</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            We deliver tailored security guard services customized to the operational demands and entry requirements of diverse sectors.
          </p>
        </div>

        {/* 10 Sectors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {siteConfig.sectors.map((sector, idx) => (
            <div
              key={idx}
              onClick={onOpenQuoteModal}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/50 hover:bg-slate-900 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {sector.icon}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  {sector.title}
                </h3>

                <p className="text-[11px] text-slate-400 mt-1">
                  {sector.tag}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>Inquire Guard</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
