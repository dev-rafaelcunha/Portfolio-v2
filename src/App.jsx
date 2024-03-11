import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import Experiences from "./components/pages/Experiences";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import GlobalStyle from "./global/GlobalStyle";

function App() {

  return (

    <>
      <GlobalStyle />
      <Home />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Footer />
    </>
  );
}

export default App;