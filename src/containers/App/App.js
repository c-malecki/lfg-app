import React from "react";
import { Header } from "../../components/components_index";
import { PageContent } from "../containers_index";
import {
  PostsContextProvider,
  UsersContextProvider,
  GroupsContextProvider,
} from "../../contexts/context_index";

function App() {
  return (
    <div className="App">
      <UsersContextProvider>
        <PostsContextProvider>
          <GroupsContextProvider>
            <Header />
            <PageContent />
          </GroupsContextProvider>
        </PostsContextProvider>
      </UsersContextProvider>
    </div>
  );
}

export default App;
