import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Open Sans", sans-serif;
    overflow-y: auto;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #f52754;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
      background-color: #111;
  }

  ::selection {
      background-color: #f52754;
      color: #fff;
  }
`;

export default GlobalStyle;
