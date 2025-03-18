'use client';

import Tabla from "../../components/tabla/Tabla" ;
import styles from "./Tablas.module.css" ;

import { useGlobal } from "../../providers/GlobalContext";

const Tablas = () => {
    const {menuFilter } = useGlobal();

    const columnsHoy = [
        { header: "Horas",nameColumn: "hora"},
    ];

    const dataHoy = [
        { hora: "00:00 04:00"},
        { hora: "04:00 08:00"},
    ];

    const columns = [
        { header: "Column 1", nameColumn: "column1" },
        { header: "Column 2", nameColumn: "column2" },
        { header: "Column 3", nameColumn: "column3" },
        { header: "Total", nameColumn: "total" },
    ];
      
    const data = [
        { column1: "20", column2: "25",column3: "79.975", total: "80.000"  },
        { column1: "40", column2: "182",column3: "80.000", total: "81.002"  },
    ];
    
    return (
        <div className={styles['tablas-container']} >
            <Tabla columns={columnsHoy} data={dataHoy} title={'HOY'}/>
            <Tabla columns={columns} data={data} title={'Clientes'}/>
        </div>
    );
}

export default Tablas;