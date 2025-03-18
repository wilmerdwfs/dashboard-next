import HttpGetService from "../HttpGetService";
import useClientes7DFormato from "./useClientes7DFormato";
import { InterfaceCliente } from "./InterfaceCliente"; // Importamos la interfaz
import { useGlobal } from "../../providers/GlobalContext";

const useClientes7D = () => {
  const {
    menuMedioFilter
  } = useGlobal();

  const { formatiarDataGrafico } = useClientes7DFormato();

  const httpService = new HttpGetService("http://localhost:3000/api");

  const getClientes7D = async () => {
    try {

      const params = { todos: menuMedioFilter}; // Parámetros que quieres enviar
      const queryString = new URLSearchParams(params).toString();
      
      const { data } = await httpService.getData<InterfaceCliente[]>(
          `/graficos/clientes/7D?${queryString}`
      );
      
      return formatiarDataGrafico(data ?? []); // Si `data` es null, devuelve []
   
    } catch (error) {
      console.error("Error al obtener clientes:", error);
      throw error;
    }
  };

  return {
    getClientes7D,
  };
};

export default useClientes7D;