import React, { useState } from 'react';
import { X, Shield, MessageSquare, Send, CheckCircle2, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function QuoteModal({ isOpen, onClose, selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: selectedService?.title || 'Security Guard Services',
    location: '',
    guardsCount: '1-3 Guards',
    shiftType: '24/7 (Day & Night Shift)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Pushkar Security Services,\nI would like to request a Free Quote.\n\n*Name:* ${formData.name || 'Not specified'}\n*Phone:* ${formData.phone || 'Not specified'}\n*Service:* ${formData.service}\n*Location:* ${formData.location || 'Pune'}\n*Guards Needed:* ${formData.guardsCount}\n*Shift Type:* ${formData.shiftType}\n*Notes:* ${formData.notes || 'None'}`;
    window.open(`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
            <Shield className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Get a Free Security Quote</h3>
            <p className="text-xs text-slate-400">Pushkar Security Services • Prompt Response</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white">Quote Request Received!</h4>
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm mx-auto">
              Our team will review your requirements for <strong className="text-amber-400">{formData.service}</strong> and contact you at <strong className="text-white">{formData.phone}</strong>.
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
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Rahul Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / Mobile *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Security Service Needed</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                >
                  {siteConfig.services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Property Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Area / Society / City"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Number of Guards Required</label>
                <select
                  name="guardsCount"
                  value={formData.guardsCount}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                >
                  <option value="1-3 Guards">1-3 Guards</option>
                  <option value="4-8 Guards">4-8 Guards</option>
                  <option value="9-15 Guards">9-15 Guards</option>
                  <option value="15+ Security Force">15+ Security Force</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Shift Type</label>
                <select
                  name="shiftType"
                  value={formData.shiftType}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                >
                  <option value="24/7 (Day & Night Shift)">24/7 (Day & Night Shift)</option>
                  <option value="12-Hour Day Shift Only">12-Hour Day Shift Only</option>
                  <option value="12-Hour Night Shift Only">12-Hour Night Shift Only</option>
                  <option value="Event / Temporary Duty">Event / Temporary Duty</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Additional Notes (Optional)</label>
              <textarea
                name="notes"
                rows="2"
                placeholder="Gate count, visitor rules, or specific instructions..."
                value={formData.notes}
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
                <span>Submit Request</span>
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
