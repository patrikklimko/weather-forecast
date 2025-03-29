import axios from 'axios';

const API_KEY = '395af677030707c9e2010c4566c2b9dc'; 
// In a real-world application, you should store your API key in an environment variable or a secure vault.
const BASE_URL = 'http://api.weatherstack.com';

export const fetchWeatherData = async (location: string) => {
  const response = await axios.get(`${BASE_URL}/current`, {
    params: {
      access_key: API_KEY,
      query: location,
    },
  });
  return response.data;
};