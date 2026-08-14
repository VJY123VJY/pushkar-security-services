import React, { useState } from 'react';
import { 
  Building2, Home, Landmark, Sparkles, Factory, ShieldAlert, 
  Users, Check, ArrowRight, X 
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const iconMap = {
  Building2,
  Home,
  Landmark,
  Sparkles,
  Factory,
  ShieldAlert,
  Users
};

export default function Services({ onSelectService }) {
  const [activeModalService, setActiveModalService] = useState(null);

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-950 relative border-t border-slate-900">
      
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold tracking-wide">
            <span>Verified Protective Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Our Security <span className="gold-gradient-text">Services</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Pushkar Security Services provides professional, disciplined security guard services across our full operational business scope.
          </p>
        </div>

        {/* 7 Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.services.map((service) => {
            const IconComponent = iconMap[service.icon] || ShieldAlert;

            return (
              <div
                key={service.id}
                className="bg-slate-900/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden border border-slate-800 hover:border-amber-500/40 shadow-xl"
              >
                {/* Subtle card glow accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-amber-500/20 transition-all"></div>

                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors shadow-inner">
                      <IconComponent className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-950 text-slate-300 border border-slate-800">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Key Features Bullet List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-950 hover:bg-slate-800 border border-slate-800 transition-colors text-center"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => onSelectService(service)}
                    className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                {React.createElement(iconMap[activeModalService.icon] || ShieldAlert, { className: "w-6 h-6 text-amber-400" })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{activeModalService.title}</h3>
                <span className="text-xs text-amber-400 font-semibold">{activeModalService.badge}</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {activeModalService.fullDesc}
            </p>

            <div className="space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Key Service Highlights:</h4>
              <ul className="space-y-2">
                {activeModalService.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  const s = activeModalService;
                  setActiveModalService(null);
                  onSelectService(s);
                }}
                className="w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all text-center shadow-lg"
              >
                Request Quote For {activeModalService.title}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
