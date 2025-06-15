import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (
      storedUser &&
      storedUser.email === userData.email &&
      storedUser.password === userData.password
    ) {
      alert('Sign in successful!');
      navigate('/dashboard'); 
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          required
        /><br />

        <label>Password:</label><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          required
        /><br />
<div classname="links">
  <pre><a href="#">forgot password</a>       <a href="/register">Registration page?</a></pre>
</div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;