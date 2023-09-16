import React, { useEffect } from 'react';
import './App.css';

import LoginPage from './Pages/Login/Login';
import { Navigation } from './Pages/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Invitation from './Pages/invitation/invitation';
import Home from './Pages/home/Home';
import Gifts from './Pages/Gifts/Gifts';
import OurStory from './Pages/OurStory/OurStory';
import WeddingDay from './Pages/WeddingDay/WeddingDay';
import FAQ from './Pages/QuestionAnswer/QuestionAnswer';

function App() {
  const [login, setLogin] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const loginStatus = localStorage.getItem('login');
    if (loginStatus) {
      setLogin(true);
    }
    setLoading(false);
  }, []);

  return (
    <div className="App">
      {!login && !loading && (
        <LoginPage setLogin={(login: boolean) => setLogin(login)} />
      )}
      {login && (
        <>
          {window.location.pathname !== '/invitation' && <Navigation />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invitation" element={<Invitation />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/wedding-day" element={<WeddingDay />} />
            <Route path="/qa" element={<FAQ />} />
            <Route path="*" element={<h1 style={{textAlign: "center"}}>404 Not Found </h1>} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
