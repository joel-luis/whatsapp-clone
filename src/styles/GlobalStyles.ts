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
    font-family: system,-apple-system,system-ui,BlinkMacSystemFont,Helvetica Neue,Helvetica,Lucida Grande,Kohinoor Devanagari,sans-serif;
  }
  :root {
    --icons: #b0b3b8;
    --primary-intro: #222f37;
    --sidebar: #131c21;
    --search: #242526;
    --input: #3a3b3c;
    --textInput: #b0b3b8;
    --border: #333637;
    --header: #2a2f32;
    --texth1: #f1f1f2;
    --texth2: #a6a8aa;
    --p: #84878a;
    --newchat: #323739;
    --chathover: #323739;
    --chattext: #f1f1f2eb;
    --scrollbar: #384044;
    --bodybg: #0d1418;
    --hour: #99bbbd;
  }
  `;
