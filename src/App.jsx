/* npm i react-router-dom */
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

import Navbar from "./components/Navbar.jsx";
import CardDetail from "./components/CardDetail.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useEffect(() => {
    // Fonction pour mettre à jour la hauteur de la fenêtre de visualisation
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Mettre à jour la hauteur de la fenêtre de visualisation lors du montage du composant
    setVh();

    // Ajouter un écouteur d'événement pour mettre à jour la hauteur de la fenêtre de visualisation lors du redimensionnement de la fenêtre
    window.addEventListener("resize", setVh);

    // Supprimer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);
  return (
    <div className="container-app">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cards/:id" element={<CardDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
