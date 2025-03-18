"use client";
import styles from "./TopBarMedioFilter.module.css";
import { useGlobal } from "../../providers/GlobalContext";
import ReactGA from "react-ga4";

// Inicializa Google Analytics
const GA_TRACKING_ID = "G-XXXXXXXXXX"; // Reemplázalo con tu ID de GA4
ReactGA.initialize(GA_TRACKING_ID);

const TopBarMedioFilter = () => {
  const { menuMedioFilter, setMenuMedioFilter, menuFilter } = useGlobal();

  // Función para rastrear la selección del filtro en Google Analytics
  const trackMedioFilterSelection = (filterIndex: number, filterName: string) => {
    ReactGA.event({
      category: "Filtro de Días de la Semana",
      action: `Seleccionó: ${filterName}`,
      label: `Filtro ${filterName}`,
      value: filterIndex,
    });
    setMenuMedioFilter(filterIndex);
  };

  return (
    <div className={styles["top-bar"]}>
      {menuFilter === 1 && (
        <div className={styles["top-filter-left"]}>
          <ul className={styles["top-filter-list"]}>
            {["Todos", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((day, index) => (
              <li
                key={index}
                className={`
                  ${menuMedioFilter === index ? styles["filter-active"] : ""} 
                  ${styles["top-filter-li"]}
                `}
                onClick={() => trackMedioFilterSelection(index, day)}
              >
                <a>{day}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopBarMedioFilter;
