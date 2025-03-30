import React from 'react';
import styled from 'styled-components';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiFog, WiThermometer, WiHumidity, WiStrongWind } from 'react-icons/wi';

const WeatherContainer = styled.div`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 20px;
  width: 400px;
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
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-size: 1.2rem;
`;

const InfoItem = styled.div`
  text-align: center;
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
          <WiThermometer size={70} />
          <p>{current.temperature}°C</p>
        </InfoItem>
        <InfoItem>
          <p>Humidity</p>
          <WiHumidity size={70} />
          <p>{current.humidity}%</p>
        </InfoItem>
        <InfoItem>
          <p>Wind Speed</p>
          <WiStrongWind size={70} />
          <p>{current.wind_speed} m/s</p>
        </InfoItem>
      </WeatherInfo>
    </WeatherContainer>
  );
};

export default WeatherDisplay;
