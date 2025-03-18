import HttpGetService from "../HttpGetService";
import { InterfaceTotalMeses } from "./InterfaceTotalMeses"; // Importamos la interfaz


const useTotalMeses = () => {

  const httpService = new HttpGetService("http://localhost:3000/api");

  const getTotalMeses = async () => {
    try {
      
      const { data } = await httpService.getData<InterfaceTotalMeses[]>("/total-meses/totalMeses");
      
      return data; 
   
    } catch (error) {
      console.error("Error :", error);
      throw error;
    }
  };

  return {
    getTotalMeses,
  };
};

export default useTotalMeses;