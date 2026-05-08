import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, Users, ShieldAlert } from 'lucide-react';
import axios from 'axios';

const ContactPage = () => {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkInTime: '12:00',
    checkOutDate: '',
    checkOutTime: '11:00',
    adults: '1',
    children: '0',
    emergencyName: '',
    emergencyPhone: '',
    roomType: 'Kaveri',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
    try {
      await axios.post(`${apiBaseUrl}/api/book`, formData);
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-kaavi pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="section-title text-gold">Contact & Booking Enquiry</h1>
          <p className="max-w-2xl mx-auto text-cream/70 italic">
            Plan your spiritual journey with us. Fill out the form below for booking enquiries and availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            <div className="heritage-card p-8 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-gold border-b border-gold/20 pb-4 uppercase tracking-wider">Reach Us</h3>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-cream/40 mb-1">Phone</p>
                  <p className="text-cream font-bold">+91 94882 77211</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-cream/40 mb-1">Email</p>
                  <p className="text-cream font-bold">bhairavihomestay@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-cream/40 mb-1">Address</p>
                  <p className="text-cream font-bold text-sm">11, Gandhiji Street, Muttathuvayal, Coimbatore - 641114</p>
                </div>
              </div>
            </div>

            <div className="heritage-card p-8 bg-darkkaavi/40">
              <h3 className="font-serif text-xl font-bold text-gold mb-4">Location Map</h3>
              <div className="h-64 rounded-xl overflow-hidden border border-white/10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.480072047395!2d76.7211!3d10.9833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8427f717cc397%3A0xe54d6af80104870f!2sBhairavi%20Homestay!5e0!3m2!1sen!2sin!4v1711123456789!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>

          {/* Detailed Booking Form */}
          <div className="lg:col-span-2">
            <div className="heritage-card p-8 md:p-12">
              {status === 'success' ? (
                <div className="text-center py-20 space-y-6">
                  <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center text-gold mx-auto mb-6">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="font-serif text-3xl font-black text-gold uppercase">Enquiry Sent!</h3>
                  <p className="text-cream/80 max-w-md mx-auto">Namaskaram. Your booking enquiry has been received. We will check availability and get back to you shortly.</p>
                  <button onClick={() => setStatus('idle')} className="btn-secondary uppercase tracking-widest mt-8">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <h2 className="font-serif text-2xl text-gold uppercase tracking-widest font-black border-b border-gold/10 pb-4 mb-8">Booking Enquiry Form</h2>
                  
                  {/* Dates Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-cream/60 flex items-center"><Clock className="w-3 h-3 mr-2" /> Check-in</label>
                      <div className="grid grid-cols-2 gap-2">
                        <input type="date" required className="form-input-custom" onChange={(e) => setFormData({...formData, checkInDate: e.target.value})} />
                        <input type="time" className="form-input-custom" value={formData.checkInTime} onChange={(e) => setFormData({...formData, checkInTime: e.target.value})} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-cream/60 flex items-center"><Clock className="w-3 h-3 mr-2" /> Check-out</label>
                      <div className="grid grid-cols-2 gap-2">
                        <input type="date" required className="form-input-custom" onChange={(e) => setFormData({...formData, checkOutDate: e.target.value})} />
                        <input type="time" className="form-input-custom" value={formData.checkOutTime} onChange={(e) => setFormData({...formData, checkOutTime: e.target.value})} />
                      </div>
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-cream/60">First Name</label>
                      <input type="text" required placeholder="First Name" className="form-input-custom" onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-cream/60">Last Name</label>
                      <input type="text" required placeholder="Last Name" className="form-input-custom" onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-cream/60">Email Address</label>
                      <input type="email" required placeholder="email@example.com" className="form-input-custom" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-cream/60">Phone Number</label>
                      <input type="tel" required placeholder="WhatsApp Number" className="form-input-custom" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="bg-white/5 p-6 rounded-2xl space-y-4 border border-white/5">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gold flex items-center"><ShieldAlert className="w-4 h-4 mr-2" /> Emergency Contact</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" placeholder="Contact Person Name" className="form-input-custom bg-kaavi/50" onChange={(e) => setFormData({...formData, emergencyName: e.target.value})} />
                      <input type="tel" placeholder="Contact Person Phone" className="form-input-custom bg-kaavi/50" onChange={(e) => setFormData({...formData, emergencyPhone: e.target.value})} />
                    </div>
                  </div>

                  {/* Guests & Room */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-cream/60 flex items-center"><Users className="w-3 h-3 mr-2" /> Adults</label>
                      <select className="form-input-custom" onChange={(e) => setFormData({...formData, adults: e.target.value})}>
                        {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-cream/60 flex items-center"><Users className="w-3 h-3 mr-2" /> Children</label>
                      <select className="form-input-custom" onChange={(e) => setFormData({...formData, children: e.target.value})}>
                        {[0,1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-cream/60">Preferred Room</label>
                      <select className="form-input-custom" onChange={(e) => setFormData({...formData, roomType: e.target.value})}>
                        <option value="Kaveri">Kaveri</option>
                        <option value="Narmada">Narmada</option>
                        <option value="Ganga">Ganga</option>
                        <option value="Yamuna">Yamuna</option>
                        <option value="Godavari">Godavari</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-cream/60">Special Requests / Message</label>
                    <textarea rows="4" className="form-input-custom resize-none" placeholder="Any specific requirements for your sadhana or stay?" onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                  </div>

                  <button type="submit" disabled={status === 'loading'} className="btn-primary w-full py-6 text-xl tracking-widest uppercase flex items-center justify-center space-x-4">
                    {status === 'loading' ? <div className="w-6 h-6 border-4 border-kaavi/30 border-t-kaavi rounded-full animate-spin" /> : <><Send className="w-6 h-6" /> <span>Send Booking Enquiry</span></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
