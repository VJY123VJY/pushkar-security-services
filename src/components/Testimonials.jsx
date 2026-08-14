import React from 'react';
import { Star, MessageSquareQuote, Info } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-950 relative border-t border-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Client Feedback & Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Client <span className="gold-gradient-text">Testimonials</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            See sample client feedback demonstrating our commitment to guard discipline, punctuality, and responsive property security.
          </p>

          {/* Explicit Notice Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-950/60 border border-blue-800/80 text-blue-300 text-xs">
            <Info className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span>Note: Sample review templates. These will be updated with live client reviews upon deployment.</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-7 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-200 text-sm leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">{item.author}</h4>
                  <p className="text-[11px] text-slate-400">{item.location}</p>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                  Sample Review
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
