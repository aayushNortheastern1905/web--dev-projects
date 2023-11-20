// Assume you have an API service file (api.js) for handling backend requests

const BASE_URL = 'http://localhost:3001'; // Your backend URL
const GET_ALL_ENDPOINT = '/user/getAll'; // Your getAll endpoint on the backend

export const getAllUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}${GET_ALL_ENDPOINT}`);
    if (response.ok) {
      const data = await response.json();
      return data; // Return data if successful
    } else {
      throw new Error('Failed to fetch users');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
