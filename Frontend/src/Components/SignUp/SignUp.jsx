import  { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
import {useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
const SignUp = () => {

  const navigate = useNavigate() // Initialize the navigate function
  const [formData, setFormData] = useState({
   
    fullName: '',
    email: '',
    password: '',
   
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user/signup', formData);
      console.log('User created successfully', response.data);
       
      
        navigate('/')
    } catch (error) {
      console.error('Error creating user', error.response.data);
    }
  };

  return (
    <div className="signup-container">
      <div className="box">
        <h2>Create an Account</h2>
        <p>
          Already have an account? <Link to="/login"> Sign in</Link> 
        </p>
        <form onSubmit={handleSubmit}>
          
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your name"
              value={formData.FullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="sign-up-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
