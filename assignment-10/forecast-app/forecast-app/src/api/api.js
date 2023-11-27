import axios from 'axios';

const API_KEY = '4247219298d14f3595844237232611'; // Replace with your WeatherAPI key
const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchLocationData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=auto:ip`);
    return response.data.location;
  } catch (error) {
    console.error('Error fetching location data:', error);
    throw error;
  }
};

export const fetchForecast = async (location) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=5`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};

export const fetchHourlyForecast = async (location, date) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&dt=${date}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching hourly forecast:', error);
    throw error;
  }
};
