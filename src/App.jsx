import { ThemeProvider } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

import Theme from "./styles/theme";
import GLobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GLobalStyle />
      <Navbar />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
