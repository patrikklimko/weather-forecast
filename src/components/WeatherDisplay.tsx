import React, { useState } from 'react';
import styled from 'styled-components';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiFog, WiThermometer, WiHumidity, WiStrongWind, WiBarometer } from 'react-icons/wi';

const WeatherContainer = styled.div`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 20px;
  width: 500px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const CityName = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 10px;
`;

const WeatherIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

const WeatherInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  gap: 20px; /* Space between items */
  margin: 20px 0;
  font-size: 1.2rem;
`;

const InfoItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  height: 120px; /* Set a fixed height for uniformity */
`;

const ToggleButton = styled.button`
  background-color: #4682b4;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  margin: 10px auto;
  display: block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #5a9bd3;
  }
`;

interface WeatherDisplayProps {
  data: any;
}

const getWeatherIcon = (description: string) => {
  if (description.includes("sun")) return <WiDaySunny size={200} />;
  if (description.includes("cloud")) return <WiCloudy size={200} />;
  if (description.includes("rain")) return <WiRain size={200} />;
  if (description.includes("snow")) return <WiSnow size={200} />;
  if (description.includes("fog")) return <WiFog size={200} />;
  return <WiCloudy size={200} />;
};

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
  const { location, current } = data;
  const descriptions = current.weather_descriptions.join(", ");

  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const temperature = isCelsius
    ? `${current.temperature}°C`
    : `${(current.temperature * 9) / 5 + 32}°F`;

  return (
    <WeatherContainer>
      <CityName>{location.name}</CityName>
      <WeatherIconContainer>
        {getWeatherIcon(descriptions.toLowerCase())}
        <p>{descriptions}</p>
      </WeatherIconContainer>
      <WeatherInfo>
        <InfoItem>
          <p>Temperature</p>
          <WiThermometer size={50} />
          <p>{temperature}</p>
        </InfoItem>
        <InfoItem>
          <p>Humidity</p>
          <WiHumidity size={50} />
          <p>{current.humidity}%</p>
        </InfoItem>
        <InfoItem>
          <p>Wind Speed</p>
          <WiStrongWind size={50} />
          <p>{current.wind_speed} m/s</p>
        </InfoItem>
        <InfoItem>
          <p>Pressure</p>
          <WiBarometer size={50} />
          <p>{current.pressure} hPa</p>
        </InfoItem>
        <InfoItem>
          <p>UV Index</p>
          <WiDaySunny size={50} />
          <p>{current.uv_index}</p>
        </InfoItem>
        <InfoItem>
          <p>Cloud Cover</p>
          <WiCloudy size={50} />
          <p>{current.cloudcover}%</p>
        </InfoItem>
      </WeatherInfo>
      <ToggleButton onClick={toggleTemperatureUnit}>
        Toggle to {isCelsius ? "Fahrenheit" : "Celsius"}
      </ToggleButton>
    </WeatherContainer>
  );
};

export default WeatherDisplay;