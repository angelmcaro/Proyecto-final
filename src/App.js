import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Seccion from "./components/Seccion";
import Menu from "./components/Menu";
import "./App.css";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Seccion titulo="Inicio" contenido="Bienvenido a nuestra página." />} />
        <Route path="/servicios" element={<Seccion titulo="Quienes somos" contenido="Somos tu asesor de confianza, te ayudamos a comprar tu auto nuevo y de segunda mano." />} />
        <Route path="/contacto" element={<Seccion titulo="Contacto" contenido="Danos tus datos nosotros te contactamos." />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
