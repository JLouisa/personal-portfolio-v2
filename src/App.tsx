import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
