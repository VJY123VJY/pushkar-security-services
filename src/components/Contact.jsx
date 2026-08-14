import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Mail, Send, CheckCircle2, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: preselectedService || 'Security Guard Services',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please enter your Full Name and Phone Number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-950 relative border-t border-slate-900">
      
      {/* Glow background accent */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-800 text-blue-400 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiry & Site Assessment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Get in Touch With <span className="gold-gradient-text">Pushkar Security Services</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Have questions about guard deployment, pricing, or duty rosters? Reach out via call, WhatsApp, or submit the quotation form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Contact Information
              </h3>

              {/* Phone */}
              <a
                href={siteConfig.telUrl}
                className="flex items-start gap-4 group p-3 rounded-xl hover:bg-slate-950 border border-transparent hover:border-slate-800 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Phone Call</p>
                  <p className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {siteConfig.phone}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Click to call directly on mobile</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group p-3 rounded-xl hover:bg-slate-950 border border-transparent hover:border-slate-800 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">WhatsApp Inquiry</p>
                  <p className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {siteConfig.whatsapp}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Instant chat & quotation support</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 p-3 rounded-xl bg-slate-950/50 border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-amber-950/50 border border-amber-800/60 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Business Address</p>
                  <p className="text-sm font-semibold text-slate-200 mt-0.5">
                    {siteConfig.address}
                  </p>
                  <p className="text-[11px] text-amber-400/80 mt-1 italic">
                    {siteConfig.addressNote}
                  </p>
                </div>
              </div>

              {/* Quick Call & WhatsApp Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={siteConfig.telUrl}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-all text-center"
                >
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all text-center shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative">
              
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>Request a Free Security Quote</span>
              </h3>

              {submitted ? (
                <div className="py-12 px-6 text-center space-y-4 bg-slate-950/80 border border-emerald-500/30 rounded-xl animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Thank You, {formData.fullName}!</h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Your request for <strong className="text-amber-400">{formData.serviceRequired}</strong> has been received. Our team will contact you at <strong className="text-white">{formData.phone}</strong> shortly.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(`Hello Pushkar Security Services, I submitted a request for ${formData.serviceRequired}. Name: ${formData.fullName}, Phone: ${formData.phone}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp Now</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ fullName: '', phone: '', email: '', serviceRequired: 'Security Guard Services', message: '' });
                      }}
                      className="px-4 py-3 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    {/* Service Required Dropdown */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Service Required
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        {siteConfig.services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="General Security Inquiry">General Security Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Requirement Details / Property Location
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Specify shift hours, number of guards needed, society name, or commercial property details..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request a Quote</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Embedded Google Maps Section */}
        <div className="mt-16 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>Our Location</span>
              </h4>
              <p className="text-xs text-slate-400">Serving Pune & surrounding industrial/residential hubs</p>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Pushkar Security Services Pune')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="w-full h-72 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 relative">
            <iframe
              title="Pushkar Security Services Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0436069926!2d73.79252684813583!3d18.524564858907875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
