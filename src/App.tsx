import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes/Themes";
import * as C from "./AppStyle";
import Header from "./components/Header";
import Start from "./components/Start";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <C.Container>
        <Header theme={theme} setTheme={setTheme} />
        <Start />
        <Gallery />
        <Contact />
        <Footer />
      </C.Container>
    </ThemeProvider>
  );
}

export default App;
