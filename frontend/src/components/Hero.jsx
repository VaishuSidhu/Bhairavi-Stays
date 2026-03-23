import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-cream space-y-8">
        <div className="animate-fade-in-up">
          <h1 className="font-serif text-3xl md:text-5xl font-black mb-6 text-cream drop-shadow-[0_10px_10px_rgba(0,0,0,0.6)] leading-tight uppercase tracking-tight">
            Bhairavi <span className="text-gold">Home Stay</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg font-bold text-gold leading-relaxed drop-shadow-2xl opacity-90">
            Experience Traditional Tamil Heritage. 
            A Peaceful Spiritual Retreat near the Adiyogi Entrance.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
          <a href="#rooms" className="group btn-primary flex items-center shadow-2xl">
            View Rooms
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="btn-secondary text-white border-white hover:bg-white/20 transition-all font-bold backdrop-blur-sm">
            Contact / Book Now
          </a>
        </div>

        {/* Floating Diya Ornaments (SVGs) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-80">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="#C89B3C" strokeWidth="2" />
            <path d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z" fill="#C89B3C" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
