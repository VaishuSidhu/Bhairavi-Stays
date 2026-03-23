import React from 'react';
import { Wifi, Car, Droplets, Heart, Leaf, MapPin } from 'lucide-react';

const facilities = [
  { icon: Wifi, title: 'Free WiFi', description: 'Stay connected with high-speed internet throughout your stay.' },
  { icon: Car, title: 'Car Parking', description: 'Safe and secure parking space for your vehicles.' },
  { icon: Droplets, title: '24 Hours Hot Water', description: 'Enjoy continuous hot water supply for refreshing baths.' },
  { icon: Heart, title: 'Family Friendly Stay', description: 'A safe and welcoming environment for families and children.' },
  { icon: Leaf, title: 'Natural Environment', description: 'Surrounded by the serene foothills of Velliangiri.' },
  { icon: MapPin, title: 'Easy Access', description: 'Just 500 meters from the Adiyogi Statue entrance.' },
];

const Facilities = () => {
  return (
    <section id="facilities" className="py-20 md:py-32 bg-dark-kaavi relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-cream">Velliangiri Amenities</h2>
          <p className="max-w-xl mx-auto text-cream/70 font-medium italic">
            Essential facilities provided with traditional care to ensure your spiritual 
            stay is comfortable and enriching.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, i) => (
            <div key={i} className="heritage-card kolam-border p-8 flex flex-col items-center text-center group translate-y-0 hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 border border-gold/20 group-hover:bg-gold group-hover:text-kaavi transition-all">
                <fac.icon className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-cream mb-3">{fac.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{fac.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="kolam-divider opacity-20 absolute top-0 w-full rotate-180" />
    </section>
  );
};

export default Facilities;
