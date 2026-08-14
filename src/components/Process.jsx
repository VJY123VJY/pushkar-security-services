import React from 'react';
import { PhoneCall, FileSearch, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const iconMap = {
  PhoneCall,
  FileSearch,
  ShieldCheck,
  CheckCircle2
};

export default function Process({ onOpenQuoteModal }) {
  return (
    <section className="py-20 md:py-28 bg-slate-900/60 relative border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-800 text-blue-400 text-xs font-semibold">
            <span>Simple & Structured Deployment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            How We <span className="gold-gradient-text">Work</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Our straightforward 4-step onboarding ensures smooth deployment of security guards configured to your exact premises needs.
          </p>
        </div>

        {/* 4 Steps Container */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {siteConfig.processSteps.map((step, idx) => {
            const IconComp = iconMap[step.icon] || PhoneCall;

            return (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800/90 rounded-2xl p-6 relative group hover:border-amber-500/50 transition-all flex flex-col justify-between"
              >
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-amber-500/30 group-hover:text-amber-400 font-display transition-colors">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center">
                    <IconComp className="w-5 h-5 text-amber-400" />
                  </div>
                </div>

                {/* Step Info */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow indicator for desktop */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}

        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-xl shadow-amber-500/20"
          >
            <span>Start Step 1 - Request Quote Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
