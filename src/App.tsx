import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Lastest from "./components/Lastest";
import Service from "./components/Service";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
    });
    ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form, .featureIcons, .blog", {
      origin: "bottom",
    });
    ScrollReveal().reveal(".home-content h1, .about-img, .bg-text, .featuredImg", { origin: "left" });
    ScrollReveal().reveal(".home-content p, .about-content, .featuredText", { origin: "right" });
  }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Service />
      <Lastest />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
