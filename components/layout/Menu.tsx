"use client"; 

import styles from "./Menu.module.css"; // Usa @ para rutas absolutas
import { useGlobal } from "../../providers/GlobalContext";

const Menu = () => {
  const {menuActive, setMenuActive } = useGlobal();

  return (
    <div className={styles.menu}>
      <nav className={styles["menu-nav"]}>
          <ul className={styles["menu-ul"]}>
            <li  
              onClick={()=> setMenuActive(0)} 
              className={`
                ${menuActive == 0 ? styles["menu-active"] : ''} 
                ${styles["menu-li"]}
                ${styles["dashboard"]}`
              }>
                <a>Dashboard</a>
            </li>
            <li  
              onClick={()=> setMenuActive(1)}  
              className={`
                ${menuActive == 1 ? styles["menu-active"] : ''} 
                ${styles["menu-li"]}`}
              >
                <a>Clientes</a>
              </li>
            <li 
              onClick={()=> setMenuActive(2)}  
              className={`${menuActive == 2 ? styles["menu-active"] : ''} 
              ${styles["menu-li"]}`}
            >
              <a>Reglas de acomulación</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;