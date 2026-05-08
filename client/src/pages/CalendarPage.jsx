import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Calendar as CalendarIcon, CheckCircle2, AlertCircle } from 'lucide-react';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  // Mock availability data
  const isAvailable = (date) => {
    // Just a mock: weekends are "booked"
    const day = date.getDay();
    return day !== 0 && day !== 6; 
  };

  return (
    <div className="min-h-screen bg-kaavi pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="section-title text-gold uppercase tracking-widest">Availability Calendar</h1>
          <p className="max-w-2xl mx-auto text-cream/70 italic">
            Check the availability of our sanctuaries for your spiritual retreat. 
            Green dates indicate potential availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Calendar Side */}
          <div className="heritage-card p-8 bg-darkkaavi/40 flex justify-center">
            <style>{`
              .react-calendar {
                background: transparent;
                border: none;
                font-family: inherit;
                color: #FAF9F6;
                width: 100%;
              }
              .react-calendar__navigation button {
                color: #C89B3C;
                font-weight: bold;
                font-size: 1.2rem;
              }
              .react-calendar__month-view__weekdays {
                color: #C89B3C;
                font-weight: 800;
                text-transform: uppercase;
                font-size: 0.7rem;
                padding-bottom: 1rem;
              }
              .react-calendar__tile {
                padding: 1.5rem 0.5rem;
                background: rgba(255,255,255,0.03);
                border: 1px solid rgba(255,255,255,0.05);
                border-radius: 8px;
                color: #FAF9F6;
                transition: all 0.2s;
              }
              .react-calendar__tile:enabled:hover, .react-calendar__tile:enabled:focus {
                background: rgba(200, 155, 60, 0.2);
                color: #C89B3C;
              }
              .react-calendar__tile--now {
                background: rgba(200, 155, 60, 0.1);
                border: 1px solid #C89B3C;
              }
              .react-calendar__tile--active {
                background: #C89B3C !important;
                color: #813C2B !important;
                font-weight: bold;
              }
              .available-tile {
                position: relative;
              }
              .available-tile::after {
                content: '';
                position: absolute;
                bottom: 5px;
                left: 50%;
                transform: translateX(-50%);
                width: 4px;
                height: 4px;
                background: #4ADE80;
                border-radius: 50%;
              }
            `}</style>
            <Calendar 
              onChange={setDate} 
              value={date}
              tileClassName={({ date, view }) => 
                view === 'month' && isAvailable(date) ? 'available-tile' : null
              }
            />
          </div>

          {/* Info Side */}
          <div className="space-y-8">
            <div className="heritage-card p-8 space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <CalendarIcon className="w-8 h-8 text-gold" />
                <h3 className="font-serif text-2xl font-bold text-cream">Selected Date</h3>
              </div>
              
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center">
                <p className="text-gold font-black text-3xl mb-2">{date.toDateString()}</p>
                <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${isAvailable(date) ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  {isAvailable(date) ? (
                    <><CheckCircle2 className="w-4 h-4" /> <span className="text-xs font-black uppercase tracking-widest">Available</span></>
                  ) : (
                    <><AlertCircle className="w-4 h-4" /> <span className="text-xs font-black uppercase tracking-widest">Limited / Booked</span></>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-cream/40">Availability Status</h4>
                <div className="grid grid-cols-1 gap-4">
                  {['Kaveri', 'Narmada', 'Ganga', 'Yamuna', 'Godavari'].map((room) => (
                    <div key={room} className="flex items-center justify-between p-4 bg-darkkaavi/60 rounded-xl border border-white/5">
                      <span className="font-bold text-cream">{room} Sanctuary</span>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${isAvailable(date) ? 'text-green-400' : 'text-red-400/60'}`}>
                        {isAvailable(date) ? 'Available' : 'Enquire'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <a href="/contact" className="btn-primary w-full text-center block py-5 text-xl tracking-widest uppercase">
                  Book for this Date
                </a>
              </div>
            </div>
            
            <div className="p-8 border-2 border-gold/20 border-dashed rounded-3xl text-center">
              <p className="text-cream/60 text-sm italic">
                Note: Real-time availability is updated every 24 hours. For urgent bookings or groups, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
