
"use client";

import TopFilter from "../../components/filters/TopFilter";
import TopBarBajoFilter from "../../components/filters/TopBarBajoFilter";
import TopBarMedioFilter from "../../components/filters/TopBarMedioFilter";

import BoxMonth from "../../components/box-month/BoxMonth";

import BarGraphicClientes from "../../components/graphics/BarGraphicClientes";
import BarGraphicClientes7D from "../../components/graphics/BarGraphicClientes7D";

import Tablas from "./Tablas";
import BarExport from "../../components/graphics/BarExport";
import { useGlobal } from "../../providers/GlobalContext";

import React, {useEffect,useState} from "react"

export default function DashboardPage() {
  const {
    menuFilter,
    menuBajoIzquierdaFilter,
    menuBajoDerechaFilter,
    switchFilter
  } = useGlobal();

  const [diameter, setDiameter] = useState<string>("0")

  return (
    <main>
      <TopFilter/>
      <div className="panel">
        <div className="panel-left">
          <TopBarMedioFilter/>
          <TopBarBajoFilter/>
          {
            menuFilter ===0 && 
            menuBajoIzquierdaFilter ===0 && 
            // menuBajoDerechaFilter ===3 && 
            switchFilter ===0 && 
            (<BarGraphicClientes/>)
          }

          {
            menuFilter ===1 && 
            menuBajoIzquierdaFilter ===0 && 
            // menuBajoDerechaFilter ===3 && 
            switchFilter ===0 && 
            (<BarGraphicClientes7D/>)
          }

          <BarExport/>
          <Tablas/>
        </div>
        <div className="panel-rigth">
          <BoxMonth/>
        </div>
      </div>
    </main>
  );
}