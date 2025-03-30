import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherDisplay from './WeatherDisplay';

const mockData = {
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

describe('WeatherDisplay Component', () => {
  test('renders weather information correctly', () => {
    render(<WeatherDisplay data={mockData} />);

    // Check if location name is displayed
    expect(screen.getByText('Pretoria')).toBeInTheDocument();

    // Check if weather description is displayed
    expect(screen.getByText('Sunny')).toBeInTheDocument();

    // Check if temperature is displayed
    expect(screen.getByText('24°C')).toBeInTheDocument();

    // Check if humidity is displayed
    expect(screen.getByText('61%')).toBeInTheDocument();

    // Check if wind speed is displayed
    expect(screen.getByText('4 m/s')).toBeInTheDocument();

    // Check if pressure is displayed
    expect(screen.getByText('1025 hPa')).toBeInTheDocument();

    // Check if UV index is displayed
    expect(screen.getByText('7')).toBeInTheDocument();

    // Check if cloud cover is displayed
    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  test('toggles temperature units between Celsius and Fahrenheit', () => {
    render(<WeatherDisplay data={mockData} />);

    // Check initial temperature in Celsius
    expect(screen.getByText('24°C')).toBeInTheDocument();

    // Click the toggle button
    const toggleButton = screen.getByText('Toggle to Fahrenheit');
    fireEvent.click(toggleButton);

    // Check temperature in Fahrenheit
    expect(screen.getByText('75.2°F')).toBeInTheDocument();

    // Click the toggle button again
    fireEvent.click(toggleButton);

    // Check temperature back in Celsius
    expect(screen.getByText('24°C')).toBeInTheDocument();
  });
});