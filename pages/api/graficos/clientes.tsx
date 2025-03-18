import { NextApiRequest, NextApiResponse } from "next";
import data from "../../api/data.json"; // Importa los datos

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.url) {
    return res.status(400).json({ error: "URL no definida" });
  }
  
  res.status(200).json({ 
    data: data.clientes_hoy_nuevos
  });
}