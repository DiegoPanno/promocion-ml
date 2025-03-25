// src/mercadoLibreApi.js
export const obtenerAccessToken = (code) => {
    const CLIENT_ID = "4308375213476668"; // Sustituye con tu client_id
    const CLIENT_SECRET = "ELxoXL5iTVhzZAkz26BsVnWIgEOhbPZT"; // Sustituye con tu client_secret
    const REDIRECT_URI = "https://promocion-ml.netlify.app/";  // La misma URI que usaste en la configuración
  
    const url = `https://api.mercadolibre.com/oauth/token`;
    
    const body = {
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: code,
      redirect_uri: REDIRECT_URI,
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
  
  