import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    background-color: #121212;
    color: #fff;
    margin: 0;
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-bottom: 2rem;
    overflow-x: hidden;
  }
  .network-error {
    text-align: center;
    button {
      background: none;
      border: none;
      color: #1E88E5;
      cursor: pointer;
      font-family: inherit;
      font-size: 1.8rem;
      font-weight: 500;
      margin: 0;
      margin-top: 1.4rem;
      padding: 1rem;
      &:focus {
        outline: none;
      }
    }
  }
`;
