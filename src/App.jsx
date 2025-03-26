// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Callback from "./Callback";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;



const App = () => {
  const handleLogin = () => {
    const url = `https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
    window.location.href = url;  // Redirige a Mercado Libre para obtener el código
  };

  return (
    <Router>
      <div>
        <h1>Mi App de Promociones</h1>
        <Routes>
          <Route path="/" element={<button onClick={handleLogin}>Iniciar Sesión con Mercado Libre</button>} />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

