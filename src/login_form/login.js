import { Button, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Assets/Style/login.css';

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

function Login() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    errorMessage: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      errorMessage: '',
    }));
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.username === '' || formData.password === '') {
      setFormData((prevData) => ({
        ...prevData,
        errorMessage: 'Please enter both username and password',
      }));
      setShowPopup(true);
      return;
    }

    try {
      // Make a GET request to check login credentials
      const response = await axios.get(
        `http://localhost:3001/users?username=${formData.username}&password=${formData.password}`
      );

      if (response.data.length > 0) {
        // Successful login
        console.log('Login successful:', response.data[0]);

        // Navigate to the product page using useNavigate
        navigate('/product');
      } else {
        // Invalid credentials
        setFormData((prevData) => ({
          ...prevData,
          errorMessage: 'Invalid username or password',
        }));
        setShowPopup(true);
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      window.location.href = '/product';
    }
  };

  return (
    <div className="logimage">
      <div className="log">
        <center>
          <h1>LOGIN</h1>
        </center>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <br />

          <center>
            <Button type="submit" className="rep2" variant="contained">
              SIGN IN
            </Button>
          </center>

          {/* Display popup if showPopup is true */}
          {showPopup && (
            <CustomPopup message={formData.errorMessage} onClose={closePopup} />
          )}
        </form>

        <br />
        <Typography>
          <Link to="#">Forgot Password?</Link>
        </Typography>
        <br />
        <Typography>
          Don't have an account?{' '}
          <Link to="/register" className="link">
            SignUp
          </Link>
        </Typography>
      </div>
    </div>
  );
}

export default Login;
