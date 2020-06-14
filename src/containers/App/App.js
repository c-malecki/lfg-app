import React from "react";
import { Header } from "../../components/components_index";
import { PageContent } from "../containers_index";
import {
  ThemeContextProvider,
  AppContextProvider,
} from "../../contexts/context_index";

function App() {
  return (
    <div className="App">
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
