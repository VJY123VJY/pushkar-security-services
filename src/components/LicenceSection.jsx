import React from 'react';
import { ShieldCheck, ExternalLink, Award, FileCheck2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function LicenceSection({ onOpenLicenceModal }) {
  return (
    <section id="licence" className="py-20 md:py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Government Verification & Compliance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Licensed & Trusted <span className="gold-gradient-text">Security Services</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Operating as a licensed private security agency in Maharashtra.
          </p>
        </div>

        {/* Certificate Feature Layout */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-center bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>

          {/* Certificate Thumbnail Preview (Left Column) */}
          <div className="md:col-span-5 relative group cursor-pointer" onClick={() => onOpenLicenceModal(siteConfig.licenceAsset)}>
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 group-hover:border-amber-400/70 transition-all shadow-xl bg-slate-950">
              <img
                src={siteConfig.licenceAsset}
                alt="Pushkar Security Services private security agency licence"
                className="w-full h-72 sm:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                <span className="px-4 py-2 rounded-xl bg-slate-900/90 border border-amber-400/50 text-amber-400 text-xs font-bold shadow-lg flex items-center gap-2 group-hover:scale-105 transition-transform">
                  <ExternalLink className="w-4 h-4" />
                  <span>Click to View Certificate</span>
                </span>
              </div>
            </div>
          </div>

          {/* Compliance Details (Right Column) */}
          <div className="md:col-span-7 space-y-6 text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Government Licence Compliance</h3>
                <p className="text-xs text-amber-400 font-medium">Government of Maharashtra Approved Agency</p>
              </div>
            </div>

            <div className="space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-medium">Agency Name:</span>
                <span className="text-white font-bold">{siteConfig.name}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-medium">Licence Number:</span>
                <span className="text-amber-400 font-mono font-bold tracking-wider">{siteConfig.licenceNo}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-1">
                <span className="text-slate-400 font-medium">Jurisdiction:</span>
                <span className="text-white font-semibold">Entire State of Maharashtra</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Pushkar Security Services operates under strict government compliance, providing verified and disciplined security personnel to safeguard residential, commercial, and industrial establishments across Maharashtra.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenLicenceModal(siteConfig.licenceAsset)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20 hover:scale-[1.02]"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>View Licence</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
