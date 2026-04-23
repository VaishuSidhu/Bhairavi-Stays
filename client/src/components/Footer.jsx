import React from 'react';
import { Heart, MapPin, Phone, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-kaavi text-cream pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Kolam Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="kolamPatternFooter" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
             <circle cx="50" cy="50" r="2" fill="#FAF9F6" />
             <path d="M50 30 C 40 30, 30 40, 30 50 C 30 60, 40 70, 50 70 C 60 70, 70 60, 70 50 C 70 40, 60 30, 50 30 Z" stroke="#FAF9F6" strokeWidth="0.5" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#kolamPatternFooter)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gold/10 pb-16 mb-10">
          <div className="md:col-span-2 space-y-4">
            <h2 className="font-serif text-xl font-black text-gold uppercase tracking-tighter">Bhairavi <span className="text-cream">Home Stay</span></h2>
            <p className="max-w-md text-cream/70 text-xs leading-relaxed font-bold italic">
              Bhairavi Home Stay is a traditionally curated red oxide sanctuary located in the spiritual heart 
              of Coimbatore, just moments from the Adiyogi statue. Experience the grounded tranquility of 
              Tamil heritage in <strong>Classic Kaavi</strong> surroundings.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-cream/10 rounded-full hover:bg-gold hover:text-kaavi transition-all"><MapPin className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-cream/10 rounded-full hover:bg-gold hover:text-kaavi transition-all"><Phone className="w-5 h-5" /></a>
              <a href="#" className="p-3 bg-cream/10 rounded-full hover:bg-gold hover:text-kaavi transition-all"><MessageSquare className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-black text-gold mb-8 uppercase tracking-widest border-l-4 border-gold pl-4">Quick Links</h3>
            <ul className="space-y-4 text-cream/70 font-bold uppercase tracking-[0.1em] text-xs">
              <li><a href="#home" className="hover:text-gold transition-colors">Home Heritage</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">Traditional Story</a></li>
              <li><a href="#rooms" className="hover:text-gold transition-colors">Kaavi Rooms</a></li>
              <li><a href="#facilities" className="hover:text-gold transition-colors">Amenities</a></li>
              <li><a href="#location" className="hover:text-gold transition-colors">Find Sanctuary</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-black text-gold mb-8 uppercase tracking-widest border-l-4 border-gold pl-4">Contact</h3>
            <ul className="space-y-4 text-cream/70 text-xs font-bold uppercase tracking-widest">
              <li className="flex items-start space-x-3 italic">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <span>Adiyogi Entrance Road, Near Isha Yoga Center, Coimbatore</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="font-black">+91 94882 77211</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="font-black">+91 94882 77211</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-cream/40 text-xs font-black uppercase tracking-[0.2em] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>© 2024 Bhairavi Home Stay. All Rights Reserved.</p>
          <div className="flex items-center space-x-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-gold fill-gold" />
            <span>by Tamil Heritage Fans</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
