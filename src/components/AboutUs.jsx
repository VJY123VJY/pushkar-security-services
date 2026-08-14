import React from 'react';
import { Shield, Eye, ShieldCheck, HeartHandshake, Phone, Award } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function AboutUs() {
  const pillars = [
    { title: "Disciplined Leadership", desc: "Professionally managed with security-field leadership under an ex-Army background.", icon: Award },
    { title: "Vigilant Guarding", desc: "Active entry recording, perimeter checks, and guard alertness at all entry gates.", icon: Eye },
    { title: "Client Responsibility", desc: "Transparent communication with society managers, owners, and administrators.", icon: HeartHandshake },
    { title: "Customized Security", desc: "Security planning structured according to client site requirements.", icon: ShieldCheck }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-950 relative border-t border-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Column with Real Guard Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
              <img
                src={siteConfig.guardsAsset}
                alt="Pushkar Security Services security guards deployed at an industrial site"
                className="w-full h-[420px] object-cover object-top hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              {/* Overlay Box */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/95 backdrop-blur-md p-5 rounded-xl border border-slate-700/80 shadow-xl">
                <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">Our Commitment</p>
                <p className="text-white text-xs sm:text-sm font-medium leading-snug">
                  "Pushkar Security Services is committed to providing disciplined, professional and reliable security solutions for residential, commercial and industrial clients."
                </p>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Disciplined Protective Force</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              About <span className="gold-gradient-text">Pushkar Security Services</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              <strong className="text-white">Pushkar Security Services</strong> is committed to providing disciplined, professional and reliable security solutions for residential, commercial and industrial clients across Pune and surrounding regions.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Professionally managed with security-field leadership under an ex-Army background, Pushkar Security Services enforces high standards of discipline, punctuality, and vigilance. Our personnel are deployed in official company uniform with valid identification and receive basic fire-fighting training to safeguard your premises 24 hours a day, 7 days a week.
            </p>

            {/* Core Values / Pillars Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-3">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="bg-slate-900/80 border border-slate-800/80 p-4 rounded-xl flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                      <p className="text-xs text-slate-400 leading-snug mt-0.5">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Contact Line */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href={siteConfig.telUrl}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Speak directly with our team at {siteConfig.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
