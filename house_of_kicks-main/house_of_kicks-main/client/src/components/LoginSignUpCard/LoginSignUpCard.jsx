// 
import React, { useState } from 'react';
import { FaShoePrints } from 'react-icons/fa';
import SignUp from '../../components/SignUp/SignUp';
import Login from '../Login/Login';
import "./LoginSignUpCardStyles/loginSignUpCardStyles.css";

const LoginSignUpCard = () => {
  const [activeTab, setActiveTab] = useState('login'); 

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='bgi'>
      <div className="auth-container">
        <div className="auth-card">
          <div className="text-center mt-4">
            <div className='hok-icon'>
              <img src='https://drive.google.com/uc?id=1qiDDnWjhOSoM7zwuM3Ag29oS83N9hu-D' height={80} width={80} />
            </div>

          </div>
          <div className="tab-toggles">
            <span
              className={activeTab === 'signup' ? 'active-tab' : 'inactive-tab'}
              onClick={() => handleTabChange('signup')}
            >
              Sign Up
            </span>
            <span
              className={activeTab === 'login' ? 'active-tab' : 'inactive-tab'}
              onClick={() => handleTabChange('login')}
            >
              Login
            </span>
          </div>
          {activeTab === 'signup' && <SignUp />}
          {activeTab === 'login' && <Login />}
        </div>
      </div>
    </div>
  );
};

export default LoginSignUpCard;
