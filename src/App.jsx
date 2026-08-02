import Navigation from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Journey from "./components/Journey/Journey";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;


/*
npm install bootstrap react-bootstrap react-icons framer-motion react-router-dom
*/