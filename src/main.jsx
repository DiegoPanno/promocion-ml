// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // Asegúrate de que esto esté importado correctamente
import "./index.css"; // Si tienes un archivo de estilos globales

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

