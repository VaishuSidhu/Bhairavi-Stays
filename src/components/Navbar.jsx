import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Bed, Settings, MapPin, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: Info },
    { name: 'Rooms', href: '#rooms', icon: Bed },
    { name: 'Facilities', href: '#facilities', icon: Settings },
    { name: 'Location', href: '#location', icon: MapPin },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-cream shadow-2xl py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className={`font-serif text-xl font-black tracking-tight transition-colors duration-300 ${isScrolled ? 'text-kaavi' : 'text-cream drop-shadow-2xl'}`}>
              Bhairavi <span className={isScrolled ? 'text-gold' : 'text-gold'}>Home Stay</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-xs font-black tracking-widest uppercase transition-all duration-200 ${isScrolled ? 'text-kaavi/80 hover:text-kaavi' : 'text-cream hover:text-gold shadow-sm'}`}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="bg-gold text-kaavi px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-darkkaavi hover:text-white transition-all duration-300 shadow-2xl transform hover:scale-110 active:scale-95">
                Book Now
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${isScrolled ? 'text-kaavi hover:bg-kaavi/10' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full transition-all duration-300 ease-in-out ${isOpen ? 'top-full opacity-100' : 'top-[-500px] opacity-0'} bg-kaavi shadow-xl`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-4 text-cream hover:text-gold hover:bg-white/10 block px-4 py-6 rounded-md text-lg font-black tracking-widest uppercase border-b border-white/5"
            >
              <link.icon className="w-5 h-5 text-gold" />
              <span>{link.name}</span>
            </a>
          ))}
          <div className="pt-6 pb-4 px-3">
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gold text-kaavi px-6 py-4 rounded-xl font-black uppercase tracking-widest shadow-2x"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
