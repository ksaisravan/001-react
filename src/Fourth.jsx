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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      alert("Passwords don't match");
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem('user'));
    if(savedUser && savedUser.email == formData.email){
      alert("user already register with this email");
          navigate('/signin');

      return;
    }
    
    const { confirmpassword, ...userData } = formData;

    localStorage.setItem('user', JSON.stringify(userData));
    alert('Registration successful!');
    navigate('/signin');
  };

  return (
    <div className='reg'>
      <h1>REGISTRATION</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br />

        <label>Email</label>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br />

        <label>Phone no</label>
        <input type="tel" name="phone" placeholder="Phone no" pattern="[0-9]{10}" onChange={handleChange} required /><br />

        <label>Password</label>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br />

        <label>Confirm Password</label>
        <input type="password" name="confirmpassword" placeholder="Confirm Password" onChange={handleChange} required /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Fourth;