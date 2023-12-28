import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that the required fields are not empty
    if (!username || !password) {
      alert('Username and password are required');
      return;
    }

    // Perform login logic here
    // For now, you can just log the values
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="text-center mb-4 text-white">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label text-white">
              Username
            </label>
            <input
              type="text"
              className="form-control oval-input"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label text-white">
              Password
            </label>
            <input
              type="password"
              className="form-control oval-input"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-dark text-white mt-3">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
