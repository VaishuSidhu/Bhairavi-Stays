import React from 'react';
import { MapPin, Navigation, Compass, Mountain, Map as MapIcon } from 'lucide-react';

const attractions = [
  { name: 'Isha Yoga Center', icon: MapPin },
  { name: 'Adiyogi Statue', icon: Navigation },
  { name: 'Dhyanalinga', icon: Compass },
  { name: 'Velliangiri Hills', icon: Mountain },
];

const Location = () => {
  return (
    <section id="location" className="py-20 md:py-32 bg-kaavi relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="#FAF9F6" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-cream">Temple & Foothills</h2>
          <p className="max-w-3xl mx-auto text-cream/80 text-lg md:text-xl font-medium tracking-wide">
            Just 500 meters from the Adiyogi entrance, we are perfectly positioned 
            for your Isha Yoga Center visit and Velliangiri trek.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <h3 className="font-serif text-3xl font-black text-gold mb-6 uppercase tracking-widest border-l-4 border-gold pl-6">Walking Distance</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {attractions.map((att, i) => (
                <div key={i} className="flex items-center space-x-4 bg-dark-kaavi/40 border-l-4 border-gold p-6 rounded-r-2xl transition-all hover:bg-dark-kaavi/60 hover:shadow-xl group">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-125 transition-transform">
                    <att.icon className="w-6 h-6" />
                  </div>
                  <span className="font-black text-cream uppercase tracking-wide">{att.name}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Isha+Yoga+Center+Coimbatore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                <MapIcon className="w-5 h-5 mr-3" />
                Get Directions
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-cream/20 relative group scale-95 hover:scale-100 transition-all duration-700">
              <div className="absolute inset-0 bg-gold/5 group-hover:bg-transparent transition-all" />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.480072047395!2d76.68069507481944!3d10.970222089189352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8427f717cc397%3A0xe54d6af80104870f!2sAdiyogi%20Isha%20Yoga%20Center!5e0!3m2!1sen!2sin!4v1711123456789!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
