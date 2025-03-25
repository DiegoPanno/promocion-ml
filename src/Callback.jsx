// src/Callback.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerAccessToken } from "./mercadoLibreAuth";  // Asegúrate de tener esta función definida

const Callback = () => {
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      setLoading(true);
      obtenerAccessToken(code)
        .then((token) => {
          setAccessToken(token);
          localStorage.setItem("access_token", token);
          navigate("/");  // Redirige a la página principal después de obtener el token
        })
        .catch((error) => {
          console.error("Error al obtener el access token:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [navigate]);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          {accessToken ? (
            <p>Access Token obtenido con éxito: {accessToken}</p>
          ) : (
            <p>No se pudo obtener el token.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Callback;



