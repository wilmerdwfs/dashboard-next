import { NextApiRequest, NextApiResponse } from "next";
import data from "../../../api/clientes_7d_nuevos.json"; // Importa los datos

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.url) {
    return res.status(400).json({ error: "URL no definida" });
  }

  let containerData: any[] = [];

  const { todos } = req.query;
  const day = Number(todos); // Convertir a número para comparación

  switch (day) {
    case 0:
      containerData = data.clientes_7d_nuevos; // Datos de todos los días
      break;
    case 1:
      containerData = data.clientes_7d_nuevos_lunes;
      break;
    case 2:
      containerData = data.clientes_7d_nuevos_martes;
      break;
    case 3:
      containerData = data.clientes_7d_nuevos_miercoles;
      break;
    case 4:
      containerData = data.clientes_7d_nuevos_jueves;
      break;
    case 5:
      containerData = data.clientes_7d_nuevos_viernes;
      break;
    case 6:
      containerData = data.clientes_7d_nuevos_sabado;
      break;
    case 7:
      containerData = data.clientes_7d_nuevos_domingo;
      break;
    default:
      return res.status(400).json({ error: "Día no válido" });
  }
  
  res.status(200).json({ 
    data: containerData
  });
}