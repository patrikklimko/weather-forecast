import axios from 'axios';

// Ensure the environment variable is available
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'http://api.weatherstack.com';

if (!API_KEY) {
  throw new Error("Missing REACT_APP_WEATHER_API_KEY in environment variables!");
}

export const fetchWeatherData = async (location: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/current`, {
      params: {
        access_key: API_KEY,
        query: location,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error('Failed to fetch weather data.');
  }
};
