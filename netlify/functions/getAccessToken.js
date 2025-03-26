// netlify/functions/getAccessToken.js
import fetch from "node-fetch";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { code } = JSON.parse(event.body);
  
  const CLIENT_ID = "4308375213476668";
  const CLIENT_SECRET = process.env.CLIENT_SECRET;  // Se define en Netlify
  const REDIRECT_URI = "https://pormociones-ml.netlify.app/";

  const url = "https://api.mercadolibre.com/oauth/token";
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code,
    redirect_uri: REDIRECT_URI,
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error al obtener el token" }),
    };
  }
}
