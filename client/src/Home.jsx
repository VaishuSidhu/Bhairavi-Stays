import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Facilities from './components/Facilities';
import Location from './components/Location';
import Contact from './components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <div className="kolam-divider mx-auto w-3/4 opacity-40 shadow-sm" />
      <Rooms />
      <Facilities />
      <div className="kolam-divider mx-auto w-1/2 opacity-30 shadow-sm" />
      <Location />
      <Contact />
    </main>
  );
};

export default Home;
