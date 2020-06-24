import React from "react";
import { Header } from "../../components/components_index";
import { PageContent } from "../containers_index";
import {
  ThemeContextProvider,
  PostsContextProvider,
  UsersContextProvider,
} from "../../contexts/context_index";

function App() {
  return (
    <div className="App">
      <UsersContextProvider>
        <PostsContextProvider>
          <ThemeContextProvider>
            <Header />
            <PageContent />
          </ThemeContextProvider>
        </PostsContextProvider>
      </UsersContextProvider>
    </div>
  );
}

export default App;
