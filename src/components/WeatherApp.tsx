import React from 'react';
import WeatherSearch from '../components/WeatherSearch';  
import { GlobalStyles } from '../styles/GlobalStyles';   
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  align-self: center;
`;

const WeatherApp: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Title>Weather Forecast</Title>
        <WeatherSearch />
      </Container>
    </>
  );
};

export default WeatherApp;
