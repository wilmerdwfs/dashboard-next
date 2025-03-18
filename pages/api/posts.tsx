import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json([
      { id: 1, title: "Primer Post" },
      { id: 2, title: "Segundo Post" },
    ]);
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}