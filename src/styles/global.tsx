import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #FF7A01;
        --background: #F5F6FA;
        --shape-light: #FFFFFF;
        --secondary: #8DC73F;
        --inactive: #CECECE;
        --text-gray: #AAAAAA;
        --text-light: #FFFFFF;
        --text-dark: #000000;
        --alert: #333333;
        --negative: #FF0000;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`