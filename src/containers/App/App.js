import React from "react";
import { Header } from "../../components/components_index";
import { PageContent } from "../containers_index";
import {
  PostsContextProvider,
  UsersContextProvider,
  GroupsContextProvider,
  MessagesContextProvider,
} from "../../contexts/context_index";

function App() {
  return (
    <div className="App">
      <UsersContextProvider>
        <PostsContextProvider>
          <MessagesContextProvider>
            <GroupsContextProvider>
              <Header />
              <PageContent />
            </GroupsContextProvider>
          </MessagesContextProvider>
        </PostsContextProvider>
      </UsersContextProvider>
    </div>
  );
}

export default App;
