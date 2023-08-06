import React, { useEffect } from 'react';
import './App.css';

import LoginPage from './Pages/Login/Login';
import { Navigation } from './Pages/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Invitation from './Pages/invitation/invitation';
import Home from './Pages/home/Home';

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
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
