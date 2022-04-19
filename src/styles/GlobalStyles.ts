import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root{
    --col-light: hsl(0, 0%, 98%);
    --col-gray:hsl(0, 0%, 41%);
    --col-dark: hsl(0, 0%, 8%);

    --font-primary: 'Epilogue', sans-serif;


    --height-header: 8rem;
  }

  *,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
    font-size: 62.5%;
  }


  body{
    min-height: 100vh;
    font: 18px;
    font-weight: 500;
    font-family: var(--font-primary);
    background-color: var(--col-light);
    color: var(--col-gray);
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
    font-size: 1.6rem;
  cursor: pointer;
  color: var(--col-gray);


    &:hover{
      color: var(--col-dark);
    }

  }

  h1{
    font-weight: 700;
    color:var(--col-dark);
  }

  p{
    font-size: 1.8rem;
    line-height: 1.5;
  }


`;

export default GlobalStyle;
