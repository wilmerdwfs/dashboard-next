"use client";

import { BarChart } from "@mui/x-charts";
import useClientes7D from "../../hooks/graphics/useClientes7D";
import { useQuery } from "@tanstack/react-query";
import { useGlobal } from "../../providers/GlobalContext";

const colors = ["#ff863c", "#3c8cff"];
const labels = ["Clientes nuevos", "Compraron"];

const BarGraphicClientes7D = () => {
    const {
        menuMedioFilter
    } = useGlobal();

    const {getClientes7D} = useClientes7D()

    const { data, isLoading, error} = useQuery({
        queryKey: ["clientes7D",menuMedioFilter],
        queryFn: () => getClientes7D(),
    });
  
    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar los datos</p>;

    return (
    <div style={{ textAlign: "center" }}>
    <BarChart
      series={[
        {
          data: data?.cantidades, // cantidad de clientes nuevos
          color: "rgba(255, 134, 60, 0.8)", // Salmón con transparencia
        },
        {
          data: data?.compraron, // Diferencia más clara
          color: "rgba(60, 140, 255, 0.8)", // Azul con transparencia
        },
      ]}
      height={290}
      xAxis={[
        {
          data: data?.horas,
          scaleType: "band",
        },
      ]}
      grid={{ vertical: false, horizontal: true }} // Habilita líneas horizontales
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />

    {/* Leyenda */}
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
      {labels.map((label, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center", marginRight: 20 }}>
          <div
            style={{
              width: 15,
              height: 15,
              backgroundColor: colors[index],
              marginRight: 5,
            }}
          ></div>
          <span>{label}</span>
        </div>
      ))}
    </div>
  </div>
  );
}

export default BarGraphicClientes7D;