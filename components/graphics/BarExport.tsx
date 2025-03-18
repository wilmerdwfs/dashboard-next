import styles from "./BarExport.module.css"; // Importamos la interfaz
import { BiSolidDownload } from "react-icons/bi";

const BarExport = () => {
   return(
      <div className={styles['bar-export']}>
         <div className={styles['bar-export-descripciones']}>
      
         </div>
         <div className={styles['bar-export-export']}>
           <a className={styles['bar-export-a']}>
            <BiSolidDownload className={styles['bar-export-icon']} />
            Exportar tabla
         </a>
        </div>
      </div>
   );
}

export default BarExport;