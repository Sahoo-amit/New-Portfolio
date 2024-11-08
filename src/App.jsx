import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import About from "./pages/About";
import Particle from "./utils/Particle";

const App = () => {
  const location = useLocation();
  const renderParticle = location.pathname === "/";

  return (
    <>
      <Header />
      {renderParticle && <Particle id="particles" />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
};

export default App;
