import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherSearch from './WeatherSearch';
import { fetchWeatherData } from '../api/WeatherAPI';

jest.mock('../api/WeatherAPI'); // Mock the API call
const mockedFetchWeatherData = fetchWeatherData as jest.MockedFunction<typeof fetchWeatherData>;

describe('WeatherSearch Component', () => {
  test('renders input and button', () => {
    render(<WeatherSearch />);

    // Check if input field and button are rendered
    expect(screen.getByPlaceholderText('Search City')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('updates input value when typing', () => {
    render(<WeatherSearch />);

    const input = screen.getByPlaceholderText('Search City');
    fireEvent.change(input, { target: { value: 'Pretoria' } });

    // Check if input value is updated
    expect(input).toHaveValue('Pretoria');
  });

  test('displays error message when input is empty', async () => {
    render(<WeatherSearch />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    // Check if error message is displayed
    expect(await screen.findByText('Please enter a location.')).toBeInTheDocument();
  });

  test('calls fetchWeatherData and displays weather data on success', async () => {
    const mockWeatherData = {
      location: { name: 'Pretoria' },
      current: {
        temperature: 24,
        weather_descriptions: ['Sunny'],
        humidity: 61,
        wind_speed: 4,
        pressure: 1025,
        uv_index: 7,
        cloudcover: 0,
      },
    };

    mockedFetchWeatherData.mockResolvedValueOnce(mockWeatherData);

    render(<WeatherSearch />);

    const input = screen.getByPlaceholderText('Search City');
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'Pretoria' } });
    fireEvent.click(button);

    // Wait for the WeatherDisplay component to render
    await waitFor(() => {
      expect(screen.getByText('Pretoria')).toBeInTheDocument();
      expect(screen.getByText('24°C')).toBeInTheDocument();
    });
  });

  test('displays error message when location is not found', async () => {
    mockedFetchWeatherData.mockResolvedValueOnce({ error: 'Location not found' });

    render(<WeatherSearch />);

    const input = screen.getByPlaceholderText('Search City');
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'InvalidCity' } });
    fireEvent.click(button);

    // Check if error message is displayed
    expect(await screen.findByText('Location not found. Please try again.')).toBeInTheDocument();
  });

  test('displays error message when API call fails', async () => {
    mockedFetchWeatherData.mockRejectedValueOnce(new Error('API Error'));

    render(<WeatherSearch />);

    const input = screen.getByPlaceholderText('Search City');
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'Pretoria' } });
    fireEvent.click(button);

    // Check if error message is displayed
    expect(await screen.findByText('Failed to fetch weather data. Please try again.')).toBeInTheDocument();
  });
});