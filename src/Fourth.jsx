import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Fourth.css';

function Fourth() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: ""
  });

  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [emailExistsError, setEmailExistsError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    if (name === "password" || name === "confirmpassword") {
      setPasswordMatchError('');
    }
    if (name === "email") {
      setEmailExistsError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;

    const email = formData.email.trim().toLowerCase();

    if (formData.password !== formData.confirmpassword) {
      setPasswordMatchError("Passwords don't match");
      hasErrors = true;
    } else {
      setPasswordMatchError('');
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some(user => user.email === email);

    if (userExists) {
      setEmailExistsError("User already registered with this email. Please sign in.");
      hasErrors = true;
    } else {
      setEmailExistsError('');
    }

    if (hasErrors) {
      return;
    }

    const { confirmpassword, ...userData } = formData;
    userData.email = email; 

    const updatedUsers = [...existingUsers, userData];

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert('Registration successful!');
    navigate('/Frist');
  };

  return (
    <div className='form-container'>
      <h1>REGISTRATION</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {emailExistsError && <p className="error-message">{emailExistsError}</p>}
        <br />

        <label htmlFor="phone">Phone no</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone no"
          pattern="[0-9]{10}"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          placeholder="Confirm Password"
          value={formData.confirmpassword}
          onChange={handleChange}
          required
        />
        {passwordMatchError && <p className="error-message">{passwordMatchError}</p>}
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Fourth;
