import React, { useState } from 'react';
import { fetchWeatherData } from '../api/WeatherAPI';
import WeatherDisplay from './WeatherDisplay';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px 10px 10px 10px;
  margin-right: 10px;
  outline: none;
  width: 300px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #333;
`;

const SearchButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  color: #fff;
  background-color: #4682b4;
  border: none;
  border-radius: 25px 25px 25px 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #5a9bd3;
  }
`;

const WeatherSearch: React.FC = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    if (!location.trim()) {
      setError('Please enter a location.');
      setWeatherData(null);
      return;
    }

    try {
      setError(null);
      const data = await fetchWeatherData(location);

      if (data.error) {
        setError('Location not found. Please try again.');
        setWeatherData(null);
      } else {
        setWeatherData(data);
      }
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      setWeatherData(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  return (
    <div>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search City" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SearchButton onClick={fetchWeather}>
          <FaSearch />
        </SearchButton>
      </SearchContainer>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
};

export default WeatherSearch;