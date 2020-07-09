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
// Redux
import { useDispatch } from "react-redux";
import { fetchDemoUser } from "../../redux/actions/user-actions";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchDemoUser());
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
