import styles from "./BoxMonth.module.css";  
import useTotalMeses from "../../hooks/total-meses/useTotalMeses";
import { useQuery } from "@tanstack/react-query";

const BoxMonth = () => {
  const {getTotalMeses} = useTotalMeses()

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["totalMeses"],
    queryFn: () => getTotalMeses(),
  });


  const nombresPersonalizados: { [key: string]: string } = {
    "clientes": "Clientes",
    "ventas_totales": "Ventas Totales",
    "monto_total": "Monto Total",
    "acomulado": "Acumulado"
  };
  
  return (
    <div className={styles["box-month-container"]}>
       
       {data?.map((mes) => ( 
         <div key={mes.mes} className={styles["box-month"]}>
         <div className={styles["box-month-header"]}>
             {mes.mes}
         </div>
         <div className={styles["box-month-body"]}>
             {mes.detalle?.map((item, index) => {
                 const key = Object.keys(item)[0];
                 const nombreMostrado = nombresPersonalizados[key] || key; 

                 let valorMostrado: string | number =  item[key];

                 // Si la clave es "monto_total", formatear el valor con "$" y "M"
                 if (key === "monto_total") {
                    valorMostrado = `$${valorMostrado}M`;
                 }
                
                return (
                     <div key={index} className={styles["box-month-body-row"]}>
                         <div className={styles["box-month-title"]}>
                            {nombreMostrado} 
                         </div>
                         <div className={styles["box-month-total"]}>
                            {valorMostrado}
                         </div>
                     </div>
                 );
             })}
            {
              <div className={styles["box-month-subtitulo"]}>
                Cashback
              </div>
            }
             {mes.cashback?.map((item, index) => {
                 const key = Object.keys(item)[0];
                 let nombreMostrado = nombresPersonalizados[key] || key; 

                if (key === "fecha") {
                  nombreMostrado = `Facturado ${item.fecha}`;
                }

                let valorMostrado: string | number = item.total;

                // Si la clave es "monto_total", formatear el valor con "$" y "M"
                if (key === "fecha") {
                  valorMostrado = `$${valorMostrado}`;
                }
                
                return (
                  <div key={index} className={styles["box-month-body-row"]}>
                    <div className={styles["box-month-title"]}>
                      {nombreMostrado} 
                    </div>
                    <div className={styles["box-month-total"]}>
                      {valorMostrado}
                    </div>
                  </div>
                );
             })}
         </div>
     </div>
       )) }
    </div>
  );
};

export default BoxMonth;