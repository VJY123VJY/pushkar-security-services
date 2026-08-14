import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Mail, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Contact({ preselectedService, onOpenQuoteModal }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    propertyType: 'Housing Society',
    location: '',
    guardsCount: '1-2 Guards',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please enter your Name and Phone Number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-950 relative border-t border-slate-900">
      
      {/* Glow background accent */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header CTA */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Site Security Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Need Reliable Security <span className="gold-gradient-text">for Your Site?</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Let's discuss your security requirements and build the right deployment for your property.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={siteConfig.telUrl}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Now: {siteConfig.phone}</span>
            </a>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all hover:scale-105 shadow-lg shadow-emerald-900/30"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
            >
              <span>Get Free Quote</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Address */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl text-left">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Office & Contact Details
              </h3>

              {/* Phone */}
              <a
                href={siteConfig.telUrl}
                className="flex items-start gap-4 group p-3 rounded-xl hover:bg-slate-950 border border-transparent hover:border-slate-800 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Phone Helpline</p>
                  <p className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {siteConfig.phone}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Available for deployment inquiries</p>
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
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">WhatsApp Chat</p>
                  <p className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {siteConfig.whatsapp}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Quick message & site requirement chat</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Registered Office</p>
                  <p className="text-sm font-bold text-white mt-1 leading-snug">
                    {siteConfig.name}
                  </p>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {siteConfig.address}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative text-left">
              
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>Security Quote Request Form</span>
              </h3>

              {submitted ? (
                <div className="py-12 px-6 text-center space-y-4 bg-slate-950/80 border border-emerald-500/30 rounded-xl animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Thank You, {formData.fullName}!</h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Your quote request for <strong className="text-amber-400">{formData.propertyType}</strong> security has been submitted successfully.
                  </p>
                  <p className="text-xs text-slate-400">Our supervisory team will review your requirements and reach you at <span className="text-white font-semibold">{formData.phone}</span>.</p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ fullName: '', phone: '', email: '', propertyType: 'Housing Society', location: '', guardsCount: '1-2 Guards', message: '' });
                      }}
                      className="px-4 py-3 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Your Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="e.g. Ramesh Patil"
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
                        placeholder="e.g. 8888534926"
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
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="e.g. name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    {/* Property / Site Type */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Property / Site Type
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option value="Housing Society">Housing Society</option>
                        <option value="Industrial Site">Industrial Site</option>
                        <option value="Corporate Office">Corporate Office</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Open Plot">Open Plot</option>
                        <option value="Event">Event</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Location */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Site Location / Area
                      </label>
                      <input
                        type="text"
                        name="location"
                        placeholder="e.g. Hinjawadi, Pune"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    {/* Required Security Guards */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Required Security Guards
                      </label>
                      <select
                        name="guardsCount"
                        value={formData.guardsCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option value="1-2 Guards">1-2 Guards</option>
                        <option value="3-5 Guards">3-5 Guards</option>
                        <option value="5-10 Guards">5-10 Guards</option>
                        <option value="10+ Guards">10+ Guards</option>
                        <option value="Custom Requirement">Custom Requirement</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Message / Additional Details
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Mention shift requirements (Day/Night 24/7), site gate layout, or specific security needs..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Quote Request</span>
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>

        {/* Google Map — Pushkar Security Services Office Location */}
        <div className="mt-16 bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Map Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 sm:p-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Our Office Location</h4>
                <p className="text-xs text-slate-400">Shop No. 1, Mauli Group Office, Sakhare Wasti, Hinjawadi, Mulshi, Pune – 411057</p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Sakhare+Wasti+Hinjawadi+Mulshi+Pune+411057"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex-shrink-0"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Embedded Map */}
          <div className="relative w-full h-72 sm:h-96 bg-slate-950">
            <iframe
              title="Pushkar Security Services Office Location — Hinjawadi, Mulshi, Pune"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.3996088967516!2d73.71399877503756!3d18.5882749820066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb15b2e28d7d%3A0x85e4929d5ea57b97!2sHinjawadi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1723616400000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'invert(90%) hue-rotate(180deg) saturate(0.85) contrast(1.1)',
                display: 'block'
              }}
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
