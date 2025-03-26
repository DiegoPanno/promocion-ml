export const obtenerAccessToken = async (code) => {
  const url = "/.netlify/functions/getAccessToken";  

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

  