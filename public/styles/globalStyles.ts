import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    height: 100%;
  }
  html {
    text-size-adjust: 100%;
  }
  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'SourceCodePro', sans-serif;
  }
  :focus {
    outline: 0;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  input,
  textarea {
    font-family: 'SourceCodePro', sans-serif;
  }
  a, button {
    cursor: pointer;
    font-family: 'SourceCodePro', sans-serif;
  }
  a {
    color: white;
    text-decoration: none;
    transition: all .25s ease-in-out 0s;
    outline: none;
  }
  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;