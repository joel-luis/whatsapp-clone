import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;

  }
  body {
    background-color: #D2DBDC;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Segoe UI', 'Helvetica Neue', Lucida Grande, Arial;
  }
  `;
