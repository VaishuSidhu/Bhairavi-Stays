import React from 'react';
import { Leaf, Anchor, Home, Wind } from 'lucide-react';

const About = () => {
  const features = [
    { icon: Leaf, title: 'Peaceful Environment', desc: 'Calm and natural surroundings' },
    { icon: Anchor, title: 'Spiritual Atmosphere', desc: 'Experience the energy of Isha' },
    { icon: Home, title: 'Comfortable Stay', desc: 'Clean and well-maintained rooms' },
    { icon: Wind, title: 'Scenic Hills', desc: 'Beautiful Velliangiri view' }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-kaavi relative overflow-hidden">
      {/* Kolam Decorative Background elements */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none scale-150">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="180" stroke="#FAF9F6" strokeWidth="1" strokeDasharray="10 10" />
          <path d="M200 20L200 380M20 200L380 200" stroke="#FAF9F6" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="120" stroke="#FAF9F6" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-cream">Traditional Kaavi Sanctuary</h2>
          <div className="max-w-3xl mx-auto text-sm md:text-base text-cream/90 leading-relaxed font-medium space-y-4">
            <p>
              Bhairavi Home Stay is an authentically crafted traditional sanctuary featuring the classic 
              <strong> Kaavi (red oxide)</strong> finishes and <strong>Pulli Kolam</strong> patterns 
              that define Tamil heritage.
            </p>
            <p>
              Every corner of our homestay breathes the culture of South India, offering a grounded and spiritual 
              base for your visit to the Isha Yoga Center and the Velliangiri foothills.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="heritage-card kolam-border p-6 flex flex-col items-center text-center space-y-3"
            >
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-gold mb-3 border border-gold/30">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold text-cream underline decoration-gold decoration-2 underline-offset-8 decoration-dotted">{feature.title}</h3>
              <p className="text-cream/70 leading-relaxed text-xs">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="kolam-divider opacity-50 absolute bottom-0 w-full" />
    </section>
  );
};

export default About;
