"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Definir el contexto
const GlobalContext = createContext<any>(null);

// 2. Crear el proveedor
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [menuActive, setMenuActive] = useState(0);
  const [menuFilter, setMenuFilter] = useState(0);
  const [switchFilter, setSwitchFilter] = useState(0);

  return (
    <GlobalContext.Provider 
      value={
        { 
          menuActive, setMenuActive,
          menuFilter, setMenuFilter,
          switchFilter, setSwitchFilter
        }
      }>
      {children}
    </GlobalContext.Provider>
  );
};

// 3. Hook personalizado para acceder al contexto
export const useGlobal = () => useContext(GlobalContext);