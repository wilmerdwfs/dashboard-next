import React from "react";
import TopBar from "./TopBar";
import { GlobalProvider } from "../../providers/GlobalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient(); // Agregar esta línea
  
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <TopBar/> 
        <div className="content">
          {children}
        </div>
      </GlobalProvider>
    </QueryClientProvider>
  );
};

export default Layout;