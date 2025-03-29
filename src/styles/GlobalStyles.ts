import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    color: #333;
    height: 100vh;
    overflow: hidden;
    background: url('/images/mountain-background.jpg') no-repeat center center;
    background-size: cover; 
  }

  * {
    box-sizing: border-box;
  }

  h2, p {
    margin: 0;
  }

  #root {
    position: relative;
    z-index: 1;
  }
`;
