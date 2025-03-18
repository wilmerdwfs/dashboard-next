import HttpGetService from "../HttpGetService";
import useBarChatClientesFromart from "./useBarChatClientesFromart";
import { InterfaceCliente } from "./InterfaceCliente"; // Importamos la interfaz


const useClientes = () => {

  const { formatiarDataGrafico } = useBarChatClientesFromart();

  const httpService = new HttpGetService("http://localhost:3000/api");

  const getClientes = async () => {
    try {
      
      const { data } = await httpService.getData<InterfaceCliente[]>("/graficos/clientes");
      
      return formatiarDataGrafico(data ?? []); // Si `data` es null, devuelve []
   
    } catch (error) {
      console.error("Error al obtener clientes:", error);
      throw error;
    }
  };

  return {
    getClientes,
  };
};

export default useClientes;