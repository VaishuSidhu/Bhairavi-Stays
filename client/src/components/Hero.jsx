import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const images = [
    '/hero-3.png',
    '/hero-1.webp',
    '/hero-2.webp',
    '/hero-custom.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-darkkaavi">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[2000ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ 
              backgroundImage: `url('${image}')`,
              zIndex: index === currentImageIndex ? 1 : 0
            }}
          />
        ))}
        {/* Deep Overlay for readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-md mb-4 animate-fade-in">
            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-gold">Sanctuary near Isha Yoga Center</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-7xl font-black text-white leading-tight uppercase tracking-tight drop-shadow-2xl">
            Bhairavi <span className="text-gold">Home Stay</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-bold text-cream/90 leading-relaxed drop-shadow-lg italic">
            "Your serene mountain retreat near Isha Yoga Center, Coimbatore. 
            A safe 10-minute walk to the ashram."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <a 
            href="#rooms" 
            className="group btn-primary min-w-[200px] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:-translate-y-1 transition-all"
          >
            Explore Sanctuaries
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link 
            to="/contact" 
            className="btn-secondary min-w-[200px] text-white border-white/50 hover:border-gold hover:text-gold transition-all font-black uppercase tracking-widest backdrop-blur-md"
          >
            Enquire Now
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-60">
          <span className="text-[9px] uppercase tracking-[0.5em] font-black text-cream">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
