import "./styles/index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Why from "./components/Why";
import Works from "./components/Works";
import Process from "./components/Process";
import Ready from "./components/Ready";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Navbar/>
      <Hero />
      <Services />
      <Why />
      <Works />
      <Process />
      <Ready/>
      <Footer/>
    </>
  );
}

export default App;
