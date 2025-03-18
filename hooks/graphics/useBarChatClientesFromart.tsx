import { InterfaceCliente } from "./InterfaceCliente"; // Importamos la interfaz

const useBarChatClientesFromart = <T,>() => {

    const formatiarDataGrafico = async (dataClientes: InterfaceCliente[] = []) => {

        const horas: string[] = dataClientes.map(item => item.hora);
        const cantidades = dataClientes.map(item => item.cantidad);
        const compraron = dataClientes.map(item => item.compraron);

        const resultado = {
            horas,
            cantidades,
            compraron
        };
        return resultado;
    }

    return { formatiarDataGrafico };
};

export default useBarChatClientesFromart;