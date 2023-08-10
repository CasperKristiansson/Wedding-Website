import { createUseStyles } from 'react-jss';
import { useState } from 'react';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '500px',
    width: '100%',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: '0.5rem',
  },
  input: {
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: '16px',
    width: 'calc(100% - 1rem)',
  },
  button: {
    padding: '0.5rem',
    borderRadius: '4px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#007bff',
    color: '#fff',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
});

const cresnt = {
  lksom: 'NivvGViBmemllqvo',
  osern: 'tUPDLIPMNxFEEJOH2024',
}

const LoginPage: React.FC<{ setLogin: (login: boolean) => void; }> = ({ setLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();

  const handleLogin = async () => {
    // Simulate sending data to the backend
    // Replace this with your actual backend integration
    if (username && password) {
      const shiftedUsername = shiftCharacters(username, 8);
      const shiftedPassword = shiftCharacters(password, 27);
      if (shiftedUsername === cresnt.lksom && shiftedPassword === cresnt.osern) {
        setLogin(true);
        localStorage.setItem('login', 'true');
      } else {
        alert('Invalid username or password.');
      }
    } else {
      alert('Please enter your username and password.');
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <h1>Login</h1>
        <div>
          <label htmlFor="username">Username</label>
          <input
            className={classes.input}
            type="text"
            id="username"
            name="username"
            autoComplete="username" // Enable autofill for username
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className={classes.input}
            type="password"
            id="password"
            name="password"
            autoComplete="current-password" // Enable autofill for password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={classes.button} onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

function shiftCharacters(input: string, shiftAmount: number): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return input.split('')
    .map((char) => {
      const index = alphabet.indexOf(char);
      if (index !== -1) {
        const shiftedIndex = (index + shiftAmount) % alphabet.length;
        return alphabet[shiftedIndex];
      }
      return char;
    })
    .join('');
}

export default LoginPage;