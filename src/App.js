import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// En index.js o App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CarouselPage from './components/CarouselPage';
import BarraNavegacion from './components/NavBar';
import Home from './components/Home';  // Asume que este es un componente existente
import FAQ from './components/FAQ';  // Asume que este es otro componente existente
import Model3d from './components/Model3d';

function App() {
  return (
    <Router>
      <div>
        <BarraNavegacion fixed="top" />
        <Routes>
          <Route path="/" element={<CarouselPage />} />  // Página inicial con el carrusel
          <Route path="/home" element={<Home />} />  // Ejemplo de una página 'Home'
          <Route path="/faq" element={<FAQ />} />  // Ejemplo de una página 'FAQ'
          <Route path="/model3d" element={<Model3d />} />  // Ejemplo de una página 'FAQ'
        </Routes>
      </div>
    </Router>
  );
}

export default App;
