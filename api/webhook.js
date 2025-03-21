export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await fetch("https://hook.us2.make.com/76b1rylamonh1rkvkug8g5o8hhwgnlcf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(req.body)
      });

      if (response.ok) {
        res.status(200).json({ status: "ok" });
      } else {
        res.status(500).json({ error: "Error al reenviar al webhook de Make" });
      }
    } catch (err) {
      res.status(500).json({ error: "Error de red", detalle: err.message });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
