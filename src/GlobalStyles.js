import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  body #root {
    width: 100%;
    height: 100%;
  }
`;
