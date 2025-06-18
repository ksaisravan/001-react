import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Frist = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const foundUser = storedUsers.find(
      (user) => user.email === userData.email && user.password === userData.password
    );

    if (foundUser) {
      alert('Sign in successful!');
      navigate('/dashboard');
    } else {
      setError('Invalid email or password!'); 
    }
  };

  return (
    <div className="form-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={userData.email} 
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="password">Password:</label><br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          required
        /><br />

        {error && <p className="error-message">{error}</p>}

        <div className="links"> 
          <a href="/forget">Forgot password?</a>
          <a href="/register">Registration page?</a>
        </div>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Frist;