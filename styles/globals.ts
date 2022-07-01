import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background: #e6e7ea;
  }

  body {
    padding-top: 120px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


  .js-plotly-plot .plotly .user-select-none  {
    min-height: 450px !important;
  }

  .js-plotly-plot .plotly .main-svg {
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 8%) 0px 9px 27px;
  }


`;

export default GlobalStyle;
