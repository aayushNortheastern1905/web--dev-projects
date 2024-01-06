import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ element, route }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate({route}); 
    } else {
      navigate('/auth'); 
    }
  }, [navigate]);

  return <>{element}</>;
};

export default ProtectedRoute;
