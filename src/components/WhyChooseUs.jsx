import React from 'react';
import { UserCheck, Clock, Award, Zap, Sliders, Headphones, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const iconMap = {
  UserCheck,
  Clock,
  Award,
  Zap,
  Sliders,
  Headphones
};

export default function WhyChooseUs({ onOpenQuoteModal }) {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-slate-900/50 relative border-t border-slate-900">
      
      {/* Glow background accent */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Uncompromised Vigilance & Integrity</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Why Choose <span className="gold-gradient-text">Pushkar Security Services?</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            We focus on strict discipline, thorough background screening, active field supervision, and prompt communication to safeguard your property and citizens.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon] || UserCheck;

            return (
              <div
                key={index}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-7 hover:border-amber-500/40 hover:bg-slate-900 transition-all duration-300 group shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-amber-500/40 group-hover:bg-amber-500/10 transition-colors">
                  <IconComponent className="w-7 h-7 text-amber-400 group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Grounded Commitment Note */}
        <div className="mt-12 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Need a custom security force deployment?</h4>
            <p className="text-slate-400 text-sm">We provide tailored guard shifts, supervisor checks, and duty rosters suited to your site.</p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-lg flex-shrink-0"
          >
            Consult With Our Team
          </button>
        </div>

      </div>
    </section>
  );
}
