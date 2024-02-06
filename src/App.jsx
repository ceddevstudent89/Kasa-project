/* npm i react-router-dom */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <div className="container-app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
