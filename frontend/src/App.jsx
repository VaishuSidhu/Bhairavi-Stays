import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import RoomDetails from './components/RoomDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-kaavi flex flex-col font-sans">
        {/* SE0 Optimized Title */}
        <h1 className="sr-only">Homestay near Isha Yoga Center Coimbatore - Bhairavi Home Stay</h1>
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:id" element={<RoomDetails />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
