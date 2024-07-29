// Login.js
import { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import './Login.css';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function
  const {updateUser } = useContext(UserContext); // Get the setUser function from UserContext

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/user/login', {
        username: userName,
        password,
      });

         console.log(response)
      setMessage('Login successful!');
      // Save the token to local storage
      localStorage.setItem('token', response.data.token);
      
        // debugging for user in localstorage
        console.log("local storage",localStorage)


      const userDetails = response.data.token; // passing the response token into user context to fetch user information

      // Set the user state
      updateUser(userDetails);
      console.log("user context", updateUser);

      // Navigate to home page
      navigate('/');
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.err || 'An error occurred');
      } else {
        setMessage('An error occurred');
      }
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2 className='heading'>Sign in to your account</h2>
        <p>
        Or <Link to="/signup"> sign up for a new account</Link>
          
        </p>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <label>Username</label>
            <input
              type="text"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="inputs">
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/forgot-password">Forgot your password?</a>
          </div>
          <button type="submit" className="sign-in-btn">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
