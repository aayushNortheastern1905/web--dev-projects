import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../api/api';
import bcrypt from 'bcryptjs';
import Home from '../Home/Home';
import './loginStyles.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [usersData, setUsersData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getAllUsers();
        setUsersData(users);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };
    fetchUsers();
  }, []);

    // Function to check if both email and password are filled
    useEffect(() => {
      setIsButtonEnabled(email.trim() !== '' && password.trim() !== '');
    }, [email, password]);
  const handleLogin = (e) => {
    e.preventDefault();

    const userExists = usersData.find(
      (user) => user.email === email && bcrypt.compareSync(password, user.password)
    );

    if (userExists) {
      console.log('Login successful');
      setIsLoggedIn(true);
    } else {
      setLoginError('Invalid email or password');
    }
  };

  // Conditional rendering based on isLoggedIn state
  if (isLoggedIn) {
    return <Home />;
  }

  return (
    <>
    <h1>
      Start your Job Hunt Journey!
    </h1>
    <div className="login-container">
      <h1>Welcome to Hirect</h1>
      <form className="login-form" onSubmit={handleLogin}>
        {/* Input fields for email and password */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className={isButtonEnabled ? 'active-button' : 'inactive-button'} disabled={!isButtonEnabled} >Login</button>
      </form>
      {loginError && <p className="error-message">{loginError}</p>}
    </div>
    </>
  );
};

export default Login;

