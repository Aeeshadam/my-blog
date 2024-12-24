import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
  font-size: 62.5%;
}

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    margin: 0;
  }

  h1, h2 {
    font-family: 'Times New Roman', Times, serif;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.primary};
  }

    h1 {
        font-size: clamp(3rem, 5vw, 4rem);
    }

    h2 {
        font-size: clamp(2rem, 4vw, 3.6rem);
    }
`;

export default GlobalStyles;
