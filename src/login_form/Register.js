import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Button } from '@mui/material';
import '../Assets/Style/register.css';

const CustomPopup = ({ message, onClose }) => (
  <div className="popup">
    <Typography color="error" variant="caption">
      {message}
    </Typography>
    <Button onClick={onClose} variant="outlined">
      Close
    </Button>
  </div>
);

function Register() {
  const [formData, setFormData] = useState({
    user: '',
    dob: '',
    email: '',
    password: '',
    contactNumber: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (Object.values(formData).some((value) => value === '')) {
      alert('Please fill in all fields');
      return;
    }

    // Additional validation for contact number
    if (!/^\d{10}$/.test(formData.contactNumber)) {
      alert('Please enter a valid 10-digit contact number');
      return;
    }

    try {
      // Make a POST request to the JSON Server for registration
      await axios.post('http://localhost:3001/users', formData);

      console.log('Registration successful:', formData);

      // Navigate to the login page after successful registration
      window.location.href = '/login';
    } catch (error) {
      console.error('Registration failed:', error.message);
      setShowPopup(true);
    }
  };

  return (
    <div className='regimage'>
      <div className='reg'>
        <center>
          <h1>SIGN UP</h1>
        </center>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>User Information</legend>

            <label htmlFor="user">Full Name:</label>
            <input
              type="text"
              id="user"
              name="user"
              placeholder="Enter your full name"
              value={formData.user}
              onChange={handleChange}
              required
            />
            <br />

            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
            <br />

            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <br />

            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              placeholder="Enter your phone number"
              value={formData.contactNumber}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
            />
            <br />

            <center>
              <button type="submit" className='rep2'>SIGN UP</button>
            </center>
          </fieldset>
        </form>

        {/* Display popup if showPopup is true */}
        {/* {showPopup && <CustomPopup message="Registration failed" onClose={closePopup} />} */}
      </div>
    </div>
  );
}

export default Register;