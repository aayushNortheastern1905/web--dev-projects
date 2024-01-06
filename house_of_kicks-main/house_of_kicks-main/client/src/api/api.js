import axios from 'axios';

const API_BASE_URL = 'http://house-of-kicks-backend.us-east-1.elasticbeanstalk.com/'; // Replace this with your actual backend base URL

export const signUp = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}user/signup`, formData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : 'Network Error. Please try again later.';
  }
};

// api.js - Define login function in this file to handle login API call
export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Login failed');
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message || 'Login failed');
  }
};

export const logout = async () => {
  try {
    const token = localStorage.getItem('token');

    console.log(token);

    const response = await fetch(`${API_BASE_URL}user/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      // body: JSON.stringify(credentials),
    });
    if(response.status == 200) {

      return true;
    } else {

      return false;
    }

  } catch (error) {
    throw new Error(error.message || 'Logout failed');
  }
};

export const updateUserProfile = async (formData, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}user/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        password : formData.password
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to update profile');
    }

    return data;
  } catch (error) {
    throw new Error(`Error updating profile: ${error.message}`);
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}user/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
       userId : userId
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to update profile');
    }

    return data;
  } catch (error) {
    throw new Error(`Error updating profile: ${error.message}`);
  }
};
