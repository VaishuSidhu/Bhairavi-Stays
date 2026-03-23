import React from 'react';
import { Link } from 'react-router-dom';
import { roomsData } from '../data/roomsData';

const Rooms = () => {
  return (
    <section id="rooms" className="py-20 md:py-32 bg-darkkaavi/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-cream">Our Sanctuaries</h2>
          <p className="max-w-2xl mx-auto text-cream/70 text-base md:text-lg font-medium italic">
            Select a room to see full details and pricing for your spiritual visit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <Link 
              key={room.id} 
              to={`/room/${room.id}`}
              className="heritage-card kolam-border group flex flex-col bg-darkkaavi/60 border-white/5 hover:border-gold/30 transition-all duration-500 overflow-hidden shadow-2xl hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.mainImage} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-gold text-kaavi px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl">
                  {room.tag}
                </div>
                <div className="absolute bottom-4 right-4 bg-kaavi/90 text-gold px-4 py-2 rounded-xl text-lg font-black tracking-tighter">
                  {room.price}
                </div>
              </div>

              {/* Minimal Text Section */}
              <div className="p-6 flex flex-col items-center text-center space-y-3">
                <h3 className="font-serif text-xl font-bold text-gold tracking-tight">{room.name}</h3>
                <p className="text-cream/70 text-[11px] italic leading-relaxed line-clamp-2">
                  {room.shortDesc}
                </p>
                <div className="pt-3 text-gold border-t border-white/5 w-full text-[9px] font-black uppercase tracking-[0.2em]">
                   Click for Gallery & Details
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
