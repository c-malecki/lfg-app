import React from "react";
import styles from "../../styles/index.module.scss";
import { Header } from "../../components/index";
import { PageContent } from "../index";
import { ThemeContextProvider, AppContextProvider } from "../../contexts/index";

function App() {
  return (
    <div className={styles.app}>
      <AppContextProvider>
        <ThemeContextProvider>
          <Header />
          <PageContent />
        </ThemeContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
