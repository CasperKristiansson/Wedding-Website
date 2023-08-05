import React, { useEffect } from 'react';
import './App.css';

import LoginPage from './Pages/Login/Login';

function App() {
  const [login, setLogin] = React.useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem('login');
    if (loginStatus) {
      setLogin(true);
    }
  }, []);


  return (
    <div className="App">
      {!login && (
        <LoginPage setLogin={(login: boolean) => setLogin(login)} />
      )}
      {login && <h1>Logged in!</h1>}
    </div>
  );
}

export default App;
