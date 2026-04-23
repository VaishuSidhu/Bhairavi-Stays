import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle, MapPin } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Check if the VITE_API_BASE_URL is defined, otherwise fallback to local/relative
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';

    try {
      await axios.post(`${apiBaseUrl}/api/book`, formData);
      setStatus('success');
      setFormData({ name: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-kaavi text-cream selection:bg-gold selection:text-kaavi overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-gold after:opacity-100">Enquire & Visit</h2>
          <p className="max-w-xl mx-auto text-cream/70 font-bold italic tracking-wide">
            Our Red Oxide sanctuary is just moments away from the Adiyogi statue.
            Connect with us for stay booking and spiritual guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10 group">
            <h3 className="font-serif text-3xl font-black text-cream border-b-2 border-gold/30 pb-4 uppercase tracking-[0.2em]">Contact Direct</h3>

            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Phone Enquiry', value: '+91 94882 77211', desc: 'Call us daily 6 AM to 10 PM' },
                { icon: MessageSquare, title: 'WhatsApp Chat', value: '+91 94882 77211', desc: 'Instant support for bookings' },
                { icon: MapPin, title: 'Homestay Address', value: 'Adiyogi Main Entrance Road', desc: 'Near Isha Yoga Center, Coimbatore' }
              ].map((item, i) => (
                <div key={i} className="flex p-8 items-start space-x-6 heritage-card kolam-border bg-dark-kaavi/20 transition-all hover:bg-dark-kaavi/40 hover:scale-105 active:scale-95 cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold border border-gold/20 flex-shrink-0">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-cream mb-1">{item.title}</h4>
                    <p className="text-gold font-black text-lg tracking-wider mb-2">{item.value}</p>
                    <p className="text-cream/50 text-xs font-bold uppercase tracking-widest">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a
                href="https://wa.me/919791881222"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center px-10 py-6 text-xl tracking-widest uppercase hover:scale-105"
              >
                <MessageSquare className="w-8 h-8 mr-4" />
                WhatsApp Book Now
              </a>
            </div>
          </div>

          <div className="bg-cream/5 backdrop-blur-3xl p-1 md:p-12 rounded-[3rem] border border-cream/10 shadow-3xl relative">
            {status === 'success' ? (
              <div className="text-center py-24 space-y-6 animate-fade-in bg-dark-kaavi/60 rounded-[2rem] p-8 border-4 border-gold/20">
                <div className="w-32 h-32 bg-gold/20 rounded-full flex items-center justify-center text-gold mx-auto mb-8 shadow-2xl border border-gold/40">
                  <CheckCircle className="w-20 h-20" />
                </div>
                <h3 className="font-serif text-4xl font-black text-gold uppercase tracking-tighter">Thank You!</h3>
                <p className="text-cream text-lg font-bold tracking-wide">Your query has reached the foothills successfully. We will call you soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-secondary mt-10 w-full uppercase tracking-widest"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 bg-dark-kaavi/90 p-8 md:p-12 rounded-[2rem] border border-gold/10">
                <h3 className="font-serif text-4xl font-black text-gold mb-10 text-center uppercase tracking-widest border-b border-gold/10 pb-6 italic">Query Form</h3>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gold uppercase tracking-[0.3em] ml-2">Visitor Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Ramesh Kumar"
                    className="w-full bg-dark-kaavi text-cream border-2 border-cream/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-gold transition-all text-lg font-bold placeholder:text-cream/20"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gold uppercase tracking-[0.3em] ml-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    className="w-full bg-dark-kaavi text-cream border-2 border-cream/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-gold transition-all text-lg font-bold placeholder:text-cream/20"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gold uppercase tracking-[0.3em] ml-2">Your Message</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="When are you planning to visit? and Number of rooms needed?"
                    className="w-full bg-dark-kaavi text-cream border-2 border-cream/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-gold transition-all text-lg font-bold placeholder:text-cream/20 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full py-6 rounded-2xl font-black text-xl uppercase tracking-[0.2em] flex items-center justify-center space-x-4 transition-all ${status === 'loading' ? 'bg-gold/50 cursor-not-allowed' : 'bg-gold text-kaavi hover:bg-cream hover:shadow-2xl active:scale-95 transform hover:-translate-y-2'}`}
                >
                  {status === 'loading' ? (
                    <div className="w-8 h-8 border-4 border-kaavi/30 border-t-kaavi rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-8 h-8" />
                      <span>Submit Query</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 -right-64 w-128 h-128 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default Contact;
