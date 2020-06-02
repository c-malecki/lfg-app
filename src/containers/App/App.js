import React from "react";
import styles from "./App.module.scss";
import { Header } from "../../components/index";
import { Routes } from "../Routes/Routes";
import { ThemeContextProvider } from "../../contexts/index";

function App() {
  return (
    <div className={styles.app}>
      <ThemeContextProvider>
        <Header />
        <Routes />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
