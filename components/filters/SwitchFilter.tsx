"use client"; 
import styles from "./SwitchFilter.module.css";
import { RiBarChart2Fill } from "react-icons/ri";
import { GoStarFill } from "react-icons/go";
import { useGlobal } from "../../providers/GlobalContext";

const SwitchFilter = () => {
  const {switchFilter, setSwitchFilter } = useGlobal();


  return (
    <ul className={styles['switch-filter']}>
      <li 
        onClick={()=> setSwitchFilter(0)}
        className={`
      
        ${switchFilter == 0 ? styles["switch-filter-active"] : ''} 
        ${styles["switch-filter-li"]} 

      `}>
        <RiBarChart2Fill className={styles["icon-bar"]} /> 
        <a>Gráfico</a>
      </li>
      <li
        onClick={()=> setSwitchFilter(1)}
        className={`
          ${switchFilter == 1 ? styles["switch-filter-active"] : ''} 
          ${styles["switch-filter-li"]} 
        `}
      >
        <GoStarFill className={styles["icon-start"]} />
        <a>Pulso</a>
      </li>
    </ul>
  );
};

export default SwitchFilter;