import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyles from "../styles/GlobalStyles";
import { Container } from "../styles/Container";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Navbar />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
