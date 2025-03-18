"use client";
import { useGlobal } from "../../providers/GlobalContext";
import styles from "./TopFilter.module.css";
import SwitchFilter from "./SwitchFilter";
import { MdRemoveRedEye } from "react-icons/md";
import ReactGA from "react-ga4";

// Inicializa Google Analytics (si no está inicializado en otro lugar)
const GA_TRACKING_ID = "G-XXXXXXXXXX"; // Reemplázalo con tu ID de GA4
ReactGA.initialize(GA_TRACKING_ID);

const Menu = () => {
  const { menuFilter, setMenuFilter } = useGlobal();

  // Función para rastrear la selección del filtro en Google Analytics
  const trackFilterSelection = (filterIndex: number, filterName: string) => {
    ReactGA.event({
      category: "Filtro de Fechas",
      action: `Seleccionó: ${filterName}`,
      label: `Filtro ${filterName}`,
      value: filterIndex,
    });
    setMenuFilter(filterIndex);
  };

  return (
    <div className={styles["top-filter"]}>
      <div className={styles["top-filter-left"]}>
        <ul className={styles["top-filter-list"]}>
          <li 
            className={`${menuFilter === 0 ? styles["filter-active"] : ''} ${styles["top-filter-li"]}`} 
            onClick={() => trackFilterSelection(0, "HOY")}
          >
            <a>HOY</a>
          </li>
          <li 
            className={`${menuFilter === 1 ? styles["filter-active"] : ''} ${styles["top-filter-li"]}`} 
            onClick={() => trackFilterSelection(1, "7D")}
          >
            <a>7D</a>
          </li>
          <li 
            className={`${menuFilter === 2 ? styles["filter-active"] : ''} ${styles["top-filter-li"]}`} 
            onClick={() => trackFilterSelection(2, "Este mes")}
          >
            <a>Este mes</a>
          </li>
          <li 
            className={`${menuFilter === 3 ? styles["filter-active"] : ''} ${styles["top-filter-li"]}`} 
            onClick={() => trackFilterSelection(3, "6M")}
          >
            <a>6M</a>
          </li>
          <li 
            className={`${menuFilter === 4 ? styles["filter-active"] : ''} ${styles["top-filter-li"]}`} 
            onClick={() => trackFilterSelection(4, "YTD/YTG")}
          >
            <a>YTD/YTG</a>
          </li>
          <li 
            className={`${menuFilter === 5 ? styles["filter-active"] : ''} ${styles["top-filter-li"]}`} 
            onClick={() => trackFilterSelection(5, "1A")}
          >
            <a>1A</a>
          </li>
          <li 
            className={`${menuFilter === 6 ? styles["filter-active"] : ''} ${styles["top-filter-li"]}`} 
            onClick={() => trackFilterSelection(6, "MAX")}
          >
            <a>MAX</a>
          </li>
          <li 
            className={`${menuFilter === 7 ? styles["filter-active"] : ''} ${styles["top-filter-li"]}`} 
            onClick={() => trackFilterSelection(7, "Personalizado")}
          >
            <a>Personalizado</a>
          </li>
        </ul>
      </div>
      <li className={styles["filter-active-show-detail"]}>
        <MdRemoveRedEye className={styles["icon-eye"]}/> Ver detalle
      </li>
      <div className={styles["top-filter-content-right"]}>
        <SwitchFilter/>
      </div>
    </div>
  );
};

export default Menu;