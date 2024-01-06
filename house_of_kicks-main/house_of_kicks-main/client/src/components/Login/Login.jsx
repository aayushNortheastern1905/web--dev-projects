import React, { useEffect, useState } from 'react';
import { login } from '../../api/api';
import './LoginStyles/loginStyles.css';
import routes from '../../Routes';
import '../../Styles/common.css';
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import { ADMIN_CREDENTIALS } from '../../constants/login.constants';
// import bcrypt from 'bcrypt'

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    // Fetch users' data
    const fetchData = async () => {
      try {
        const response = await fetch('http://house-of-kicks-backend.us-east-1.elasticbeanstalk.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError('Error fetching data: ' + error.message);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Validation for email existence
      const user = users.find((user) => user.email === credentials.email);
      if (!user) {
        setEmailError('Email does not exist');
        setPasswordError('');
        setLoading(false);
        return;
      } else {
        setEmailError('');
      }

      // Validation for matching passwords
      // if (bcrypt.compare(credentials.password, user.password)) {
      //   setPasswordError('Incorrect password');
      //   setLoading(false);
      //   return;
      // } else {
      //   setPasswordError('');
      // }

      const response = await login(credentials, 5000);
      const { _id, email, firstName, lastName, phone, password } = response.user;
      const token = response.token;
      // If validations pass, proceed with login
      const adminEmail = ADMIN_CREDENTIALS.EMAIL; 
      const adminPassword = ADMIN_CREDENTIALS.PASSWORD; 
  
      // Check if entered credentials match admin credentials
      if (credentials.email === adminEmail && credentials.password === adminPassword) {
        // Redirect to admin page if credentials match
        localStorage.setItem('_id', _id);
      localStorage.setItem('email', email);
      localStorage.setItem('token', token);
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('phone', phone);
      localStorage.setItem('password', password); 
        window.location.replace(routes.ADMIN); // Replace with your admin page route
        return;
      }
      
      localStorage.setItem('_id', _id);
      localStorage.setItem('email', email);
      localStorage.setItem('token', token);
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('phone', phone);
      localStorage.setItem('password', password);
      
      window.location.replace(routes.LANDINGPAGE);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-background">
      <div className="login-container justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
            {emailError && <span className="error-message">{emailError}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password <span className="required">*</span>
            </label>
            <div className="">
              <div className='password-row'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
                <i className={`far fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} id="togglePassword" onClick={() => setShowPassword(!showPassword)}></i>
              </div>
              {passwordError && <span className="error-message">{passwordError}</span>}
            </div>
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="login-btn-color btn btn-secondary w-100 mt-3"
              disabled={loading}
            >
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : null}
              {loading ? 'Logging In...' : 'Log In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

