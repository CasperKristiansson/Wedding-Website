import React from 'react';
import './App.css';
import { Navigation } from './Pages/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Invitation from './Pages/invitation/invitation';
import Home from './Pages/home/Home';
import Gifts from './Pages/Gifts/Gifts';
import OurStory from './Pages/OurStory/OurStory';
import WeddingDay from './Pages/WeddingDay/WeddingDay';
import FAQ from './Pages/QuestionAnswer/QuestionAnswer';
import Itinerary from './Pages/Itinerary/Itinerary';
import Stockholm from './Pages/Stockholm/Stockholm';

function App() {
  return (
    <div className="App">
      {window.location.pathname !== '/invitation' && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/wedding-day" element={<WeddingDay />} />
        <Route path="/qa" element={<FAQ />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/stockholm-tips" element={<Stockholm />} />
        <Route path="*" element={<h1 style={{textAlign: "center"}}>404 Not Found </h1>} />
      </Routes>
    </div>
  );
}

export default App;
