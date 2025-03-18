"use client"; 
import styles from "./TopBarBajoFilter.module.css";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useGlobal } from "../../providers/GlobalContext";

const TopBarBajoFilter = () => {
  const {
    menuBajoIzquierdaFilter, setMenuBajoIzquierdaFilter,
    menuBajoDerechaFilter, setMenuBajoDerechaFilter
  } = useGlobal();

  return (
    <div className={styles["top-bar"]}>
        <div className={styles["top-filter-left"]}>
            <ul className={styles["top-filter-list"]}>
                <li 
                    className={`
                        ${menuBajoIzquierdaFilter == 0 ? styles["filter-active"] : ''} 
                        ${styles["top-filter-li"]}
                    `} 
                    onClick={() => setMenuBajoIzquierdaFilter(0)}
                    
                >
                  <a className={styles["top-filter-a"]}>
                    <IoCheckmarkSharp 
                      className={
                        `${menuBajoIzquierdaFilter== 0 ? styles["top-filter-icon-active"] : ''}
                         ${styles["top-filter-icon"]}
                        `
                      }
                    />
                    Clientes
                  </a> 
                </li >
                <li   
                    className={`
                        ${menuBajoIzquierdaFilter == 1 ? styles["filter-active"] : ''} 
                        ${styles["top-filter-li"]}
                    `} 
                    onClick={() => setMenuBajoIzquierdaFilter(1)}
                >
                    <a className={styles["top-filter-a"]}>
                      <IoCheckmarkSharp 
                        className={
                          `${menuBajoIzquierdaFilter== 1 ? styles["top-filter-icon-active"] : ''}
                          ${styles["top-filter-icon"]}
                          `
                      }/>
                      Transaciones
                  </a>
                </li>
            </ul>
            <ul className={styles["top-filter-list"]}>
                <li 
                    className={`
                        ${menuBajoDerechaFilter == 0 ? styles["filter-active"] : ''} 
                        ${styles["top-filter-li"]}
                    `} 
                    onClick={() => setMenuBajoDerechaFilter(0)}
                    
                >
                  <a className={styles["top-filter-a"]}>
                    <IoCheckmarkSharp 
                        className={
                          `${menuBajoDerechaFilter== 0 ? styles["top-filter-icon-active"] : ''}
                          ${styles["top-filter-icon"]}
                          `
                    }/>
                    Dinero
                  </a>
                </li>
                <li   
                    className={`
                        ${menuBajoDerechaFilter == 1 ? styles["filter-active"] : ''} 
                        ${styles["top-filter-li"]}
                    `} 
                    onClick={() => setMenuBajoDerechaFilter(1)}
                >
                    <a className={styles["top-filter-a"]}>
                      <IoCheckmarkSharp 
                        className={
                          `${menuBajoDerechaFilter== 1 ? styles["top-filter-icon-active"] : ''}
                          ${styles["top-filter-icon"]}
                          `
                      }/>
                      Cashback
                    </a>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default TopBarBajoFilter;