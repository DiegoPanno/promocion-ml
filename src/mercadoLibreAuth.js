// src/mercadoLibreApi.js
export const obtenerAccessToken = async (code) => {
  const url = "/.netlify/functions/getAccessToken";  // Llamada a la función de Netlify

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error al obtener el access token:", error);
    throw error;
  }
};

  
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(body),
    })
      .then((response) => response.json())
      .then((data) => {
        return data.access_token;  // Regresa el access_token
      })
      .catch((error) => {
        console.error("Error al obtener el access token:", error);
        throw error;
      });
  };
  
  