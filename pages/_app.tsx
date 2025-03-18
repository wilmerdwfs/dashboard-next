import '../styles/globals.css'
import { GlobalProvider } from "./providers/GlobalContext";
import React, {useState,useEffect} from "react";
import Layout from "../components/layout/Layout";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <GlobalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  )
}

export default MyApp
