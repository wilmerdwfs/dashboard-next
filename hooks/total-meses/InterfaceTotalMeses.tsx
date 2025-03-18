export interface InterfaceTotalMeses{
    mes: string;
    detalle: { [key: string]: number }[];  // Se permite cualquier clave con valor numérico
    cashback: { fecha: string; total: number }[];
}