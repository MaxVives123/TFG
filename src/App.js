import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

// En index.js o App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CarouselPage from './components/CarouselPage';
import BarraNavegacion from './components/NavBar';
import Home from './components/Home';  // Asume que este es un componente existente
import FAQ from './components/FAQ';  // Asume que este es otro componente existente
import Model3d from './components/Model3d';

function App() {
  const [user,setUser] = useState({});

  function handleCallbackResponse(response){
    console.log("Encoded JWR ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);

  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "293000665435-0v01625j1t8spjfor918t8libjug2u7l.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    );

  }, []);

  
  return (
    <Router>
      <div className="nav-container">
        <div className="barra-navegacion">
          <BarraNavegacion fixed="top" />
        </div>
        <div className="signIn-container">
          <div id="signInDiv"></div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<CarouselPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/model3d" element={<Model3d />} />
      </Routes>
    </Router>
  );
}

export default App;
