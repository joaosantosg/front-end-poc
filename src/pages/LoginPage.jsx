import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function LoginPage() {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (email === 'test@example.com' && password === 'password123') {
      navigate('/patients');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
      </header>
    </div>
  );
}

export default LoginPage;
