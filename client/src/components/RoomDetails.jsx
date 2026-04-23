import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { roomsData } from '../data/roomsData';
import { Star, CheckCircle, ArrowLeft, ShieldCheck, MapPin, Coffee, Users, Wind } from 'lucide-react';

const RoomDetails = () => {
  const { id } = useParams();
  const room = roomsData.find(r => r.id === parseInt(id)) || roomsData[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-darkkaavi text-cream pt-32 pb-20 selection:bg-gold selection:text-kaavi px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Navigation Breadcrumb / Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center text-gold/60 hover:text-gold transition-all duration-300 font-black uppercase tracking-widest text-xs group"
        >
          <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-2 transition-transform" />
          Back to All Sanctuaries
        </Link>

        {/* Hero Section of Room Page */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Gallery Section */}
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/10 group h-[500px]">
              <img 
                src={room.gallery[0] || room.mainImage} 
                alt={`${room.name} Main Interior`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              {room.gallery.slice(1).map((img, i) => (
                <div 
                  key={i} 
                  className="rounded-2xl overflow-hidden shadow-xl border border-white/10 h-32 md:h-48 cursor-pointer hover:border-gold/50 transition-all opacity-70 hover:opacity-100"
                >
                  <img src={img} alt="Gallery view" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-8 flex flex-col justify-center h-full">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h1 className="font-serif text-3xl md:text-4xl font-black text-gold uppercase tracking-tight leading-none">{room.name}</h1>
                <div className="flex flex-col items-end">
                  <span className="text-cream text-3xl font-black">{room.price}</span>
                  <span className="text-gold/60 text-[10px] uppercase font-black tracking-widest mt-1">per night</span>
                </div>
              </div>

              {/* Rating Summary */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex text-gold">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className={`w-4 h-4 ${s <= Math.floor(room.rating) ? 'fill-gold' : ''}`} />
                  ))}
                </div>
                <span className="text-cream font-bold">{room.rating} / 5</span>
                <span className="text-cream/40 text-xs tracking-wide">({room.reviews} Reviews)</span>
              </div>

              <p className="text-cream/80 text-base md:text-lg leading-relaxed italic border-l-2 border-gold/30 pl-6 mb-8">
                "{room.description}"
              </p>
            </div>

            {/* Practical Quick Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-cream/5 p-8 rounded-3xl border border-white/5">
              {[
                { label: 'Mountain View', icon: MapPin },
                { label: 'Traditional Breakfast', icon: Coffee },
                { label: '2 Guests', icon: Users },
                { label: 'Red Oxide Flooring', icon: Wind }
              ].map((spec, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-3">
                  <spec.icon className="w-8 h-8 text-gold/40" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-cream/70">{spec.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a 
                href="#contact" 
                className="btn-primary w-full text-center py-6 text-2xl uppercase tracking-[0.2em] shadow-2xl flex items-center justify-center space-x-4 transform hover:-translate-y-2"
              >
                <span>Reserve Now</span>
                <ArrowLeft className="w-6 h-6 rotate-180" />
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Services & Amenities Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-20 border-t border-white/5">
          <div className="space-y-10 p-12 heritage-card bg-kaavi/20 border-white/5 shadow-3xl">
            <h3 className="font-serif text-3xl font-black text-gold uppercase tracking-widest border-b border-gold/10 pb-6">Provided Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {room.services.map((service, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-gold/60" />
                  <span className="font-bold text-cream tracking-wide">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10 p-12 heritage-card bg-kaavi/20 border-white/5 shadow-3xl">
            <h3 className="font-serif text-3xl font-black text-gold uppercase tracking-widest border-b border-gold/10 pb-6">Room Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {room.features.map((feature, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full bg-gold/50" />
                  <span className="font-bold text-cream/80 tracking-wide underline decoration-gold/20 underline-offset-8 transition-colors hover:text-gold cursor-default">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
