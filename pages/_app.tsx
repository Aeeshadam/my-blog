import { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";
import { theme } from "../styles/theme";
import GlobalStyles from "../styles/GlobalStyles";
import { Container } from "../styles/Container.style";

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
