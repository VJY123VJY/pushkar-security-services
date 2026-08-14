import React, { useState } from 'react';
import { Camera, Maximize2, Eye } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Gallery({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Guards', 'Gate', 'Corporate', 'Industrial', 'Monitoring', 'Event'];

  const filteredItems = activeCategory === 'All'
    ? siteConfig.gallery
    : siteConfig.gallery.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-slate-900/60 relative border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-800 text-blue-400 text-xs font-semibold">
            <Camera className="w-3.5 h-3.5" />
            <span>On-Duty & Operations Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Security Service <span className="gold-gradient-text">Gallery</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            A visual overview of site security deployments, visitor verification, gate management, and active property supervision.
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
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-900 border border-slate-800'
              }`}
            >
              {cat === 'All' ? 'All Operations' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 cursor-pointer shadow-lg aspect-[4/3]"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Hover Icon Button */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 flex items-center justify-center text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Content Card Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-400 mb-2 inline-block">
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

        <p className="text-center text-xs text-slate-300 mt-8">
          * Representative images illustrating our standard uniform, visitor check-in, gate duty, and guarding protocols.
        </p>

      </div>
    </section>
  );
}
