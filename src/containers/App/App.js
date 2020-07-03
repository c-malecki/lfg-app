import React from "react";
import { Header } from "../../components/components_index";
import { PageContent } from "../containers_index";
import {
  PostsContextProvider,
  UsersContextProvider,
  GroupsContextProvider,
  MessagesContextProvider,
  AppContextProvider,
} from "../../contexts/context_index";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
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
      </AppContextProvider>
    </div>
  );
}

export default App;
