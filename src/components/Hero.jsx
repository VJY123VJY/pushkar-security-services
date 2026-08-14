import React from 'react';
import { ShieldCheck, Phone, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-slate-950">
      {/* Dynamic Ambient Glow Background */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-badge-pulse"></span>
              <span>24/7 Protection Force • Pune & Surrounding Regions</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-display">
              Reliable Security. <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Trusted Protection.</span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Pushkar Security Services provides professional, disciplined security guard services to safeguard residential societies, commercial offices, industrial sites, open plots, hotels, and events.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 transition-all shadow-xl shadow-amber-500/20 hover:scale-[1.02]"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={siteConfig.telUrl}
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Now: {siteConfig.phone}</span>
              </a>
            </div>

            {/* Small Trust Points Grid */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-2 gap-4">
              {siteConfig.trustPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-950 border border-blue-500/40 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-300">{point}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Hero Visual Card - Fixed Real Security Guards Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 to-blue-600/30 rounded-3xl blur-xl opacity-75"></div>

              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
                {/* Real Pushkar Security Guards Photograph */}
                <img
                  src={siteConfig.guardsAsset}
                  alt="Pushkar Security Services security guards deployed at an industrial site"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-top hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Gradient vignette overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Floating Badge 1 - Verified & Trained Security Force */}
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700/60 shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Verified & Trained Force</p>
                    <p className="text-[10px] text-slate-300">Pushkar Guard Deployment</p>
                  </div>
                </div>

                {/* Floating Badge 2 - 24/7 Security Cover */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 shadow-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">24/7 Security Cover</p>
                      <p className="text-[11px] text-slate-400">Day & Night Guard Shifts</p>
                    </div>
                  </div>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md"
                  >
                    Enquire
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
