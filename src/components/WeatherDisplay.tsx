import React from 'react';
import styled from 'styled-components';
import { WiHumidity, WiStrongWind, WiThermometer } from 'react-icons/wi';

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
  font-size: 1.5rem;
  color: white;
  margin-bottom: 10px;
`;

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px auto;
`;

const WeatherInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const InfoItem = styled.div`
  text-align: center;
`;

interface WeatherDisplayProps {
  data: any;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
  const { location, current } = data;

  return (
    <WeatherContainer>
      <CityName>{location.name}</CityName>
      <WeatherIcon src={current.weather_icons[0]} alt="Weather Icon" />
      <WeatherInfo>
        <InfoItem>
          <p>Temperature</p>
          <WiThermometer size={30} />
          <p>{current.temperature}°C</p>
        </InfoItem>
        <InfoItem>
          <p>Humidity</p>
          <WiHumidity size={30} />
          <p>{current.humidity}%</p>
        </InfoItem>
        <InfoItem>
          <p>Wind Speed</p>
          <WiStrongWind size={30} />
          <p>{current.wind_speed} m/s</p>
        </InfoItem>
      </WeatherInfo>
    </WeatherContainer>
  );
};

export default WeatherDisplay;
