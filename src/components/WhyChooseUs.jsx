import React from 'react';
import { UserCheck, Clock, Award, ShieldCheck, Sliders, ArrowRight, Shield } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

// Safe icon map — Flame may not exist in all lucide versions, use Shield as fallback
const Flame = Shield;

export default function WhyChooseUs({ onOpenQuoteModal }) {
  const iconsMap = {
    UserCheck,
    Clock,
    Award,
    ShieldCheck,
    Flame,
    Sliders
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-slate-950 relative border-t border-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Verifiable Trust & Discipline</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Why Choose <span className="gold-gradient-text">Pushkar Security Services?</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Built on strict operational discipline, verified personnel, and active supervisory oversight.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.whyChooseUs.map((item, idx) => {
            const IconComponent = iconsMap[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-6 sm:p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-amber-500/5 group text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-amber-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Verifiable Standard</span>
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-xl shadow-amber-500/20 hover:scale-105"
          >
            <span>Request Security Guard Deployment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
