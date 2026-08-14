import React, { useState } from 'react';
import { X, Shield, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function QuoteModal({ isOpen, onClose, selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: selectedService?.title || 'Housing Society',
    location: '',
    guardsCount: '1-2 Guards',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Pushkar Security Services,\nI would like to request a Free Security Quote.\n\n*Name:* ${formData.name || 'Not specified'}\n*Phone:* ${formData.phone || 'Not specified'}\n*Email:* ${formData.email || 'N/A'}\n*Property/Site Type:* ${formData.propertyType}\n*Location:* ${formData.location || 'Pune'}\n*Guards Needed:* ${formData.guardsCount}\n*Message:* ${formData.message || 'None'}`;
    window.open(`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your Name and Phone Number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl space-y-5">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4 text-left">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Get a Free Security Quote</h3>
            <p className="text-xs text-slate-400">Pushkar Security Services • Hinjawadi, Pune</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white">Quote Request Submitted!</h4>
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-white">{formData.name}</strong>. Your request for <strong className="text-amber-400">{formData.propertyType}</strong> security guards has been recorded. Our team will contact you at <strong className="text-white">{formData.phone}</strong>.
            </p>
            
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open Instant WhatsApp Quote Chat</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Name <span className="text-amber-400">*</span></label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Ramesh Patil"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number <span className="text-amber-400">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. 8888534926"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Property/Site Type</label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
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

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Area / City"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Required Security Guards</label>
                <select
                  name="guardsCount"
                  value={formData.guardsCount}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                >
                  <option value="1-2 Guards">1-2 Guards</option>
                  <option value="3-5 Guards">3-5 Guards</option>
                  <option value="5-10 Guards">5-10 Guards</option>
                  <option value="10+ Guards">10+ Guards</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
              <textarea
                name="message"
                rows="2"
                placeholder="Shift details, site gate requirements, or specific instructions..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
              ></textarea>
            </div>

            <div className="pt-2 grid sm:grid-cols-2 gap-3">
              <button
                type="submit"
                className="py-3 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Form</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Quote via WhatsApp</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
