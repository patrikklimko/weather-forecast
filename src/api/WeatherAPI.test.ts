import axios from 'axios';
import { fetchWeatherData } from './WeatherAPI';

jest.mock('axios'); // Mock the axios library
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchWeatherData', () => {
  const mockResponse = {
    location: { name: 'Pretoria' },
    current: { temperature: 24, weather_descriptions: ['Sunny'] },
  };

  test('fetches weather data successfully', async () => {
    // Mock a successful API response
    mockedAxios.get.mockResolvedValueOnce({ data: mockResponse });

    const data = await fetchWeatherData('Pretoria');

    // Verify the returned data
    expect(data).toEqual(mockResponse);

    // Verify the API call was made with the correct parameters
    expect(mockedAxios.get).toHaveBeenCalledWith(
      'http://api.weatherstack.com/current',
      {
        params: {
          access_key: process.env.REACT_APP_WEATHER_API_KEY,
          query: 'Pretoria',
        },
      }
    );
  });

  test('throws an error when the API call fails', async () => {
    // Mock a failed API response
    mockedAxios.get.mockRejectedValueOnce(new Error('API Error'));

    // Verify that the function throws an error
    await expect(fetchWeatherData('Pretoria')).rejects.toThrow(
      'Failed to fetch weather data.'
    );

    // Verify the API call was made with the correct parameters
    expect(mockedAxios.get).toHaveBeenCalledWith(
      'http://api.weatherstack.com/current',
      {
        params: {
          access_key: process.env.REACT_APP_WEATHER_API_KEY,
          query: 'Pretoria',
        },
      }
    );
  });
});