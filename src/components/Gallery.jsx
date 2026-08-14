import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Gallery({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Industrial Security', 'Security Personnel', 'Site Protection', 'Professional Security'];

  const filteredItems = activeCategory === 'All'
    ? siteConfig.gallery
    : siteConfig.gallery.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-slate-950 relative border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold">
            <Camera className="w-3.5 h-3.5" />
            <span>On-Site Guarding Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Pushkar Security <span className="gold-gradient-text">Gallery</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Authentic photographs of Pushkar security guards deployed on active site protection duty.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat === 'All' ? 'All Operations' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer shadow-xl aspect-[4/3]"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>

              {/* Hover Icon Button */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/90 backdrop-blur-md border border-amber-500/40 flex items-center justify-center text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Content Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-400 mb-2 inline-block">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
