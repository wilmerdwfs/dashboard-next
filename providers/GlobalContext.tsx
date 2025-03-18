"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// 1. Definir el contexto
const GlobalContext = createContext<any>(null);

// 2. Crear el proveedor
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [menuActive, setMenuActive] = useState(0);
  const [menuFilter, setMenuFilter] = useState(0);
  const [switchFilter, setSwitchFilter] = useState(0);

  //filtros de los char
  const [menuMedioFilter, setMenuMedioFilter] = useState(0);

  const [menuBajoIzquierdaFilter, setMenuBajoIzquierdaFilter] = useState(0);
  const [menuBajoDerechaFilter, setMenuBajoDerechaFilter] = useState(3);
  //fin de los filtros de los char

  return (
    <GlobalContext.Provider 
      value={
        { 
          menuActive, setMenuActive,
          menuFilter, setMenuFilter,
          switchFilter, setSwitchFilter,

          menuBajoIzquierdaFilter, setMenuBajoIzquierdaFilter,
          menuBajoDerechaFilter, setMenuBajoDerechaFilter,
          
          menuMedioFilter, setMenuMedioFilter,
        }
      }>
      {children}
    </GlobalContext.Provider>
  );
};

// 3. Hook personalizado para acceder al contexto
export const useGlobal = () => useContext(GlobalContext);